import { cleanUrl } from './cleaner.js';

chrome.action.onClicked.addListener((tab) => {
  if (!tab.url) {
    console.warn('Current tab URL is unavailable.');
    return;
  }

  const originalUrl = tab.url;
  const cleanedUrl = cleanUrl(originalUrl);

  console.log('Original URL:', originalUrl);
  console.log('Cleaned URL:', cleanedUrl);
});