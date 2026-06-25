import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";

const routes = ["", "/kitchens", "/wardrobes", "/design-details", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
