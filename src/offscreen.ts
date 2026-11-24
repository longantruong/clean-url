function writeToClipboard(text: string): void {
  const textarea = document.createElement('textarea');

  textarea.value = text;
  document.body.appendChild(textarea);

  try {
    textarea.select();

    const copied = document.execCommand('copy');

    if (!copied) {
      throw new Error('Clipboard operation failed.');
    }
  } finally {
    textarea.remove();
  }
}

chrome.runtime.onMessage.addListener(
  (message, sender, sendResponse) => {
    if (
      sender.id !== chrome.runtime.id ||
      message?.target !== 'offscreen' ||
      message?.type !== 'COPY_TEXT'
    ) {
      return;
    }

    if (typeof message.text !== 'string') {
      sendResponse({ success: false });
      return;
    }

    try {
      writeToClipboard(message.text);

      sendResponse({ success: true });
    } catch {
      sendResponse({ success: false });
    }
  }
);