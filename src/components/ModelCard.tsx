import type { StudyModel } from "@/types";
import { Badge } from "@/components/ui/Badge";

export function ModelCard({ model }: { model: StudyModel }) {
  const available = Boolean(model.fileUrl);

  return (
    <div className="flex flex-col h-full rounded-2xl border border-ink-900/10 bg-cream-50 p-7">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-serif text-xl text-ink-900">{model.title}</h3>
        <Badge tone="gold" className="shrink-0">
          Grátis
        </Badge>
      </div>
      <p className="mt-3 text-sm text-ink-700/80 leading-relaxed flex-1">{model.description}</p>

      {available ? (
        <a
          href={model.fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-ink-900 text-cream px-5 py-2.5 text-xs font-sans font-semibold uppercase tracking-wide transition-colors hover:bg-plum-600"
        >
          Baixar
        </a>
      ) : (
        <span className="mt-6 inline-flex items-center justify-center rounded-full border border-ink-900/15 text-ink-700/40 px-5 py-2.5 text-xs font-sans font-semibold uppercase tracking-wide">
          Em breve
        </span>
      )}
    </div>
  );
}
