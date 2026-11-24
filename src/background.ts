import { cleanUrl } from './cleaner.js';
import { copyToClipboard } from './clipboard.js';

chrome.action.onClicked.addListener(async (tab) => {
  if (!tab.url) {
    return;
  }

  try {
    const url = new URL(tab.url);

    if (
      url.protocol !== 'http:' &&
      url.protocol !== 'https:'
    ) {
      return;
    }

    const cleanedUrl = cleanUrl(tab.url);

    await copyToClipboard(cleanedUrl);

    console.info('URL copied successfully.');
  } catch {
    console.error('Failed to copy URL.');
  }
});