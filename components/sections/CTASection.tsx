import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/Button";
import { CTA_CONTENT } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 mb-12">
      <div className="bg-vedic-lime rounded-[32px] p-8 lg:p-20 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-6xl font-display font-medium tracking-tight text-neutral-900 mb-8 leading-tight">
            {CTA_CONTENT.headline.split(" ").slice(0, 3).join(" ")}
            <br />
            {CTA_CONTENT.headline.split(" ").slice(3).join(" ")}
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-neutral-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-neutral-800 transition-transform hover:scale-105 shadow-xl">
              {CTA_CONTENT.primaryCTA}
            </button>
            <button className="px-8 py-4 rounded-full font-semibold border border-neutral-900/20 text-neutral-900 hover:bg-neutral-900/5 transition-colors">
              {CTA_CONTENT.secondaryCTA}
            </button>
          </div>
        </div>
        {/* Decorative Background */}
        <Icon
          icon="solar:code-square-linear"
          className="absolute -bottom-12 -right-12 text-neutral-900 opacity-5"
          width={200}
          height={200}
        />
      </div>
    </section>
  );
}
