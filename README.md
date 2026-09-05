# Catharine Nabuco — Site

Site pessoal/profissional de Catharine Nabuco. Next.js (App Router) + TypeScript + Tailwind CSS.

## Como rodar localmente

Este ambiente de desenvolvimento não tinha Node.js instalado, então o projeto foi
escrito por completo mas **ainda não foi instalado nem testado em um navegador**.
Antes de tudo, confira o passo a passo abaixo.

1. Instale o [Node.js LTS](https://nodejs.org) (versão 18.18+ ou 20+).
2. Nesta pasta, instale as dependências:

```bash
npm install
```

3. Rode o servidor de desenvolvimento:

```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000).

Para gerar a versão de produção:

```bash
npm run build
npm run start
```

## Onde editar conteúdo

Todo o conteúdo do site fica centralizado em `src/data/`, sem textos soltos nos
componentes:

| Arquivo | Conteúdo |
|---|---|
| `src/data/site.ts` | Nome, navegação, redes sociais, contato, links externos |
| `src/data/videos.ts` | Vídeos do YouTube e TikToks exibidos em `/aulas` e na Home |
| `src/data/products.ts` | Produtos (PAC, ebook, livro) e dados da aula particular |
| `src/data/talks.ts` | Temas de palestra |
| `src/data/models.ts` | Modelos gratuitos para download |
| `src/data/ai-tools.ts` | Ferramentas de IA usadas por Catharine |
| `src/data/news.ts` | Publicações do feed "Catharine Agora" |

Todos os itens marcados com `TODO:` ou preço `null` são placeholders — nenhuma
informação real (preços, links, depoimentos, números) foi inventada. Basta
substituir pelos dados reais quando existirem.

## Integração futura com YouTube

`src/lib/youtube.ts` já está preparado para consumir a YouTube Data API v3 no
lugar dos dados estáticos de `src/data/videos.ts`, sem precisar alterar nenhum
componente de UI — eles só chamam `getVideos()`. Basta preencher
`YOUTUBE_API_KEY` e `YOUTUBE_CHANNEL_ID` em um arquivo `.env.local` (veja
`.env.example`) e implementar a chamada real dentro da função (o arquivo tem
um exemplo comentado). A chave nunca é exposta ao frontend porque o arquivo
usa `import "server-only"`.

## Estrutura

```
src/
  app/            rotas (App Router): /, /aulas, /pac, /produtos, /palestras,
                  /modelos, /ia, /noticias, /sobre, sitemap.ts, robots.ts
  components/     componentes reutilizáveis (Header, Footer, VideoCard, etc.)
  data/           conteúdo centralizado (ver tabela acima)
  lib/            utilitários e camada de acesso a dados (youtube.ts)
  types/          tipos compartilhados (Video, Product, Talk, etc.)
```

## Deploy

O projeto está pronto para deploy em qualquer plataforma compatível com
Next.js (Vercel é a mais direta: `vercel --prod` depois de `vercel link`).
Configure as variáveis de `.env.example` no painel da plataforma antes do
deploy, se for usar a integração com YouTube.

## Placeholders visuais

Fotos reais da Catharine ainda não foram fornecidas. Em vez de inventar uma
aparência, o site usa um componente `ImagePlaceholder` (fundo em gradiente
vinho/dourado com padrão editorial) em todo lugar onde uma foto real vai
entrar depois — Home, Sobre, Palestras, Notícias.
