import { useLanguage } from "@/lib/i18n";

export function CTA() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-grid-navy opacity-50" />
      <div className="absolute -left-24 top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full bg-primary/15 blur-3xl" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-20 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <h2 className="text-[36px] font-semibold leading-tight tracking-tight">
            {t.cta.title}
          </h2>
          <p className="mt-4 text-[15px] text-white/70">
            {t.cta.body}
          </p>
        </div>
      </div>
    </section>
  );
}
