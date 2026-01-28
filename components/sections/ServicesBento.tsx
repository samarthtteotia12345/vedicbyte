"use client";

import { ServiceCard } from "@/components/ui/ServiceCard";
import { SERVICES } from "@/lib/constants";

export function ServicesBento() {
  return (
    <section id="services" className="max-w-[1400px] mx-auto px-6 mb-24">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <h2 className="text-4xl lg:text-5xl font-display font-medium tracking-tight text-neutral-900 max-w-xl">
          Holistic Digital <br />
          Engineering
        </h2>
        <p className="text-neutral-500 max-w-sm text-sm text-right md:text-left">
          From strategy to execution, we optimize every layer of your go-to-market operations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(350px,auto)]">
        {SERVICES.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            icon={service.icon}
            variant={service.variant}
            size={service.size}
            codeBlock={service.codeBlock}
            visual={service.visual}
            chart={service.chart}
          />
        ))}
      </div>
    </section>
  );
}
