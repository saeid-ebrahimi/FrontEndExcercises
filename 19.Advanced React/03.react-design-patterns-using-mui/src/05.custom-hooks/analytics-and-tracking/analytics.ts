import { TAnalyticsEvent } from "./type";

export function trackEvent({
  name,
  properties,
}: TAnalyticsEvent) {
  if (
    typeof window === "undefined" ||
    typeof window?.dataLayer === "undefined"
  ) {
    return;
  }
  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    event: name,
    ...properties,
  });
}
