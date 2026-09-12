import { fail } from "@/lib/talent-validation";
export async function validateResume(file: FormDataEntryValue | null) {
  if (!(file instanceof File) || !file.size) return null;
  if (!file.name.toLowerCase().endsWith(".pdf") || file.size > 2 * 1024 * 1024) return fail("رزومه باید PDF و حداکثر ۲ مگابایت باشد.");
  const content = Buffer.from(await file.arrayBuffer());
  if (content.subarray(0, 5).toString() !== "%PDF-") return fail("محتوای فایل PDF معتبر نیست.");
  return { name: file.name.replace(/[\r\n/\\\x00]/g, "_").slice(0, 180), size: file.size, content: content.toString("base64") };
}
