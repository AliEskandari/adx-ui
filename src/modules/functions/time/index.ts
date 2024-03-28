import { delay } from "lodash";
import { formatDistanceToNow } from "date-fns";

export function waitUntil(
  conditionFn: () => boolean,
  callback: () => void,
  interval = 100
) {
  if (conditionFn()) {
    callback();
  } else {
    delay(() => waitUntil(conditionFn, callback, interval), interval);
  }
}

export function convertTimestamp(timestamp: string) {
  // Convert the timestamp to a Date object
  const date = new Date(timestamp);

  // Calculate the relative time difference
  const relativeTime = formatDistanceToNow(date, { addSuffix: true });

  return relativeTime;
}
