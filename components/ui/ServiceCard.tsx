"use client";

import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { GlowCard } from "./GlowCard";

interface CodeLine {
  text: string;
  color: "blue" | "orange" | "lime" | "muted" | "green";
  indent?: number;
  pulse?: boolean;
}

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  variant: "dark" | "light" | "accent" | "outline";
  size: "tall" | "wide" | "normal";
  codeBlock?: {
    lines: CodeLine[];
  };
  visual?: string;
  chart?: boolean;
}

const colorMap = {
  blue: "text-blue-400",
  orange: "text-orange-300",
  lime: "text-[#D4FF33]",
  muted: "text-neutral-600",
  green: "text-green-300",
};

export function ServiceCard({
  title,
  description,
  icon,
  variant,
  size,
  codeBlock,
  visual,
  chart,
}: ServiceCardProps) {
  const sizeClasses = {
    tall: "lg:row-span-2",
    wide: "lg:col-span-2",
    normal: "",
  };

  const variantClasses = {
    dark: "bg-neutral-900 text-white",
    light: "bg-[#f0f0f0] border border-neutral-200",
    accent: "bg-vedic-lime",
    outline: "bg-white border border-neutral-200 hover:shadow-xl transition-all duration-300",
  };

  const iconBgClasses = {
    dark: "bg-neutral-800 border border-neutral-700 text-vedic-lime",
    light: "bg-white shadow-sm text-neutral-900",
    accent: "bg-neutral-900/5 text-neutral-900",
    outline: "bg-neutral-50 border border-neutral-100 text-neutral-900",
  };

  const textClasses = {
    dark: "text-neutral-400",
    light: "text-neutral-600",
    accent: "text-neutral-800",
    outline: "text-neutral-500",
  };

  return (
    <GlowCard
      className={cn(
        "rounded-[32px] p-8 lg:p-10 flex flex-col relative overflow-hidden group",
        sizeClasses[size],
        variantClasses[variant],
        variant === "accent" && "hover:-translate-y-1 duration-300"
      )}
    >
      <div className="relative z-10 flex flex-col h-full">
        <div
          className={cn(
            "w-14 h-14 rounded-2xl flex items-center justify-center mb-6",
            iconBgClasses[variant]
          )}
        >
          <Icon icon={icon} width={28} />
        </div>
        <h3
          className={cn(
            "text-2xl font-display font-medium mb-3",
            variant === "dark" ? "text-white" : "text-neutral-900"
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "text-sm leading-relaxed mb-6 max-w-xs",
            textClasses[variant]
          )}
        >
          {description}
        </p>

        {/* Code Block for Dark Variant */}
        {codeBlock && variant === "dark" && (
          <div className="mt-auto bg-neutral-950 rounded-xl border border-neutral-800 p-4 font-mono text-[10px] text-neutral-400 shadow-2xl">
            <div className="flex gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
            </div>
            <div className="space-y-1.5">
              {codeBlock.lines.map((line, i) => (
                <p
                  key={i}
                  className={cn(
                    colorMap[line.color],
                    line.indent && `pl-${line.indent * 4}`,
                    line.pulse && "animate-pulse"
                  )}
                  style={{ paddingLeft: line.indent ? line.indent * 16 : 0 }}
                >
                  {line.text}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* AI Flow Visual for Wide Variant */}
        {visual === "ai-flow" && (
          <div className="relative w-full md:w-1/2 h-48 md:h-full mt-8 md:mt-0 flex items-center justify-center md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:translate-x-8">
            <div className="bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-neutral-100 p-4 space-y-3 group-hover:-translate-x-2 transition-transform duration-500">
              <div className="flex justify-between items-center text-xs text-neutral-400 border-b border-neutral-100 pb-2">
                <span>AI Model #7</span>
                <span className="text-green-600 bg-green-50 px-2 py-0.5 rounded">
                  Active
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-8 h-8 rounded bg-purple-100 flex items-center justify-center text-purple-600">
                  <Icon icon="solar:cpu-bolt-linear" />
                </div>
                <Icon
                  icon="solar:arrow-right-linear"
                  className="text-neutral-300"
                />
                <div className="w-8 h-8 rounded bg-blue-100 flex items-center justify-center text-blue-600">
                  <Icon icon="solar:database-linear" />
                </div>
                <Icon
                  icon="solar:arrow-right-linear"
                  className="text-neutral-300"
                />
                <div className="w-8 h-8 rounded bg-green-100 flex items-center justify-center text-green-600">
                  <Icon icon="solar:check-circle-linear" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Chart for Accent Variant */}
        {chart && (
          <div className="relative h-24 w-full mt-auto">
            <div className="flex items-end gap-2 h-full pb-2">
              <div className="w-1/4 bg-neutral-900/10 h-[40%] rounded-t-md" />
              <div className="w-1/4 bg-neutral-900/20 h-[60%] rounded-t-md" />
              <div className="w-1/4 bg-neutral-900/30 h-[50%] rounded-t-md" />
              <div className="w-1/4 bg-neutral-900 h-[85%] rounded-t-md relative group-hover:h-[95%] transition-all duration-500">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-neutral-900 opacity-0 group-hover:opacity-100 transition-opacity">
                  +45%
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Link for Outline Variant */}
        {variant === "outline" && (
          <a
            href="#"
            className="inline-flex items-center text-sm font-semibold text-neutral-900 hover:opacity-70 mt-auto"
          >
            Learn More{" "}
            <Icon icon="solar:arrow-right-linear" className="ml-1" width={16} />
          </a>
        )}
      </div>
    </GlowCard>
  );
}
