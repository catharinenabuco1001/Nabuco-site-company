import { cn } from "@/lib/utils";

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="text-xs sm:text-sm font-sans font-semibold tracking-widest2 uppercase text-plum-500 mb-3">
          {eyebrow}
        </p>
      )}
      <Tag className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink-900 text-balance leading-[1.08]">
        {title}
      </Tag>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-ink-700/80 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
