import { Scale, Microscope, ArrowUpRight } from "lucide-react";

const personas = [
  {
    icon: Scale,
    eyebrow: "For patent attorneys",
    title: "Build defensible prior-art positions in hours, not weeks.",
    points: [
      "Claim-to-claim novelty heatmaps with paragraph-level evidence",
      "Office-action response drafts grounded in cited references",
      "Family & litigation graph for every reference",
    ],
  },
  {
    icon: Microscope,
    eyebrow: "For R&D strategists",
    title: "See where technology is moving — and where the white-space lives.",
    points: [
      "Cluster-level filing velocity & emerging signal detection",
      "Competitor portfolio diffs and strategic shift alerts",
      "Investment-grade landscape briefings on demand",
    ],
  },
];

export function Personas() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {personas.map((p) => (
            <div
              key={p.eyebrow}
              className="group relative overflow-hidden rounded-xl border border-border bg-surface-elevated p-8 transition-shadow hover:shadow-elevated"
            >
              <div className="absolute right-6 top-6 opacity-0 transition-opacity group-hover:opacity-100">
                <ArrowUpRight className="h-4 w-4 text-ink-soft" />
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-navy text-white">
                <p.icon className="h-5 w-5" />
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
          ))}
        </div>
      </div>
    </section>
  );
}
