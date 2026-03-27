import { useState } from "react";
import { Search } from "lucide-react";
import type { Project } from "../type";
import { ProjectCard } from "./ProjectCard";

const FILTERS = [
  { label: "Everything", value: "everything" },
  { label: "Full Stack", value: "project" },
  { label: "Communities", value: "community" },
  { label: "Hardware", value: "hardware" },
] as const;

type FilterValue = (typeof FILTERS)[number]["value"];

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("everything");

  const filtered =
    activeFilter === "everything"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section>
      <div className="flex items-center justify-between border-b border-gray-200 pb-2">
        <div className="flex items-center gap-3">
          {FILTERS.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                activeFilter === filter.value
                  ? "bg-black text-white"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <button className="text-gray-500 hover:text-gray-900">
          <Search size={18} />
        </button>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {filtered.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-8 text-center text-sm text-gray-400">
          No items in this category.
        </p>
      )}
    </section>
  );
}