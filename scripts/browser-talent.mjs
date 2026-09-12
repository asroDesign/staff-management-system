import { chromium } from '@playwright/test';
import { mkdir } from 'node:fs/promises';
import assert from 'node:assert/strict';
const baseURL = process.env.TEST_BASE_URL || 'http://localhost:3000';
await mkdir('artifacts/talent', { recursive: true });
const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
const context = await browser.newContext({ viewport: { width: 1440, height: 1060 }, deviceScaleFactor: 1 });
const page = await context.newPage(); const errors = [];
page.on('pageerror', e => errors.push(e.message));
page.on('response', r => { if (r.status() >= 500) errors.push(`${r.status()} ${r.url()}`); });
const title = `QA-BROWSER-${Date.now()}`;
async function go(view) { await page.goto(`${baseURL}/?view=${view}`, { waitUntil: 'networkidle' }); await page.locator('.tl-page').waitFor(); await page.evaluate(() => document.fonts.ready); await page.waitForTimeout(200); assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true, `Overflow in ${view}`); }
async function screenshot(name) { await page.screenshot({ path: `artifacts/talent/${name}.png`, fullPage: true }); }
try {
  await context.request.post(`${baseURL}/api/auth/demo`, { data: { role: 'admin' } });
  await go('talent'); await page.getByRole('heading', { name: 'رشد و تجربه کارکنان', exact: true }).waitFor(); await screenshot('hub-desktop');
  await go('recruitment'); assert.equal(await page.locator('.tl-column').count(), 6); await screenshot('ats-desktop');
  await page.getByRole('button', { name: 'فرصت شغلی جدید', exact: true }).click(); let dialog = page.getByRole('dialog');
  await dialog.getByLabel('عنوان شغلی', { exact: true }).fill(title);
  await dialog.getByLabel('شرح شغل و مسئولیت‌ها', { exact: true }).fill('شرح فرصت آزمایشی در رابط کاربری');
  await screenshot('job-form');
  await dialog.getByRole('button', { name: 'ذخیره تغییرات', exact: true }).click(); await dialog.waitFor({ state: 'hidden' });
  await page.getByRole('tab', { name: 'فرصت‌های شغلی', exact: true }).click(); await page.getByRole('heading', { name: title, exact: true }).waitFor();
  await page.getByRole('button', { name: `ویرایش ${title}`, exact: true }).click(); dialog = page.getByRole('dialog');
  await dialog.getByLabel('عنوان شغلی', { exact: true }).fill(`${title} ویرایش`); await dialog.getByRole('button', { name: 'ذخیره تغییرات', exact: true }).click(); await dialog.waitFor({ state: 'hidden' });
  await page.getByRole('heading', { name: `${title} ویرایش`, exact: true }).waitFor();
  await page.getByRole('button', { name: `حذف ${title} ویرایش`, exact: true }).click(); await page.getByRole('dialog').getByRole('button', { name: 'تأیید و ادامه', exact: true }).click(); await page.getByRole('dialog').waitFor({ state: 'hidden' });
  await page.getByRole('tab', { name: 'برد استخدام', exact: true }).click(); await page.locator('.tl-candidate-card').first().click(); await page.getByRole('dialog').waitFor(); await screenshot('candidate-profile');
  await page.getByRole('dialog').getByRole('tab', { name: /یادداشت و تاریخچه/ }).click(); await page.locator('.tl-timeline').waitFor(); await page.keyboard.press('Escape');
  console.log('PASS new hub, six-stage ATS, job create-edit-delete and applicant details');
  await go('onboarding'); await screenshot('onboarding-desktop'); await page.getByRole('button', { name: 'ادامه مسیر ورود', exact: true }).first().click(); await page.locator('.tl-checklist').waitFor(); await screenshot('onboarding-checklist'); await page.keyboard.press('Escape');
  await page.getByRole('button', { name: 'الگوی جدید', exact: true }).click(); await page.getByRole('dialog').getByRole('button', { name: 'افزودن وظیفه', exact: true }).click(); assert.ok(await page.locator('.tl-builder-row').count() === 3); await page.keyboard.press('Escape');
  await go('learning'); await screenshot('learning-desktop'); await page.getByRole('button', { name: 'دوره آموزشی جدید', exact: true }).click(); await page.getByRole('dialog').getByRole('button', { name: 'افزودن درس', exact: true }).click(); await screenshot('course-builder'); await page.keyboard.press('Escape');
  await page.getByRole('button', { name: 'مشاهده دوره', exact: true }).first().click(); await page.locator('.tl-player').waitFor(); await screenshot('course-preview'); await page.keyboard.press('Escape');
  console.log('PASS onboarding templates, checklist, learning library and course editor');
  await go('pulse'); await screenshot('pulse-desktop'); await page.getByRole('button', { name: 'مشاهده گزارش', exact: true }).first().click(); await page.locator('.tl-heatmap').waitFor(); await screenshot('pulse-report'); await page.keyboard.press('Escape');
  await go('compensation'); await screenshot('compensation-desktop'); await page.getByRole('button', { name: 'محاسبه سناریو', exact: true }).first().click(); await page.getByRole('dialog').getByLabel('نام سناریو', { exact: true }).fill(title); await page.getByRole('dialog').getByRole('button', { name: 'محاسبه و ذخیره سناریو', exact: true }).click(); await page.getByRole('dialog').waitFor({ state: 'hidden' });
  await page.getByRole('tab', { name: /سناریوها و مقایسه/ }).click(); await page.getByRole('heading', { name: title, exact: true }).waitFor(); await page.locator('.tl-scenario-card').filter({ has: page.getByRole('heading', { name: title, exact: true }) }).getByRole('button', { name: 'بررسی و مقایسه همکاران' }).click(); await page.locator('.tl-compare-table').waitFor(); await screenshot('salary-scenario'); await page.keyboard.press('Escape');
  await page.getByRole('button', { name: `حذف ${title}`, exact: true }).click(); await page.getByRole('dialog').getByRole('button', { name: 'تأیید و ادامه', exact: true }).click(); await page.getByRole('dialog').waitFor({ state: 'hidden' });
  await go('research'); assert.ok(await page.locator('.tl-feature-row').count() >= 35); await screenshot('research-desktop');
  console.log('PASS pulse privacy report, salary simulation and detailed feature-source matrix');
  await context.request.post(`${baseURL}/api/auth/demo`, { data: { role: 'employee' } });
  await go('learning'); await page.getByRole('button', { name: 'ادامه یادگیری', exact: true }).first().click(); await page.locator('.tl-player').waitFor(); await screenshot('employee-learning'); await page.keyboard.press('Escape');
  await go('onboarding'); assert.equal(await page.getByRole('button', { name: 'الگوی جدید', exact: true }).count(), 0);
  await go('pulse'); await page.getByRole('button', { name: 'صدای من', exact: true }).first().click(); await page.locator('.tl-rating-scale').first().waitFor(); await screenshot('employee-survey'); await page.keyboard.press('Escape');
  assert.equal(await page.locator('.main-nav').getByRole('button', { name: 'دستیار تعیین حقوق', exact: true }).count(), 0);
  console.log('PASS employee-only learning, onboarding and anonymous survey interfaces');
  await context.request.post(`${baseURL}/api/auth/demo`, { data: { role: 'admin' } });
  await page.setViewportSize({ width: 390, height: 844 });
  for (const view of ['talent','recruitment','onboarding','learning','pulse','compensation','research']) { await go(view); await screenshot(`${view}-mobile`); }
  await page.goto(`${baseURL}/careers`, { waitUntil: 'networkidle' }); await page.locator('.careers-job-row').first().waitFor(); assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true); await screenshot('careers-mobile');
  await page.locator('.careers-job-row').first().click(); await page.getByRole('dialog').waitFor(); await screenshot('application-mobile'); await page.keyboard.press('Escape');
  await page.setViewportSize({ width: 1440, height: 1000 }); await page.goto(`${baseURL}/careers`, { waitUntil: 'networkidle' }); await screenshot('careers-desktop');
  assert.deepEqual(errors, []);
  console.log('ALL TALENT BROWSER CHECKS PASSED, including mobile bounds and public careers');
} finally {
  await context.request.post(`${baseURL}/api/auth/demo`, { data: { role: 'admin' } });
  const result = await context.request.get(`${baseURL}/api/talent`);
  if (result.ok()) { const data = await result.json(); for (const j of data.jobs.filter(j => j.title.startsWith(title))) await context.request.post(`${baseURL}/api/talent`, { data: { action: 'job.delete', data: { id: j.id } } }); for (const s of data.scenarios.filter(s => s.title === title && s.status === 'draft')) await context.request.post(`${baseURL}/api/talent`, { data: { action: 'salary.delete', data: { id: s.id } } }); }
  await browser.close();
}
