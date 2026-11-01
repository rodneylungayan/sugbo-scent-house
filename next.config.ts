import type { NextConfig } from "next";

/** Sites allowed to show this concept inside an iframe (e.g. a portfolio preview).
 *  Add or remove domains here. */
const FRAME_ANCESTORS = ["'self'", "https://mactandigital.com", "https://*.mactandigital.com"];

/** Security + cache headers for every route. */
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Content-Security-Policy", value: `frame-ancestors ${FRAME_ANCESTORS.join(" ")}` },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  trailingSlash: false,
  poweredByHeader: false,
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      {
        source: "/images/:path*",
        // A week, not "immutable": image slots keep fixed names, so a replaced photo must refresh.
        headers: [{ key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" }],
      },
    ];
  },
};

export default nextConfig;
