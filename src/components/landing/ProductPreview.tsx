import { motion } from "framer-motion";
import {
  Search, Sparkles, ChevronRight, ShieldAlert, Activity,
} from "lucide-react";
import {
  Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid,
} from "recharts";
import { useLanguage } from "@/lib/i18n";

const trendData = [
  { y: "2017", filings: 1240 }, { y: "2018", filings: 1480 }, { y: "2019", filings: 1820 },
  { y: "2020", filings: 2110 }, { y: "2021", filings: 2680 }, { y: "2022", filings: 3210 },
  { y: "2023", filings: 4090 }, { y: "2024", filings: 5380 },
];

const results = [
  { id: "KR 10-2456789 B1", title: "이종 가속기 환경에서의 희소 MoE 라우팅 기법", assignee: "삼성전자(주)", date: "2024-03-12", score: 0.94, risk: "high", tag: "Technique", country: "KR" },
  { id: "US 11,482,931 B2", title: "Sparse mixture-of-experts routing for transformer inference", assignee: "Google LLC", date: "2023-11-08", score: 0.91, risk: "high", tag: "Technique", country: "US" },
  { id: "KR 10-2398012 B1", title: "추론 지연을 줄이기 위한 조건부 전문가 게이팅", assignee: "네이버클라우드(주)", date: "2023-06-21", score: 0.88, risk: "medium", tag: "Effect", country: "KR" },
  { id: "US 10,991,002 B1", title: "Dynamic expert gating with load-balancing loss", assignee: "Microsoft Corp.", date: "2022-10-04", score: 0.82, risk: "medium", tag: "Problem", country: "US" },
  { id: "KR 10-2287654 A", title: "이기종 MoE 시스템에서의 계층적 라우팅", assignee: "LG AI Research", date: "2022-04-18", score: 0.76, risk: "low", tag: "Technique", country: "KR" },
];

const riskStyle = (r: string) =>
  r === "high"
    ? "bg-danger/10 text-danger border-danger/20"
    : r === "medium"
    ? "bg-warning/10 text-warning border-warning/20"
    : "bg-success/10 text-success border-success/20";

