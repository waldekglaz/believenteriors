import type { MetadataRoute } from "next";
import { COMING_SOON, SITE_URL } from "@/lib/config";

export default function robots(): MetadataRoute.Robots {
  // While the holding page is live, keep the whole site out of search.
  if (COMING_SOON) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
