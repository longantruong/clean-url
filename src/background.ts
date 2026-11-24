import { cleanUrl } from './cleaner.js';

chrome.action.onClicked.addListener(() => {
  const originalUrl =
    'https://example.com/?id=123&UTM_Source=google&utm_custom=demo&gclid=abc&fbclid=xyz#gclid';

  const cleanedUrl = cleanUrl(originalUrl);

  console.log('Original URL:', originalUrl);
  console.log('Cleaned URL:', cleanedUrl);
});
