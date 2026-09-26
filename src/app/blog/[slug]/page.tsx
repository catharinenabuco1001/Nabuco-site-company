import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { CTA } from "@/components/ui/CTA";
import { PostBody } from "@/components/PostBody";
import { posts, getPost, readingTime } from "@/data/posts";
import { siteConfig } from "@/data/site";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: ["Catharine Nabuco"],
    },
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: "Catharine Nabuco", url: siteConfig.url },
    url: `${siteConfig.url}/blog/${post.slug}`,
    inLanguage: "pt-BR",
  };

  return (
    <article className="pt-12 sm:pt-16 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Container className="max-w-3xl">
        <Link
          href="/blog"
          className="text-xs font-semibold uppercase tracking-wide text-ink-900/50 hover:text-gold-300"
        >
          ← Todos os textos
        </Link>

        {post.tags && (
          <div className="mt-10 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-gold-500/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-gold-300"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <h1 className="mt-6 font-serif text-4xl sm:text-6xl text-ink-900 leading-[1.05] text-balance">
          {post.title}
        </h1>

        <div className="mt-8 flex items-center gap-4 border-b border-ink-900/10 pb-8">
          <Image
            src={siteConfig.headerAvatar}
            alt="Catharine Nabuco"
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover"
            style={{ objectPosition: "73% 30%" }}
          />
          <div className="text-sm">
            <p className="font-semibold text-ink-900">Catharine Nabuco</p>
            <p className="text-ink-900/50">
              {formatDate(post.date)} · {readingTime(post)} min de leitura
            </p>
          </div>
        </div>

        <div className="mt-10">
          <PostBody body={post.body} />
        </div>

        {post.signature && (
          <p className="mt-12 whitespace-pre-line font-serif text-xl italic text-ink-900/75">
            {post.signature}
          </p>
        )}

        <div className="mt-16 rounded-3xl border border-gold-500/30 bg-cream-50/60 p-8 sm:p-10">
          <p className="font-serif text-2xl text-ink-900">
            Se você sente que decora fórmula mas trava na hora de pensar a questão…
          </p>
          <p className="mt-3 text-ink-900/65">
            O Método PAC foi feito pra isso: reconstruir a base pra você parar de decorar e começar
            a entender.
          </p>
          <div className="mt-6">
            <CTA href="/pac" variant="primary">
              Conhecer o Método PAC
            </CTA>
          </div>
        </div>
      </Container>
    </article>
  );
}
