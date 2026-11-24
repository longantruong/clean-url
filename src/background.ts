import { cleanUrl } from './cleaner.js';

chrome.action.onClicked.addListener(() => {
  const testUrls = [
    'https://example.com/?id=123&utm_source=google',

    'invalid-url',

    '',

    'chrome://extensions/',

    'file:///Users/example/report.pdf',

    'https://example.com/?sig=abc&utm_source=google',

    'https://example.com/?q=hello%20world&utm_source=google',

    'https://example.com/?id=123#detail',
  ];

  console.table(
    testUrls.map(url => ({
      original: url,
      cleaned: cleanUrl(url),
    }))
  );
});