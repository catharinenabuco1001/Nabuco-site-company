import { cn } from "@/lib/utils";

export function Badge({
  children,
  tone = "dark",
  className,
}: {
  children: React.ReactNode;
  tone?: "dark" | "gold" | "outline";
  className?: string;
}) {
  const styles = {
    dark: "bg-ink-900 text-cream",
    gold: "bg-gold-500 text-cream-900",
    outline: "border border-ink-900/25 text-ink-800",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-[11px] font-sans font-semibold uppercase tracking-widest2",
        styles[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
