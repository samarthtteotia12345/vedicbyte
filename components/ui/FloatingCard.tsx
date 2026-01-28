"use client";

import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";

interface FloatingCardProps {
  icon: string;
  title: string;
  status?: string;
  statusColor?: "green" | "neutral";
  bgColor: string;
  iconColor: string;
  borderColor: string;
  metric?: {
    label: string;
    value: string;
    change: string;
  };
  flow?: string[];
  delay?: number;
  translateX?: string;
}

export function FloatingCard({
  icon,
  title,
  status,
  statusColor = "neutral",
  bgColor,
  iconColor,
  borderColor,
  metric,
  flow,
  delay = 0,
  translateX = "0",
}: FloatingCardProps) {
  return (
    <div
      className={cn(
        "glass-panel p-4 rounded-xl flex items-center gap-4 animate-float shadow-sm w-full",
        translateX
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      <div
        className={cn(
          "w-10 h-10 rounded-lg flex items-center justify-center border",
          bgColor,
          iconColor,
          borderColor
        )}
      >
        <Icon icon={icon} width={22} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs font-semibold text-neutral-900">{title}</span>
          {status && (
            <span
              className={cn(
                "text-[10px]",
                statusColor === "green"
                  ? "text-green-600 font-mono"
                  : "text-neutral-400"
              )}
            >
              {status}
            </span>
          )}
        </div>

        {metric && (
          <div className="flex items-end gap-2">
            <span className="text-xl font-bold tracking-tight text-neutral-900">
              {metric.value}
            </span>
            <span className="text-xs text-green-600 mb-1 flex items-center">
              <Icon icon="solar:arrow-right-up-linear" width={12} />
              {metric.change}
            </span>
          </div>
        )}

        {flow && (
          <div className="text-[10px] text-neutral-500 flex gap-2 font-mono">
            <span>{flow[0]}</span>
            <span className="text-neutral-300">-&gt;</span>
            <span>{flow[1]}</span>
          </div>
        )}
      </div>
    </div>
  );
}
