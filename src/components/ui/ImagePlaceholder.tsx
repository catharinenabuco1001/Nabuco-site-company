import { cn } from "@/lib/utils";

// Placeholder editorial de imagem. Usado em toda a Home/páginas até que
// fotos reais da Catharine sejam fornecidas. Não representa nenhuma
// aparência física real — é puramente decorativo/estrutural.
export function ImagePlaceholder({
  label,
  className,
  ratio = "aspect-[4/5]",
}: {
  label?: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div
      className={cn(
        "image-placeholder w-full rounded-2xl flex items-center justify-center",
        ratio,
        className
      )}
      role="img"
      aria-label={label ?? "Imagem em breve"}
    >
      <span className="image-placeholder-label font-serif text-cream/70 text-sm tracking-widest2 uppercase px-6 text-center">
        {label ?? "Imagem em breve"}
      </span>
    </div>
  );
}
