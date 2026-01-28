import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import { PAIN_POINTS } from "@/lib/constants";

export function PainPoints() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 py-20 lg:py-28">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl lg:text-4xl font-display font-medium tracking-tight text-neutral-900 mb-4">
          Is your marketing <span className="text-neutral-400">actually working?</span>
        </h2>
        <p className="text-neutral-500">
          Most brands struggle with the same challenges. Here's what's holding you back.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {PAIN_POINTS.map((point) => (
          <div
            key={point.title}
            className="p-8 rounded-2xl bg-neutral-50 border border-neutral-100 hover:shadow-lg transition-shadow duration-300 group"
          >
            <div
              className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform",
                point.bgColor,
                point.iconColor
              )}
            >
              <Icon icon={point.icon} width={24} />
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
              {point.title}
            </h3>
            <p className="text-sm text-neutral-500 leading-relaxed">
              {point.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
