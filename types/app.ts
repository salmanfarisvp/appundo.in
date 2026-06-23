export const UNDO_CATEGORY_TAG = "Und/ഉണ്ട്" as const;
export type CategoryTag = typeof UNDO_CATEGORY_TAG;

export type AppDisplayCategory =
  | "Weather"
  | "Utilities"
  | "Govt"
  | "Tools"
  | "Fun"
  | "News"
  | "Transport"
  | "Travel"
  | "Health"
  | "Education"
  | "Community"
  | "Jobs";

export type AppCategory = "All" | AppDisplayCategory | CategoryTag;

export interface App {
  id: string;
  name: string;
  description: string;
  url: string;
  category: AppDisplayCategory;
  categoryTags?: CategoryTag[];
  tags: string[];
  addedBy?: string;
  addedAt?: string;
  icon?: string;
}

export function isValidApp(obj: unknown): obj is App {
  if (typeof obj !== "object" || obj === null) return false;
  const a = obj as Record<string, unknown>;
  return (
    typeof a.id === "string" &&
    a.id.length > 0 &&
    typeof a.name === "string" &&
    a.name.length > 0 &&
    typeof a.description === "string" &&
    a.description.length > 0 &&
    typeof a.url === "string" &&
    a.url.startsWith("http") &&
    typeof a.category === "string" &&
    Array.isArray(a.tags)
  );
}
