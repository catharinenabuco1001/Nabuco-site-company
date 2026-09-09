import type { Video } from "@/types";
import { getYouTubeVideoId } from "@/lib/utils";

// Player embutido: toca o vídeo do YouTube na própria página (iframe), sem
// abrir o YouTube em outra aba. Sem vídeo (ou sem ID do YouTube válido),
// mostra o placeholder "Vídeo em breve" — nunca quebra a seção. Sem overlay
// de duração aqui: uma vez tocando, é o próprio player do YouTube que mostra
// isso; o selo de duração fica só nas thumbnails (VideoCard).
export function VideoPlayerFrame({ video }: { video?: Video }) {
  const youtubeId = video ? getYouTubeVideoId(video.url) : null;

  return (
    <div className="relative aspect-video overflow-hidden image-placeholder">
      {youtubeId ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
          title={video?.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3.5">
          <span className="h-16 w-16 rounded-full bg-ink-900 flex items-center justify-center">
            <svg width="18" height="20" viewBox="0 0 16 18" fill="none" aria-hidden="true">
              <path d="M0 0L16 9L0 18V0Z" fill="#0F2E22" />
            </svg>
          </span>
          <span className="text-xs tracking-widest2 uppercase text-ink-900/70">Vídeo em breve</span>
        </div>
      )}
    </div>
  );
}
