import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getRouteStep, trackEvent, trackPageView } from "@/lib/analytics";

const SCROLL_THRESHOLDS = [25, 50, 75, 100];

const AnalyticsTracker = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const trackedScrollDepths = useRef(new Set<number>());
  const trackedFormStart = useRef(new Set<string>());
  const lastHeartbeatRoute = useRef<string>("");

  useEffect(() => {
    const path = new URLSearchParams(location.search).get("path");
    if (path && location.pathname === "/") {
      navigate(path, { replace: true });
    }
  }, [location.pathname, location.search, navigate]);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    if (location.pathname === "/" && query.get("path")) {
      return;
    }

    trackedScrollDepths.current = new Set();
    trackedFormStart.current = new Set();
    lastHeartbeatRoute.current = location.pathname;

    trackPageView();
    trackEvent("journey_step_view", {
      event_category: "page",
      event_label: getRouteStep(location.pathname),
      step: getRouteStep(location.pathname),
    });

    if (location.pathname === "/offre" && query.get("checkout") === "success") {
      trackEvent("purchase_completed", {
        event_category: "purchase",
        event_label: "whop_return",
        checkout_status: "success",
      });
    }

    const onScroll = () => {
      const doc = document.documentElement;
      const total = Math.max(doc.scrollHeight - window.innerHeight, 1);
      const scrollTop = window.scrollY || doc.scrollTop || 0;
      const depth = Math.min(100, Math.round(((scrollTop + window.innerHeight) / (total + window.innerHeight)) * 100));

      for (const threshold of SCROLL_THRESHOLDS) {
        if (depth >= threshold && !trackedScrollDepths.current.has(threshold)) {
          trackedScrollDepths.current.add(threshold);
          trackEvent("scroll_depth", {
            event_category: "engagement",
            event_label: `${threshold}%`,
            scroll_depth: threshold,
          });
        }
      }
    };

    const onClickCapture = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const tracked = target?.closest<HTMLElement>("[data-track-event]");
      if (!tracked) return;

      trackEvent(tracked.dataset.trackEvent || "cta_click", {
        event_category: tracked.dataset.trackCategory || "cta",
        event_label: tracked.dataset.trackLabel || tracked.dataset.trackEvent || "cta_click",
        section: tracked.dataset.trackSection || null,
        destination: tracked.dataset.trackDestination || null,
        element_text: tracked.textContent?.trim().slice(0, 120) || null,
      });
    };

    const onFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement | null;
      const form = target?.closest<HTMLElement>("[data-track-form]");
      if (!form) return;

      const key = form.dataset.trackForm || location.pathname;
      if (trackedFormStart.current.has(key)) return;

      trackedFormStart.current.add(key);
      trackEvent("form_start", {
        event_category: "lead",
        event_label: key,
        form_name: form.dataset.trackForm || null,
      });
    };

    const heartbeat = () => {
      if (document.visibilityState !== "visible") return;
      trackEvent("engaged_time", {
        event_category: "engagement",
        event_label: lastHeartbeatRoute.current,
        active_seconds: 30,
      });
    };
    const heartbeatTimer = window.setInterval(heartbeat, 30000);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onClickCapture, true);
    document.addEventListener("focusin", onFocusIn, true);
    document.addEventListener("visibilitychange", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClickCapture, true);
      document.removeEventListener("focusin", onFocusIn, true);
      document.removeEventListener("visibilitychange", onScroll);
      window.clearInterval(heartbeatTimer);
    };
  }, [location.pathname, location.search]);

  return null;
};

export default AnalyticsTracker;
