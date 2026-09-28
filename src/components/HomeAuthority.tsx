import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CTA } from "@/components/ui/CTA";
import { pastTalks, podcasts, press } from "@/data/media";
import { siteConfig } from "@/data/site";
import { publicImageExists } from "@/lib/media";

// Faixa "Já passei por" — nomes das escolas, podcasts e veículos. Fica logo
// abaixo do topo da Home. Tudo vem de src/data/media.ts.
export function AsSeenIn() {
  const names = [
    ...pastTalks.map((t) => t.place),
    ...podcasts.filter((p) => !p.show.startsWith("Canal")).map((p) => p.show),
    ...press.map((p) => p.outlet),
  ];
  const unique = Array.from(new Set(names));
  if (unique.length === 0) return null;

  return (
    <section className="border-y border-ink-900/10 bg-cream-100/60">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-10 py-7">
          <p className="shrink-0 text-[11px] font-semibold uppercase tracking-widest2 text-plum-500">
            Já passei por
          </p>
          <ul className="flex flex-wrap items-center gap-x-7 gap-y-2">
            {unique.map((n) => (
              <li key={n} className="font-serif text-base sm:text-lg text-ink-900/60 whitespace-nowrap">
                {n}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

// Bloco claro "No palco e nos microfones": foto de palestra + podcasts.
export function HomeAuthority() {
  const talk = pastTalks.find((t) =>
    t.photos?.some((p) => publicImageExists(p.replace(/^\//, "")))
  );
  const photo = talk?.photos?.find((p) => publicImageExists(p.replace(/^\//, "")));
  const [mainPod, ...otherPods] = podcasts.filter((p) => p.youtubeId);
  const morePods = otherPods.slice(0, 2);

  if (!photo && !mainPod) return null;

  return (
    <section className="pt-16 sm:pt-24">
      <Container>
        <div className="bg-ink-900 text-cream rounded-[2rem] p-7 sm:p-12 lg:p-14">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest2 text-plum-700 mb-3">
                Palestras &amp; mídia
              </p>
              <h2 className="font-serif text-3xl sm:text-5xl leading-tight max-w-2xl text-balance">
                No palco, nos microfones e <span className="italic text-plum-700">na sala de aula.</span>
              </h2>
            </div>
            <Link
              href="/palestras"
              className="text-xs font-semibold uppercase tracking-wide text-plum-700 hover:text-cream-900"
            >
              Ver tudo →
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {photo && talk && (
              <Link href="/palestras" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                  <Image
                    src={photo}
                    alt={`Catharine Nabuco em palestra no ${talk.place}`}
                    fill
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 sm:p-6">
                    <p className="text-[11px] font-semibold uppercase tracking-widest2 text-gold-300">
                      Palestra
                    </p>
                    <p className="mt-1 font-serif text-xl sm:text-2xl text-white">{talk.place}</p>
                  </div>
                </div>
              </Link>
            )}

            <div className="flex flex-col gap-4">
              {mainPod && (
                <a
                  href={`https://www.youtube.com/watch?v=${mainPod.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-3xl border border-cream/10"
                >
                  <div className="relative aspect-video bg-cream/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://i.ytimg.com/vi/${mainPod.youtubeId}/hqdefault.jpg`}
                      alt={`${mainPod.show}: ${mainPod.title}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <span className="absolute left-4 bottom-4 flex h-12 w-12 items-center justify-center rounded-full bg-cream text-ink-900">
                      ▶
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-widest2 text-plum-700">
                      Podcast · {mainPod.show}
                    </p>
                    <p className="mt-1 font-serif text-lg leading-snug">{mainPod.title}</p>
                  </div>
                </a>
              )}
              {morePods.map((p) => (
                <a
                  key={p.id}
                  href={`https://www.youtube.com/watch?v=${p.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-cream/10 p-3 hover:border-plum-700/60 transition-colors"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://i.ytimg.com/vi/${p.youtubeId}/mqdefault.jpg`}
                    alt=""
                    loading="lazy"
                    className="h-14 w-24 shrink-0 rounded-lg object-cover"
                  />
                  <span className="min-w-0">
                    <span className="block text-[10px] font-semibold uppercase tracking-widest2 text-plum-700">
                      {p.show}
                    </span>
                    <span className="block truncate text-sm">{p.title}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-cream/10 pt-8">
            <CTA
              href={siteConfig.contact.whatsappPalestras}
              variant="primary"
              external
              className="bg-cream text-ink-900 hover:bg-gold-500 hover:text-cream-900"
            >
              Levar a Catharine para meu evento
            </CTA>
            <Link
              href="/palestras"
              className="text-xs font-semibold uppercase tracking-wide text-cream/70 hover:text-cream"
            >
              Palestras, podcasts e imprensa →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
