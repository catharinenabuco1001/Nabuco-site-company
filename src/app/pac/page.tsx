import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { CTA } from "@/components/ui/CTA";
import { siteConfig } from "@/data/site";
import {
  pacOfferPrice,
  pacFit,
  pacChats,
  pacVideos,
  type PacChat,
  pacAuthorBio,
  pacAuthorStats,
  pacMistakes,
  pacModules,
  pacIncludes,
  pacGuarantee,
  pacFaq,
  pacParents,
} from "@/data/pac";
import { PacBuyButton, PacNotice } from "@/components/PacLaunch";
import { PacForWhom } from "@/components/PacForWhom";
import {
  PacFaqDescontoResposta,
  PacMobileBarPreco,
  PacOfertaPreco,
  PacPromoLinha,
} from "@/components/PacOferta";
import { publicImageExists, publicImageSize } from "@/lib/media";
import { PROVAS, PROVAS_DIR, PROVAS_RODAPE, altProva, nomeProva } from "@/data/pac-provas";
import { PacPrintsGrid, PacResultados } from "@/components/PacProvas";
import { PAC_AVISO_ANTES } from "@/lib/pac-launch";

// Foto abaixo de "O problema não é matemática. É a conta." Troque aqui.
const FOTO_SECAO_CONTA = {
  src: "/images/pac/dentro-do-pac.webp",
  w: 1386,
  h: 766,
  alt: "Aula do Método PAC com Catharine Nabuco e um exercício de expressões numéricas",
  legenda: "Uma aula do PAC por dentro.",
};

// Foto ao lado das abas "Será que o PAC é para mim?". Troque aqui.
const FOTO_BASTIDORES = {
  src: "/images/pac/bastidores.png",
  w: 411,
  h: 553,
  alt: "Catharine Nabuco gravando uma aula, com o celular filmando em primeiro plano",
  legenda: "Bastidores da gravação das aulas.",
};

const ogTitle = `Método PAC: ${PAC_AVISO_ANTES}`;
const ogDescription = `${PAC_AVISO_ANTES}. Você entende a matéria, mas trava na conta? Recupere a base de matemática em mini-aulas de 10 minutos.`;

export const metadata: Metadata = {
  title: ogTitle,
  description: `${PAC_AVISO_ANTES}. Você entende a matéria, mas trava na conta? O PAC reconstrói a matemática básica em mini-aulas de 10 minutos, pra você calcular com segurança no ENEM e no vestibular.`,
  openGraph: {
    title: ogTitle,
    description: ogDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: ogDescription,
  },
};

// Palavra-chave em dourado nos títulos de seção (sem mudar o texto).
function Destaque({ children }: { children: React.ReactNode }) {
  return <span className="italic text-[#C9A24C]">{children}</span>;
}

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

function ChatCard({ chat }: { chat: PacChat }) {
  return (
    <figure
      className={`mb-4 break-inside-avoid rounded-2xl border p-4 ${
        chat.highlight
          ? "border-gold-500/50 bg-gold-500/[0.07]"
          : "border-ink-900/10 bg-cream-50/60"
      }`}
    >
      <figcaption className="flex items-center gap-3 pb-3 border-b border-ink-900/10">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-500/20 font-serif text-gold-300">
          {chat.name.startsWith("Alun") ? "★" : chat.name[0]}
        </span>
        <span className="min-w-0">
          <span className="block text-sm font-semibold text-ink-900">{chat.name}</span>
          <span className="block text-[11px] text-ink-900/60">{chat.context}</span>
        </span>
      </figcaption>
      <div className="mt-3 flex flex-col gap-1.5">
        {chat.messages.map((m, j) => (
          <p
            key={j}
            className={`max-w-[92%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${
              m.from === "cathy"
                ? "self-end rounded-br-md bg-gold-500 text-cream-900"
                : "self-start rounded-bl-md bg-ink-900/[0.08] text-ink-900"
            }`}
          >
            {m.text}
            <span
              className={`ml-2 align-bottom text-[10px] ${
                m.from === "cathy" ? "text-cream-900/60" : "text-ink-900/40"
              }`}
            >
              {m.time}
            </span>
          </p>
        ))}
      </div>
    </figure>
  );
}

