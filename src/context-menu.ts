import { copyCleanUrl } from './actions.js';

const MENU_IDS = {
  PAGE: 'copy-clean-page-url',
  LINK: 'copy-clean-link-url',
} as const;

export function registerContextMenus(): void {
  chrome.contextMenus.removeAll(() => {
    if (chrome.runtime.lastError) {
      console.error('Failed to reset context menus.');
      return;
    }

    chrome.contextMenus.create({
      id: MENU_IDS.PAGE,
      title: 'Copy clean page URL',
      contexts: ['page'],
      documentUrlPatterns: [
        'http://*/*',
        'https://*/*',
      ],
    }, handleCreationResult);

    chrome.contextMenus.create({
      id: MENU_IDS.LINK,
      title: 'Copy clean link URL',
      contexts: ['link'],
      targetUrlPatterns: [
        'http://*/*',
        'https://*/*',
      ],
    }, handleCreationResult);
  });
}

function handleCreationResult(): void {
  if (chrome.runtime.lastError) {
    console.error('Failed to create context menu.');
  }
}

export function registerContextMenuListener(): void {
  chrome.contextMenus.onClicked.addListener(
    (info, tab) => {
      switch (info.menuItemId) {
        case MENU_IDS.PAGE:
          void copyCleanUrl(info.pageUrl, tab?.id);
          break;

        case MENU_IDS.LINK:
          void copyCleanUrl(info.linkUrl, tab?.id);
          break;
      }
    }
  );
} 