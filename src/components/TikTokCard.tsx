import Link from "next/link";
import type { Video } from "@/types";

export function TikTokCard({ video }: { video: Video }) {
  return (
    <Link
      href={video.url}
      target={video.url === "#" ? undefined : "_blank"}
      rel={video.url === "#" ? undefined : "noopener noreferrer"}
      className="group block w-40 sm:w-48 shrink-0"
    >
      <div className="relative aspect-[9/16] rounded-xl overflow-hidden image-placeholder">
        <div className="image-placeholder-label absolute inset-0 flex items-center justify-center px-4 text-center">
          <span className="font-serif text-ink-900/70 text-xs tracking-widest2 uppercase">
            TikTok em breve
          </span>
        </div>
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
