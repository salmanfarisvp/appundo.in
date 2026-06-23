"use client";

import { useState, useRef, useEffect } from "react";
import { AppCategory, UNDO_CATEGORY_TAG } from "@/types/app";
import { ComponentType, RefAttributes } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "@/components/ui/types";

import SparklesIcon from "@/components/ui/sparkles-icon";
import Cloud2Icon from "@/components/ui/cloud-2-icon";
import PlugConnectedIcon from "@/components/ui/plug-connected-icon";
import LibraryIcon from "@/components/ui/library-icon";
import GearIcon from "@/components/ui/gear-icon";
import PartyPopperIcon from "@/components/ui/party-popper-icon";
import FileDescriptionIcon from "@/components/ui/file-description-icon";
import TruckElectricIcon from "@/components/ui/truck-electric-icon";
import AmbulanceIcon from "@/components/ui/ambulance-icon";
import BookIcon from "@/components/ui/book-icon";
import UsersGroupIcon from "@/components/ui/users-group-icon";
import UserCheckIcon from "@/components/ui/user-check-icon";
import GlobeIcon from "@/components/ui/globe-icon";

export type AnimatedIconComponent = ComponentType<
  AnimatedIconProps & RefAttributes<AnimatedIconHandle>
>;

export const CATEGORY_META: Record<
  Exclude<AppCategory, "All">,
  { Icon: AnimatedIconComponent; color: string }
> = {
  [UNDO_CATEGORY_TAG]: {
    Icon: SparklesIcon,
    color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  },
  Weather: {
    Icon: Cloud2Icon,
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  },
  Utilities: {
    Icon: PlugConnectedIcon,
    color: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  },
  Govt: {
    Icon: LibraryIcon,
    color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  },
  Tools: {
    Icon: GearIcon,
    color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  },
  Fun: {
    Icon: PartyPopperIcon,
    color: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400",
  },
  News: {
    Icon: FileDescriptionIcon,
    color: "bg-slate-100 text-slate-700 dark:bg-slate-700/50 dark:text-slate-300",
  },
  Transport: {
    Icon: TruckElectricIcon,
    color: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400",
  },
  Health: {
    Icon: AmbulanceIcon,
    color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  },
  Education: {
    Icon: BookIcon,
    color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400",
  },
  Community: {
    Icon: UsersGroupIcon,
    color: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400",
  },
  Jobs: {
    Icon: UserCheckIcon,
    color: "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400",
  },
  Travel: {
    Icon: GlobeIcon,
    color: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400",
  },
};

const ALL_CATEGORIES: AppCategory[] = [
  "All",
  UNDO_CATEGORY_TAG,
  "Community",
  "Tools",
  "Transport",
  "Govt",
  "Utilities",
  "Weather",
  "Travel",
  "News",
  "Health",
  "Education",
  "Fun",
  "Jobs",
];

interface CategoryFilterProps {
  active: AppCategory;
  counts: Partial<Record<AppCategory, number>>;
  onChange: (cat: AppCategory) => void;
}

export default function CategoryFilter({ active, counts, onChange }: CategoryFilterProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const activeLabel = active === "All" ? "All Categories" : active === UNDO_CATEGORY_TAG ? "Und/ഉണ്ട്" : active;
  const ActiveIcon = active !== "All" ? CATEGORY_META[active as Exclude<AppCategory, "All">]?.Icon : null;

  // Top categories shown as inline chips (most popular)
  const QUICK_CATS: AppCategory[] = ["All", UNDO_CATEGORY_TAG, "Community", "Tools", "Transport", "Utilities", "Weather", "Govt", "Travel"];

  return (
    <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar pb-1">
      {ALL_CATEGORIES.map((cat) => {
        const count = cat === "All" ? counts["All"] : counts[cat];
        if (cat !== "All" && !count) return null;
        const isActive = active === cat;
        const Icon = cat !== "All" ? CATEGORY_META[cat as Exclude<AppCategory, "All">]?.Icon : null;
        const label = cat === UNDO_CATEGORY_TAG ? "Und" : cat;
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all flex-shrink-0
              ${isActive
                ? "bg-green-600 text-white shadow-sm shadow-green-600/20"
                : "bg-white dark:bg-[#1a1d2e] border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-green-300 dark:hover:border-green-700"
              }`}
          >
            {Icon && <Icon size={13} />}
            {label}
          </button>
        );
      })}
    </div>
  );
}
