import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { adminListBookings, adminUpdateStatus, checkIsAdmin } from "@/lib/admin.functions";
import { useAuth } from "@/lib/use-auth";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Practice Console" }] }),
  component: AdminPage,
});

function AdminPage() {
  const { t, lang, dir } = useI18n();
  const { user, loading } = useAuth();
  const isAdminFn = useServerFn(checkIsAdmin);
  const listFn = useServerFn(adminListBookings);
  const updFn = useServerFn(adminUpdateStatus);
  const qc = useQueryClient();

  const { data: adminCheck } = useQuery({
    queryKey: ["isAdmin", user?.id],
    queryFn: () => isAdminFn({ data: undefined as any }),
    enabled: !!user,
  });

  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["adminBookings"],
    queryFn: () => listFn({ data: undefined as any }),
    enabled: !!adminCheck?.isAdmin,
  });

  const mut = useMutation({
    mutationFn: (vars: { bookingId: string; status: "confirmed" | "cancelled" | "completed" }) =>
      updFn({ data: vars }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["adminBookings"] }),
  });

  if (loading) return <div className="p-12 text-muted-foreground">…</div>;
  if (!user) return <div className="p-12 text-center text-muted-foreground">{t("admin.no_access")}</div>;
  if (adminCheck && !adminCheck.isAdmin)
    return <div className="p-12 text-center text-muted-foreground">{t("admin.no_access")}</div>;

  return (
    <div className="max-w-7xl mx-auto px-6 py-16" dir={dir}>
      <h1 className="font-display text-4xl text-ivory mb-2">{t("admin.title")}</h1>
      <div className="gold-divider w-24 mb-10" />
      <h2 className="text-xs tracking-[0.3em] uppercase text-gold mb-5">{t("admin.bookings")}</h2>
      {isLoading ? (
        <div className="text-muted-foreground">…</div>
      ) : (
        <div className="overflow-x-auto border border-border rounded-xl">
          <table className="w-full text-sm">
            <thead className="bg-charcoal/60 text-muted-foreground text-[11px] tracking-[0.2em] uppercase">
              <tr>
                <th className="text-left p-3">{t("admin.client")}</th>
                <th className="text-left p-3">{t("admin.service")}</th>
                <th className="text-left p-3">{t("admin.when")}</th>
                <th className="text-left p-3">{t("admin.status")}</th>
                <th className="text-left p-3">{t("admin.payment")}</th>
                <th className="text-right p-3">{t("admin.actions")}</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b: any) => (
                <tr key={b.id} className="border-t border-border">
                  <td className="p-3 text-ivory">
                    <div>{b.guest_name ?? "—"}</div>
                    <div className="text-xs text-muted-foreground">{b.guest_email}</div>
                    <div className="text-xs text-muted-foreground">{b.guest_phone}</div>
                  </td>
                  <td className="p-3 text-ivory">
                    {lang === "fa" ? b.services?.name_fa : b.services?.name_en}
                    <div className="text-xs text-gold">{b.amount_aed.toLocaleString()} AED</div>
                  </td>
                  <td className="p-3 text-ivory whitespace-nowrap">
                    {new Date(b.start_at).toLocaleString(lang === "fa" ? "fa-IR" : "en-GB", { timeZone: "Asia/Dubai" })}
                  </td>
                  <td className="p-3"><span className="text-xs px-2 py-1 rounded border border-border">{b.status}</span></td>
                  <td className="p-3"><span className={`text-xs px-2 py-1 rounded ${b.payment_status === "paid" ? "bg-gold/20 text-gold" : "bg-charcoal text-muted-foreground"}`}>{b.payment_status}</span></td>
                  <td className="p-3 text-right space-x-2">
                    {b.status !== "confirmed" && (
                      <button onClick={() => mut.mutate({ bookingId: b.id, status: "confirmed" })} className="text-xs text-gold hover:underline">
                        {t("admin.confirm")}
                      </button>
                    )}
                    {b.status !== "completed" && (
                      <button onClick={() => mut.mutate({ bookingId: b.id, status: "completed" })} className="text-xs text-muted-foreground hover:text-gold">
                        {t("admin.complete")}
                      </button>
                    )}
                    {b.status !== "cancelled" && (
                      <button onClick={() => mut.mutate({ bookingId: b.id, status: "cancelled" })} className="text-xs text-destructive hover:underline">
                        {t("admin.cancel")}
                      </button>
                    )}
                  </td>
                </tr>
              ))}
              {bookings.length === 0 && (
                <tr><td colSpan={6} className="p-8 text-center text-muted-foreground">No bookings yet.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
