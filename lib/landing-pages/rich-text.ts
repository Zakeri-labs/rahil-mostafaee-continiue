/**
 * Minimal inline markup for landing-page copy. Keeps links, bold and
 * left-to-right runs (Latin names inside Persian text) as data so the same
 * copy can render as JSX and be flattened to plain text for JSON-LD.
 */
export type InlineNode =
  | { t: "a"; href: string; ext?: true; c: readonly Inline[] }
  | { t: "b" | "ltr" | "glow"; c: readonly Inline[] };

export type Inline = string | InlineNode;

export type Rich = readonly Inline[];

export function richToPlain(rich: Rich): string {
  return rich.map((node) => (typeof node === "string" ? node : richToPlain(node.c))).join("");
}
