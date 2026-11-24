const SUPPORTED_PROTOCOLS: ReadonlySet<string> = new Set([
  'http:',
  'https:',
]);

const SIGNATURE_PARAMS: ReadonlySet<string> = new Set([
  'signature',
  'sig',
  'x-amz-signature',
  'x-goog-signature',
]);

export function isSupportedProtocol(url: URL): boolean {
  return SUPPORTED_PROTOCOLS.has(url.protocol);
}

export function isSignedUrl(url: URL): boolean {
  let signed = false;

  url.searchParams.forEach((_, name) => {
    if (SIGNATURE_PARAMS.has(name.toLowerCase())) {
      signed = true;
    }
  });

  return signed;
}