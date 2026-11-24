import { cleanUrl } from './cleaner.js';

chrome.action.onClicked.addListener(() => {
  const originalUrl =
    'https://example.com/?id=123&utm_source=google';

  const cleanedUrl = cleanUrl(originalUrl);

  console.log('Original URL:', originalUrl);
  console.log('Cleaned URL:', cleanedUrl);
});