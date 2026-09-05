"use client";

export function SearchBar({
  value,
  onChange,
  placeholder = "Buscar por título...",
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="relative w-full sm:max-w-xs">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-700/50"
      >
        <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M11.5 11.5L15 15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
      <label htmlFor="search-aulas" className="sr-only">
        Buscar aulas por título
      </label>
      <input
        id="search-aulas"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-full border border-ink-900/20 bg-cream-50 pl-10 pr-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-700/40 focus:border-plum-500 outline-none transition-colors"
      />
    </div>
  );
}
