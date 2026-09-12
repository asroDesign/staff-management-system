export class ApiError extends Error {
  constructor(message: string, public status = 0, public code = "CONNECTION_ERROR", public retryable = false) {
    super(message);
    this.name = "ApiError";
  }
}

interface RequestOptions {
  retries?: number;
  timeoutMs?: number;
  onRetry?: (attempt: number) => void;
}

function statusMessage(status: number) {
  if (status === 401) return "نشست ورود شما معتبر نیست. لطفاً دوباره وارد حساب شوید.";
  if (status === 403) return "دسترسی به این عملیات مجاز نیست.";
  if (status === 429) return "تعداد درخواست‌ها زیاد است. کمی بعد دوباره تلاش کنید.";
  if (status >= 500) return "سرویس آبان موقتاً در دسترس نیست. چند لحظه دیگر دوباره تلاش کنید.";
  return "درخواست انجام نشد. لطفاً دوباره تلاش کنید.";
}

function wait(milliseconds: number, signal?: AbortSignal | null) {
  return new Promise<void>((resolve, reject) => {
    if (signal?.aborted) { reject(new DOMException("Aborted", "AbortError")); return; }
    const abort = () => { clearTimeout(timer); reject(new DOMException("Aborted", "AbortError")); };
    const timer = setTimeout(() => { signal?.removeEventListener("abort", abort); resolve(); }, milliseconds);
    signal?.addEventListener("abort", abort, { once: true });
  });
}

/**
 * Combines the caller's signal (e.g. an effect's cleanup abort) with a timeout
 * into a single signal for `fetch`. Using the platform's own `AbortSignal.any`
 * avoids manually re-implementing signal linking, which previously caused a
 * race: calling `controller.abort()` from inside a synchronously-invoked
 * "abort" listener (e.g. React Strict Mode's immediate effect cleanup, before
 * `fetch` had started) could surface as an unhandled rejection instead of
 * being funneled into this function's own try/catch.
 */
function combinedSignal(external: AbortSignal | null | undefined, timeoutMs: number): AbortSignal {
  const timeout = AbortSignal.timeout(timeoutMs);
  return external ? AbortSignal.any([external, timeout]) : timeout;
}

export async function apiRequest<T>(url: string, init: RequestInit = {}, options: RequestOptions = {}): Promise<T> {
  const safeToRetry = (init.method || "GET").toUpperCase() === "GET";
  const retries = safeToRetry ? options.retries ?? 2 : 0;

  for (let attempt = 0; ; attempt++) {
    if (init.signal?.aborted) throw new DOMException("Aborted", "AbortError");
    const signal = combinedSignal(init.signal, options.timeoutMs ?? 20000);
    let failure: ApiError;

    try {
      const headers = new Headers(init.headers);
      if (!headers.has("Accept")) headers.set("Accept", "application/json");
      const response = await fetch(url, {
        ...init,
        headers,
        cache: "no-store",
        credentials: "include",
        signal,
      });
      const raw = await response.text();
      let body: unknown;
      try { body = JSON.parse(raw); } catch { body = null; }
      const object = body && typeof body === "object" ? body as Record<string, unknown> : null;
      if (!response.ok) {
        throw new ApiError(
          typeof object?.error === "string" ? object.error : statusMessage(response.status),
          response.status,
          typeof object?.code === "string" ? object.code : `HTTP_${response.status}`,
          response.status >= 500 || response.status === 408 || response.status === 429,
        );
      }
      if (!object) throw new ApiError("پاسخ معتبر از سرویس دریافت نشد. اتصال را دوباره بررسی می‌کنیم.", response.status, "INVALID_RESPONSE", true);
      return body as T;
    } catch (error) {
      if (init.signal?.aborted) throw new DOMException("Aborted", "AbortError");
      failure = error instanceof ApiError ? error : signal.aborted
        ? new ApiError("دریافت پاسخ از سرور طول کشید. لطفاً دوباره تلاش کنید.", 0, "REQUEST_TIMEOUT", true)
        : new ApiError("ارتباط با سرور قطع شد. اتصال اینترنت را بررسی کنید و دوباره تلاش کنید.", 0, "NETWORK_ERROR", true);
    }

    // Mutations are never replayed automatically: a lost response must not
    // duplicate a payment, employee record, or request.
    if (attempt >= retries || !failure.retryable) throw failure;
    options.onRetry?.(attempt + 1);
    await wait(Math.min(500 * 2 ** attempt, 2000), init.signal);
  }
}

export function connectionError(error: unknown): ApiError {
  return error instanceof ApiError ? error : new ApiError("برقراری ارتباط انجام نشد. لطفاً دوباره تلاش کنید.");
}
