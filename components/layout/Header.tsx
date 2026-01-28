"use client";

import { Icon } from "@iconify/react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-neutral-200/60">
      <div className="max-w-[1400px] mx-auto px-6 h-16 lg:h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-neutral-900 text-vedic-lime rounded-lg flex items-center justify-center">
            <Icon icon="solar:star-bold" width={20} />
          </div>
          <span className="text-xl font-display font-semibold tracking-tight text-neutral-900">
            Vedic<span className="text-neutral-500">byte</span>
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex gap-8 items-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
