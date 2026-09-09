# Fotos reais — como nomear o arquivo

Regra geral: **o nome do arquivo é sempre determinado por onde a foto vai
aparecer** — nunca precisa perguntar, é só seguir a tabela ou a convenção
abaixo.

## Slots fixos (uma foto, um lugar)

Essas três têm nome exato e fixo — sobrescreva o arquivo quando quiser trocar
a foto:

| Arquivo | Onde aparece |
|---|---|
| `hero.jpg` | Home — foto grande ao lado do título |
| `sobre.jpg` | Página `/sobre` |
| `cartas-vestibulando.jpg` | Capa do livro em `/produtos` |

Até o arquivo existir com esse nome exato, o site mostra o placeholder
editorial no lugar automaticamente — nada quebra.

## Coleções (várias fotos do mesmo tipo)

Quando existe mais de uma foto do mesmo tipo (hoje: capas de TikTok), a regra
é **nome do arquivo = `id` da entrada correspondente em `src/data/*.ts`**,
numa subpasta própria. Ver [`images/tiktok/README.md`](tiktok/README.md)
para o passo a passo completo desse caso.

## Arquivos encontrados nesta pasta

Estes dois arquivos já estão na pasta mas com o nome original de download,
não seguem a convenção acima — ainda não estão conectados a nenhum lugar do
site:

- `41RYcvPlnqL.jpg` — pelo nome (padrão de imagem da Amazon), parece ser a
  capa do livro na Amazon. Se for isso, renomeie para
  `cartas-vestibulando.jpg` (ou me avise que eu renomeio).
- `anotabahia-jovem-baiana-estreia-como-escritora-...-whatsapp-image-....jpeg`
  — parece uma foto de imprensa sobre o lançamento do livro. Me diga onde
  ela deveria aparecer (`/sobre`? uma publicação em `/noticias`?) que eu
  ajusto o código pra usar.
