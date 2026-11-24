const OFFSCREEN_PATH = 'offscreen.html';

let creating: Promise<void> | undefined;

async function ensureOffscreenDocument(): Promise<void> {
  if (creating) {
    return creating;
  }

  creating = (async () => {
    const contexts = await chrome.runtime.getContexts({
      contextTypes: [
        chrome.runtime.ContextType.OFFSCREEN_DOCUMENT,
      ],
      documentUrls: [
        chrome.runtime.getURL(OFFSCREEN_PATH),
      ],
    });

    if (contexts.length > 0) {
      return;
    }

    await chrome.offscreen.createDocument({
      url: OFFSCREEN_PATH,
      reasons: [
        chrome.offscreen.Reason.CLIPBOARD,
      ],
      justification: 'Copy cleaned URLs to the clipboard.',
    });
  })();

  try {
    await creating;
  } finally {
    creating = undefined;
  }
}

export async function copyToClipboard(
  text: string
): Promise<void> {
  await ensureOffscreenDocument();

  const response = await chrome.runtime.sendMessage({
    target: 'offscreen',
    type: 'COPY_TEXT',
    text,
  });

  if (response?.success !== true) {
    throw new Error('Failed to copy text to clipboard.');
  }
}