export type AnalyticsProperties = Record<
  string,
  string | number | boolean | null | undefined
>;

export type TAnalyticsEvent = {
  name: string;
  properties?: AnalyticsProperties;
};
