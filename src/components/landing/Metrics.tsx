import { useLanguage } from "@/lib/i18n";

export function Metrics() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-border bg-surface-elevated">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4">
          {t.metrics.map((m) => (
            <div key={m.label} className="bg-surface-elevated p-6">
              <div className="text-[28px] font-semibold tracking-tight text-ink">{m.value}</div>
              <div className="mt-1 text-[13px] font-medium text-ink">{m.label}</div>
              <div className="mt-1 text-[12px] text-ink-soft">{m.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
