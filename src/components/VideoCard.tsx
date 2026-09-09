import Link from "next/link";
import Image from "next/image";
import type { Video } from "@/types";
import { cn, getVideoThumbnail, formatDuration } from "@/lib/utils";

type VideoCardProps = {
  video: Video;
  tag: string;
  href?: string;
  showDuration?: boolean;
  onSelect?: () => void;
  className?: string;
};

// Card de vídeo do novo desenho: cantos retos (sem rounded-*), sem badge
// colorido de categoria — só uma linha pequena em caps dourado sob o
// título. Se `onSelect` for passado, vira um <button> que troca o vídeo do
// player em vez de navegar (usado em /aulas); senão é um link normal.
export function VideoCard({
  video,
  tag,
  href,
  showDuration = true,
  onSelect,
  className,
}: VideoCardProps) {
  const thumbnail = getVideoThumbnail(video);

  const content = (
    <>
      <div className="relative aspect-video overflow-hidden bg-ink-900">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={video.title}
            fill
            sizes="(min-width: 1024px) 300px, 60vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="image-placeholder absolute inset-0 flex items-center justify-center">
            <span className="image-placeholder-label font-serif text-ink-900/60 text-xs tracking-widest2 uppercase">
              Thumbnail em breve
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {showDuration && (
          <div className="absolute bottom-3 right-3 rounded-full bg-cream-900/80 px-2.5 py-1 text-[11px] font-sans text-ink-900 tracking-wide">
            {formatDuration(video.duration)}
          </div>
        )}

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="h-11 w-11 rounded-full bg-ink-900/95 flex items-center justify-center">
            <svg width="13" height="15" viewBox="0 0 16 18" fill="none" aria-hidden="true">
              <path d="M0 0L16 9L0 18V0Z" fill="#141212" />
            </svg>
          </span>
        </div>
      </div>

      <div className="mt-3">
        <h3 className="font-serif text-lg leading-snug text-ink-900 group-hover:text-plum-600 transition-colors">
          {video.title}
        </h3>
        <p className="mt-1.5 text-xs font-sans font-semibold uppercase tracking-widest2 text-plum-500">
          {tag}
        </p>
      </div>
    </>
  );

  if (onSelect) {
    return (
      <button
        type="button"
        onClick={onSelect}
        className={cn("group block w-[300px] shrink-0 text-left", className)}
      >
        {content}
      </button>
    );
  }

  const linkHref = href ?? video.url;
  const isExternal = linkHref.startsWith("http");

  return (
    <Link
      href={linkHref}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn("group block w-[300px] shrink-0", className)}
    >
      {content}
    </Link>
  );
}
