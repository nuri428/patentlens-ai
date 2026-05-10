import { ScanSearch } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const footerTargets = ["#features", "#workspace", "#personas"] as const;

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-navy text-white">
                <ScanSearch className="h-4 w-4" />
              </div>
              <span className="text-[15px] font-semibold tracking-tight">PatentLens</span>
            </div>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-ink-soft">
              {t.footer.body}
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-x-8 gap-y-3 text-[13px] text-ink-soft sm:grid-cols-4">
            {t.footer.links.map((label, index) => (
              <a key={label} href={footerTargets[index]} className="transition-colors hover:text-ink">
                {label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-[12px] text-ink-muted md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} PatentLens, Inc. {t.footer.rights}</div>
          <div className="flex gap-5">
            {t.footer.legal.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
