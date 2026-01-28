"use client";

import { Icon } from "@iconify/react";

interface GrowthServiceCardProps {
  title: string;
  description: string;
  cta: string;
  icon: string;
}

export function GrowthServiceCard({
  title,
  description,
  cta,
  icon,
}: GrowthServiceCardProps) {
  return (
    <div className="bg-white rounded-[24px] p-6 lg:p-8 flex flex-col h-full border border-neutral-200 hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-between items-start mb-4 lg:mb-6">
        <h3 className="text-lg lg:text-xl font-display font-semibold text-neutral-900 leading-tight max-w-[70%]">
          {title}
        </h3>
        <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-neutral-900 flex items-center justify-center flex-shrink-0">
          <Icon icon={icon} width={24} height={24} className="text-vedic-lime" />
        </div>
      </div>

      <p className="text-neutral-500 text-sm leading-relaxed  flex-grow">
        {description}
      </p>

     
    </div>
  );
}
