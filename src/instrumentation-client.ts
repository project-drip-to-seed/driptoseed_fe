import posthog from "posthog-js";

const projectToken = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;

if (projectToken) {
  posthog.init(projectToken, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    defaults: "2026-05-30",
    // The dashboards show names, emails, channel links and payout details. None of it should reach a third-party
    // analytics service, and this runs on every client-side navigation, not just on page load.
    before_send: (event) => {
      const path = window.location.pathname;
      return path.startsWith("/dashboard") || path.startsWith("/login") ? null : event;
    },
  });
}
