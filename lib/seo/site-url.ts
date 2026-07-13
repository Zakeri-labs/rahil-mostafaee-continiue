const LOCAL_HOSTNAMES = new Set(["localhost", "127.0.0.1", "::1"]);

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!configuredUrl) {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL is required to generate absolute sitemap and robots URLs. " +
        "Set it to the production origin, for example https://example.com.",
    );
  }

  const siteUrl = new URL(configuredUrl);
  if (siteUrl.protocol !== "http:" && siteUrl.protocol !== "https:") {
    throw new Error("NEXT_PUBLIC_SITE_URL must use http:// or https://.");
  }

  if (process.env.NODE_ENV === "production" && LOCAL_HOSTNAMES.has(siteUrl.hostname)) {
    throw new Error("NEXT_PUBLIC_SITE_URL cannot use localhost in production.");
  }

  return siteUrl.toString().replace(/\/+$/, "");
}
