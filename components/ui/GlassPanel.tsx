import { cn } from "@/lib/utils";

interface GlassPanelProps {
  children: React.ReactNode;
  variant?: "light" | "dark";
  className?: string;
}

export function GlassPanel({
  children,
  variant = "light",
  className,
}: GlassPanelProps) {
  return (
    <div
      className={cn(
        variant === "light" ? "glass-panel" : "dark-glass-panel",
        className
      )}
    >
      {children}
    </div>
  );
}
