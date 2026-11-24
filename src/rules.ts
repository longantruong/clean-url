const TRACKING_PREFIXES = [
  'utm_',
] as const;

const TRACKING_PARAMS: ReadonlySet<string> = new Set([
  // Google
  'gclid',
  'dclid',
  'gbraid',
  'wbraid',

  // Facebook
  'fbclid',

  // Microsoft
  'msclkid',

  // TikTok
  'ttclid',

  // Twitter / X
  'twclid',

  // LinkedIn
  'li_fat_id',

  // Mailchimp
  'mc_cid',
  'mc_eid',

  // HubSpot
  '_hsenc',
  '_hsmi',

  // Instagram
  'igshid',
]);

export function isTrackingParam(name: string): boolean {
  const normalizedName = name.toLowerCase();

  return (
    TRACKING_PARAMS.has(normalizedName) ||
    TRACKING_PREFIXES.some(
      prefix => normalizedName.startsWith(prefix)
    )
  );
}