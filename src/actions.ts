import { cleanUrl } from './cleaner.js';
import { copyToClipboard } from './clipboard.js';
import { showFeedback } from './feedback.js';
import { isSupportedProtocol } from './safety.js';

export async function copyCleanUrl(
  input: string | undefined,
  tabId: number | undefined
): Promise<void> {
  let status: 'success' | 'error' = 'error';

  try {
    if (!input) {
      throw new Error('URL is unavailable.');
    }

    const url = new URL(input);

    if (!isSupportedProtocol(url)) {
      throw new Error('Unsupported URL protocol.');
    }

    const cleanedUrl = cleanUrl(input);

    await copyToClipboard(cleanedUrl);

    status = 'success';
  } catch {
    console.log('Failed to copy URL.');
  }

  if (tabId === undefined) {
    return;
  }

  try {
    await showFeedback(tabId, status);
  } catch {
    console.error('Failed to display feedback.');
  }
}