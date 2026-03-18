import posthog from "posthog-js";

type AnalyticsValue = string | number | boolean | null | undefined;
type AnalyticsProps = Record<string, AnalyticsValue>;

const VISITOR_ID_KEY = "julien_visitor_id";
const SESSION_ID_KEY = "julien_session_id";
const ATTRIBUTION_KEY = "julien_attribution";
const STEP_MAP: Record<string, string> = {
  "/": "optin",
  "/offre": "offer",
  "/paiement": "payment",
};

let initialized = false;
let analyticsDisabled = false;

function safeRandomId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `anon_${Math.random().toString(36).slice(2)}_${Date.now().toString(36)}`;
}

function getStorage<T>(storage: Storage, key: string): T | null {
  try {
    const raw = storage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

function setStorage(storage: Storage, key: string, value: unknown) {
  try {
    storage.setItem(key, JSON.stringify(value));
  } catch {
    // Ignore storage errors in privacy-restricted contexts.
  }
}

function getVisitorId() {
  if (typeof window === "undefined") return null;

  const existing = getStorage<string>(window.localStorage, VISITOR_ID_KEY);
  if (existing) return existing;

  const next = safeRandomId();
  setStorage(window.localStorage, VISITOR_ID_KEY, next);
  return next;
}

function getSessionId() {
  if (typeof window === "undefined") return null;

  const existing = getStorage<string>(window.sessionStorage, SESSION_ID_KEY);
  if (existing) return existing;

  const next = safeRandomId();
  setStorage(window.sessionStorage, SESSION_ID_KEY, next);
  return next;
}

function getAttribution() {
  if (typeof window === "undefined") return {};

  const current = Object.fromEntries(new URLSearchParams(window.location.search).entries());
  const keys = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "gclid",
    "fbclid",
    "ttclid",
    "ref",
  ];

  const incoming: Record<string, string> = {};
  for (const key of keys) {
    const value = current[key];
    if (value) incoming[key] = value;
  }

  const stored = getStorage<Record<string, string>>(window.localStorage, ATTRIBUTION_KEY) || {};
  const merged = { ...stored, ...incoming };

  if (Object.keys(incoming).length > 0 && JSON.stringify(merged) !== JSON.stringify(stored)) {
    setStorage(window.localStorage, ATTRIBUTION_KEY, merged);
  }

  return merged;
}

function getPageStep(pathname: string) {
  return STEP_MAP[pathname] ?? "other";
}

function buildCommonProps(extra: AnalyticsProps = {}) {
  if (typeof window === "undefined") return extra;

  const attribution = getAttribution();
  const pagePath = `${window.location.pathname}${window.location.search}${window.location.hash}`;

  return {
    app: "julien_funnel",
    visitor_id: getVisitorId(),
    session_id: getSessionId(),
    landing_path: getStorage<string>(window.localStorage, "julien_landing_path") ?? window.location.pathname,
    page_path: window.location.pathname,
    page_search: window.location.search,
    page_hash: window.location.hash,
    page_url: window.location.href,
    page_step: getPageStep(window.location.pathname),
    page_title: document.title,
    referrer: document.referrer || null,
    ...attribution,
    ...extra,
  } satisfies Record<string, AnalyticsValue | Record<string, string>>;
}

function ensureLandingPath() {
  if (typeof window === "undefined") return;
  const existing = getStorage<string>(window.localStorage, "julien_landing_path");
  if (!existing) {
    setStorage(window.localStorage, "julien_landing_path", window.location.pathname);
  }
}

function initGtag() {
  if (typeof window === "undefined") return;
  const measurementId = import.meta.env.VITE_GA4_MEASUREMENT_ID;
  if (!measurementId || (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag) return;

  const scriptId = "julien-ga4-script";
  if (!document.getElementById(scriptId)) {
    const script = document.createElement("script");
    script.id = scriptId;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.appendChild(script);
  }

  const dataLayer = ((window as typeof window & { dataLayer?: unknown[] }).dataLayer ||= []);
  const gtag = (...args: unknown[]) => {
    dataLayer.push(args);
  };
  (window as typeof window & { gtag?: typeof gtag }).gtag = gtag;
  gtag("js", new Date());
  gtag("config", measurementId, { send_page_view: false });
}

function initPosthog() {
  if (typeof window === "undefined") return;

  const key = import.meta.env.VITE_POSTHOG_KEY;
  if (!key || analyticsDisabled || posthog.__loaded) return;

  posthog.init(key, {
    api_host: import.meta.env.VITE_POSTHOG_HOST || "https://us.i.posthog.com",
    capture_pageview: false,
    capture_pageleave: true,
    persistence: "localStorage",
    loaded: (instance) => {
      instance.register({
        app: "julien_funnel",
      });
    },
  });
}

export function initAnalytics() {
  if (initialized || typeof window === "undefined") return;
  initialized = true;
  ensureLandingPath();
  initPosthog();
  initGtag();
}

export function trackEvent(event: string, props: AnalyticsProps = {}) {
  if (typeof window === "undefined") return;

  initAnalytics();

  const payload = buildCommonProps({
    ...props,
    event_category: props.event_category ?? "engagement",
    event_label: props.event_label ?? event,
  });

  try {
    if (posthog.__loaded) {
      posthog.capture(event, payload);
    }
  } catch {
    analyticsDisabled = true;
  }

  try {
    const gtag = (window as typeof window & { gtag?: (...args: unknown[]) => void }).gtag;
    if (gtag) {
      gtag("event", event, payload);
    }
  } catch {
    // Ignore analytics transport errors.
  }

  try {
    const dataLayer = ((window as typeof window & { dataLayer?: unknown[] }).dataLayer ||= []);
    dataLayer.push({ event, ...payload });
  } catch {
    // Ignore analytics transport errors.
  }

  if (import.meta.env.DEV && import.meta.env.VITE_ANALYTICS_DEBUG === "true") {
    console.debug("[analytics]", event, payload);
  }
}

export function trackPageView() {
  if (typeof window === "undefined") return;
  trackEvent("page_view", {
    event_category: "page",
    event_label: getPageStep(window.location.pathname),
  });
}

export function getRouteStep(pathname: string) {
  return getPageStep(pathname);
}
