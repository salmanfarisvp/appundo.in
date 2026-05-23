"use client";

import { useState, useMemo } from "react";
import { App, AppCategory } from "@/types/app";
import AppCard from "./AppCard";
import CategoryFilter from "./CategoryFilter";
import SearchBar from "./SearchBar";

interface DirectoryClientProps {
  apps: App[];
}

export default function DirectoryClient({ apps }: DirectoryClientProps) {
  const [activeCategory, setActiveCategory] = useState<AppCategory>("All");
  const [search, setSearch] = useState("");

  const counts = useMemo(() => {
    const result: Partial<Record<AppCategory, number>> = { All: apps.length };
    for (const app of apps) {
      result[app.category] = (result[app.category] ?? 0) + 1;
    }
    return result;
  }, [apps]);

  const filtered = useMemo(() => {
    let list = apps;
    if (activeCategory !== "All") {
      list = list.filter((a) => a.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    return list;
  }, [apps, activeCategory, search]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <SearchBar
            value={search}
            onChange={setSearch}
            total={apps.length}
            filtered={filtered.length}
          />
        </div>
      </div>

      <CategoryFilter
        active={activeCategory}
        counts={counts}
        onChange={(cat) => {
          setActiveCategory(cat);
          setSearch("");
        }}
      />

      {filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-400 dark:text-gray-600">
          <span className="text-4xl block mb-3">🔍</span>
          <p className="text-sm">No apps found for &quot;{search}&quot;</p>
          <button
            onClick={() => { setSearch(""); setActiveCategory("All"); }}
            className="mt-3 text-green-600 hover:underline text-sm"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
}
