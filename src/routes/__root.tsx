import { createRootRouteWithContext, HeadContent, Link, Outlet, Scripts, useRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import appCss from "../styles.css?url";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-onyx px-4">
      <div className="max-w-md text-center">
        <div className="font-display text-8xl gradient-gold-text">404</div>
        <h2 className="mt-6 text-xl font-display tracking-wide text-ivory">This page is not in our jurisdiction</h2>
        <p className="mt-3 text-sm text-muted-foreground">The matter you are looking for has been moved or sealed.</p>
        <Link to="/" className="mt-8 inline-block px-6 py-3 text-xs tracking-[0.3em] uppercase border border-gold/40 text-gold hover:bg-gold hover:text-onyx transition-all">
          Return Home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-onyx px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-ivory">An issue occurred</h1>
        <p className="mt-3 text-sm text-muted-foreground">Please refresh or return home.</p>
        <div className="mt-8 flex justify-center gap-3">
          <button onClick={() => { router.invalidate(); reset(); }} className="px-6 py-3 text-xs tracking-[0.3em] uppercase border border-gold/40 text-gold hover:bg-gold hover:text-onyx transition-all">Retry</button>
          <a href="/" className="px-6 py-3 text-xs tracking-[0.3em] uppercase border border-border text-ivory hover:border-gold/40">Home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Rahil Mostafaee — Strategic Legal Counsel for Iranians in Dubai" },
      { name: "description", content: "Discreet, cross-border legal representation for high-value Iranian clients in Dubai. Residency, corporate, real estate, DIFC wills, international coordination." },
      { name: "author", content: "Rahil Mostafaee Legal" },
      { name: "theme-color", content: "#0e0d0b" },
      { property: "og:title", content: "Rahil Mostafaee — Strategic Legal Counsel" },
      { property: "og:description", content: "Cross-border legal protection for Iranians in Dubai." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1 pt-24">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
