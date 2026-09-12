import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
import https from 'node:https';
import { execFileSync } from 'node:child_process';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const baseURL = process.env.TEST_BASE_URL || 'http://localhost:3000';
const expectFailure = process.env.PREVIEW_EXPECT_FAILURE === '1';
const certDirectory = await mkdtemp(join(tmpdir(), 'aban-connection-tls-'));
const contexts = [];
const scenarios = new Map();
let browser;
let proxy;

try {
  // A real HTTPS response is necessary to test CHIPS. Fulfilling cookie-bearing
  // requests through a browser interception API can change cookie metadata.
  execFileSync('openssl', ['req', '-x509', '-newkey', 'rsa:2048', '-nodes', '-keyout', join(certDirectory, 'key.pem'), '-out', join(certDirectory, 'cert.pem'), '-days', '1', '-subj', '/CN=localhost', '-addext', 'subjectAltName=DNS:localhost,IP:127.0.0.1'], { stdio: 'ignore' });
  proxy = https.createServer({ key: await readFile(join(certDirectory, 'key.pem')), cert: await readFile(join(certDirectory, 'cert.pem')) }, async (incoming, outgoing) => {
    try {
      const scenario = scenarios.get(incoming.headers['x-test-scenario']);
      const pathname = new URL(incoming.url, 'http://localhost').pathname;
      if (pathname === '/api/workspace' && incoming.method === 'GET' && scenario) {
        scenario.calls++;
        if (scenario.enabled && scenario.remaining-- > 0) {
          outgoing.writeHead(503, { 'Content-Type': 'text/html' });
          outgoing.end('<html><body>Service starting</body></html>');
          return;
        }
      }
      const headers = new Headers();
      for (const [name, value] of Object.entries(incoming.headers)) {
        if (value && !['host', 'content-length', 'connection', 'x-test-scenario'].includes(name)) headers.set(name, Array.isArray(value) ? value.join(', ') : value);
      }
      headers.set('x-forwarded-host', incoming.headers.host);
      // Reproduce a TLS-terminating proxy whose innermost hop reports HTTP.
      headers.set('x-forwarded-proto', 'http');
      const chunks = [];
      for await (const chunk of incoming) chunks.push(chunk);
      const response = await fetch(new URL(incoming.url, baseURL), {
        method: incoming.method,
        headers,
        body: ['GET', 'HEAD'].includes(incoming.method) ? undefined : Buffer.concat(chunks),
        redirect: 'manual',
      });
      for (const [name, value] of response.headers) {
        if (!['set-cookie', 'content-encoding', 'content-length', 'transfer-encoding', 'connection'].includes(name)) outgoing.setHeader(name, value);
      }
      const cookies = response.headers.getSetCookie();
      if (cookies.length && !scenario?.blockCookies) outgoing.setHeader('Set-Cookie', cookies);
      outgoing.writeHead(response.status);
      outgoing.end(Buffer.from(await response.arrayBuffer()));
    } catch {
      outgoing.writeHead(502, { 'Content-Type': 'application/json' });
      outgoing.end(JSON.stringify({ error: 'Test proxy upstream unavailable' }));
    }
  });
  await new Promise(resolve => proxy.listen(0, '127.0.0.1', resolve));
  const appOrigin = `https://localhost:${proxy.address().port}`;
  // The test shell uses a public-looking origin with a loopback TLS upstream.
  // Disable only the browser's local-network prompt for this synthetic harness;
  // third-party cookie blocking stays explicitly enabled below.
  browser = await chromium.launch({ headless: true, args: ['--no-sandbox', '--disable-features=LocalNetworkAccessChecks'] });

  async function open({ embedded = false, denyStorage = false, failures = 0, blockCookies = false } = {}) {
    const id = String(scenarios.size + 1);
    const fault = { remaining: failures, enabled: failures > 0, calls: 0, blockCookies };
    scenarios.set(id, fault);
    const context = await browser.newContext({ ignoreHTTPSErrors: true, extraHTTPHeaders: { 'x-test-scenario': id } });
    contexts.push(context);
    const hostOrigin = 'https://preview-container.test';
    if (denyStorage) await context.addInitScript(() => {
      for (const name of ['sessionStorage', 'localStorage']) Object.defineProperty(window, name, { configurable: true, get() { throw new DOMException('Storage unavailable in this frame', 'SecurityError'); } });
    });
    await context.route(`${hostOrigin}/**`, route => route.fulfill({ contentType: 'text/html', body: `<!doctype html><html><head><title>Embedded preview regression test</title></head><body style="margin:0"><iframe title="Aban preview" src="${appOrigin}" style="width:100%;height:100vh;border:0"></iframe></body></html>` }));
    const page = await context.newPage();
    const cdp = await context.newCDPSession(page);
    await cdp.send('Network.enable');
    await cdp.send('Network.setCookieControls', { enableThirdPartyCookieRestriction: true, disableThirdPartyCookieMetadata: true, disableThirdPartyCookieHeuristics: true });
    const traces = [];
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('response', response => { if (response.url().includes('/api/')) traces.push({ path: new URL(response.url()).pathname, status: response.status() }); });
    await page.goto(embedded ? hostOrigin : appOrigin);
    const frame = embedded ? page.frameLocator('iframe') : page;
    return { context, page, frame, traces, errors, fault, appOrigin };
  }

  async function dashboard(test) {
    try {
      await test.frame.locator('.main-shell').waitFor({ state: 'visible', timeout: 25000 });
      assert.deepEqual(test.errors, []);
    } catch (error) {
      console.error('Connection test diagnostics:', JSON.stringify({ traces: test.traces, errors: test.errors, frames: test.page.frames().map(frame => frame.url()), cookies: (await test.context.cookies()).map(({ name, sameSite, secure, partitionKey }) => ({ name, sameSite, secure, partitionKey })), messages: await test.frame.locator('.boot-screen p').allTextContents().catch(() => []) }));
      throw error;
    }
  }

  const direct = await open();
  await dashboard(direct);
  console.log('PASS: standalone HTTPS dashboard loads from the persistent database');
  const embedded = await open({ embedded: true });
  if (expectFailure) {
    await embedded.frame.getByRole('heading', { name: 'ارتباط با آبان برقرار نشد' }).waitFor({ timeout: 20000 });
    console.log('REPRODUCED:', JSON.stringify(embedded.traces));
    console.log('DETAIL:', await embedded.frame.locator('.boot-screen p').allTextContents());
    assert.ok(embedded.traces.some(r => r.path === '/api/auth/demo' && r.status === 200));
    assert.ok(embedded.traces.filter(r => r.path === '/api/workspace' && r.status === 401).length >= 2);
    console.log('CONFIRMED: login succeeds but the cross-site frame does not retain its session cookie');
  } else {
    await dashboard(embedded);
    const session = (await embedded.context.cookies()).find(c => c.name === '__Host-aban_session');
    assert.ok(session, 'A secure session cookie is required');
    assert.equal(session.sameSite, 'None');
    assert.equal(session.secure, true);
    assert.equal(session.httpOnly, true);
    assert.ok(session.partitionKey, 'The iframe cookie must be partitioned');
    await embedded.page.reload();
    await dashboard(embedded);
    console.log('PASS: HTTPS behind an HTTP-reporting proxy authenticates with a partitioned cookie and survives reload');
    await embedded.frame.getByRole('button', { name: 'تغییر حساب کاربری' }).click();
    await embedded.frame.locator('.account-popover').getByRole('button', { name: 'کارمند نمایشی', exact: true }).click();
    await embedded.frame.getByRole('heading', { name: 'سلام، سارا 👋' }).waitFor();
    await embedded.page.reload();
    await embedded.frame.getByRole('heading', { name: 'سلام، سارا 👋' }).waitFor();
    assert.equal(await embedded.frame.locator('.main-nav').getByRole('button', { name: 'مدیریت کارکنان', exact: true }).count(), 0);
    console.log('PASS: role changes persist in the embedded preview without elevating employee access');
    await embedded.frame.getByRole('button', { name: 'خروج از حساب', exact: true }).click();
    await embedded.frame.getByRole('heading', { name: 'دوباره به آبان خوش آمدید' }).waitFor();
    const appFrame = embedded.page.frames().find(f => f.url().startsWith(embedded.appOrigin));
    assert.ok(appFrame);
    assert.equal(await appFrame.evaluate(async () => (await fetch('/api/workspace', { credentials: 'include' })).status), 401);
    assert.ok(!(await embedded.context.cookies()).some(c => c.name === '__Host-aban_session'));
    console.log('PASS: logout revokes and expires the partitioned session');
    const denied = await open({ embedded: true, denyStorage: true });
    await dashboard(denied);
    console.log('PASS: unavailable sessionStorage or localStorage does not prevent dashboard login');
    const transient = await open({ embedded: true, failures: 2 });
    await dashboard(transient);
    assert.ok(transient.fault.calls >= 3);
    console.log('PASS: temporary non-JSON 503 responses recover automatically');
    const retry = await open({ failures: 100 });
    await retry.frame.getByRole('button', { name: 'تلاش دوباره', exact: true }).waitFor({ timeout: 25000 });
    assert.equal(await retry.frame.locator('.boot-screen').getByText(/Unexpected token|<!doctype|SyntaxError/).count(), 0);
    retry.fault.enabled = false;
    await retry.frame.getByRole('button', { name: 'تلاش دوباره', exact: true }).click();
    await dashboard(retry);
    console.log('PASS: manual retry recovers without reloading the page or exposing technical HTML');
    const noCookies = await open({ embedded: true, blockCookies: true });
    await noCookies.frame.getByRole('heading', { name: 'نشست ورود در مرورگر ذخیره نشد' }).waitFor({ timeout: 25000 });
    const fallback = noCookies.frame.getByRole('link', { name: 'باز کردن در پنجره مستقل' });
    assert.equal(await fallback.getAttribute('target'), '_blank');
    console.log('PASS: browsers blocking every cookie receive a clear standalone-window recovery option');
    const crossOrigin = await fetch(`${baseURL}/api/auth/demo`, { method: 'POST', headers: { 'Content-Type': 'application/json', Origin: 'https://untrusted.example' }, body: JSON.stringify({ role: 'admin' }) });
    assert.equal(crossOrigin.status, 403);
    console.log('PASS: cross-origin mutation protection remains enforced');
    console.log('ALL PREVIEW CONNECTION REGRESSIONS PASSED');
  }
} finally {
  await Promise.all(contexts.map(context => context.close()));
  await browser?.close();
  if (proxy) {
    proxy.closeAllConnections();
    await new Promise(resolve => proxy.close(resolve));
  }
  await rm(certDirectory, { recursive: true, force: true });
}
