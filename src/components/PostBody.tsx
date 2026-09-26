// Renderiza os parágrafos de um texto do blog: **negrito** e "> destaque".
function inline(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-semibold text-ink-900">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    )
  );
}

export function PostBody({ body }: { body: string[] }) {
  return (
    <div className="space-y-6 text-lg sm:text-xl leading-[1.75] text-ink-900/80">
      {body.map((p, i) =>
        p.startsWith("> ") ? (
          <p
            key={i}
            className="my-10 border-l-2 border-gold-500 pl-6 font-serif text-3xl sm:text-4xl italic text-gold-300 leading-snug"
          >
            {inline(p.slice(2))}
          </p>
        ) : (
          <p key={i}>{inline(p)}</p>
        )
      )}
    </div>
  );
}
