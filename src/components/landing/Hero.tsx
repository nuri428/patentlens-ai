import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { PatentGraph } from "./PatentGraph";

export function Hero() {
  const { t } = useLanguage();

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
            {t.hero.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 text-[44px] font-semibold leading-[1.05] tracking-tight text-white md:text-[58px]"
          >
            {t.hero.titleTop}
            <br />
            <span className="bg-gradient-to-r from-white to-[#A6B6FF] bg-clip-text text-transparent">
              {t.hero.titleBottom}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-white/70"
          >
            {t.hero.body}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-9 max-w-xl rounded-md border border-white/10 bg-white/5 px-4 py-3 text-[13.5px] leading-relaxed text-white/75"
          >
            {t.hero.note}
          </motion.p>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-white/55">
            <span>{t.hero.patents}</span>
            <span>{t.hero.offices}</span>
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
