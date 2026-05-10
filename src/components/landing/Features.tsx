import {
  Search, Network, GitCompareArrows, LineChart, Building2, FileText, Sparkles, Shield,
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Semantic patent search",
    body: "Hybrid BM25 + vector retrieval with claim-level reranking. Search by natural language, claim text, or whole specification.",
  },
  {
    icon: GitCompareArrows,
    title: "Prior art & novelty analysis",
    body: "Claim-to-claim heatmaps, novelty risk scoring, and inventive step assessment — every signal traceable to source.",
  },
  {
    icon: Network,
    title: "Citation graph intelligence",
    body: "Navigate forward & backward citations, family relationships, and litigation links across global jurisdictions.",
  },
  {
    icon: LineChart,
    title: "Technology trend analysis",
    body: "Filing velocity, white-space mapping, and emerging-signal detection across IPC/CPC technology clusters.",
  },
  {
    icon: Building2,
    title: "Competitor monitoring",
    body: "Track assignee portfolios, new filings, and strategic shifts with weekly executive briefings.",
  },
  {
    icon: FileText,
    title: "Report builder & export",
    body: "Compose evidence-grade reports with chart blocks, claim diffs, and citations. One-click PDF & DOCX export.",
  },
  {
    icon: Sparkles,
    title: "Explainable AI insights",
    body: "Every AI summary cites the exact paragraph, claim, or figure. No black-box reasoning — only verifiable evidence.",
  },
  {
    icon: Shield,
    title: "Enterprise-grade security",
    body: "SOC 2 Type II, ISO 27001, customer-managed keys, SSO/SCIM, and full audit log for regulated environments.",
  },
];

export function Features() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-primary">
            Platform capabilities
          </div>
          <h2 className="mt-3 text-[34px] font-semibold tracking-tight text-ink">
            Built for patent teams who need <span className="text-gradient-primary">evidence, not opinion.</span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
            Every workflow — from infringement analysis to landscape strategy — operates on
            the same indexed corpus, citation graph, and AI evaluation pipeline.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group relative bg-surface-elevated p-6 transition-colors hover:bg-accent/40">
              <div className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-primary">
                <f.icon className="h-4 w-4" />
              </div>
              <h3 className="mt-5 text-[14.5px] font-semibold text-ink">{f.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
