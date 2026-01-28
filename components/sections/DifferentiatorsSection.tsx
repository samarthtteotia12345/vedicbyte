"use client";

import { DifferentiatorCard } from "@/components/ui/DifferentiatorCard";
import { DIFFERENTIATORS } from "@/lib/constants";
import { Icon } from "@iconify/react";

export function DifferentiatorsSection() {
  return (
    <section className="pb-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center flex-shrink-0">
              <Icon icon="solar:star-bold" width={24} className="text-vedic-lime" />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-display font-medium tracking-tight text-neutral-900">
                Why Vedicbyte
              </h2>
              <p className="text-neutral-500 text-sm mt-2 max-w-md">
                We bring a unique combination of technology expertise and growth strategy to every engagement.
              </p>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {DIFFERENTIATORS.map((item, index) => (
            <DifferentiatorCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
