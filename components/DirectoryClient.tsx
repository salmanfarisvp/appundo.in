"use client";

import { useState, useMemo } from "react";
import { App, AppCategory, UNDO_CATEGORY_TAG } from "@/types/app";
import AppCard from "./AppCard";
import CategoryFilter from "./CategoryFilter";
import FeaturedBanner from "./FeaturedBanner";
import Header from "./Header";
import MagnifierIcon from "@/components/ui/magnifier-icon";

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
      if (app.categoryTags?.includes(UNDO_CATEGORY_TAG)) {
        result[UNDO_CATEGORY_TAG] = (result[UNDO_CATEGORY_TAG] ?? 0) + 1;
      }
    }
    return result;
  }, [apps]);

  const filtered = useMemo(() => {
    let list = apps;
    if (activeCategory !== "All") {
      if (activeCategory === UNDO_CATEGORY_TAG) {
        list = list.filter((a) => a.categoryTags?.includes(UNDO_CATEGORY_TAG));
      } else {
        list = list.filter((a) => a.category === activeCategory);
      }
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

  const openRandom = () => {
    const app = apps[Math.floor(Math.random() * apps.length)];
    window.open(app.url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* Header with integrated search */}
      <Header search={search} onSearchChange={setSearch} />

      <main className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 space-y-4 sm:space-y-6">
        {/* Featured Banner */}
        <FeaturedBanner total={apps.length} onRandom={openRandom} />

        {/* Category chips */}
        <CategoryFilter
          active={activeCategory}
          counts={counts}
          onChange={(cat) => {
            setActiveCategory(cat);
            setSearch("");
          }}
        />

        {/* Results */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400 dark:text-gray-600">
            <div className="flex justify-center mb-4">
              <MagnifierIcon size={48} />
            </div>
            <p className="text-sm font-medium">No apps found for &quot;{search}&quot;</p>
            <button
              onClick={() => { setSearch(""); setActiveCategory("All"); }}
              className="mt-3 text-green-600 hover:underline text-sm font-medium"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-gray-900 dark:text-white">
                {activeCategory === "All" ? "All Apps" : activeCategory}
                <span className="ml-2 text-sm font-normal text-gray-400 dark:text-gray-500">
                  {filtered.length}
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2.5 sm:gap-3">
              {filtered.map((app) => (
                <AppCard key={app.id} app={app} />
              ))}
            </div>
          </>
        )}
      </main>
    </>
  );
}
