import Link from "next/link";
import type { NewsItem } from "@/types";
import { newsCategoryLabels } from "@/data/news";
import { Badge } from "@/components/ui/Badge";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { formatDate } from "@/lib/utils";

export function NewsCard({ item }: { item: NewsItem }) {
  const content = (
    <>
      <ImagePlaceholder label="Imagem" ratio="aspect-[16/10]" />
      <div className="mt-4">
        <div className="flex items-center gap-3">
          <Badge tone="outline">{newsCategoryLabels[item.category]}</Badge>
          <time dateTime={item.date} className="text-xs text-ink-700/50 uppercase tracking-wide">
            {formatDate(item.date)}
          </time>
        </div>
        <h3 className="mt-3 font-serif text-xl text-ink-900 leading-snug group-hover:text-plum-600 transition-colors">
          {item.title}
        </h3>
        <p className="mt-2 text-sm text-ink-700/70 line-clamp-2">{item.excerpt}</p>
      </div>
    </>
  );

  if (!item.url || item.url === "#") {
    return <div className="group">{content}</div>;
  }

  return (
    <Link href={item.url} className="group block">
      {content}
    </Link>
  );
}
