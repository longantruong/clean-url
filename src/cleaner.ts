import { isTrackingParam } from "./rules.js";

export function cleanUrl(input: string): string {
  let url: URL;
  try {
    url = new URL(input);
  } catch {
    return input;
  }

  const params = url.searchParams;
  const trackingNames = new Set<string>();
  params.forEach((_value, name) => {
    if (isTrackingParam(name)) {
      trackingNames.add(name);
    }
  });

  if (trackingNames.size === 0) {
    return input;
  }

  for (const name of trackingNames) {
    params.delete(name);
  }

  return url.toString();
}
