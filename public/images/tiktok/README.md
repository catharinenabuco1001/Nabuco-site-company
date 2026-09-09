# Capas de TikTok

Não existe forma pública de puxar vídeos do TikTok automaticamente, então
essa pasta funciona por **convenção de nome de arquivo**: o nome do arquivo
tem que ser igual ao `id` da entrada correspondente em
[`src/data/videos.ts`](../../../src/data/videos.ts) (array `tiktoks`), com
extensão `.jpg`.

## Passo a passo pra adicionar um TikTok novo

1. Em `src/data/videos.ts`, adicione uma entrada no array `tiktoks` com um
   `id` curto e descritivo (kebab-case), `title` e `url` reais.
2. Se tiver uma imagem de capa, salve o arquivo aqui como
   `<id-que-voce-escolheu>.jpg` — exatamente o mesmo texto do `id`.
3. Pronto. O card detecta o arquivo sozinho (não precisa mexer em nenhum
   outro lugar do código).

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

→ arquivo de capa: `public/images/tiktok/como-estudar-2h-por-dia.jpg`

Sem capa ainda? Sem problema — o card mostra o placeholder "TikTok em breve"
até o arquivo aparecer aqui.
