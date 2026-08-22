import { useCallback } from "react";
import { trackEvent } from "./analytics";
import type { TAnalyticsEvent } from "./type";

export function useAnalytics() {
    const track = useCallback((event: TAnalyticsEvent) => {
        trackEvent(event)
    }, []
    );

    return {
        track,
    };
}