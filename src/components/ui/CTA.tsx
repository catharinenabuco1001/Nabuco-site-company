import Link from "next/link";
import { cn } from "@/lib/utils";

type CTAProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
};

export function CTA({ href, children, variant = "primary", className, external }: CTAProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-sans font-semibold tracking-wide uppercase transition-all duration-300 ease-out";

  const styles = {
    primary:
      "bg-ink-900 text-cream hover:bg-plum-600 active:scale-[0.98]",
    secondary:
      "bg-transparent text-ink-900 border border-ink-900/30 hover:border-ink-900 hover:bg-ink-900 hover:text-cream active:scale-[0.98]",
    ghost:
      "bg-transparent text-plum-600 hover:text-plum-500 px-0 py-1 underline-grow",
  };

  const props = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link href={href} className={cn(base, styles[variant], className)} {...props}>
      {children}
    </Link>
  );
}
