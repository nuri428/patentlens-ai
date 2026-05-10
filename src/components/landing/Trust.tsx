import { useLanguage } from "@/lib/i18n";

export function Trust() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {t.trust.slots.map((slot) => (
            <div
              key={slot}
              aria-hidden="true"
              className="h-20 rounded-md border border-dashed border-border bg-surface-elevated/70"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
