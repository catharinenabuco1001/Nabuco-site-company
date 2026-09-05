import type { Video } from "@/types";
import { VideoCard } from "@/components/VideoCard";

export function VideoGrid({ videos }: { videos: Video[] }) {
  if (videos.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="font-serif text-xl text-ink-900">Nenhum vídeo encontrado.</p>
        <p className="mt-2 text-sm text-ink-700/60">Tente outra categoria ou termo de busca.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}
