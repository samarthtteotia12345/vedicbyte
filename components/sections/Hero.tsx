"use client";

import { Icon } from "@iconify/react";
import { FloatingCard } from "@/components/ui/FloatingCard";
import { HERO_CONTENT, HERO_CARDS } from "@/lib/constants";

export function Hero() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 pt-6 pb-6 md:pt-12 lg:pb-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-7 space-y-8 animate-fade-up">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 bg-white/50 backdrop-blur-sm text-xs font-medium text-neutral-600">
          <span className="w-2 h-2 rounded-full bg-vedic-lime shadow-[0_0_10px_#D4FF33]" />
          {HERO_CONTENT.badge}
        </div>

        {/* Headline */}
        <h1 className="md:text-7xl text-5xl  font-display font-medium tracking-tighter text-neutral-900 leading-[1] lg:leading-[0.95]">
          {HERO_CONTENT.headline.line1} <br />
          <span className="text-neutral-400">{HERO_CONTENT.headline.line2}</span>{" "}
          <br />
          {HERO_CONTENT.headline.line3}
        </h1>

        <p className="text-lg lg:text-xl text-neutral-500 max-w-2xl font-light leading-relaxed">
          {HERO_CONTENT.description}
        </p>
      </div>

      {/* Hero Visuals */}
      <div className="lg:col-span-5 relative h-full min-h-[400px] lg:min-h-[600px] w-full flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-tr from-vedic-lime/10 to-transparent rounded-full blur-[80px] opacity-60" />

        {/* Floating Cards */}
        <div className="relative w-full max-w-md space-y-5">
          {HERO_CARDS.map((card, index) => (
            <FloatingCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              status={card.metric?.label === "Conversion Rate" ? "Real-time" : card.flow ? "0.02s latency" : "Active"}
              statusColor={index === 0 ? "green" : "neutral"}
              bgColor={card.bgColor}
              iconColor={card.iconColor}
              borderColor={card.borderColor}
              metric={card.metric}
              flow={card.flow}
              delay={index * 1.5}
              translateX={index === 0 ? "translate-x-4" : index === 1 ? "-translate-x-4" : "translate-x-2"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
