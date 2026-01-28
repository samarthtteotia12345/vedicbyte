"use client";

import { Icon } from "@iconify/react";

interface DifferentiatorCardProps {
  icon: string;
  title: string;
  description: string;
}

export function DifferentiatorCard({ icon, title, description }: DifferentiatorCardProps) {
  return (
    <div className="bg-neutral-900 rounded-[24px] p-6 lg:p-8 flex flex-col items-center justify-center text-center hover:bg-neutral-800 transition-colors duration-300 border border-neutral-800">
      <div className="mb-4">
        <Icon
          icon={icon}
          width={48}
          height={48}
          className="text-vedic-lime"
        />
      </div>
      <h3 className="text-white text-base lg:text-lg font-display font-medium leading-tight mb-2">
        {title}
      </h3>
      <p className="text-neutral-400 text-xs lg:text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
