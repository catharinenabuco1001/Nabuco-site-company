import type { AITool } from "@/types";
import { frequencyLabels } from "@/data/ai-tools";

export function AIToolCard({ tool }: { tool: AITool }) {
  return (
    <div className="flex flex-col h-full rounded-2xl border border-ink-900/10 bg-cream-50 p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-serif text-xl text-ink-900">{tool.name}</h3>
          <p className="text-xs font-sans uppercase tracking-wide text-ink-700/50 mt-1">
            {tool.category}
          </p>
        </div>
        <span className="shrink-0 text-xs font-sans font-semibold text-plum-600 whitespace-nowrap">
          {frequencyLabels[tool.frequency]}
        </span>
      </div>

      <p className="mt-4 text-sm text-ink-700/80 leading-relaxed">{tool.description}</p>

      <div className="mt-4 rounded-xl bg-ink-900/[0.03] p-4">
        <p className="text-xs font-sans font-semibold uppercase tracking-wide text-ink-700/50 mb-1.5">
          Como eu uso
        </p>
        <p className="text-sm text-ink-800 leading-relaxed">{tool.howIUse}</p>
      </div>

      <a
        href={tool.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-1.5 text-xs font-sans font-semibold uppercase tracking-wide text-plum-600 underline-grow self-start"
      >
        Acessar ferramenta
      </a>
    </div>
  );
}
