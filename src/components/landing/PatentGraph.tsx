import { motion } from "framer-motion";

/**
 * PatentGraph — visualizes the PatentLens KG ontology fragment
 * around a single Patent: Problem / Technique / Effect / IPC / Industry / Citations.
 * Mirrors the real schema (onto:Patent EMPLOYS Technique, Technique SOLVES Problem,
 * Patent ACHIEVES Effect, Patent CLASSIFIED_BY_IPC → MAPPED_TO_KSIC,
 * Patent CITES Patent, Patent RELATED_TO Patent).
 */

type Kind = "patent" | "problem" | "technique" | "effect" | "ipc" | "industry" | "cite" | "related";
type Node = { id: string; x: number; y: number; r: number; label?: string; kind: Kind };

const nodes: Node[] = [
  { id: "core", x: 300, y: 190, r: 28, label: "KR 10-2456789", kind: "patent" },

  { id: "p1", x: 110, y: 110, r: 11, label: "Problem", kind: "problem" },
  { id: "t1", x: 175, y: 220, r: 12, label: "Technique", kind: "technique" },
  { id: "e1", x: 470, y: 110, r: 11, label: "Effect", kind: "effect" },

  { id: "ipc", x: 460, y: 270, r: 10, label: "G06N 3/04", kind: "ipc" },
  { id: "ksic", x: 540, y: 330, r: 10, label: "KSIC J62", kind: "industry" },

  { id: "c1", x: 90, y: 300, r: 9, label: "US 10,991,002", kind: "cite" },
  { id: "c2", x: 220, y: 340, r: 8, label: "EP 3,591,201", kind: "cite" },

  { id: "r1", x: 400, y: 50, r: 9, label: "RELATED · 0.92", kind: "related" },
  { id: "r2", x: 530, y: 180, r: 8, label: "RELATED · 0.88", kind: "related" },
];

type EdgeStyle = "solves" | "employs" | "achieves" | "classified" | "ksic" | "cites" | "related";
const edges: { a: string; b: string; type: EdgeStyle }[] = [
  { a: "core", b: "t1", type: "employs" },
  { a: "t1",   b: "p1", type: "solves" },
  { a: "core", b: "e1", type: "achieves" },
  { a: "core", b: "ipc", type: "classified" },
  { a: "ipc",  b: "ksic", type: "ksic" },
  { a: "core", b: "c1", type: "cites" },
  { a: "core", b: "c2", type: "cites" },
  { a: "core", b: "r1", type: "related" },
  { a: "core", b: "r2", type: "related" },
];

const fillFor = (k: Kind) => {
  switch (k) {
    case "patent":    return "#4F6AF5";
    case "problem":   return "#F59E0B";
    case "technique": return "#A78BFA";
    case "effect":    return "#10B981";
    case "ipc":       return "#94A3B8";
    case "industry":  return "#64748B";
    case "cite":      return "#CBD5E1";
    case "related":   return "#7DD3FC";
  }
};

const strokeFor = (t: EdgeStyle) =>
  t === "related"
    ? "rgba(125,211,252,0.6)"
    : t === "cites"
    ? "rgba(203,213,225,0.55)"
    : t === "classified" || t === "ksic"
    ? "rgba(148,163,184,0.55)"
    : t === "achieves"
    ? "rgba(16,185,129,0.7)"
    : t === "employs"
    ? "rgba(167,139,250,0.75)"
    : "rgba(245,158,11,0.7)";

const labelFor = (t: EdgeStyle) =>
  ({ solves: "SOLVES", employs: "EMPLOYS", achieves: "ACHIEVES", classified: "CLASSIFIED_BY_IPC", ksic: "MAPPED_TO_KSIC", cites: "CITES", related: "RELATED_TO" }[t]);

export function PatentGraph() {
  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));
  return (
    <div className="relative h-full w-full">
      <svg viewBox="0 0 600 380" className="h-full w-full">
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4F6AF5" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#4F6AF5" stopOpacity="0" />
          </radialGradient>
          <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="600" height="380" fill="url(#grid)" />
        <circle cx="300" cy="190" r="170" fill="url(#glow)" />

        {edges.map((e, i) => {
          const A = byId[e.a], B = byId[e.b];
          const mx = (A.x + B.x) / 2;
          const my = (A.y + B.y) / 2;
          return (
            <g key={i}>
              <motion.line
                x1={A.x} y1={A.y} x2={B.x} y2={B.y}
                stroke={strokeFor(e.type)}
                strokeWidth={e.type === "related" ? 1.2 : 1}
                strokeDasharray={e.type === "related" || e.type === "cites" ? "3 3" : undefined}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.0, delay: 0.05 * i }}
              />
              <text
                x={mx} y={my - 3}
                fontSize="8"
                fontFamily="var(--font-mono)"
                fill="rgba(226,232,240,0.55)"
                textAnchor="middle"
              >
                {labelFor(e.type)}
              </text>
            </g>
          );
        })}

        {nodes.map((n, i) => (
          <g key={n.id}>
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill={fillFor(n.kind)}
              fillOpacity={n.kind === "patent" ? 0.95 : 0.85}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.05 }}
              style={{ transformOrigin: `${n.x}px ${n.y}px` }}
            />
            {n.kind === "patent" && (
              <motion.circle
                cx={n.x} cy={n.y} r={n.r}
                fill="none"
                stroke="#4F6AF5"
                strokeOpacity="0.5"
                initial={{ r: n.r }}
                animate={{ r: [n.r, n.r + 18, n.r], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2.6, repeat: Infinity }}
              />
            )}
            {n.label && (
              <text
                x={n.x + n.r + 6}
                y={n.y + 4}
                fontSize="10"
                fontFamily="var(--font-mono)"
                fill="rgba(226,232,240,0.85)"
              >
                {n.label}
              </text>
            )}
          </g>
        ))}
      </svg>

      {/* Legend */}
      <div className="pointer-events-none absolute bottom-2 left-3 right-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[10px] text-white/55">
        {[
          ["#4F6AF5", "Patent"],
          ["#F59E0B", "Problem"],
          ["#A78BFA", "Technique"],
          ["#10B981", "Effect"],
          ["#94A3B8", "IPC / KSIC"],
          ["#7DD3FC", "RELATED_TO (bge-m3)"],
        ].map(([c, l]) => (
          <span key={l} className="inline-flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: c }} />
            {l}
          </span>
        ))}
      </div>
    </div>
  );
}
