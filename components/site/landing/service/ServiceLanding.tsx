import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import aboutImage from "@/assets/About-1.webp";
import { LandingTheme } from "@/components/site/landing/LandingTheme";
import { RichText } from "@/components/site/landing/RichText";
import { ReadMore } from "@/components/site/landing/service/ReadMore";
import type { Locale } from "@/lib/i18n/config";
import { withTrailingSlashHref } from "@/lib/i18n/routes";
import type {
  LandingButton,
  ServiceLandingContent,
  ServiceLandingSection,
} from "@/lib/landing-pages/service-landing-types";
import { cn } from "@/lib/utils";

type SectionOf<T extends ServiceLandingSection["type"]> = Extract<
  ServiceLandingSection,
  { type: T }
>;

const container = "mx-auto w-full px-6 lg:px-10";
const containerWide = `${container} max-w-5xl`;
const sectionClass = "border-t border-gold/10 py-16 sm:py-20 lg:py-32";
const h2Class =
  "font-display text-2xl lg:text-4xl text-ivory tracking-tight leading-[1.4] break-words text-balance";
const h3Class = "font-display text-xl lg:text-2xl text-ivory break-words";
const bodyClass = "text-base lg:text-lg leading-relaxed text-muted-foreground";
const hairlineGrid = "grid gap-px bg-gold/10 hairline";
const diamond =
  "relative ps-5 before:absolute before:start-0 before:top-[0.7em] before:size-[7px] before:rotate-45 before:bg-gold before:content-['']";

function numeral(n: number, locale: Locale) {
  return locale === "fa" ? n.toLocaleString("fa-IR") : String(n).padStart(2, "0");
}

function CtaButton({ button }: { button: LandingButton }) {
  const base =
    "group inline-flex min-h-[52px] items-center justify-center gap-3 px-8 py-4 text-sm font-medium transition-colors";
  const variant =
    button.variant === "primary"
      ? "bg-gold text-onyx shadow-glow hover:bg-gold-soft"
      : "glass-strong text-ivory hover:border-gold/40";
  return (
    <Link href={withTrailingSlashHref(button.href)} className={cn(base, variant)}>
      {button.label}
      <ArrowUpRight
        aria-hidden="true"
        className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5"
      />
    </Link>
  );
}

function ButtonRow({
  buttons,
  className,
}: {
  buttons: readonly LandingButton[];
  className?: string;
}) {
  return (
    <div className={cn("flex w-full flex-col gap-3 sm:w-auto sm:flex-row", className)}>
      {buttons.map((button) => (
        <CtaButton key={button.href} button={button} />
      ))}
    </div>
  );
}

