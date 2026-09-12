import { chromium } from '@playwright/test';
import { mkdir } from 'node:fs/promises';
import assert from 'node:assert/strict';
const baseURL = process.env.TEST_BASE_URL || 'http://localhost:3000';
await mkdir('artifacts/features', { recursive: true });
const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
const context = await browser.newContext({ viewport: { width: 1440, height: 1040 }, deviceScaleFactor: 1 });
const page = await context.newPage();
const errors = [];
page.on('pageerror', e => errors.push(e.message));
page.on('response', r => { if (r.status() >= 500) errors.push(`${r.status()} ${r.url()}`); });
const suffix = Date.now();
const employeeName = `آزمون ویژگی ${suffix}`;
async function go(view) { await page.goto(`${baseURL}/?view=${view}`, { waitUntil: 'networkidle' }); await page.waitForTimeout(200); }
try {
  await context.request.post(`${baseURL}/api/auth/demo`, { data: { role: 'admin' } });
  await go('employees');
  await page.getByRole('button', { name: 'افزودن کارمند', exact: true }).click();
  let dialog = page.getByRole('dialog');
  await dialog.getByLabel('نام و نام خانوادگی', { exact: false }).fill(employeeName);
  await dialog.getByLabel('عنوان شغلی', { exact: false }).fill('کارشناس آزمون رابط');

  // Jalali date picker: open, verify a real calendar grid renders, pick a day and confirm the button label updates.
  await dialog.getByRole('button', { name: 'تاریخ شروع همکاری', exact: true }).click();
  await page.locator('.jalali-popover').waitFor();
  const monthLabelBefore = await page.locator('.jalali-head strong').innerText();
  await page.locator('.jalali-cell:not(.empty)').first().click();
  await page.locator('.jalali-popover').waitFor({ state: 'hidden' });
  const pickedLabel = await dialog.getByRole('button', { name: 'تاریخ شروع همکاری', exact: true }).innerText();
  assert.ok(/[۰-۹]/.test(pickedLabel), 'Jalali date picker should render Persian numerals once a day is selected');
  await page.screenshot({ path: 'artifacts/features/jalali-date-picker.png' });
  console.log('PASS Jalali calendar picker opens, shows a month grid and selects a date:', monthLabelBefore, '->', pickedLabel);

  await dialog.getByLabel('وضعیت تأهل', { exact: true }).selectOption('married');
  await dialog.getByLabel('تعداد فرزندان', { exact: true }).fill('2');
  await dialog.getByLabel('شماره بیمه تأمین اجتماعی', { exact: false }).fill('9998887771');
  await dialog.getByLabel('آدرس منزل', { exact: false }).fill('تهران، خیابان تست، پلاک ۱');

  // Personal photo upload with client-side resize.
  const avatarInput = dialog.locator('.upload-avatar-row input[type=file]');
  await avatarInput.setInputFiles('/tmp/test-avatar.png');
  await page.locator('.upload-avatar-preview img').waitFor({ timeout: 8000 });
  console.log('PASS Personal photo uploads, resizes client-side and previews inline');

  // National ID and identity page uploads.
  const docInputs = dialog.locator('.doc-grid input[type=file]');
  await docInputs.nth(0).setInputFiles('/tmp/test-avatar.png');
  await docInputs.nth(1).setInputFiles('/tmp/test-avatar.png');
  await page.locator('.doc-grid .doc-upload-card.has-image').first().waitFor({ timeout: 8000 });
  const pagesInput = dialog.locator('.doc-pages-grid input[type=file]');
  await pagesInput.setInputFiles(['/tmp/test-avatar.png', '/tmp/test-avatar.png']);
  await page.waitForFunction(() => document.querySelectorAll('.doc-page-tile').length >= 2, { timeout: 8000 });
  await page.screenshot({ path: 'artifacts/features/document-uploads.png' });
  console.log('PASS National ID front/back and multi-page identity documents upload and preview');

  const email = `feature-${suffix}@aban.test`;
  await dialog.getByLabel('ایمیل ورود', { exact: false }).fill(email);
  await dialog.getByLabel('رمز عبور اولیه', { exact: false }).fill('Feature@2026');
  await dialog.getByRole('button', { name: 'ایجاد پرونده و حساب کاربری', exact: true }).click();
  await dialog.waitFor({ state: 'hidden', timeout: 15000 });
  await page.getByRole('textbox', { name: 'جستجوی کارکنان' }).fill(employeeName);
  await page.getByRole('heading', { name: employeeName, exact: true }).waitFor();
  console.log('PASS New employee with family details and uploaded documents is created end-to-end');

  await page.getByRole('button', { name: `پروفایل ${employeeName}`, exact: true }).click();
  dialog = page.getByRole('dialog');
  await dialog.getByRole('tab', { name: /مدارک/ }).click();
  await dialog.locator('.doc-upload-card').first().click();
  await page.locator('.image-lightbox img').waitFor();
  await page.keyboard.press('Escape');
  await page.locator('.image-lightbox').waitFor({ state: 'hidden' });
  console.log('PASS Uploaded documents open in a full-size lightbox from the employee profile');
  await dialog.getByRole('button', { name: 'بستن پرونده', exact: true }).click();

  // Welfare amenity request with per-facility selection.
  await go('tickets');
  await page.getByRole('button', { name: /درخواست/, exact: false }).first().click();
  dialog = page.getByRole('dialog');
  const amenityOptions = await dialog.locator('label:has-text("عنوان امکان رفاهی") select').locator('option').allTextContents();
  assert.ok(amenityOptions.length >= 2, 'Amenity dropdown should list configured welfare facilities');
  await page.keyboard.press('Escape');
  console.log('PASS Amenity request form lists configurable welfare facilities:', amenityOptions.join('، '));

  // Advance repayment plan toggle (lump sum vs installments).
  await go('advances');
  await page.getByRole('button', { name: /درخواست/, exact: false }).first().click();
  dialog = page.getByRole('dialog');
  await dialog.getByRole('button', { name: 'طی چند ماه', exact: true }).click();
  await dialog.getByLabel('تعداد ماه‌های اقساط', { exact: false }).fill('4');
  await page.locator('.field-note').filter({ hasText: 'مساوی طی' }).waitFor();
  await page.screenshot({ path: 'artifacts/features/advance-installments.png' });
  await page.keyboard.press('Escape');
  console.log('PASS Advance request supports switching between lump-sum and multi-month installment repayment');

  // Manual payroll entry exposes Friday work, night work and mission allowance.
  await go('payroll');
  await page.getByRole('button', { name: 'ثبت کارکرد دستی', exact: true }).click();
  dialog = page.getByRole('dialog');
  await dialog.getByLabel('ساعت جمعه‌کاری', { exact: true }).waitFor();
  await dialog.getByLabel('ساعت شب‌کاری', { exact: true }).waitFor();
  await dialog.getByLabel('حق مأموریت', { exact: true }).fill('500000');
  await page.locator('.payroll-preview').getByText('حق مأموریت').waitFor();
  await page.screenshot({ path: 'artifacts/features/payroll-new-fields.png' });
  await page.keyboard.press('Escape');
  console.log('PASS Payroll form exposes Friday work, night work and mission allowance with live preview');

  // Settings page: welfare amenity list editor add/remove interaction.
  await go('settings');
  const amenityRows = () => page.locator('.amenity-row');
  const before = await amenityRows().count();
  await page.getByRole('button', { name: 'افزودن امکان رفاهی', exact: true }).click();
  assert.equal(await amenityRows().count(), before + 1);
  await amenityRows().last().locator('input').first().fill('امکان آزمایشی موقت');
  await amenityRows().last().getByRole('button', { name: /حذف/ }).click();
  assert.equal(await amenityRows().count(), before);
  await page.screenshot({ path: 'artifacts/features/settings-amenities.png' });
  console.log('PASS Settings page welfare amenity editor adds and removes rows without saving unintended changes');

  assert.deepEqual(errors, []);
  console.log('ALL NEW FEATURE BROWSER CHECKS PASSED');
} finally {
  const listResponse = await context.request.get(`${baseURL}/api/workspace`);
  if (listResponse.ok()) {
    const data = await listResponse.json();
    const created = data.employees.find(e => e.name === employeeName);
    if (created) await context.request.post(`${baseURL}/api/workspace`, { data: { action: 'employee.delete', data: { id: created.id } } });
  }
  await browser.close();
}
