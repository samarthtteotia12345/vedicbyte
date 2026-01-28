import { Icon } from "@iconify/react";
import { LOGO_MARQUEE } from "@/lib/constants";

export function LogoMarquee() {
  // Duplicate logos for infinite scroll effect
  const logos = [...LOGO_MARQUEE, ...LOGO_MARQUEE];

  return (
    <div className="w-full border-y border-neutral-200 bg-white py-10 overflow-hidden relative">
      {/* Fade gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

      <div className="flex w-max animate-marquee space-x-24 items-center opacity-50 grayscale">
        {logos.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="flex items-center gap-2 text-xl font-display font-bold text-neutral-800"
          >
            <Icon icon={logo.icon} className="text-neutral-400" />
            {logo.name}
          </div>
        ))}
      </div>
    </div>
  );
}
