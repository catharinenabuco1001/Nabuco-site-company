# Capas de TikTok

A capa de cada vídeo é **buscada automaticamente** a partir do próprio
TikTok (via oEmbed público, sem API key nem login) — na maioria dos casos
você não precisa fazer nada aqui.

Essa pasta só serve para **forçar uma capa manual** quando você quiser (por
exemplo, uma imagem com um recorte melhor, ou pra um vídeo específico onde a
automática não ficou boa). Nesse caso, o nome do arquivo tem que ser igual
ao `id` da entrada correspondente em
[`src/data/videos.ts`](../../../src/data/videos.ts) (array `tiktoks`), com
extensão `.jpg`. Um arquivo manual aqui sempre tem prioridade sobre a capa
automática.

## Passo a passo pra adicionar um TikTok novo

1. Em `src/data/videos.ts`, adicione uma entrada no array `tiktoks` com um
   `id` curto e descritivo (kebab-case), `title` e `url` reais.
2. Pronto — a capa aparece sozinha assim que der o refresh na página.
3. Só se quiser trocar por uma imagem sua: salve o arquivo aqui como
   `<id-que-voce-escolheu>.jpg` — exatamente o mesmo texto do `id`.

### Exemplo

```ts
// src/data/videos.ts
{
  id: "como-estudar-2h-por-dia",
  title: "Como estudar 2h por dia sem se sentir esgotada",
  category: "produtividade",
  platform: "tiktok",
  url: "https://www.tiktok.com/@cathynabuuco/video/...",
}
```

→ capa automática já funciona. Capa manual (opcional):
`public/images/tiktok/como-estudar-2h-por-dia.jpg`