export default function PacPage() {
  const retratoSrc = publicImageExists("images/pac-hero.jpg")
    ? "/images/pac-hero.jpg"
    : "/images/hero-retrato.jpeg";
  // Hero: foto horizontal dando aula no quadro (rosto no centro). Sem ela,
  // volta pro retrato.
  const heroAula = publicImageExists("images/pac/aula-quadro.webp");
  const heroSrc = heroAula ? "/images/pac/aula-quadro.webp" : retratoSrc;
  const authorSrc = publicImageExists("images/sobre.jpg") ? "/images/sobre.jpg" : retratoSrc;
  const fotoContaExiste = publicImageExists(FOTO_SECAO_CONTA.src.slice(1));
  const fotoBastidores = publicImageExists(FOTO_BASTIDORES.src.slice(1)) ? FOTO_BASTIDORES : null;
  // Provas sociais (src/data/pac-provas.ts): só autorizadas; item com arquivo
  // só aparece se o print existir em public/images/pac/provas/.
  const provas = PROVAS.filter(
    (p) => p.autorizado && (!p.arquivo || publicImageExists(`${PROVAS_DIR}/${p.arquivo}`))
  );
  const printDe = (p: (typeof provas)[number]) => {
    if (!p.arquivo) return undefined;
    const src = `${PROVAS_DIR}/${p.arquivo}`;
    const size = publicImageSize(src) ?? { w: 720, h: 1280 };
    return { src: `/${src}`, alt: altProva(p), legenda: p.frase, ...size };
  };
  // Bloco A (logo abaixo do topo): cards com "Ver mensagem".
  const provaCards = provas
    .filter((p) => p.bloco === "A")
    .map((p) => ({
      nome: nomeProva(p),
      contexto: p.contexto,
      chip: p.chip,
      frase: p.frase,
      semNome: !p.nome.trim(),
      print: printDe(p),
    }));
  // Bloco B (antes do preço): galeria com os prints do bloco B.
  const printsGrid = provas
    .filter((p) => p.bloco === "B")
    .flatMap((p) => {
      const print = printDe(p);
      return print ? [print] : [];
    });
  // Depoimentos em texto: o "Tirei 8" virou o primeiro card de resultado.
  const chatsTexto = pacChats.filter((c) => !c.highlight);
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
              <PacNotice
                badge
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-wide text-gold-300"
              />
              <h1 className=" font-serif text-[2.6rem] sm:text-6xl lg:text-[4.2rem] text-ink-900 leading-[1.02] text-balance">
                Você entende a matéria.{" "}
                <Destaque>Trava na conta.</Destaque>
              </h1>
              <p className="mt-4 font-serif text-xl sm:text-2xl text-ink-900/80">
                Trava no enunciado? É aqui que o PAC começa.
              </p>
              <p className="mt-6 pac-text text-ink-700/80">
                O <strong className="text-ink-900 font-semibold">Método PAC</strong> reconstrói a
                matemática básica que ficou pra trás (fração, potência, radiciação, fatoração) em
                mini-aulas de 10 minutos. Pra você parar de perder questão na última linha da conta.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <CTA href="#sera-que-o-pac-e-para-mim" variant="primary" className="px-8 py-4">
                  Quero destravar minha base
                </CTA>
                <CTA href="#por-dentro-do-pac" variant="secondary" className="px-7 py-4">
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
              <div className={`relative mx-auto ${heroAula ? "max-w-[560px]" : "max-w-[420px] px-6 sm:px-0"}`}>
                <div
                  className={`relative w-full overflow-hidden rounded-[2rem] border border-gold-500/25 ${
                    heroAula ? "aspect-[4/3]" : "aspect-[4/5]"
                  }`}
                >
                  <Image
                    src={heroSrc}
                    alt={
                      heroAula
                        ? "Catharine Nabuco dando aula de trigonometria em frente ao quadro verde"
                        : "Catharine Nabuco, criadora do Método PAC"
                    }
                    fill
                    priority
                    quality={90}
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="object-cover"
                    style={{ objectPosition: heroAula ? "50% 35%" : "70% 25%" }}
                  />
                </div>

                {/* Cartões: no desktop por cima das bordas da foto (longe do
                    rosto e das mãos), com fundo sólido; no celular, abaixo dela. */}
                <div className="mt-4 flex flex-wrap gap-3 lg:mt-0 lg:block">
                  <div className="rounded-2xl border border-[#C9A24C]/70 bg-[#0F2E22]/[0.92] px-4 py-3 shadow-xl shadow-black/30 lg:absolute lg:-left-10 lg:top-6">
                    <p className="text-[10px] uppercase tracking-widest2 text-[#C9A24C] font-semibold">
                      Produto notável
                    </p>
                    <p className="mt-1 font-serif text-base sm:text-lg text-[#F2F0EB] whitespace-nowrap">
                      (a + b)² = a² + <span className="text-[#C9A24C]">2ab</span> + b²
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#C9A24C]/70 bg-[#0F2E22]/[0.92] px-5 py-4 text-[#F2F0EB] shadow-xl shadow-black/40 lg:absolute lg:-right-8 lg:-bottom-6">
                    <p className="text-[10px] uppercase tracking-widest2 font-semibold text-[#C9A24C]">
                      Em 1 mês de PAC
                    </p>
                    <p className="mt-1 font-serif text-3xl leading-none">
                      5 <span className="text-[#C9A24C]">→</span> 8
                    </p>
                    <p className="mt-1 text-[11px] text-[#F2F0EB]/70">nota de uma aluna</p>
                  </div>
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

      {/* ------------------------------------------------------------ PROVAS (BLOCO A) */}
      {provaCards.length > 0 && (
        <section className="py-16 sm:py-20">
          <Container>
            <h2 className="text-center font-serif text-3xl sm:text-5xl text-ink-900 leading-tight text-balance">
              Não sou eu que tô dizendo. <Destaque>São eles.</Destaque>
            </h2>
            <div className="mt-10">
              <PacResultados cards={provaCards} />
            </div>
          </Container>
        </section>
      )}

      {/* ------------------------------------------------------------ ERROS */}
      <section className="py-20 sm:py-28 border-t border-ink-900/10 bg-cream-100/50">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Seja honesto</Eyebrow>
            <h2 className="font-serif text-3xl sm:text-5xl text-ink-900 leading-tight text-balance">
              Qual desses você já fez <Destaque>numa prova?</Destaque>
            </h2>
            <p className="mt-4 pac-text mx-auto text-ink-900/65">
              Quase todo mundo já errou pelo menos um. Não é falta de inteligência, é base que
              ficou com buraco. E cada um desses tem uma aula no PAC.
            </p>
          </div>

          {/* Erro × correto lado a lado (empilha no mobile). Vermelho #F2A5A5 e
              verde #86DBA0 passam de 6:1 de contraste sobre o card (#173B2C). */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-4">
            {pacMistakes.map((m) => (
              <div key={m.wrong} className="rounded-2xl border border-ink-900/10 bg-cream-50 p-6">
                <p className="text-[10px] uppercase tracking-widest2 font-semibold text-ink-900/60">
                  {m.module}
                </p>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="rounded-xl border border-[#F2A5A5]/30 bg-[#F2A5A5]/[0.06] p-4">
                    <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-[#F2A5A5]">
                      <span aria-hidden>✕</span> Erro comum
                    </p>
                    <p className="mt-2 font-serif text-xl sm:text-2xl text-[#F2A5A5]">
                      {m.wrong}
                    </p>
                  </div>
                  <div className="rounded-xl border border-[#86DBA0]/30 bg-[#86DBA0]/[0.06] p-4">
                    <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-[#86DBA0]">
                      <span aria-hidden>✓</span> Correto
                    </p>
                    <p className="mt-2 font-serif text-xl sm:text-2xl text-[#86DBA0]">{m.right}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------ SERÁ QUE É PRA MIM */}
      <section id="sera-que-o-pac-e-para-mim" className="scroll-mt-24 py-20 sm:py-28 border-t border-ink-900/10">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-5xl text-ink-900 leading-tight text-balance">
              Será que o PAC é <Destaque>para mim?</Destaque>
            </h2>
            <p className="mt-4 pac-text mx-auto text-ink-900/65">Clique no seu caso e veja se é para você.</p>
          </div>
          <PacForWhom foto={fotoBastidores} />
        </Container>
      </section>

      {/* ------------------------------------------------------------ POR QUE */}
      <section className="py-20 sm:py-28 border-t border-ink-900/10 bg-cream-100/50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <Eyebrow>Por que você trava</Eyebrow>
              <h2 className="font-serif text-3xl sm:text-4xl text-ink-900 leading-tight text-balance">
                O problema não é matemática. <Destaque>É a conta.</Destaque>
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 pac-text text-ink-900/75">
              <p>
                Nossa relação com os números se forma cedo, lá no fundamental. Se ficou um buraco
                ali (um professor que passou rápido, a pandemia, a vergonha de perguntar), ele
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
          {fotoContaExiste && (
            <figure className="mx-auto mt-14 max-w-[720px]">
              <div className="aspect-video overflow-hidden rounded-2xl border border-[#C9A24C]/60 bg-[#0F2E22]">
                <Image
                  src={FOTO_SECAO_CONTA.src}
                  alt={FOTO_SECAO_CONTA.alt}
                  width={FOTO_SECAO_CONTA.w}
                  height={FOTO_SECAO_CONTA.h}
                  quality={90}
                  loading="lazy"
                  sizes="(min-width: 768px) 720px, 100vw"
                  className="h-full w-full object-contain"
                />
              </div>
              <figcaption className="mt-2 text-center text-sm text-[#F2F0EB]/70">
                {FOTO_SECAO_CONTA.legenda}
              </figcaption>
            </figure>
          )}
        </Container>
      </section>

      {/* ------------------------------------------------------------ POR DENTRO */}
      <section
        id="por-dentro-do-pac"
        className="scroll-mt-24 py-20 sm:py-28 border-t border-ink-900/10"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <Eyebrow>Por dentro do PAC</Eyebrow>
              <h2 className="font-serif text-3xl sm:text-4xl text-ink-900 leading-tight">
                Do zero à fatoração, <Destaque>sem pular etapa.</Destaque>
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
                      <p className="text-[17px] sm:text-lg font-semibold text-ink-900">{m.title}</p>
                      {m.desc && (
                        <p className="mt-1 pac-text text-ink-900/60">{m.desc}</p>
                      )}
                      {m.lessons && (
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {m.lessons.map((lesson) => (
                            <li
                              key={lesson}
                              className="rounded-full border border-gold-500/40 px-3 py-1 text-xs text-ink-900/75"
                            >
                              {lesson}
                            </li>
                          ))}
                        </ul>
                      )}
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
      <section className="py-20 sm:py-28 border-t border-ink-900/10 bg-cream-100/50">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>Pra quem é</Eyebrow>
            <h2 className="font-serif text-3xl sm:text-4xl text-ink-900">
              {pacFit.title.split(pacFit.highlight).flatMap((part, i) =>
                i === 0 ? [part] : [<Destaque key={i}>{pacFit.highlight}</Destaque>, part]
              )}
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            <div className="rounded-2xl border border-gold-500/40 bg-gold-500/[0.06] p-8">
              <p className="font-serif text-xl text-gold-300">É pra você se…</p>
              <ul className="mt-6 space-y-4">
                {pacFit.isFor.map((item) => (
                  <li key={item} className="flex gap-3 text-[17px] sm:text-lg leading-[1.6] text-ink-900/85">
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
                  <li key={item} className="flex gap-3 text-[17px] sm:text-lg leading-[1.6] text-ink-900/50">
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
                <Destaque>E eu também travava na conta.</Destaque>
              </h2>
              <p className="mt-6 pac-text text-ink-900/75">
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

      {/* ------------------------------------------------------------ DEPOIMENTOS (BLOCO B) */}
      <section id="depoimentos" className="py-20 sm:py-28 border-t border-ink-900/10">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>Quem já está no PAC</Eyebrow>
            <p className="text-sm text-ink-900/65">
              Mensagens reais que recebi de alunos no WhatsApp.
            </p>
          </div>

          {/* Prints */}
          {printsGrid.length > 0 && (
            <div className="mt-10">
              <PacPrintsGrid prints={printsGrid} />
            </div>
          )}

          {/* Depoimentos em texto */}
          <div className="mt-16 columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
            {chatsTexto.map((chat, i) => (
              <ChatCard key={i} chat={chat} />
            ))}
          </div>

          {pacVideos.length > 0 && (
            <div className="mt-16">
              <p className="text-center text-xs font-semibold uppercase tracking-widest2 text-ink-900/45">
                Em vídeo
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-6">
                {pacVideos.map((v) => (
                  <figure
                    key={v.youtubeId}
                    className={v.vertical ? "w-[260px]" : "w-full max-w-2xl"}
                  >
                    <div
                      className={`relative w-full overflow-hidden rounded-3xl border border-gold-500/30 bg-cream-50 ${
                        v.vertical ? "aspect-[9/16]" : "aspect-video"
                      }`}
                    >
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}?rel=0&modestbranding=1`}
                        title={`Depoimento de ${v.name} sobre o Método PAC`}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                    <figcaption className="mt-3 text-center">
                      <span className="block text-sm font-semibold text-ink-900">{v.name}</span>
                      <span className="block text-xs text-ink-900/55">{v.caption}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          )}

          <p className="mt-12 text-center text-xs text-ink-900/60">{PROVAS_RODAPE}</p>
        </Container>
      </section>

      {/* ------------------------------------------------------------ OFERTA */}
      <section id="oferta" className="scroll-mt-24 py-20 sm:py-28 border-t border-ink-900/10 bg-cream-100/50">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>Sua vaga</Eyebrow>
            <h2 className="font-serif text-3xl sm:text-5xl text-ink-900 leading-tight text-balance">
              Recupere sua base e ganhe <Destaque>segurança</Destaque> para a prova.
            </h2>
          </div>

          <div className="mt-12 mx-auto max-w-xl rounded-[2rem] bg-ink-900 text-cream p-8 sm:p-12 shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between gap-4">
              <p className="font-serif text-2xl">{pacOfferPrice.title}</p>
            </div>

            <ul className="mt-8 space-y-5">
              {pacIncludes.map((item) => (
                <li key={item} className="flex gap-3 text-[17px] sm:text-lg leading-[1.6] text-cream/85">
                  <span aria-hidden className="shrink-0 font-bold text-[#C9A24C]">
                    ✔
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <PacOfertaPreco />
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
            <p className="pac-text text-ink-900/75">{pacGuarantee}</p>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------ PAIS */}
      <section id="pais" className="scroll-mt-24 py-20 sm:py-28 border-t border-ink-900/10">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>Para pais e responsáveis</Eyebrow>
            <h2 className="font-serif text-3xl sm:text-5xl text-ink-900 leading-tight text-balance">
              Seu filho quer fazer <Destaque>o PAC?</Destaque>
            </h2>
          </div>
          <ul className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {pacParents.map((item) => (
              <li key={item.title} className="rounded-2xl border border-ink-900/10 bg-cream-50/60 p-6 sm:p-7">
                <p className="font-serif text-xl text-ink-900 leading-snug">{item.title}</p>
                <p className="mt-2 pac-text text-ink-900/65">{item.desc}</p>
                {item.promo && <PacPromoLinha />}
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <PacBuyButton className="px-10 py-4">
              Garantir a vaga
            </PacBuyButton>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------ FAQ */}
      <section className="py-20 sm:py-28 border-t border-ink-900/10 bg-cream-100/50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <Eyebrow>Dúvidas</Eyebrow>
              <h2 className="font-serif text-3xl sm:text-4xl text-ink-900 leading-tight">
                Perguntas <Destaque>frequentes</Destaque>
              </h2>
              <p className="mt-4 text-sm text-ink-900/60">
                Ficou alguma?{" "}
                Escreve pra{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-plum-500 underline underline-offset-4 hover:text-gold-300 break-all"
                >
                  {siteConfig.contact.email}
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
                  {item.desconto ? (
                    <PacFaqDescontoResposta className="pb-6 pr-12 pac-text text-ink-900/65" />
                  ) : (
                    <p className="pb-6 pr-12 pac-text text-ink-900/65">{item.a}</p>
                  )}
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
                <Destaque>não precisa ser na conta.</Destaque>
              </h2>
              <div className="mt-9 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
                {/* Retrato aproximado no rosto (a foto original é de meio corpo). */}
                <div className="h-40 w-40 shrink-0 overflow-hidden rounded-full border border-[#C9A24C]/60">
                  <Image
                    src={retratoSrc}
                    alt="Catharine Nabuco"
                    width={320}
                    height={320}
                    quality={90}
                    loading="lazy"
                    sizes="320px"
                    className="h-full w-full scale-[1.9] object-cover"
                    style={{ objectPosition: "70% 22%", transformOrigin: "94% 44%" }}
                  />
                </div>
                <PacBuyButton className="px-10 py-4">
                  Entrar no PAC agora
                </PacBuyButton>
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
            <PacMobileBarPreco className="text-sm font-semibold text-ink-900" />
            <PacNotice
              className="block text-[11px] font-semibold text-plum-500"
            />
          </div>
          <PacBuyButton className="px-6 py-3 text-xs">
            Garantir vaga
          </PacBuyButton>
        </div>
      </div>
    </>
  );
}
