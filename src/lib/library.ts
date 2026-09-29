import "server-only";
import type { Video } from "@/types";
import { getVideos } from "@/lib/youtube";
import { tiktoks, categoryLabels } from "@/data/videos";
import { getTikTokCover } from "@/lib/tiktok";
import { videoOverrides, subjectLabels, type Subject } from "@/data/video-overrides";
import { podcasts } from "@/data/media";

// Vídeos do canal que são podcast/entrevista (cadastrados em media.ts) nunca
// contam como aula, mesmo se alguém atribuir uma matéria por engano.
const podcastIds = new Set(podcasts.map((p) => p.youtubeId).filter(Boolean));

// Ponto único que junta YouTube (RSS) + TikTok (manual) + as atribuições de
// matéria/destaque de video-overrides.ts num só formato que a Home e /aulas
// consomem, sem saber de onde cada vídeo veio.
export type LibraryItem = Video & {
  subject?: Subject;
  // Texto pequeno em caps mostrado sob o título: matéria para aulas do
  // YouTube já categorizadas, "TikTok" para os shorts.
  displayTag: string;
  // Só é "aula" o vídeo que tem matéria atribuída em video-overrides.ts.
  // Podcasts, entrevistas, vlogs e divulgação ficam fora das listas de aula.
  isLesson: boolean;
};

export async function getLibraryItems(): Promise<LibraryItem[]> {
  const [youtubeVideos, tiktokCovers] = await Promise.all([
    getVideos(),
    Promise.all(tiktoks.map((video) => getTikTokCover(video))),
  ]);

  const youtubeItems: LibraryItem[] = youtubeVideos.map((video) => {
    const override = videoOverrides[video.id];
    return {
      ...video,
      subject: override?.subject,
      displayTag: override?.subject ? subjectLabels[override.subject] : categoryLabels[video.category],
      isLesson: Boolean(override?.subject) && !podcastIds.has(video.id),
    };
  });

  const tiktokItems: LibraryItem[] = tiktoks.map((video, index) => {
    const override = videoOverrides[video.id];
    return {
      ...video,
      thumbnail: tiktokCovers[index],
      subject: override?.subject,
      displayTag: "TikTok",
      isLesson: Boolean(override?.subject),
    };
  });

  return [...youtubeItems, ...tiktokItems];
}
