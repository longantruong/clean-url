type FeedbackStatus = 'success' | 'error';

const FEEDBACK_DURATION = 2000;

const FEEDBACK_CONFIG = {
  success: {
    text: 'OK',
    color: '#16a34a',
    title: 'Clean URL copied!',
  },
  error: {
    text: 'ERR',
    color: '#dc2626',
    title: 'Failed to copy URL',
  },
} as const;

const timers = new Map<
  number,
  ReturnType<typeof setTimeout>
>();

export async function showFeedback(
  tabId: number,
  status: FeedbackStatus
): Promise<void> {
  const config = FEEDBACK_CONFIG[status];

  const existingTimer = timers.get(tabId);

  if (existingTimer !== undefined) {
    clearTimeout(existingTimer);
  }

  await chrome.action.setBadgeBackgroundColor({
    tabId,
    color: config.color,
  });

  await chrome.action.setBadgeText({
    tabId,
    text: config.text,
  });

  await chrome.action.setTitle({
    tabId,
    title: config.title,
  });

  const timer = setTimeout(() => {
    timers.delete(tabId);

    void resetFeedback(tabId).catch(() => {
      // The tab may have been closed.
    });
  }, FEEDBACK_DURATION);

  timers.set(tabId, timer);
}

async function resetFeedback(
  tabId: number
): Promise<void> {
  await chrome.action.setBadgeText({
    tabId,
    text: '',
  });

  await chrome.action.setTitle({
    tabId,
    title: 'Copy clean URL',
  });
}