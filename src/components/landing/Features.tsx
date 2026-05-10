import {
  Search, Network, GitCompareArrows, LineChart, Building2, FileText, Sparkles, Shield,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const featureIcons = [Search, GitCompareArrows, Network, LineChart, Building2, FileText, Sparkles, Shield];

export function Features() {
  const { t } = useLanguage();

  return (
    <section id="features" className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-primary">
            {t.features.eyebrow}
          </div>
          <h2 className="mt-3 text-[34px] font-semibold tracking-tight text-ink">
            {t.features.title}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
            {t.features.body}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {t.features.items.map((f, index) => {
            const Icon = featureIcons[index];

            return (
            <div key={f.title} className="group relative bg-surface-elevated p-6 transition-colors hover:bg-accent/40">
              <div className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-primary">
                <Icon className="h-4 w-4" />
              </div>
              <h3 className="mt-5 text-[14.5px] font-semibold text-ink">{f.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">{f.body}</p>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
