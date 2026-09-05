"use client";

import { useMemo, useState } from "react";
import type { Video } from "@/types";
import { VideoGrid } from "@/components/VideoGrid";
import { CategoryFilter, type FilterOption } from "@/components/CategoryFilter";
import { SearchBar } from "@/components/SearchBar";

const filterOptions: FilterOption[] = [
  { value: "todas", label: "Todas" },
  { value: "vestibular", label: "Vestibular" },
  { value: "estudos", label: "Estudos" },
  { value: "ia", label: "IA" },
  { value: "performance", label: "Performance" },
  { value: "produtividade", label: "Produtividade" },
];

export function AulasExplorer({
  videos,
  initialCategory = "todas",
}: {
  videos: Video[];
  initialCategory?: string;
}) {
  const [category, setCategory] = useState(initialCategory);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return videos.filter((video) => {
      const matchesCategory = category === "todas" || video.category === category;
      const matchesQuery = video.title.toLowerCase().includes(query.trim().toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [videos, category, query]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
        <CategoryFilter options={filterOptions} active={category} onChange={setCategory} />
        <SearchBar value={query} onChange={setQuery} />
      </div>

      <div className="mt-10">
        <VideoGrid videos={filtered} />
      </div>
    </div>
  );
}
