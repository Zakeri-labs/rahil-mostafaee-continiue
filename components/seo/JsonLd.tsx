// Server-safe JSON-LD renderer. Escapes `<` so the serialized payload can
// never prematurely close the surrounding <script> tag or inject markup.
export function JsonLd({ data }: { data: object }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
