import type { Talk } from "@/types";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function TalkCard({ talk }: { talk: Talk }) {
  return (
    <div className="group grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-5 items-start py-8 border-b border-ink-900/10">
      <ImagePlaceholder label="Palestra" ratio="aspect-[4/3]" className="sm:w-40" />

      <div>
        <h3 className="font-serif text-xl sm:text-2xl text-ink-900 group-hover:text-plum-600 transition-colors">
          {talk.title}
        </h3>
        <p className="mt-2 text-sm text-ink-700/80 leading-relaxed max-w-xl">
          {talk.description}
        </p>

        <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-xs font-sans uppercase tracking-wide text-ink-700/50">
          <div className="flex gap-1.5">
            <dt>Local:</dt>
            <dd>{talk.location ?? "A definir"}</dd>
          </div>
          <div className="flex gap-1.5">
            <dt>Ano:</dt>
            <dd>{talk.year ?? "A definir"}</dd>
          </div>
          <div className="flex gap-1.5">
            <dt>Evento:</dt>
            <dd>{talk.event ?? "A definir"}</dd>
          </div>
        </dl>

        {talk.videoUrl ? (
          <a
            href={talk.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-xs font-sans font-semibold uppercase tracking-wide text-plum-600 underline-grow"
          >
            Assistir vídeo
          </a>
        ) : (
          <span className="mt-3 inline-block text-xs font-sans text-ink-700/40">
            Vídeo em breve
          </span>
        )}
      </div>
    </div>
  );
}
