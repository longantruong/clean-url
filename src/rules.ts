const TRACKING_PARAMS: ReadonlySet<string> = new Set([
  "gclid",
  "dclid",
  "gbraid",
  "wbraid",
  "fbclid",
  "msclkid",
  "ttclid",
  "twclid",
  "li_fat_id",
  "mc_cid",
  "mc_eid",
  "_hsenc",
  "_hsmi",
  "igshid",
]);

export function isTrackingParam(name: string): boolean {
  const normalizedName = name.toLowerCase();
  return normalizedName.startsWith("utm_") || TRACKING_PARAMS.has(normalizedName);
}
