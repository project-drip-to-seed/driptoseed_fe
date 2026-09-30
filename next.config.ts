import type { NextConfig } from "next";

// Where the Drip portal API (drip_backend: `python -m drip.portal.app`) lives.
const PORTAL_API_URL = process.env.PORTAL_API_URL ?? "http://127.0.0.1:8001";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  async rewrites() {
    return [
      // The browser only ever talks to this site (same origin), which forwards
      // to the portal API. The session cookie therefore stays first-party and
      // httpOnly, and the API needs no CORS for the browser.
      {
        source: "/api/portal/:path*",
        destination: `${PORTAL_API_URL}/api/v1/:path*`,
      },
    ];
  },

  async redirects() {
    // Old links that used to 404 now land on the real application pages.
    return [
      { source: "/become-creator", destination: "/apply/creator", permanent: false },
      { source: "/apply-creator", destination: "/apply/creator", permanent: false },
      { source: "/become-editor", destination: "/apply/editor", permanent: false },
      { source: "/apply-editor", destination: "/apply/editor", permanent: false },
    ];
  },
};

export default nextConfig;
