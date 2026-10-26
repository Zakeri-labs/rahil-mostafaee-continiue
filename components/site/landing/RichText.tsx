import Link from "next/link";
import { withTrailingSlashHref } from "@/lib/i18n/routes";
import type { Inline, Rich } from "@/lib/landing-pages/rich-text";

const linkClass = "text-gold underline underline-offset-4 hover:text-gold-soft transition-colors";

function isBlogPath(href: string) {
  return href === "/blog" || href.startsWith("/blog/");
}

function renderNode(node: Inline, key: number) {
  if (typeof node === "string") return node;

  const children = node.c.map(renderNode);

  switch (node.t) {
    case "b":
      return (
        <strong key={key} className="font-semibold text-ivory">
          {children}
        </strong>
      );
    case "ltr":
      return <bdi key={key}>{children}</bdi>;
    case "glow":
      return (
        <span key={key} className="animate-lamp font-semibold text-gold">
          {children}
        </span>
      );
    case "a":
      // External sources never pass link equity; the blog is a separate WordPress origin.
      if (node.ext) {
        return (
          <a
            key={key}
            href={node.href}
            target="_blank"
            rel="nofollow noopener"
            className={linkClass}
          >
            {children}
          </a>
        );
      }
      if (isBlogPath(node.href)) {
        return (
          <a key={key} href={node.href} className={linkClass}>
            {children}
          </a>
        );
      }
      return (
        <Link key={key} href={withTrailingSlashHref(node.href)} className={linkClass}>
          {children}
        </Link>
      );
  }
}

/** Server-rendered inline copy: text, bold, LTR runs, and internal/external links. */
export function RichText({ value }: { value: Rich }) {
  return <>{value.map(renderNode)}</>;
}
