/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_POSTHOG_KEY?: string;
  readonly VITE_POSTHOG_HOST?: string;
  readonly VITE_GA4_MEASUREMENT_ID?: string;
  readonly VITE_ANALYTICS_DEBUG?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
