import { cleanUrl } from './cleaner.js';
import { copyToClipboard } from './clipboard.js';
import { showFeedback } from './feedback.js';
import { isSupportedProtocol } from './safety.js';

chrome.action.onClicked.addListener(async (tab) => {
  const tabId = tab.id;

  if (tabId === undefined) {
    return;
  }

  let status: 'success' | 'error' = 'error';

  try {
    if (!tab.url) {
      throw new Error('Tab URL is unavailable.');
    }

    const url = new URL(tab.url);

    if (!isSupportedProtocol(url)) {
      throw new Error('Unsupported URL protocol.');
    }

    const cleanedUrl = cleanUrl(tab.url);

    await copyToClipboard(cleanedUrl);

    status = 'success';
  } catch {
    console.error('Failed to copy URL.');
  }

  try {
    await showFeedback(tabId, status);
  } catch {
    console.error('Failed to display feedback.');
  }
});