function Hero({
  c,
  locale,
  image,
}: {
  c: ServiceLandingContent["hero"];
  locale: Locale;
  image: StaticImageData;
}) {
  const h1Class =
    locale === "fa"
      ? "text-[2.15rem] leading-[1.48] min-[430px]:text-[2.45rem] min-[430px]:leading-[1.45] md:text-[3.2rem] lg:text-[3.65rem] lg:leading-[1.22]"
      : "text-[2.55rem] leading-[1.12] min-[430px]:text-[2.95rem] min-[430px]:leading-[1.1] md:text-[3.9rem] lg:text-[4.65rem] lg:leading-[0.96]";

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden pb-16 lg:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[image:var(--lp-marble-overlay)]"
      />
      <div className={cn(container, "relative max-w-4xl pt-8 text-center lg:pt-16")}>
        <nav aria-label={c.breadcrumbLabel}>
          <ol className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[13px] text-muted-foreground">
            {c.breadcrumb.map((item, index) => (
              <li key={item.name} className="flex items-center gap-2">
                {index > 0 && (
                  <span aria-hidden="true" className="text-gold/40 rtl:-scale-x-100">
                    ›
                  </span>
                )}
                {item.href ? (
                  <Link
                    href={withTrailingSlashHref(item.href)}
                    className="transition-colors hover:text-gold"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span aria-current="page">{item.name}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-8 flex flex-col items-center gap-5 lg:gap-6">
          <p className="flex items-center gap-3 text-xs font-medium text-gold lg:text-[13px]">
            <span aria-hidden="true" className="h-px w-8 bg-gold lg:w-12" />
            {c.kicker}
            <span aria-hidden="true" className="h-px w-8 bg-gold lg:w-12" />
          </p>
          <h1
            id="hero-title"
            className={cn(
              "font-display break-words text-ivory tracking-tight lg:text-balance",
              h1Class,
            )}
          >
            {c.h1}
          </h1>
          <p className="max-w-2xl text-lg font-medium text-ivory">
            <RichText value={c.subline} />
          </p>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-[1.0625rem]">
            <RichText value={c.lede} />
          </p>
          <ButtonRow
            buttons={c.buttons}
            className="max-w-[420px] sm:max-w-none sm:justify-center"
          />
          <p className="max-w-xl text-[13px] leading-relaxed text-muted-foreground">
            <RichText value={c.note} />
          </p>
        </div>
      </div>

      <figure className={cn(containerWide, "relative mt-10 lg:mt-14")}>
        <Image
          src={image}
          alt={c.imageAlt}
          priority
          fetchPriority="high"
          sizes="(min-width: 1024px) 960px, 100vw"
          className="hairline h-auto w-full shadow-luxe"
        />
      </figure>
    </section>
  );
}

function Cards({ c, id, locale }: { c: SectionOf<"cards">; id: string; locale: Locale }) {
  return (
    <section aria-labelledby={id} className={sectionClass}>
      <div className={cn(container, "max-w-7xl")}>
        <div className="mb-10 max-w-3xl space-y-5">
          <h2 id={id} className={h2Class}>
            {c.title}
          </h2>
          <p className={bodyClass}>
            <RichText value={c.intro} />
          </p>
        </div>
        <div
          className={cn(
            hairlineGrid,
            "md:grid-cols-2 lg:grid-cols-3 md:max-lg:[&>*:last-child:nth-child(odd)]:col-span-2 lg:[&>*:last-child:nth-child(3n+2)]:col-span-2",
          )}
        >
          {c.items.map((item, index) => (
            <article key={item.title} className="bg-onyx p-7 transition-colors hover:bg-charcoal">
              <span aria-hidden="true" className="mb-5 block font-display text-lg text-gold">
                {numeral(index + 1, locale)}
              </span>
              <h3 className={cn(h3Class, "mb-3")}>{item.title}</h3>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                <RichText value={item.text} />
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Routes({ c, id, locale }: { c: SectionOf<"routes">; id: string; locale: Locale }) {
  return (
    <section aria-labelledby={id} className={sectionClass}>
      <div className={containerWide}>
        <h2 id={id} className={cn(h2Class, "mb-5")}>
          {c.title}
        </h2>
        <div className="space-y-4">
          {c.intro.map((paragraph, index) => (
            <p key={index} className={bodyClass}>
              <RichText value={paragraph} />
            </p>
          ))}
        </div>
        <ol className={cn(hairlineGrid, "mt-8 md:grid-cols-2")}>
          {c.items.map((item, index) => (
            <li
              key={index}
              className="flex flex-col gap-4 bg-onyx p-7 transition-colors hover:bg-charcoal"
            >
              <span aria-hidden="true" className="font-display text-lg text-gold">
                {numeral(index + 1, locale)}
              </span>
              <h3 className={h3Class}>
                <RichText value={item.title} />
              </h3>
              <dl className="grid gap-4">
                {item.rows.map((row) => (
                  <div key={row.label} className="border-t border-gold/10 pt-4">
                    <dt className="mb-1.5 text-xs font-medium text-gold">{row.label}</dt>
                    <dd className="break-words text-[15px] leading-7 text-muted-foreground">
                      <RichText value={row.text} />
                    </dd>
                  </div>
                ))}
              </dl>
            </li>
          ))}
        </ol>
        {c.note && (
          <p className="mt-6 text-[1.0625rem] text-ivory">
            <RichText value={c.note} />
          </p>
        )}
      </div>
    </section>
  );
}

function Checklist({ c, id }: { c: SectionOf<"checklist">; id: string }) {
  return (
    <section aria-labelledby={id} className={sectionClass}>
      <div className={containerWide}>
        <h2 id={id} className={cn(h2Class, "mb-5")}>
          {c.title}
        </h2>
        <div className="space-y-4">
          {c.intro.map((paragraph, index) => (
            <p key={index} className={bodyClass}>
              <RichText value={paragraph} />
            </p>
          ))}
        </div>
        <ul className="mt-8 grid gap-4 lg:grid-cols-2 lg:gap-x-10">
          {c.items.map((item) => (
            <li key={item.title} className={cn(diamond, "text-muted-foreground")}>
              <strong className="font-semibold text-ivory">{item.title}:</strong>{" "}
              <RichText value={item.text} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Prose({ c, id }: { c: SectionOf<"prose">; id: string }) {
  return (
    <section aria-labelledby={id} className={sectionClass}>
      <div className={containerWide}>
        <h2 id={id} className={cn(h2Class, "mb-5")}>
          {c.title}
        </h2>
        {c.blocks.map((block, index) =>
          block.type === "h3" ? (
            <h3 key={index} className={cn(h3Class, "mb-2.5 mt-8")}>
              <RichText value={block.c} />
            </h3>
          ) : (
            <p key={index} className={cn(bodyClass, index > 0 && "mt-4")}>
              <RichText value={block.c} />
            </p>
          ),
        )}
      </div>
    </section>
  );
}

function Process({ c, id, locale }: { c: SectionOf<"process">; id: string; locale: Locale }) {
  return (
    <section aria-labelledby={id} className={sectionClass}>
      <div className={cn(container, "max-w-7xl")}>
        <div className="mb-10 max-w-3xl space-y-5">
          <h2 id={id} className={h2Class}>
            {c.title}
          </h2>
          <p className={bodyClass}>
            <RichText value={c.intro} />
          </p>
        </div>
        <ol className={cn(hairlineGrid, "md:grid-cols-2 lg:grid-cols-5")}>
          {c.steps.map((step, index) => (
            <li
              key={step.title}
              className="bg-onyx p-6 text-[15px] leading-relaxed text-muted-foreground transition-colors hover:bg-charcoal lg:px-6 lg:py-8"
            >
              <span aria-hidden="true" className="mb-4 block font-display text-lg text-gold">
                {numeral(index + 1, locale)}
              </span>
              <strong className="mb-2 block text-base font-semibold text-ivory">
                {step.title}
              </strong>
              <RichText value={step.text} />
            </li>
          ))}
        </ol>
        {c.note && (
          <p className="mt-6 text-[1.0625rem] text-ivory">
            <RichText value={c.note} />
          </p>
        )}
        <div className="mt-10 max-w-3xl">
          <p className="font-semibold text-ivory">
            <RichText value={c.docsTitle} />
          </p>
          <ul className="mt-4 grid gap-3">
            {c.docs.map((doc) => (
              <li key={doc.title} className={cn(diamond, "text-muted-foreground")}>
                <strong className="font-semibold text-ivory">{doc.title}:</strong>{" "}
                <RichText value={doc.text} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function CtaBand({ c }: { c: SectionOf<"band"> }) {
  return (
    <section
      aria-label={c.label}
      className="border-t border-gold/10 bg-charcoal bg-[image:var(--gradient-radial-gold)] py-12"
    >
      <div className={cn(containerWide, "grid items-center gap-5 lg:grid-cols-[1fr_auto]")}>
        <div>
          <p className="text-lg text-ivory">
            <RichText value={c.text} />
          </p>
          {c.micro && (
            <p className="mt-2 text-sm text-muted-foreground">
              <RichText value={c.micro} />
            </p>
          )}
        </div>
        <ButtonRow buttons={c.buttons} />
      </div>
    </section>
  );
}

function Reasons({ c, id }: { c: SectionOf<"reasons">; id: string }) {
  return (
    <section aria-labelledby={id} className={sectionClass}>
      <div className={containerWide}>
        <h2 id={id} className={cn(h2Class, "mb-5")}>
          {c.title}
        </h2>
        <div className="space-y-4">
          {c.intro.map((paragraph, index) => (
            <p key={index} className={bodyClass}>
              <RichText value={paragraph} />
            </p>
          ))}
        </div>
        <ul className={cn(hairlineGrid, "mt-8 md:grid-cols-2")}>
          {c.items.map((item) => (
            <li
              key={item.title}
              className="grid gap-2 bg-onyx p-6 transition-colors hover:bg-charcoal"
            >
              <h3 className="flex items-center gap-3 font-display text-lg text-ivory">
                <span aria-hidden="true" className="size-[7px] flex-none rotate-45 bg-gold" />
                {item.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                <RichText value={item.text} />
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[1.0625rem] text-ivory">
          <RichText value={c.note} />
        </p>
      </div>
    </section>
  );
}

function Boundary({ c, id }: { c: SectionOf<"boundary">; id: string }) {
  return (
    <section aria-labelledby={id} className={sectionClass}>
      <div className={containerWide}>
        <h2 id={id} className={cn(h2Class, "mb-5")}>
          {c.title}
        </h2>
        <p className={bodyClass}>
          <RichText value={c.intro} />
        </p>
        <ul aria-label={c.listLabel} className={cn(hairlineGrid, "mt-8")}>
          {c.items.map((item, index) => (
            <li
              key={index}
              className="grid gap-2 bg-onyx px-6 py-5 md:grid-cols-[1fr_auto] md:items-center md:gap-6"
            >
              <p className="text-[15px] text-ivory">
                <RichText value={item.text} />
              </p>
              <span className="text-[15px] font-medium text-gold">
                <RichText value={item.link} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Trust({ c, id }: { c: SectionOf<"trust">; id: string }) {
  return (
    <section aria-labelledby={id} className={sectionClass}>
      <div
        className={cn(
          container,
          "grid max-w-7xl gap-10 md:grid-cols-[280px_1fr] md:items-start lg:grid-cols-[360px_1fr] lg:gap-16",
        )}
      >
        <figure className="max-w-[360px]">
          <Image
            src={aboutImage}
            alt={c.imageAlt}
            sizes="(min-width: 1024px) 360px, (min-width: 768px) 280px, 360px"
            className="hairline aspect-[4/5] h-auto w-full object-cover object-top"
          />
        </figure>
        <div>
          <h2 id={id} className={cn(h2Class, "mb-5")}>
            {c.title}
          </h2>
          <p className={bodyClass}>
            <RichText value={c.intro} />
          </p>
          <ul className={cn(hairlineGrid, "mt-7")}>
            {c.items.map((item) => (
              <li
                key={item.title}
                className="flex items-start gap-3.5 bg-onyx px-5 py-[18px] text-[15px] leading-relaxed text-muted-foreground"
              >
                <span
                  aria-hidden="true"
                  className="mt-2.5 size-[7px] flex-none rotate-45 bg-gold"
                />
                <span>
                  <strong className="font-semibold text-ivory">{item.title}:</strong>{" "}
                  <RichText value={item.text} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Resources({ c, id }: { c: SectionOf<"resources">; id: string }) {
  return (
    <section aria-labelledby={id} className={sectionClass}>
      <div className={containerWide}>
        <h2 id={id} className={cn(h2Class, "mb-8")}>
          {c.title}
        </h2>
        <ul className={hairlineGrid}>
          {c.items.map((item, index) => (
            <li
              key={index}
              className="flex min-w-0 items-center gap-3.5 break-words bg-onyx px-5 py-[18px] text-ivory"
            >
              <span aria-hidden="true" className="size-[7px] flex-none rotate-45 bg-gold" />
              <span className="[&_a]:text-ivory [&_a]:no-underline [&_a:hover]:text-gold">
                <RichText value={item} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Faq({ c, id }: { c: SectionOf<"faq">; id: string }) {
  return (
    <section id="faq" aria-labelledby={id} className={sectionClass}>
      <div className={containerWide}>
        <h2 id={id} className={cn(h2Class, "mb-10 text-center")}>
          {c.title}
        </h2>
        <div className={hairlineGrid}>
          {c.items.map((item) => (
            <details
              key={item.question}
              className="group bg-onyx transition-colors open:bg-charcoal/60"
            >
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 [&::-webkit-details-marker]:hidden">
                <h3 className="font-display text-lg text-ivory lg:text-[1.375rem]">
                  {item.question}
                </h3>
                <span aria-hidden="true" className="relative size-[18px] flex-none">
                  <span className="absolute inset-x-0 top-1/2 h-[1.5px] bg-gold" />
                  <span className="absolute inset-x-0 top-1/2 h-[1.5px] rotate-90 bg-gold transition-transform group-open:rotate-0" />
                </span>
              </summary>
              <p className="px-6 pb-6 text-[15px] leading-relaxed text-muted-foreground">
                <RichText value={item.answer} />
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta({ c, id }: { c: SectionOf<"final">; id: string }) {
  return (
    <section
      aria-labelledby={id}
      className={cn(sectionClass, "bg-[image:var(--lp-marble-overlay)] text-center")}
    >
      <div className={cn(container, "flex max-w-4xl flex-col items-center gap-4")}>
        <h2 id={id} className={h2Class}>
          {c.title}
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-[1.0625rem]">
          <RichText value={c.text} />
        </p>
        <ButtonRow buttons={c.buttons} className="mt-2 sm:justify-center" />
        <p className="mt-3 max-w-2xl text-[13px] leading-relaxed text-muted-foreground">
          <RichText value={c.disclaimer} />
        </p>
      </div>
    </section>
  );
}

function MoreBlocks({ c, id, locale }: { c: SectionOf<"more">; id: string; locale: Locale }) {
  return (
    <section aria-labelledby={id} className={sectionClass}>
      <div className={cn(container, "max-w-3xl")}>
        <h2 id={id} className={cn(h2Class, "mb-6")}>
          {c.title}
        </h2>
        <ReadMore openLabel={c.open} closeLabel={c.close}>
          {c.blocks.map((block, index) => {
            if (block.type === "h3") {
              return (
                <h3 key={index} className={cn(h3Class, "!mt-8")}>
                  <RichText value={block.c} />
                </h3>
              );
            }
            if (block.type === "p") {
              return (
                <p key={index} className={bodyClass}>
                  <RichText value={block.c} />
                </p>
              );
            }
            if (block.type === "ol") {
              return (
                <ol key={index} className="grid gap-3">
                  {block.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="relative ps-8 text-muted-foreground">
                      <span
                        aria-hidden="true"
                        className="absolute start-0 top-0 font-semibold text-gold"
                      >
                        {numeral(itemIndex + 1, locale).replace(/^0/, "")}
                      </span>
                      <RichText value={item} />
                    </li>
                  ))}
                </ol>
              );
            }
            return (
              <ul key={index} className="grid gap-3">
                {block.items.map((item) => (
                  <li key={item.title} className={cn(diamond, "text-muted-foreground")}>
                    <strong className="font-semibold text-ivory">{item.title}:</strong>{" "}
                    <RichText value={item.text} />
                  </li>
                ))}
              </ul>
            );
          })}
        </ReadMore>
      </div>
    </section>
  );
}

function renderSection(section: ServiceLandingSection, index: number, locale: Locale) {
  const id = `section-${index + 1}-title`;
  switch (section.type) {
    case "cards":
      return <Cards key={index} c={section} id={id} locale={locale} />;
    case "routes":
      return <Routes key={index} c={section} id={id} locale={locale} />;
    case "checklist":
      return <Checklist key={index} c={section} id={id} />;
    case "prose":
      return <Prose key={index} c={section} id={id} />;
    case "process":
      return <Process key={index} c={section} id={id} locale={locale} />;
    case "band":
      return <CtaBand key={index} c={section} />;
    case "reasons":
      return <Reasons key={index} c={section} id={id} />;
    case "boundary":
      return <Boundary key={index} c={section} id={id} />;
    case "trust":
      return <Trust key={index} c={section} id={id} />;
    case "resources":
      return <Resources key={index} c={section} id={id} />;
    case "faq":
      return <Faq key={index} c={section} id={id} />;
    case "final":
      return <FinalCta key={index} c={section} id={id} />;
    case "more":
      return <MoreBlocks key={index} c={section} id={id} locale={locale} />;
  }
}

/**
 * Shared server-rendered service landing page. Copy comes from a typed content module;
 * only ReadMore hydrates, so the page ships as static HTML with almost no client JS.
 */
export function ServiceLanding({
  content,
  locale,
  heroImage,
}: {
  content: ServiceLandingContent;
  locale: Locale;
  heroImage: StaticImageData;
}) {
  return (
    <LandingTheme variant="marble">
      <Hero c={content.hero} locale={locale} image={heroImage} />
      {content.sections.map((section, index) => renderSection(section, index, locale))}
    </LandingTheme>
  );
}
