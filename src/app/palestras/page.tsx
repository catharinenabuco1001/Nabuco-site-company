import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { CTA } from "@/components/ui/CTA";
import { talks } from "@/data/talks";
import { pastTalks, podcasts, press, type PastTalk } from "@/data/media";
import { siteConfig } from "@/data/site";
import { publicImageExists } from "@/lib/media";

export const metadata: Metadata = {
  title: "Palestras & Mídia",
  description:
    "Palestras de Catharine Nabuco em escolas e eventos, participações em podcasts e matérias na imprensa. Leve a Catharine para o seu evento.",
  openGraph: {
    title: "Palestras & Mídia — Catharine Nabuco",
    description:
      "Palestras em escolas e eventos, podcasts e imprensa. Educação, vestibular, neurociência e alta performance nos estudos.",
  },
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-sans font-semibold uppercase tracking-widest2 text-plum-500 mb-4">
      {children}
    </p>
  );
}

function formatMonth(date?: string) {
  if (!date) return undefined;
  const [y, m] = date.split("-");
  if (!m) return y;
  const d = new Date(Number(y), Number(m) - 1, 1);
  const s = d.toLocaleDateString("pt-BR", { month: "long", year: "numeric" });
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function TalkTile({ talk }: { talk: PastTalk }) {
  const cover = talk.photos?.find((p) => publicImageExists(p.replace(/^\//, "")));
  const meta = [talk.city, formatMonth(talk.date)].filter(Boolean).join(" · ");

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-ink-900/10 bg-cream-50/50">
      <div className="relative aspect-[4/3] overflow-hidden">
        {cover ? (
          <Image
            src={cover}
            alt={`Catharine Nabuco em palestra no ${talk.place}${talk.city ? `, ${talk.city}` : ""}`}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0">
            <div className="image-placeholder flex h-full w-full items-center justify-center">
              <span className="image-placeholder-label font-serif text-6xl text-gold-300/60">
                {talk.place.replace(/^(Colégio|Escola|Instituto)\s+/i, "")[0]}
              </span>
            </div>
          </div>
        )}
        {talk.voluntary && (
          <span className="absolute left-4 top-4 rounded-full bg-cream/85 backdrop-blur px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-gold-300">
            Ação voluntária
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        {meta && (
          <p className="text-[11px] font-semibold uppercase tracking-widest2 text-plum-500">{meta}</p>
        )}
        <h3 className="mt-2 font-serif text-2xl text-ink-900">{talk.place}</h3>
        {talk.theme && <p className="mt-2 text-sm text-ink-900/75 leading-relaxed">{talk.theme}</p>}
        {talk.audience && <p className="mt-1 text-xs text-ink-900/50">{talk.audience}</p>}
        {talk.instagramUrl && !talk.youtubeId && (
          <a
            href={talk.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto pt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gold-300 hover:text-gold-500"
          >
            ↗ Ver no Instagram
          </a>
        )}
        {talk.youtubeId && (
          <a
            href={`https://www.youtube.com/watch?v=${talk.youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto pt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gold-300 hover:text-gold-500"
          >
            ▶ Assistir a palestra
          </a>
        )}
      </div>
    </article>
  );
}

export default function PalestrasPage() {
  const liveVideos = pastTalks.filter((t) => t.youtubeId);
  const counters = [
    { v: pastTalks.length, l: pastTalks.length === 1 ? "palestra realizada" : "palestras realizadas" },
    { v: podcasts.length, l: podcasts.length === 1 ? "podcast" : "podcasts" },
    { v: press.length, l: press.length === 1 ? "matéria na imprensa" : "matérias na imprensa" },
  ].filter((c) => c.v > 0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Catharine Nabuco",
    url: siteConfig.url,
    jobTitle: "Palestrante, autora e professora de matemática e física",
    sameAs: Object.values(siteConfig.social),
    subjectOf: [
      ...podcasts.map((p) => ({
        "@type": "PodcastEpisode",
        name: p.title,
        partOfSeries: { "@type": "PodcastSeries", name: p.show },
        url: p.youtubeId ? `https://www.youtube.com/watch?v=${p.youtubeId}` : p.url,
      })),
      ...press
        .filter((a) => a.url)
        .map((a) => ({
          "@type": "NewsArticle",
          headline: a.title,
          publisher: { "@type": "Organization", name: a.outlet },
          url: a.url,
        })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ------------------------------------------------ TOPO */}
      <section className="pt-12 sm:pt-16 pb-16 sm:pb-20">
        <Container>
          <Eyebrow>Palestras &amp; Mídia</Eyebrow>
          <h1 className="font-serif text-4xl sm:text-6xl text-ink-900 leading-[1.05] max-w-3xl text-balance">
            Ideias que saem da tela e <span className="italic text-plum-500">chegam ao palco.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-ink-900/70 leading-relaxed">
            Levo pra escolas e eventos o que vivi no vestibular e o que estudo na neurociência:
            como aprender de verdade, como lidar com a pressão e como construir uma rotina que
            sustenta resultado.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <CTA href={siteConfig.contact.whatsappPalestras} variant="primary" external>
              Levar a Catharine para meu evento
            </CTA>
          </div>

          {counters.length > 0 && (
            <div className="mt-14 flex flex-wrap gap-x-12 gap-y-6 border-t border-ink-900/10 pt-8">
              {counters.map((c) => (
                <div key={c.l}>
                  <p className="font-serif text-4xl text-gold-300">{c.v}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-ink-900/55">{c.l}</p>
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* ------------------------------------------------ PALESTRAS REALIZADAS */}
      {pastTalks.length > 0 && (
        <section className="py-20 sm:py-24 border-t border-ink-900/10 bg-cream-100/50">
          <Container>
            <Eyebrow>Onde já estive</Eyebrow>
            <h2 className="font-serif text-3xl sm:text-4xl text-ink-900">Palestras realizadas</h2>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {pastTalks.map((t) => (
                <TalkTile key={t.id} talk={t} />
              ))}
            </div>

            {liveVideos.length > 0 && (
              <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6">
                {liveVideos.map((t) => (
                  <figure key={t.id}>
                    <div className="relative aspect-video overflow-hidden rounded-3xl border border-gold-500/25 bg-cream-50">
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${t.youtubeId}?rel=0`}
                        title={`Palestra de Catharine Nabuco no ${t.place}`}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <figcaption className="mt-3 text-sm text-ink-900/60">{t.place}</figcaption>
                  </figure>
                ))}
              </div>
            )}
          </Container>
        </section>
      )}

      {/* ------------------------------------------------ PODCASTS */}
      {podcasts.length > 0 && (
        <section className="py-20 sm:py-24 border-t border-ink-900/10">
          <Container>
            <Eyebrow>Podcasts &amp; entrevistas</Eyebrow>
            <h2 className="font-serif text-3xl sm:text-4xl text-ink-900">Onde já conversei</h2>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {podcasts.map((p) => {
                const href = p.youtubeId ? `https://www.youtube.com/watch?v=${p.youtubeId}` : p.url;
                const thumb = p.youtubeId
                  ? `https://i.ytimg.com/vi/${p.youtubeId}/hqdefault.jpg`
                  : p.cover;
                return (
                  <a
                    key={p.id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group overflow-hidden rounded-3xl border border-ink-900/10 bg-cream-50/50 transition-colors hover:border-gold-500/50"
                  >
                    <div className="relative aspect-video overflow-hidden bg-cream-200">
                      {thumb && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={thumb}
                          alt={`${p.show}: ${p.title}`}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                      )}
                      <span className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-full bg-ink-900 text-cream text-sm">
                        ▶
                      </span>
                    </div>
                    <div className="p-6">
                      <p className="text-[11px] font-semibold uppercase tracking-widest2 text-plum-500">
                        {[p.show, formatMonth(p.date)].filter(Boolean).join(" · ")}
                      </p>
                      <h3 className="mt-2 font-serif text-xl text-ink-900 leading-snug">{p.title}</h3>
                    </div>
                  </a>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      {/* ------------------------------------------------ IMPRENSA */}
      {press.length > 0 && (
        <section className="py-20 sm:py-24 border-t border-ink-900/10 bg-cream-100/50">
          <Container>
            <Eyebrow>Na imprensa</Eyebrow>
            <h2 className="font-serif text-3xl sm:text-4xl text-ink-900">O que já saiu por aí</h2>
            <div className="mt-10 flex flex-col">
              {press.map((a) => {
                const inner = (
                  <>
                    <span className="text-xs font-semibold uppercase tracking-widest2 text-plum-500 sm:w-48 shrink-0">
                      {a.outlet}
                    </span>
                    <span className="font-serif text-xl sm:text-2xl text-ink-900 group-hover:text-gold-300 transition-colors">
                      {a.title}
                    </span>
                    <span className="sm:ml-auto text-xs text-ink-900/45 shrink-0">
                      {formatMonth(a.date)}
                      {a.url && <span className="ml-3 text-gold-300">↗</span>}
                    </span>
                  </>
                );
                const cls =
                  "group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 py-6 border-b border-ink-900/10 first:border-t";
                return a.url ? (
                  <a key={a.id} href={a.url} target="_blank" rel="noopener noreferrer" className={cls}>
                    {inner}
                  </a>
                ) : (
                  <div key={a.id} className={cls}>
                    {inner}
                  </div>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      {/* ------------------------------------------------ TEMAS */}
      <section className="py-20 sm:py-24 border-t border-ink-900/10">
        <Container>
          <Eyebrow>Temas</Eyebrow>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink-900 max-w-xl">
            O que eu posso levar pro seu evento
          </h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-900/10 rounded-3xl overflow-hidden border border-ink-900/10">
            {talks.map((t, i) => (
              <div key={t.id} className="bg-cream p-7 sm:p-8">
                <span className="font-serif text-2xl text-gold-500/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-serif text-xl text-ink-900">{t.title}</h3>
                <p className="mt-2 text-sm text-ink-900/65 leading-relaxed">{t.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------ CTA */}
      <section className="pb-24 pt-4">
        <Container>
          <div className="rounded-3xl bg-ink-900 text-cream px-8 py-16 sm:px-16 sm:py-20 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl max-w-xl mx-auto text-balance">
              Quer levar a Catharine para o seu evento?
            </h2>
            <p className="mt-4 text-cream/65 max-w-md mx-auto">
              Escolas, cursinhos, universidades e empresas. Me chama que a gente monta o formato
              ideal pro seu público.
            </p>
            <div className="mt-8">
              <CTA
                href={siteConfig.contact.whatsappPalestras}
                variant="primary"
                external
                className="bg-cream text-ink-900 hover:bg-gold-500 hover:text-cream-900"
              >
                Levar a Catharine para meu evento
              </CTA>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
