import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-onyx px-4">
      <div className="max-w-md text-center">
        <div className="font-display text-8xl gradient-gold-text">404</div>
        <h2 className="mt-6 font-display text-xl tracking-wide text-ivory">
          This page is not in our jurisdiction
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          The matter you are looking for has been moved or sealed.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block border border-gold/40 px-6 py-3 text-xs uppercase tracking-[0.3em] text-gold transition-all hover:bg-gold hover:text-onyx"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
