import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { CTA } from "@/components/ui/CTA";
import { pacSteps } from "@/components/PacBlock";
import { siteConfig } from "@/data/site";
import {
  pacPricing,
  pacFit,
  pacTestimonial,
  pacAuthorBio,
  pacAuthorStats,
  pacMistakes,
  pacModules,
  pacIncludes,
  pacGuarantee,
  pacFaq,
} from "@/data/pac";
import { publicImageExists } from "@/lib/media";
import { formatPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Método PAC — Pense Antes de Calcular",
  description:
    "Você entende a matéria, mas trava na conta? O Método PAC reconstrói a matemática básica em mini-aulas de 10 minutos, pra você calcular com segurança no ENEM e no vestibular.",
  openGraph: {
    title: "Método PAC — Pense Antes de Calcular",
    description:
      "Você entende a matéria, mas trava na conta? Recupere a base de matemática em mini-aulas de 10 minutos.",
  },
};

const checkout = siteConfig.links.pacCheckout;

function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={`text-xs font-sans font-semibold uppercase tracking-widest2 text-plum-500 mb-4 ${className}`}
    >
      {children}
    </p>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden className="h-5 w-5 shrink-0 text-gold-500 mt-0.5">
      <circle cx="10" cy="10" r="9" fill="none" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M6 10.4l2.6 2.6L14 7.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Celular desenhado em CSS mostrando a área de aulas — dá "cara de produto"
