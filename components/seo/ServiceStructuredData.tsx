import { JsonLd } from "@/components/seo/JsonLd";
import type { Locale } from "@/lib/i18n/config";
import { getServiceSchemas, type ServiceSchemaRoute } from "@/lib/seo/site-schemas";

/** Server-rendered schema bundle; the root layout supplies the single Person schema. */
export function ServiceStructuredData({
  locale,
  route,
}: {
  locale: Locale;
  route: ServiceSchemaRoute;
}) {
  return getServiceSchemas(locale, route).map((schema) => (
    <JsonLd key={schema["@type"]} data={schema} />
  ));
}
