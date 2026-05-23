export type AppCategory =
  | "All"
  | "Weather"
  | "Utilities"
  | "Govt"
  | "Tools"
  | "Fun"
  | "News"
  | "Transport"
  | "Health"
  | "Education";

export interface App {
  id: string;
  name: string;
  description: string;
  url: string;
  category: Exclude<AppCategory, "All">;
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