// sem precisar de print real. Quando tiver print da Kiwify, dá pra trocar.
function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[260px] sm:w-[290px]">
      <div
        className="absolute -inset-10 rounded-full blur-3xl opacity-40"
        style={{ background: "radial-gradient(circle, #C9A24C55, transparent 70%)" }}
        aria-hidden
      />
      <div className="relative rounded-[2.6rem] border border-ink-900/15 bg-[#07170f] p-2.5 shadow-2xl shadow-black/50">
        <div className="rounded-[2.1rem] overflow-hidden bg-cream-50">
          <div className="flex justify-center pt-2.5 pb-1">
            <span className="h-1.5 w-16 rounded-full bg-black/60" />
          </div>
          <div className="px-4 pt-2 pb-3 border-b border-ink-900/10">
            <p className="text-[10px] uppercase tracking-widest2 text-plum-500 font-semibold">
              Método PAC
            </p>
            <p className="mt-1 font-serif text-lg text-ink-900 leading-tight">Suas aulas</p>
            <div className="mt-3 h-1.5 w-full rounded-full bg-ink-900/10">
              <div className="h-full w-[38%] rounded-full bg-gold-500" />
            </div>
          </div>
          <ul className="px-3 py-2">
            {pacModules.map((m, i) => (
              <li
                key={m.n}
                className={`flex items-center gap-3 rounded-xl px-2.5 py-2.5 ${
                  i === 2 ? "bg-gold-500/15" : ""
                }`}
              >
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold ${
                    i < 2
                      ? "bg-gold-500 text-cream-900"
                      : i === 2
                        ? "border border-gold-500 text-gold-300"
                        : "border border-ink-900/20 text-ink-900/50"
                  }`}
                >
                  {i < 2 ? "✓" : m.n}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-[12px] font-semibold text-ink-900">
                    {m.title}
                  </span>
                  <span className="block text-[10px] text-ink-900/50">
                    {i === 2 ? "▶ continuar · ~10 min" : "mini-aulas · ~10 min"}
                  </span>
                </span>
              </li>
            ))}
          </ul>
          <div className="h-4" />
        </div>
      </div>
    </div>
  );
}

export default function PacPage() {
  const heroSrc = publicImageExists("images/pac-hero.jpg")
    ? "/images/pac-hero.jpg"
    : "/images/hero-retrato.jpeg";
  const authorSrc = publicImageExists("images/sobre.jpg") ? "/images/sobre.jpg" : heroSrc;
  const discount = Math.round((1 - pacPricing.price / pacPricing.originalPrice) * 100);

  return (
    <>
      {/* ------------------------------------------------------------ HERO */}
      <section className="relative overflow-hidden pt-10 sm:pt-14 pb-16 sm:pb-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-[-10%] h-[620px] w-[620px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, #C9A24C40, transparent 65%)" }}
        />
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            <div className="lg:col-span-7 animate-fadeIn">
              {siteConfig.pacCohort && (
                <p className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wide text-gold-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-500 animate-pulse" />
                  {siteConfig.pacCohort}
                </p>
              )}
              <h1 className="mt-6 font-serif text-[2.6rem] sm:text-6xl lg:text-[4.2rem] text-ink-900 leading-[1.02] text-balance">
                Você entende a matéria.{" "}
                <span className="italic text-plum-500">Trava na conta.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base sm:text-lg text-ink-700/80 leading-relaxed">
                O <strong className="text-ink-900 font-semibold">Método PAC</strong> reconstrói a
                matemática básica que ficou pra trás — fração, potência, radiciação, fatoração — em
                mini-aulas de 10 minutos. Pra você parar de perder questão na última linha da conta.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <CTA href={checkout} variant="primary" external className="px-8 py-4">
                  Quero destravar minha base
                </CTA>
                <CTA href="#por-dentro" variant="secondary" className="px-7 py-4">
                  Ver o que tem no curso
                </CTA>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm text-ink-900/60">
                <span>✓ Acesso imediato</span>
                <span>✓ Aulas de ~10 min</span>
                <span>✓ Garantia de 7 dias</span>
              </div>
            </div>

            {/* Foto + cards flutuantes */}
            <div className="lg:col-span-5 animate-fadeInSlow">
              <div className="relative mx-auto max-w-[420px] px-6 sm:px-0">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-gold-500/25">
                  <Image
                    src={heroSrc}
                    alt="Catharine Nabuco, criadora do Método PAC"
                    fill
                    priority
                    sizes="(min-width: 1024px) 34vw, 90vw"
                    className="object-cover"
                    style={{ objectPosition: "70% 25%" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cream/50 via-transparent to-transparent" />
                </div>

                <div className="absolute -left-2 sm:-left-10 top-8 rounded-2xl border border-ink-900/10 bg-cream-50/95 backdrop-blur px-4 py-3 shadow-xl shadow-black/30">
                  <p className="text-[10px] uppercase tracking-widest2 text-plum-500 font-semibold">
                    Produto notável
                  </p>
                  <p className="mt-1 font-serif text-base sm:text-lg text-ink-900 whitespace-nowrap">
                    (a + b)² = a² + <span className="text-gold-300">2ab</span> + b²
                  </p>
                </div>

                <div className="absolute -right-2 sm:-right-8 bottom-10 rounded-2xl bg-ink-900 px-5 py-4 text-cream shadow-xl shadow-black/40">
                  <p className="text-[10px] uppercase tracking-widest2 font-semibold text-plum-700">
                    Em 1 mês de PAC
                  </p>
                  <p className="mt-1 font-serif text-3xl leading-none">
                    5 <span className="text-plum-700">→</span> 8
                  </p>
                  <p className="mt-1 text-[11px] text-cream/60">nota de uma aluna</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------ STATS */}
      <section className="border-y border-ink-900/10 bg-cream-100/60">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-ink-900/10">
            {[
              { v: "+40", l: "mini-aulas" },
              { v: "~10 min", l: "por aula" },
              { v: "~15 dias", l: "pra concluir com foco" },
              { v: "+60 mil", l: "pessoas acompanham a Cathy" },
            ].map((s, i) => (
              <div
                key={s.l}
                className={`py-7 sm:py-9 px-4 text-center ${i >= 2 ? "border-t lg:border-t-0 border-ink-900/10" : ""}`}
              >
                <p className="font-serif text-2xl sm:text-3xl text-gold-300">{s.v}</p>
                <p className="mt-1 text-xs sm:text-sm text-ink-900/55">{s.l}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------ ERROS */}
      <section className="py-20 sm:py-28">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Seja honesto</Eyebrow>
            <h2 className="font-serif text-3xl sm:text-5xl text-ink-900 leading-tight text-balance">
              Qual desses você já fez numa prova?
            </h2>
            <p className="mt-4 text-ink-900/65 leading-relaxed">
              Quase todo mundo já errou pelo menos um. Não é falta de inteligência — é base que
              ficou com buraco. E cada um desses tem uma aula no PAC.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pacMistakes.map((m) => (
              <div
                key={m.wrong}
                className="group rounded-2xl border border-ink-900/10 bg-cream-50/60 p-6 transition-colors hover:border-gold-500/50"
              >
                <p className="text-[10px] uppercase tracking-widest2 font-semibold text-ink-900/40">
                  {m.module}
                </p>
                <p className="mt-4 font-serif text-xl sm:text-2xl text-ink-900/45 line-through decoration-red-400/70 decoration-2">
                  {m.wrong}
                </p>
                <p className="mt-3 flex items-center gap-2 font-serif text-xl sm:text-2xl text-gold-300">
                  <span className="text-sm font-sans text-gold-500">✓</span>
                  {m.right}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------ POR QUE */}
      <section className="py-20 sm:py-28 border-t border-ink-900/10 bg-cream-100/50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <Eyebrow>Por que você trava</Eyebrow>
              <h2 className="font-serif text-3xl sm:text-4xl text-ink-900 leading-tight text-balance">
                O problema não é física. <span className="italic text-plum-500">É a conta.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-ink-900/75 leading-relaxed">
              <p>
                Nossa relação com os números se forma cedo, lá no fundamental. Se ficou um buraco
                ali — um professor que passou rápido, a pandemia, a vergonha de perguntar — ele
                não some. Ele aparece anos depois, no meio de uma questão de cinemática ou de
                função.
              </p>
              <p>
                Você entende o raciocínio, monta a equação certa… e erra o sinal. Esquece a
                propriedade da potência. Trava na fração. E perde a questão inteira.
              </p>
              <p className="text-ink-900">
                O PAC volta nesse ponto e reconstrói a base, sem pular etapa, pra conta deixar de ser
                o lugar onde você perde ponto.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------ MÉTODO */}
      <section className="py-20 sm:py-28 border-t border-ink-900/10">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>O método</Eyebrow>
            <h2 className="font-serif text-3xl sm:text-5xl text-ink-900 leading-tight">
              Pense <span className="italic text-plum-500">Antes</span> de Calcular.
            </h2>
            <p className="mt-4 text-ink-900/65">
              A aula te faz aprender. O PAC garante que o aprendizado se consolide.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {pacSteps.map((step) => (
              <div
                key={step.n}
                className="relative overflow-hidden rounded-2xl border border-ink-900/10 bg-cream-50/50 p-8 sm:p-10"
              >
                <span className="absolute -right-3 -top-8 font-serif text-[9rem] leading-none text-gold-500/10 select-none">
                  {step.n}
                </span>
                <span className="font-serif text-4xl text-gold-300">{step.n}</span>
                <h3 className="mt-4 font-serif text-2xl text-ink-900">{step.title}</h3>
                <p className="mt-3 text-sm sm:text-base text-ink-900/65 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------ POR DENTRO */}
      <section
        id="por-dentro"
        className="scroll-mt-24 py-20 sm:py-28 border-t border-ink-900/10 bg-cream-100/50"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <Eyebrow>Por dentro do PAC</Eyebrow>
              <h2 className="font-serif text-3xl sm:text-4xl text-ink-900 leading-tight">
                Do zero à fatoração, sem pular etapa.
              </h2>
              <ol className="mt-10 flex flex-col">
                {pacModules.map((m) => (
                  <li
                    key={m.n}
                    className="flex gap-5 sm:gap-7 py-5 border-b border-ink-900/10 first:border-t"
                  >
                    <span className="font-serif text-2xl sm:text-3xl text-gold-500/70 w-8 shrink-0">
                      {m.n}
                    </span>
                    <div>
                      <p className="text-base sm:text-lg font-semibold text-ink-900">{m.title}</p>
                      <p className="mt-1 text-sm text-ink-900/60 leading-relaxed">{m.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2">
              <PhoneMockup />
            </div>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------ PRA QUEM É */}
      <section className="py-20 sm:py-28 border-t border-ink-900/10">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>Pra quem é</Eyebrow>
            <h2 className="font-serif text-3xl sm:text-4xl text-ink-900">{pacFit.title}</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            <div className="rounded-2xl border border-gold-500/40 bg-gold-500/[0.06] p-8">
              <p className="font-serif text-xl text-gold-300">É pra você se…</p>
              <ul className="mt-6 space-y-4">
                {pacFit.isFor.map((item) => (
                  <li key={item} className="flex gap-3 text-ink-900/85 leading-relaxed">
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-ink-900/10 p-8">
              <p className="font-serif text-xl text-ink-900/50">Não é pra você se…</p>
              <ul className="mt-6 space-y-4">
                {pacFit.isNotFor.map((item) => (
                  <li key={item} className="flex gap-3 text-ink-900/50 leading-relaxed">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-ink-900/25 text-[10px]">
                      ✕
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------ AUTORA */}
      <section className="py-20 sm:py-28 bg-cream-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-[400px] aspect-[4/5] overflow-hidden rounded-[2rem] border border-gold-500/20">
                <Image
                  src={authorSrc}
                  alt="Catharine Nabuco segurando seu livro Cartas para um Vestibulando"
                  fill
                  sizes="(min-width: 1024px) 32vw, 90vw"
                  className="object-cover"
                  style={{ objectPosition: "50% 35%" }}
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <Eyebrow>Quem te guia</Eyebrow>
              <h2 className="font-serif text-3xl sm:text-4xl text-ink-900 leading-tight">
                Oi, eu sou a Cathy.{" "}
                <span className="italic text-plum-500">E eu também travava na conta.</span>
              </h2>
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-ink-900/75">
                {pacAuthorBio}
              </p>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-ink-900/10 pt-8">
                {pacAuthorStats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-serif text-2xl text-gold-300">{stat.value}</p>
                    <p className="mt-1 text-xs text-ink-900/55">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------ DEPOIMENTO */}
      <section className="py-20 sm:py-28 border-t border-ink-900/10">
        <Container>
          <figure className="max-w-3xl mx-auto text-center">
            <span className="font-serif text-7xl leading-none text-gold-500/40" aria-hidden>
              &ldquo;
            </span>
            <blockquote className="-mt-4 font-serif italic text-3xl sm:text-5xl leading-tight text-ink-900 text-balance">
              {pacTestimonial.quote}
            </blockquote>
            <figcaption className="mt-6 text-xs font-semibold uppercase tracking-widest2 text-plum-500">
              {pacTestimonial.attribution}
            </figcaption>
          </figure>
        </Container>
      </section>

      {/* ------------------------------------------------------------ OFERTA */}
      <section id="oferta" className="scroll-mt-24 py-20 sm:py-28 border-t border-ink-900/10 bg-cream-100/50">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>Sua vaga</Eyebrow>
            <h2 className="font-serif text-3xl sm:text-5xl text-ink-900 leading-tight text-balance">
              Recupere sua base e ganhe segurança pra prova.
            </h2>
          </div>

          <div className="mt-12 mx-auto max-w-xl rounded-[2rem] bg-ink-900 text-cream p-8 sm:p-12 shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between gap-4">
              <p className="font-serif text-2xl">Método PAC</p>
              {discount > 0 && (
                <span className="rounded-full bg-cream px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-gold-300">
                  {discount}% off
                </span>
              )}
            </div>

            <ul className="mt-8 space-y-3.5">
              {pacIncludes.map((item) => (
                <li key={item} className="flex gap-3 text-sm sm:text-base text-cream/85">
                  <svg viewBox="0 0 20 20" aria-hidden className="h-5 w-5 shrink-0 text-plum-700 mt-0.5">
                    <path
                      d="M5 10.4l3.2 3.2L15 6.8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 border-t border-cream/15 pt-8 text-center">
              <p className="text-sm text-cream/50">
                de <span className="line-through">{formatPrice(pacPricing.originalPrice)}</span> por
              </p>
              <p className="mt-1 font-serif text-5xl sm:text-6xl text-cream">
                {formatPrice(pacPricing.price)}
              </p>
              <p className="mt-2 text-xs text-cream/55">Pix ou cartão · acesso liberado na hora</p>

              <CTA
                href={checkout}
                variant="primary"
                external
                className="mt-8 w-full py-4 bg-cream text-ink-900 hover:bg-gold-500 hover:text-cream-900"
              >
                Garantir minha vaga
              </CTA>
              {siteConfig.pacCohort && (
                <p className="mt-4 text-xs text-cream/55">{siteConfig.pacCohort}</p>
              )}
            </div>
          </div>

          <div className="mt-8 mx-auto max-w-xl flex items-start gap-4 rounded-2xl border border-gold-500/30 p-6">
            <svg viewBox="0 0 24 24" aria-hidden className="h-9 w-9 shrink-0 text-gold-500">
              <path
                d="M12 2.5l7.5 3v6c0 4.6-3.2 8.6-7.5 10-4.3-1.4-7.5-5.4-7.5-10v-6l7.5-3z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
              <path
                d="M8.5 12.2l2.4 2.4 4.6-4.8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-sm text-ink-900/75 leading-relaxed">{pacGuarantee}</p>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------ FAQ */}
      <section className="py-20 sm:py-28 border-t border-ink-900/10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <Eyebrow>Dúvidas</Eyebrow>
              <h2 className="font-serif text-3xl sm:text-4xl text-ink-900 leading-tight">
                Perguntas frequentes
              </h2>
              <p className="mt-4 text-sm text-ink-900/60">
                Ficou alguma?{" "}
                <a
                  href={siteConfig.social.instagram.replace("/reels/", "")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-plum-500 underline underline-offset-4 hover:text-gold-300"
                >
                  Me chama no Instagram
                </a>
                .
              </p>
            </div>
            <div className="lg:col-span-8">
              {pacFaq.map((item) => (
                <details
                  key={item.q}
                  className="group border-b border-ink-900/10 first:border-t py-1"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-base sm:text-lg font-semibold text-ink-900 [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink-900/20 text-gold-300 transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="pb-6 pr-12 text-sm sm:text-base text-ink-900/65 leading-relaxed">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------ CTA FINAL */}
      <section className="pb-28 lg:pb-24 pt-4">
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] border border-gold-500/30 bg-cream-50 px-8 py-16 sm:px-16 sm:py-20 text-center">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-50"
              style={{
                background:
                  "radial-gradient(circle at 50% 0%, #C9A24C33, transparent 60%)",
              }}
            />
            <div className="relative">
              <h2 className="font-serif text-3xl sm:text-5xl text-ink-900 max-w-2xl mx-auto text-balance leading-tight">
                A próxima questão que você perder{" "}
                <span className="italic text-plum-500">não precisa ser na conta.</span>
              </h2>
              <div className="mt-9">
                <CTA href={checkout} variant="primary" external className="px-10 py-4">
                  Entrar no PAC agora
                </CTA>
              </div>
              <p className="mt-4 text-xs text-ink-900/50">Garantia de 7 dias · acesso imediato</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------ BARRA FIXA MOBILE */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-900/10 bg-cream/95 backdrop-blur-md lg:hidden">
        <div className="flex items-center justify-between gap-4 px-5 py-3">
          <div className="leading-tight">
            <p className="text-[11px] text-ink-900/50 line-through">
              {formatPrice(pacPricing.originalPrice)}
            </p>
            <p className="font-serif text-xl text-ink-900">{formatPrice(pacPricing.price)}</p>
          </div>
          <CTA href={checkout} variant="primary" external className="px-6 py-3 text-xs">
            Garantir vaga
          </CTA>
        </div>
      </div>
    </>
  );
}
