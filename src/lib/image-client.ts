"use client";
// Client-only helpers to read and downscale images before they are embedded
// as base64 data URIs inside JSON payloads (employee documents, photos).
export class ImageInputError extends Error {}

function loadImage(dataUrl: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => { const img = new Image(); img.onload = () => resolve(img); img.onerror = () => reject(new ImageInputError("فایل تصویری قابل خواندن نیست.")); img.src = dataUrl; });
}

/** Reads an image file, downsizes it to `maxDim` on its longest edge and returns a compressed JPEG/PNG data URI. */
export async function resizeImageFile(file: File, maxDim = 1000, quality = 0.82): Promise<string> {
  if (!/^image\/(jpeg|png|webp)$/.test(file.type)) throw new ImageInputError("فقط تصویر JPEG یا PNG پذیرفته می‌شود.");
  if (file.size > 10 * 1024 * 1024) throw new ImageInputError("حجم فایل انتخابی بیش از حد مجاز (۱۰ مگابایت) است.");
  const original = await new Promise<string>((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(String(reader.result)); reader.onerror = () => reject(new ImageInputError("خواندن فایل ناموفق بود.")); reader.readAsDataURL(file); });
  const img = await loadImage(original);
  const scale = Math.min(1, maxDim / Math.max(img.width, img.height));
  const width = Math.max(1, Math.round(img.width * scale)); const height = Math.max(1, Math.round(img.height * scale));
  const canvas = document.createElement("canvas"); canvas.width = width; canvas.height = height;
  const ctx = canvas.getContext("2d"); if (!ctx) throw new ImageInputError("پردازش تصویر پشتیبانی نمی‌شود.");
  ctx.fillStyle = "#ffffff"; ctx.fillRect(0, 0, width, height); ctx.drawImage(img, 0, 0, width, height);
  return canvas.toDataURL("image/jpeg", quality);
}

export function estimateDataUriBytes(dataUri: string) { const base64 = dataUri.split(",")[1] || ""; return Math.ceil(base64.length * 3 / 4); }
