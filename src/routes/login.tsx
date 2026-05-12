import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign in — Rahil Mostafaee" }] }),
  component: LoginPage,
});

function LoginPage() {
  const { t, dir } = useI18n();
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      setError(error.message);
      return;
    }
    nav({ to: "/booking" });
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6" dir={dir}>
      <div className="w-full max-w-md glass rounded-2xl p-8 reveal">
        <h1 className="font-display text-3xl text-ivory text-center">{t("auth.login.title")}</h1>
        <div className="gold-divider w-16 mx-auto my-6" />
        <form onSubmit={onSubmit} className="space-y-4">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("auth.email")}
            className="w-full bg-charcoal/50 border border-border rounded-md px-4 py-3 text-ivory placeholder:text-muted-foreground focus:outline-none focus:border-gold/40"
          />
          <input
            type="password"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={t("auth.password")}
            className="w-full bg-charcoal/50 border border-border rounded-md px-4 py-3 text-ivory placeholder:text-muted-foreground focus:outline-none focus:border-gold/40"
          />
          {error && <div className="text-sm text-destructive">{error}</div>}
          <button
            disabled={loading}
            className="w-full py-3 text-xs tracking-[0.3em] uppercase bg-gold text-onyx hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? "…" : t("auth.submit_login")}
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          {t("auth.no_account")}{" "}
          <Link to="/signup" className="text-gold hover:underline">
            {t("auth.signup_link")}
          </Link>
        </p>
      </div>
    </div>
  );
}
