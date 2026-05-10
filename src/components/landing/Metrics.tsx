const metrics = [
  { value: "140M+", label: "Patents indexed", sub: "USPTO · EPO · WIPO · KIPO · JPO" },
  { value: "98.4%", label: "Semantic recall@10", sub: "Benchmarked vs. expert-curated set" },
  { value: "<1.2s", label: "Median search latency", sub: "Hybrid retrieval + reranking" },
  { value: "12 yrs", label: "Citation graph depth", sub: "Forward + backward propagation" },
];

export function Metrics() {
  return (
    <section className="border-b border-border bg-surface-elevated">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4">
          {metrics.map((m) => (
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
