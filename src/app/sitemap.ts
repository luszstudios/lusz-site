import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/work", "/services", "/about", "/store", "/contact"];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}` })),
    ...projects.map((p) => ({ url: `${site.url}/work/${p.slug}` })),
  ];
}
