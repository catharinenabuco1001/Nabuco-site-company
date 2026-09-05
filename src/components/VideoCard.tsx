import Link from "next/link";
import Image from "next/image";
import type { Video } from "@/types";
import { categoryLabels } from "@/data/videos";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export function VideoCard({ video, featured = false }: { video: Video; featured?: boolean }) {
  return (
    <Link
      href={video.url}
      target={video.url === "#" ? undefined : "_blank"}
      rel={video.url === "#" ? undefined : "noopener noreferrer"}
      className="group block"
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl bg-ink-900",
          featured ? "aspect-video" : "aspect-video"
        )}
      >
        {video.thumbnail ? (
          <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="image-placeholder absolute inset-0 flex items-center justify-center">
            <span className="image-placeholder-label font-serif text-cream/60 text-xs tracking-widest2 uppercase">
              Thumbnail em breve
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute top-3 left-3">
          <Badge tone="gold">{categoryLabels[video.category]}</Badge>
        </div>

        {video.duration && (
          <div className="absolute bottom-3 right-3 rounded-full bg-ink-900/80 px-2.5 py-1 text-[11px] font-sans text-cream tracking-wide">
            {video.duration}
          </div>
        )}

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="h-14 w-14 rounded-full bg-cream/95 flex items-center justify-center">
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" aria-hidden="true">
              <path d="M0 0L16 9L0 18V0Z" fill="#141212" />
            </svg>
          </span>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="font-serif text-lg sm:text-xl text-ink-900 leading-snug group-hover:text-plum-600 transition-colors">
          {video.title}
        </h3>
        {video.description && (
          <p className="mt-1.5 text-sm text-ink-700/70 line-clamp-2">{video.description}</p>
        )}
        <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-sans font-semibold uppercase tracking-wide text-plum-600">
          Assistir
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none" aria-hidden="true">
            <path
              d="M1 5H11M11 5L7 1M11 5L7 9"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}
