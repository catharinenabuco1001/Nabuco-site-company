import type { Product } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { CTA } from "@/components/ui/CTA";
import { formatPrice } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  const isExternal = product.ctaUrl.startsWith("http");

  return (
    <div className="group flex flex-col h-full rounded-2xl border border-ink-900/10 bg-cream-50 p-8 transition-all duration-300 hover:border-plum-500/40 hover:shadow-[0_20px_45px_-30px_rgba(20,18,18,0.4)]">
      {product.badge && (
        <Badge tone="outline" className="self-start mb-6">
          {product.badge}
        </Badge>
      )}
      <h3 className="font-serif text-2xl text-ink-900">{product.name}</h3>
      <p className="mt-1 text-sm font-sans italic text-plum-600">{product.tagline}</p>
      <p className="mt-4 text-sm text-ink-700/80 leading-relaxed flex-1">
        {product.description}
      </p>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm font-sans font-semibold text-ink-900">
          {formatPrice(product.price)}
        </span>
      </div>

      <CTA
        href={product.ctaUrl || "#"}
        variant="secondary"
        className="mt-5 w-full"
        external={isExternal}
      >
        {product.ctaLabel}
      </CTA>
    </div>
  );
}
