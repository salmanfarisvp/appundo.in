import { App } from "@/types/app";
import { CATEGORY_META } from "./CategoryFilter";

interface AppCardProps {
  app: App;
}

export default function AppCard({ app }: AppCardProps) {
  const meta = CATEGORY_META[app.category] ?? { emoji: "🔗", color: "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300" };

  return (
    <article className="app-card group">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
            {app.icon ?? meta.emoji}
          </div>
          <div className="min-w-0">
            <h2 className="font-semibold text-gray-900 dark:text-white leading-tight truncate">
              {app.name}
            </h2>
            <span className={`category-pill ${meta.color} mt-0.5 inline-block`}>
              {app.category}
            </span>
          </div>
        </div>

        <a
          href={app.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 p-2 rounded-lg text-gray-400 hover:text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
          aria-label={`Visit ${app.name}`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
        {app.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
        {app.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
          >
            #{tag}
          </span>
        ))}
      </div>
    </article>
  );
}
