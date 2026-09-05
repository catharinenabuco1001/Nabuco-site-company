"use client";

import { cn } from "@/lib/utils";

export type FilterOption = { value: string; label: string };

export function CategoryFilter({
  options,
  active,
  onChange,
}: {
  options: FilterOption[];
  active: string;
  onChange: (value: string) => void;
}) {
  return (
    <div
      className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 no-scrollbar"
      role="tablist"
      aria-label="Filtrar por categoria"
    >
      {options.map((option) => {
        const isActive = option.value === active;
        return (
          <button
            key={option.value}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(option.value)}
            className={cn(
              "shrink-0 rounded-full px-4 py-2 text-xs sm:text-sm font-sans font-semibold uppercase tracking-wide transition-all duration-200 border",
              isActive
                ? "bg-ink-900 text-cream border-ink-900"
                : "bg-transparent text-ink-800 border-ink-900/20 hover:border-ink-900"
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
