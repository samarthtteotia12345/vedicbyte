"use client";

import { GrowthServiceCard } from "@/components/ui/GrowthServiceCard";
import { GTM_SERVICES } from "@/lib/constants";

export function GrowthServicesSection() {
  return (
    <section className="py-16 lg:py-20 mb-16 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 via-[#f0f8e8] to-neutral-50" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-display font-medium tracking-tight text-neutral-900">
            How we engineer growth
          </h2>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GTM_SERVICES.map((service, index) => (
            <GrowthServiceCard
              key={index}
              title={service.title}
              description={service.description}
              cta={service.cta}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
