"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-onyx px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-ivory">An issue occurred</h1>
        <p className="mt-3 text-sm text-muted-foreground">Please refresh or return home.</p>
        <div className="mt-8 flex justify-center gap-3">
          <button
            onClick={reset}
            className="border border-gold/40 px-6 py-3 text-xs uppercase tracking-[0.3em] text-gold transition-all hover:bg-gold hover:text-onyx"
          >
            Retry
          </button>
          <Link
            href="/"
            className="border border-border px-6 py-3 text-xs uppercase tracking-[0.3em] text-ivory hover:border-gold/40"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
