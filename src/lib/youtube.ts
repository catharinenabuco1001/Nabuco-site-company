import "server-only";
import type { Video } from "@/types";
import { videos as staticVideos } from "@/data/videos";

// Camada de acesso a vídeos, isolada da UI.
//
// Hoje: retorna os dados estáticos de src/data/videos.ts.
// Futuro: quando YOUTUBE_API_KEY e YOUTUBE_CHANNEL_ID estiverem configurados
// (ver .env.example), esta função pode passar a chamar a YouTube Data API v3
// e mapear o resultado para o mesmo tipo `Video`, sem que nenhum componente
// precise mudar — eles só consomem `getVideos()`.
//
// O import "server-only" no topo garante que este arquivo nunca seja
// incluído em um bundle de cliente, então a API key jamais fica exposta
// no frontend.

export async function getVideos(): Promise<Video[]> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;

  if (!apiKey || !channelId) {
    return staticVideos;
  }

  // TODO: implementar chamada real à YouTube Data API v3 quando as
  // credenciais estiverem disponíveis. Exemplo de shape esperado:
  //
  // const res = await fetch(
  //   `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet&order=date&maxResults=25`,
  //   { next: { revalidate: 3600 } }
  // );
  // const data = await res.json();
  // return data.items.map(mapYouTubeItemToVideo);

  return staticVideos;
}
