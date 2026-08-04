export type AnalyticsEvent = {
  event: string;
  page?: string;
  utm?: Record<string, string | null>;
};

export async function track(
  event: AnalyticsEvent,
) {
  await fetch("/api/analytics", {
    method: "POST",
    body: JSON.stringify(event),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
