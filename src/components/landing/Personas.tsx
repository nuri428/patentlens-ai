import { Scale, Microscope, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const personaIcons = [Scale, Microscope];

export function Personas() {
  const { t } = useLanguage();

  return (
    <section id="personas" className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {t.personas.map((p, index) => {
            const Icon = personaIcons[index];

            return (
            <div
              key={p.eyebrow}
              className="group relative overflow-hidden rounded-xl border border-border bg-surface-elevated p-8 transition-shadow hover:shadow-elevated"
            >
              <div className="absolute right-6 top-6 opacity-0 transition-opacity group-hover:opacity-100">
                <ArrowUpRight className="h-4 w-4 text-ink-soft" />
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-navy text-white">
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-5 text-[11px] font-semibold uppercase tracking-wider text-primary">
                {p.eyebrow}
              </div>
              <h3 className="mt-2 text-[22px] font-semibold leading-snug tracking-tight text-ink">
                {p.title}
              </h3>
              <ul className="mt-5 space-y-2.5">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-[13.5px] text-ink-soft">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
