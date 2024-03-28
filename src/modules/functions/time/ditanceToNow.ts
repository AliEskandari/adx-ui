import { formatDistanceToNowStrict } from "date-fns";

export function distanceToNow(timestamp?: string) {
  if (!timestamp) return undefined;
  return formatDistanceToNowStrict(new Date(timestamp), { addSuffix: true });
}
