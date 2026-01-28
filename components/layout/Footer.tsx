import { Icon } from "@iconify/react";
import { FOOTER } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="max-w-[1400px] mx-auto px-6">
      <div className="border-t border-neutral-200 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-neutral-900 text-vedic-lime rounded flex items-center justify-center">
            <Icon icon="solar:star-bold" width={14} />
          </div>
          <span className="font-display font-bold text-lg">Vedicbyte</span>
        </div>
        <p className="text-sm text-neutral-500">{FOOTER.copyright}</p>
      </div>
    </footer>
  );
}
