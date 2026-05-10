import { Database, Network, Layers3, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const entities = [
  { label: "Patent", note: "KR · US · FamilyStub", color: "bg-primary/15 text-primary border-primary/25" },
  { label: "Problem", note: "LLM-extracted", color: "bg-warning/10 text-warning border-warning/25" },
  { label: "Technique", note: "⊆ Solution · EMPLOYS", color: "bg-[#A78BFA]/15 text-[#7C5CE0] border-[#A78BFA]/30" },
  { label: "Effect", note: "ACHIEVES · PRODUCES", color: "bg-success/10 text-success border-success/25" },
  { label: "IPC / CPC", note: "Hierarchy · CHILD_OF*", color: "bg-muted text-ink-soft border-border" },
  { label: "Industry (KSIC)", note: "MAPPED_TO_KSIC", color: "bg-muted text-ink-soft border-border" },
  { label: "Corporation", note: "SAME_AS (KR↔US)", color: "bg-muted text-ink-soft border-border" },
  { label: "Inventor", note: "INVENTED_BY", color: "bg-muted text-ink-soft border-border" },
];

const relations = [
  "EMPLOYS", "SOLVES", "ACHIEVES", "PRODUCES",
  "CITES", "FAMILY_OF", "RELATED_TO", "CLASSIFIED_BY_IPC",
  "MAPPED_TO_KSIC", "INVENTED_BY", "HAS_APPLICANT", "FUNDED_BY",
];

const statIcons = [Database, Network, Layers3, Sparkles];

export function KnowledgeGraph() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-primary">
              {t.knowledge.eyebrow}
            </div>
            <h2 className="mt-3 text-[34px] font-semibold tracking-tight text-ink">
              {t.knowledge.title}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              {t.knowledge.body}
            </p>

            <ul className="mt-8 space-y-4">
              {t.knowledge.stats.map((s, index) => {
                const Icon = statIcons[index];

                return (
                <li key={s.k} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-md border border-border bg-surface-elevated text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[13.5px] font-medium text-ink">{s.k}</div>
                    <div className="text-[12.5px] text-ink-soft">{s.v}</div>
                  </div>
                </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-xl border border-border bg-surface-elevated p-5 shadow-card">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <div className="font-mono text-[11px] text-ink-soft">
                  schema.ttl · http://greennuri.info/onto#
                </div>
                <span className="rounded-sm bg-success/10 px-1.5 py-0.5 font-mono text-[10px] text-success">
                  v1.0.0
                </span>
              </div>

              <div className="mt-5">
                <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
                  {t.knowledge.entities}
                </div>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {entities.map((e) => (
                    <div
                      key={e.label}
                      className={`rounded-md border px-2.5 py-2 ${e.color}`}
                    >
                      <div className="text-[12px] font-semibold leading-tight">{e.label}</div>
                      <div className="mt-0.5 font-mono text-[10px] opacity-80">{e.note}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
                  {t.knowledge.relations}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {relations.map((r) => (
                    <span
                      key={r}
                      className="rounded-sm border border-border bg-surface px-2 py-0.5 font-mono text-[10.5px] text-ink-soft"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-md border border-border bg-surface px-4 py-3 font-mono text-[11.5px] leading-relaxed text-ink-soft">
                <span className="text-primary">(pat:Patent)</span>
                -[:EMPLOYS]-&gt;<span className="text-[#7C5CE0]">(t:Technique)</span>
                -[:SOLVES]-&gt;<span className="text-warning">(p:Problem)</span>
                <br />
                <span className="text-primary">(pat:Patent)</span>
                -[:CLASSIFIED_BY_IPC]-&gt;(:IPC)-[:MAPPED_TO_KSIC]-&gt;(:Industry)
                <br />
                <span className="text-primary">(pat:Patent)</span>
                -[:RELATED_TO]-&gt;<span className="text-[#0EA5E9]">(sim:Patent)</span>
                <span className="ml-2 opacity-60">// bge-m3 kNN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
