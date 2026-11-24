import { isTrackingParam } from './rules.js';
import { isSupportedProtocol, isSignedUrl } from './safety.js';

export function cleanUrl(input: string): string {
  let url: URL;

  try {
    url = new URL(input);
  } catch {
    return input;
  }

  if (!isSupportedProtocol(url) || isSignedUrl(url)) {
    return input;
  }

  const hashIndex = input.indexOf('#');

  const fragment =
    hashIndex === -1 ? '' : input.slice(hashIndex);

  const base =
    hashIndex === -1 ? input : input.slice(0, hashIndex);

  const queryIndex = base.indexOf('?');

  if (queryIndex === -1) {
    return input;
  }

  const pathname = base.slice(0, queryIndex);
  const query = base.slice(queryIndex + 1);

  const params = query.split('&');

  const remainingParams = params.filter(param => {
    const name = new URLSearchParams(param)
      .keys()
      .next().value;

    return name === undefined || !isTrackingParam(name);
  });

  if (remainingParams.length === params.length) {
    return input;
  }

  const cleanedQuery = remainingParams.join('&');

  return (
    pathname +
    (cleanedQuery ? `?${cleanedQuery}` : '') +
    fragment
  );
}