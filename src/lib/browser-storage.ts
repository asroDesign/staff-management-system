type StorageKind = "session" | "local";
const fallback = new Map<string, string>();

// These helpers store UI preferences only, never session tokens. Some embedded
// or privacy-restricted browsers throw even when the Storage property is read.
function storage(kind: StorageKind): Storage | null {
  if (typeof window === "undefined") return null;
  try { return kind === "session" ? window.sessionStorage : window.localStorage; }
  catch { return null; }
}

export function readBrowserValue(kind: StorageKind, key: string): string | null {
  try { return storage(kind)?.getItem(key) ?? fallback.get(`${kind}:${key}`) ?? null; }
  catch { return fallback.get(`${kind}:${key}`) ?? null; }
}

export function writeBrowserValue(kind: StorageKind, key: string, value: string) {
  fallback.set(`${kind}:${key}`, value);
  try { storage(kind)?.setItem(key, value); } catch { /* The preference remains available in memory. */ }
}

export function removeBrowserValue(kind: StorageKind, key: string) {
  fallback.delete(`${kind}:${key}`);
  try { storage(kind)?.removeItem(key); } catch { /* Storage restrictions must not interrupt authentication. */ }
}
