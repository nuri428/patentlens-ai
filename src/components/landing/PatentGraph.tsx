import { motion } from "framer-motion";

type Node = { id: string; x: number; y: number; r: number; label?: string; kind: "core" | "ref" | "sim" };

const nodes: Node[] = [
  { id: "core", x: 300, y: 180, r: 26, label: "US 11,482,931", kind: "core" },
  { id: "a", x: 120, y: 90, r: 12, label: "EP 3,591,201", kind: "ref" },
  { id: "b", x: 480, y: 80, r: 14, label: "JP 6,812,447", kind: "ref" },
  { id: "c", x: 90, y: 260, r: 10, label: "KR 10-2034", kind: "sim" },
  { id: "d", x: 530, y: 270, r: 16, label: "US 10,991,002", kind: "sim" },
  { id: "e", x: 220, y: 320, r: 9, kind: "ref" },
  { id: "f", x: 400, y: 330, r: 11, kind: "sim" },
  { id: "g", x: 220, y: 40, r: 8, kind: "sim" },
  { id: "h", x: 380, y: 30, r: 7, kind: "ref" },
];

const edges: [string, string][] = [
  ["core", "a"], ["core", "b"], ["core", "c"], ["core", "d"],
  ["core", "e"], ["core", "f"], ["core", "g"], ["core", "h"],
  ["a", "g"], ["b", "h"], ["d", "f"], ["c", "e"],
];

const colorFor = (k: Node["kind"]) =>
  k === "core" ? "var(--color-primary)" : k === "ref" ? "#94A3B8" : "#10B981";

export function PatentGraph() {
  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));
  return (
    <div className="relative h-full w-full">
      <svg viewBox="0 0 600 380" className="h-full w-full">
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4F6AF5" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#4F6AF5" stopOpacity="0" />
          </radialGradient>
          <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="600" height="380" fill="url(#grid)" />
        <circle cx="300" cy="180" r="160" fill="url(#glow)" />

        {edges.map(([a, b], i) => {
          const A = byId[a], B = byId[b];
          return (
            <motion.line
              key={i}
              x1={A.x} y1={A.y} x2={B.x} y2={B.y}
              stroke="rgba(148,163,184,0.35)"
              strokeWidth="1"
              strokeDasharray="3 3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.05 * i }}
            />
          );
        })}

        {nodes.map((n, i) => (
          <g key={n.id}>
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill={colorFor(n.kind)}
              fillOpacity={n.kind === "core" ? 0.9 : 0.85}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
              style={{ transformOrigin: `${n.x}px ${n.y}px` }}
            />
            {n.kind === "core" && (
              <motion.circle
                cx={n.x} cy={n.y} r={n.r}
                fill="none"
                stroke="var(--color-primary)"
                strokeOpacity="0.5"
                initial={{ r: n.r }}
                animate={{ r: [n.r, n.r + 18, n.r], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2.4, repeat: Infinity }}
              />
            )}
            {n.label && (
              <text
                x={n.x + n.r + 8}
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
    </div>
  );
}
