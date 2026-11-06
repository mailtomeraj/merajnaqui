"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import ProjectMockup from "./ProjectMockup";
import type { Project } from "../projects/data";

type FilterKey = "all" | "shopify" | "wordpress" | "react" | "elearning";

const filters: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All Case Studies" },
  { key: "shopify", label: "Shopify E-Commerce" },
  { key: "wordpress", label: "WordPress & CMS" },
  { key: "react", label: "React / Next.js" },
  { key: "elearning", label: "E-Learning & LMS" },
];

function getCategory(slug: string): Exclude<FilterKey, "all"> {
  if (slug.startsWith("shopify")) return "shopify";
  if (slug.startsWith("wordpress")) return "wordpress";
  if (slug.startsWith("react")) return "react";
  return "elearning";
}

function Tag({ children }: { children: React.ReactNode }) {
  return <span className="rounded-full border border-[#d8d0c5] px-3 py-1.5 text-[11px] font-bold tracking-wide text-[#625b68]">{children}</span>;
}

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const filteredProjects = useMemo(
    () => activeFilter === "all" ? projects : projects.filter((project) => getCategory(project.slug) === activeFilter),
    [activeFilter, projects]
  );

  return (
    <>
      <div className="mb-8 mt-12">
        <div aria-label="Filter case studies" className="flex flex-wrap gap-2" role="group">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.key;
            return (
              <button
                key={filter.key}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(filter.key)}
                className={`rounded-full border px-4 py-3 text-[10px] font-black uppercase tracking-[.08em] transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff684d] sm:px-5 sm:text-[11px] ${
                  isActive
                    ? "border-[#211b2d] bg-[#211b2d] text-white shadow-[4px_4px_0_#d9ff59]"
                    : "border-[#d8d0c5] bg-white/60 text-[#625b68] hover:border-[#211b2d] hover:bg-[#d9ff59] hover:text-[#211b2d]"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
        <p className="mt-4 text-xs font-semibold text-[#817887]" aria-live="polite" aria-atomic="true">
          Showing {filteredProjects.length} {filteredProjects.length === 1 ? "case study" : "case studies"}
        </p>
      </div>

      {filteredProjects.length > 0 ? (
        <div className="grid gap-7 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <article key={project.slug} className="group overflow-hidden rounded-[1.7rem] border border-[#d8d0c5] bg-white transition hover:-translate-y-1 hover:shadow-[12px_12px_0_#d9ff59]">
              <div className={`p-5 sm:p-7 ${project.accent === "coral" ? "bg-[#ff684d]" : project.accent === "lime" ? "bg-[#d9ff59]" : project.accent === "lavender" ? "bg-[#c8b9ef]" : "bg-[#211b2d]"}`}>
                <div className="mb-5 flex items-center justify-between text-[9px] font-black uppercase tracking-[.18em]"><span>/{project.number} · {project.platform}</span><span>DESKTOP + MOBILE</span></div>
                <ProjectMockup variant={project.slug.startsWith("shopify") ? "shopify" : project.slug.startsWith("wordpress") ? "wordpress" : project.slug.startsWith("react") ? "react" : "elearning"} />
              </div>
              <div className="p-7">
                <p className="text-[9px] font-black tracking-[.18em] text-[#ff684d]">{project.platform}</p>
                <h3 className="mt-3 text-2xl font-black leading-tight tracking-tight">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#625b68]">{project.summary}</p>
                <div className="mt-6 flex flex-wrap gap-2">{project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href={`/projects/${project.slug}`} className="rounded-full bg-[#211b2d] px-5 py-3 text-[10px] font-black uppercase tracking-wider text-white hover:bg-[#ff684d]">View case study <ArrowUpRight className="ml-2 inline" size={14} /></Link>
                  <Link href={`/demos/${project.slug}`} className="rounded-full border border-[#d8d0c5] px-5 py-3 text-[10px] font-black uppercase tracking-wider hover:border-[#211b2d]">Open live demo <ArrowUpRight className="ml-2 inline" size={14} /></Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className="rounded-2xl border border-dashed border-[#d8d0c5] px-6 py-12 text-center text-sm text-[#625b68]">No case studies found in this category.</p>
      )}
    </>
  );
}
