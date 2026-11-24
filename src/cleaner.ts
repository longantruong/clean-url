const TRACKING_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

export function cleanUrl(input: string): string {
  let url: URL;
  try {
    url = new URL(input);
  } catch {
    return input;
  }

  const params = url.searchParams;
  let modified = false;

  for (const param of TRACKING_PARAMS) {
    if (params.has(param)) {
      params.delete(param);
      modified = true;
    }
  }

  return modified ? url.toString() : input;
}
