import { copyCleanUrl } from './actions.js';

import {
  registerContextMenus,
  registerContextMenuListener,
} from './context-menu.js';

chrome.runtime.onInstalled.addListener(() => {
  registerContextMenus();
});

chrome.action.onClicked.addListener((tab) => {
  void copyCleanUrl(tab.url, tab.id);
});

registerContextMenuListener();