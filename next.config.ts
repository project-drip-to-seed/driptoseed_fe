import type { NextConfig } from "next";

// The portal API (drip_backend: `python -m drip.portal.app`) is reached through src/app/api/portal/[...path]/route.ts
// and src/lib/portal/server.ts; PORTAL_API_URL and PORTAL_PROXY_SECRET are read in src/lib/portal/backend.ts.

// Browser protections sent with every response. The admin dashboard has one-click approve / mark-paid buttons,
// so the page must never be framed by another site (clickjacking).
//
// The content policy is deliberately the safe subset: it stops framing, <base> tag tricks, forms posting to
// other sites and plugins, without restricting scripts (the site loads analytics and Next's own inline scripts,
// so a strict script-src needs per-request nonces; that is a separate, larger change).
const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  {
    key: "Content-Security-Policy",
    value: "frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'; upgrade-insecure-requests",
  },
];

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  poweredByHeader: false, // don't announce the framework

  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      {
        // Everything in public/media has a version in its file name (…-v1.mp4), so a browser can keep it for a
        // year without asking again. To replace a file, give the new one a new version number.
        source: "/media/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        // The older static files (logo, font, illustrations) keep their names when they change, so they are cached for
        // a day and then refreshed quietly in the background, instead of being re-checked on every page view.
        source: "/:folder(fonts|brand|niche_images|general_assets|hero_section|solutions|solutions_assets|resources_assets)/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }],
      },
    ];
  },

  async redirects() {
    // Old links that used to 404 now land on the real application pages. They are permanent (308), so search engines
    // move any ranking the old addresses earned over to the new ones and stop visiting the old ones.
    return [
      { source: "/become-creator", destination: "/apply/creator", permanent: true },
      { source: "/apply-creator", destination: "/apply/creator", permanent: true },
      { source: "/become-editor", destination: "/apply/editor", permanent: true },
      { source: "/apply-editor", destination: "/apply/editor", permanent: true },
      // /solutions has no page of its own: send it to the overview that covers all the services. Not permanent, so
      // a real /solutions page can replace this later without browsers remembering the redirect.
      { source: "/solutions", destination: "/solutions/creator-growth", permanent: false },
    ];
  },
};

export default nextConfig;
