import Link from "next/link";
import Image from "next/image";
import type { Video } from "@/types";
import { getTikTokCover } from "@/lib/tiktok";
import { cn } from "@/lib/utils";

// Capa do TikTok: arquivo manual em public/images/tiktok/<id>.jpg tem
// prioridade (ver README daquela pasta); senão busca automática via oEmbed;
// senão o placeholder "TikTok em breve" — nunca quebra.
export async function TikTokCard({
  video,
  className,
}: {
  video: Video;
  className?: string;
}) {
  const coverSrc = await getTikTokCover(video);

  return (
    <Link
      href={video.url}
      target={video.url === "#" ? undefined : "_blank"}
      rel={video.url === "#" ? undefined : "noopener noreferrer"}
      className={cn("group block w-[172px] shrink-0", className)}
    >
      <div className="relative aspect-[9/16] overflow-hidden image-placeholder">
        {coverSrc ? (
          <Image
            src={coverSrc}
            alt={video.title}
            fill
            sizes="200px"
            className="object-cover"
          />
        ) : (
          <div className="image-placeholder-label absolute inset-0 flex items-center justify-center px-4 text-center">
            <span className="font-serif text-ink-900/70 text-xs tracking-widest2 uppercase">
              TikTok em breve
            </span>
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="h-11 w-11 rounded-full bg-ink-900/95 flex items-center justify-center">
            <svg width="13" height="14" viewBox="0 0 16 18" fill="none" aria-hidden="true">
              <path d="M0 0L16 9L0 18V0Z" fill="#141212" />
            </svg>
          </span>
        </div>
      </div>
      <p className="mt-3 text-sm font-sans text-ink-900 leading-snug line-clamp-2 group-hover:text-plum-600 transition-colors">
        {video.title}
      </p>
    </Link>
  );
}
