"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SearchBar } from "@/components/SearchBar";
import { VideoCard } from "@/components/VideoCard";
import { VideoPlayerFrame } from "@/components/VideoPlayerFrame";
import { subjectOrder, subjectLabels, type Subject } from "@/data/video-overrides";
import { getVideoThumbnail } from "@/lib/utils";
import type { LibraryItem } from "@/lib/library";

type Group = { subject: Subject; name: string; items: LibraryItem[] };

// Todo o miolo interativo de /aulas: o player em destaque, a lista "A
// seguir" e a biblioteca agrupada por matéria com busca. Um clique em
// qualquer aula do YouTube troca o vídeo do player (estado local); TikToks
// sempre abrem no próprio TikTok, nunca tentam tocar aqui dentro.
export function AulasLibrary({ items }: { items: LibraryItem[] }) {
  const youtubeItems = useMemo(() => items.filter((i) => i.platform === "youtube"), [items]);
  const initialId = youtubeItems.find((i) => i.featured)?.id ?? youtubeItems[0]?.id;
  const [currentId, setCurrentId] = useState<string | undefined>(initialId);
  const [query, setQuery] = useState("");

  const current = youtubeItems.find((i) => i.id === currentId);
  const upNext = youtubeItems.filter((i) => i.id !== currentId).slice(0, 5);

  const q = query.trim().toLowerCase();
  const visible = q
    ? items.filter(
        (i) => i.title.toLowerCase().includes(q) || i.displayTag.toLowerCase().includes(q)
      )
    : items;

  const groups: Group[] = subjectOrder
    .map((subject) => {
      const groupItems = visible.filter((i) => i.subject === subject);
      return groupItems.length > 0 ? { subject, name: subjectLabels[subject], items: groupItems } : null;
    })
    .filter((g): g is Group => g !== null);

  return (
    <>
      <section className="pt-9 pb-2">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-7 items-start">
            <div>
              <VideoPlayerFrame video={current} />
              <div className="mt-5">
                {current ? (
                  <>
                    <p className="text-xs font-sans font-semibold uppercase tracking-widest2 text-plum-500 mb-2.5">
                      {current.displayTag}
                    </p>
                    <h2 className="font-serif text-2xl sm:text-[28px] leading-tight text-ink-900">
                      {current.title}
                    </h2>
                    {current.description && (
                      <p className="mt-3 max-w-[60ch] text-sm leading-relaxed text-ink-900/75 line-clamp-3">
                        {current.description}
                      </p>
                    )}
                  </>
                ) : (
                  <p className="text-sm text-ink-900/60">Nenhuma aula disponível no momento.</p>
                )}
              </div>
            </div>

            <div className="border border-ink-900/14">
              <p className="px-5 py-3.5 text-xs font-sans font-semibold uppercase tracking-widest2 text-ink-900/60 border-b border-ink-900/14">
                A seguir
              </p>
              {upNext.length === 0 ? (
                <p className="px-5 py-4 text-sm text-ink-900/50">Nenhuma outra aula ainda.</p>
              ) : (
                upNext.map((item) => {
                  const thumb = getVideoThumbnail(item);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setCurrentId(item.id)}
                      className="flex w-full items-center gap-3 px-5 py-3.5 border-b border-ink-900/8 last:border-b-0 text-left transition-colors hover:bg-cream-50"
                    >
                      <span className="relative w-24 aspect-video shrink-0 overflow-hidden image-placeholder">
                        {thumb && (
                          <Image src={thumb} alt="" fill sizes="96px" className="object-cover" />
                        )}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[13.5px] leading-snug text-ink-900">
                          {item.title}
                        </span>
                        <span className="mt-1 block text-[11px] uppercase tracking-widest2 text-plum-500">
                          {item.displayTag}
                        </span>
                      </span>
                    </button>
                  );
                })
              )}
            </div>
          </div>
        </Container>
      </section>

      <section id="todas-as-aulas" className="pt-16">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-ink-900/12">
            <div>
              <p className="text-xs font-sans font-semibold uppercase tracking-widest2 text-plum-500 mb-2.5">
                Por matéria e tema
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-ink-900">Todas as aulas</h2>
            </div>
            <SearchBar value={query} onChange={setQuery} placeholder="Buscar aula..." />
          </div>

          {groups.map((group) => (
            <div key={group.subject} className="pt-10">
              <div className="flex items-baseline gap-3.5 flex-wrap mb-5">
                <h3 className="font-serif text-2xl text-ink-900">{group.name}</h3>
                <span className="text-xs uppercase tracking-widest2 text-ink-900/55">
                  {group.items.length === 1 ? "1 aula" : `${group.items.length} aulas`}
                </span>
              </div>
              <div className="flex gap-5 overflow-x-auto pb-2.5 no-scrollbar">
                {group.items.map((item) =>
                  item.platform === "youtube" ? (
                    <VideoCard
                      key={item.id}
                      video={item}
                      tag={item.displayTag}
                      onSelect={() => setCurrentId(item.id)}
                    />
                  ) : (
                    <VideoCard key={item.id} video={item} tag={item.displayTag} href={item.url} />
                  )
                )}
              </div>
            </div>
          ))}

          {groups.length === 0 && (
            <div className="py-16 text-center">
              <p className="font-serif text-xl text-ink-900">Nenhuma aula encontrada.</p>
              <p className="mt-2 text-sm text-ink-900/60">Tente outro termo de busca.</p>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
