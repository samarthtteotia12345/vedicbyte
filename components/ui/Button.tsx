"use client";

import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: string;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all relative overflow-hidden group";

  const variants = {
    primary:
      "bg-vedic-lime text-neutral-900 hover:bg-[#bfee11] shadow-lg shadow-vedic-lime/20",
    secondary:
      "bg-neutral-900 text-vedic-lime hover:bg-neutral-800",
    outline:
      "border border-neutral-200 hover:bg-white hover:border-neutral-300 text-neutral-600",
    ghost: "hover:bg-neutral-100 text-neutral-600",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-lg gap-1.5",
    md: "px-6 py-3 text-sm rounded-lg gap-2",
    lg: "px-8 py-4 text-base rounded-full gap-2",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <Icon
          icon={icon}
          width={size === "lg" ? 20 : 16}
          className="group-hover:-translate-x-0.5 transition-transform"
        />
      )}
      <span className="relative z-10">{children}</span>
      {icon && iconPosition === "right" && (
        <Icon
          icon={icon}
          width={size === "lg" ? 20 : 16}
          className="group-hover:translate-x-1 transition-transform relative z-10"
        />
      )}
      {variant === "secondary" && <div className="btn-shine" />}
    </button>
  );
}
