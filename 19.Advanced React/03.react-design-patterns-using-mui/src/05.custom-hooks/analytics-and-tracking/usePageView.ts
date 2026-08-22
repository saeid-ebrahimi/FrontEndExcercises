import { useLocation } from "react-router-dom";
import { useAnalytics } from "./useAnalytics";
import { useEffect } from "react";

export function usePageView() {
  const location = useLocation();
  const { track } = useAnalytics();

  useEffect(() => {
    track({
      name: "page_view",
      properties: {
        page_path: location.pathname,
        page_url: `${location.pathname}${location.search}`,
      },
    });
  }, [location.pathname, location.search, track]);
}