export function ProductPreview() {
  const { t } = useLanguage();

  return (
    <section id="workspace" className="border-b border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-primary">
              {t.preview.eyebrow}
            </div>
            <h2 className="mt-3 text-[34px] font-semibold tracking-tight text-ink">
              {t.preview.title}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              {t.preview.body}
            </p>
            <ul className="mt-6 space-y-3 text-[13.5px] text-ink">
              {t.preview.bullets.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <ChevronRight className="mt-0.5 h-4 w-4 text-primary" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            <div className="overflow-hidden rounded-xl border border-border bg-surface-elevated shadow-elevated">
              {/* App chrome */}
              <div className="flex items-center justify-between border-b border-border bg-surface px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                </div>
                <div className="font-mono text-[11px] text-ink-muted">
                  patentlens.io / workspace / search
                </div>
                <div className="w-12" />
              </div>

              {/* Search bar */}
              <div className="flex items-center gap-3 border-b border-border px-5 py-3">
                <Search className="h-4 w-4 text-ink-soft" />
                <div className="flex-1 truncate font-mono text-[12.5px] text-ink">
                  sparse mixture of experts routing inference latency
                </div>
                <span className="rounded-sm border border-border bg-muted px-2 py-0.5 text-[10.5px] font-medium text-ink-soft">
                  semantic
                </span>
                <span className="rounded-sm border border-border bg-muted px-2 py-0.5 text-[10.5px] font-medium text-ink-soft">
                  CPC G06N3/04
                </span>
                <span className="rounded-sm border border-border bg-surface px-2 py-1 text-[11px] font-medium text-ink-muted">
                  {t.preview.sampleLabel}
                </span>
              </div>

              <div className="grid grid-cols-12">
                {/* Results */}
                <div className="col-span-7 border-r border-border">
                  <div className="flex items-center justify-between border-b border-border px-5 py-2 text-[11px] font-medium uppercase tracking-wider text-ink-muted">
                    <div>{t.preview.results}</div>
                    <div>{t.preview.reranked}</div>
                  </div>
                  <ul className="divide-y divide-border">
                    {results.map((r) => (
                      <li key={r.id} className="px-5 py-3.5 transition-colors hover:bg-muted/40">
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2">
                            <span className={`rounded-sm border px-1 py-0.5 font-mono text-[9.5px] font-semibold uppercase ${r.country === "KR" ? "border-primary/30 bg-primary/10 text-primary" : "border-border bg-muted text-ink-soft"}`}>
                              {r.country}
                            </span>
                            <span className="font-mono text-[11.5px] text-ink-soft">{r.id}</span>
                          </div>
                          <span className="font-mono text-[11px] text-primary">sim {r.score.toFixed(2)}</span>
                        </div>
                        <div className="mt-1 line-clamp-1 text-[13.5px] font-medium text-ink">
                          {r.title}
                        </div>
                        <div className="mt-1.5 flex items-center gap-2 text-[11.5px] text-ink-soft">
                          <span className="truncate">{r.assignee}</span>
                          <span>·</span>
                          <span>{r.date}</span>
                          <span className="rounded-sm bg-accent px-1.5 py-0.5 text-[10px] font-medium text-accent-foreground">
                            {r.tag}
                          </span>
                          <span className={`ml-auto rounded-sm border px-1.5 py-0.5 text-[10px] font-medium uppercase ${riskStyle(r.risk)}`}>
                            {r.risk === "high" ? "novelty risk" : r.risk === "medium" ? "overlap" : "low"}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: AI insight + trend */}
                <div className="col-span-5 bg-surface">
                  <div className="border-b border-border px-5 py-3">
                    <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-wider text-primary">
                      <Sparkles className="h-3.5 w-3.5" /> {t.preview.aiRelevance}
                    </div>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-ink">
                      {t.preview.aiBody}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {["Problem · 추론 지연", "Technique · MoE 라우팅", "Effect · throughput +", "IPC G06N 3/04", "KSIC J62"].map((t) => (
                        <span key={t} className="rounded-sm bg-accent px-1.5 py-0.5 text-[10.5px] font-medium text-accent-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-b border-border px-5 py-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-wider text-ink-muted">
                        <Activity className="h-3.5 w-3.5" /> {t.preview.filingTrend}
                      </div>
                      <div className="font-mono text-[10.5px] text-success">+33% YoY</div>
                    </div>
                    <div className="mt-2 h-[110px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={trendData} margin={{ top: 4, right: 4, left: -28, bottom: 0 }}>
                          <defs>
                            <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#4F6AF5" stopOpacity={0.35} />
                              <stop offset="100%" stopColor="#4F6AF5" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                          <CartesianGrid stroke="var(--color-grid)" strokeDasharray="2 4" vertical={false} />
                          <XAxis dataKey="y" tick={{ fontSize: 10, fill: "var(--color-ink-muted)" }} axisLine={false} tickLine={false} />
                          <YAxis tick={{ fontSize: 10, fill: "var(--color-ink-muted)" }} axisLine={false} tickLine={false} />
                          <Tooltip contentStyle={{ fontSize: 11, borderRadius: 6, border: "1px solid var(--color-border)" }} />
                          <Area type="monotone" dataKey="filings" stroke="#4F6AF5" strokeWidth={1.5} fill="url(#g)" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="flex items-center justify-between px-5 py-3 text-[11.5px]">
                    <span className="inline-flex items-center gap-1.5 text-ink-soft">
                      <ShieldAlert className="h-3.5 w-3.5 text-warning" />
                      {t.preview.riskDetected}
                    </span>
                    <span className="text-ink-muted">{t.preview.summaryLabel}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
