import Image from "next/image";
import { LOGO_MARQUEE } from "@/lib/constants";

export function LogoMarquee() {
  // Duplicate logos for infinite scroll effect
  const logos = [...LOGO_MARQUEE, ...LOGO_MARQUEE];

  return (
    <div className="w-full border-y border-neutral-200 bg-white py-10 overflow-hidden relative">
      {/* Fade gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

      <div className="flex w-max animate-marquee space-x-20 items-center">
        {logos.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="flex items-center justify-center h- opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={140}
              height={48}
              className="object-contain h-full w-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
