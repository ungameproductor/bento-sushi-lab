import { useEffect } from "react";
import { siteUrl } from "../data/restaurant";

type SeoProps = {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  jsonLd?: unknown;
};

function upsertMeta(name: string, content: string, attribute: "name" | "property") {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.content = content;
}

export function Seo({ title, description, path, noindex = false, jsonLd }: SeoProps) {
  const url = path === "/" ? `${siteUrl}/` : `${siteUrl}${path}`;
  const payload = jsonLd ? JSON.stringify(jsonLd) : "";

  useEffect(() => {
    document.title = title;
    upsertMeta("description", description, "name");
    upsertMeta("robots", noindex ? "noindex, nofollow" : "index, follow", "name");
    upsertMeta("og:title", title, "property");
    upsertMeta("og:description", description, "property");
    upsertMeta("og:url", url, "property");
    upsertMeta("og:type", "website", "property");
    upsertMeta("og:image", `${siteUrl}/og.jpg`, "property");
    upsertMeta("twitter:card", "summary_large_image", "name");

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    const scriptId = "seo-jsonld";
    const existing = document.getElementById(scriptId);
    if (!payload) {
      existing?.remove();
      return;
    }
    const script = existing ?? document.createElement("script");
    script.id = scriptId;
    script.setAttribute("type", "application/ld+json");
    script.textContent = payload;
    if (!existing) document.head.appendChild(script);
  }, [description, noindex, payload, title, url]);

  return null;
}
