export class ValidationError extends Error { constructor(message: string, public status = 400) { super(message); } }

/** Validates a `data:image/(jpeg|png);base64,...` URI, checking both the declared MIME type and the actual file signature bytes. */
export function dataImage(value: unknown, label: string, maxBytes = 2_500_000): string {
  const s = String(value ?? "").trim();
  if (!s) return "";
  const match = /^data:image\/(jpeg|png);base64,([A-Za-z0-9+/]+=*)$/.exec(s);
  if (!match) throw new ValidationError(`${label} باید تصویر JPEG یا PNG معتبر باشد.`);
  const buffer = Buffer.from(match[2], "base64");
  if (!buffer.length || buffer.length > maxBytes) throw new ValidationError(`${label} نباید بیشتر از ${Math.round(maxBytes / 1e6)} مگابایت باشد.`);
  const isJpeg = buffer[0] === 0xff && buffer[1] === 0xd8;
  const isPng = buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4e && buffer[3] === 0x47;
  if (!isJpeg && !isPng) throw new ValidationError(`${label} یک فایل تصویری معتبر نیست.`);
  return s;
}

/** Accepts either an unchanged previous value (so re-submitting an existing image doesn't force re-validation) or a freshly uploaded data URI. */
export function imageOrKeep(value: unknown, previous: string, label: string, maxBytes?: number): string {
  const s = String(value ?? "").trim();
  return s === previous ? s : dataImage(s, label, maxBytes);
}

/** Validates an array of image data URIs (identity pages, other documents), keeping any values that already existed unchanged. */
export function imageListOrKeep(value: unknown, previous: string[], label: string, max: number, maxBytes?: number): string[] {
  if (value === undefined) return previous;
  if (!Array.isArray(value) || value.length > max) throw new ValidationError(`حداکثر ${max} تصویر برای «${label}» قابل بارگذاری است.`);
  return value.map(v => { const s = String(v ?? "").trim(); return previous.includes(s) ? s : dataImage(s, label, maxBytes); }).filter(Boolean);
}
