import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, Lock } from "lucide-react";
import { PatentGraph } from "./PatentGraph";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-navy text-white">
      <div className="absolute inset-0 bg-grid-navy opacity-60" />
      <div className="absolute -left-40 top-0 h-[480px] w-[480px] rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -right-32 bottom-[-120px] h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-24 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] font-medium text-white/80"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            AI-native patent intelligence — now in private beta
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 text-[44px] font-semibold leading-[1.05] tracking-tight text-white md:text-[58px]"
          >
            The strategic operating
            <br />
            system for{" "}
            <span className="bg-gradient-to-r from-white to-[#A6B6FF] bg-clip-text text-transparent">
              patent intelligence.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-white/70"
          >
            PatentLens unifies semantic search, prior art analysis, and competitive
            landscape mapping into a single AI workspace — built for IP attorneys
            and R&D strategists who need evidence, not summaries.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-[14px] font-medium text-primary-foreground shadow-elevated transition hover:brightness-110"
            >
              Request enterprise demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 text-[14px] font-medium text-white/90 transition hover:bg-white/10"
            >
              See live product tour
            </a>
          </motion.div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-white/55">
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" /> SOC 2 Type II</span>
            <span className="inline-flex items-center gap-1.5"><Lock className="h-3.5 w-3.5" /> ISO 27001</span>
            <span>140M+ global patents indexed</span>
            <span>EPO · USPTO · KIPO · JPO · WIPO</span>
          </div>
        </div>

        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative h-[420px] rounded-xl border border-white/10 bg-white/[0.03] p-1 shadow-elevated backdrop-blur"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
              </div>
              <div className="font-mono text-[10.5px] text-white/40">
                knowledge-graph · KR 10-2456789
              </div>
              <div className="rounded-sm bg-primary/20 px-1.5 py-0.5 font-mono text-[10px] text-primary">
                LIVE
              </div>
            </div>
            <PatentGraph />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
