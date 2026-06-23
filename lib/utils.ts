import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combine class names, then de-duplicate / resolve conflicting Tailwind classes.
 * Standard shadcn `cn` helper.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
