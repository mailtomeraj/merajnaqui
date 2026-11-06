import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, ExternalLink } from "lucide-react";
import { getProject, projects } from "../data";
import ProjectMockup from "../../components/ProjectMockup";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return { title: project ? `${project.title} — Meraj Naqui` : "Case study — Meraj Naqui", description: project?.summary };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const variant = slug.startsWith("shopify") ? "shopify" : slug.startsWith("wordpress") ? "wordpress" : slug.startsWith("react") ? "react" : "elearning";

  return <main className="min-h-screen bg-[#f4f0e8] text-[#211b2d]">
    <a href="#content" className="skip-link">Skip to content</a>
    <header className="border-b border-[#d8d0c5]"><nav aria-label="Breadcrumb" className="mx-auto flex max-w-[1180px] items-center justify-between px-5 py-5 md:px-10"><Link href="/" className="text-xs font-black tracking-widest">MERAJ NAQUI<span className="text-[#ff684d]">®</span></Link><Link href="/#work" className="text-[10px] font-black uppercase tracking-wider hover:text-[#ff684d]"><ArrowLeft className="mr-2 inline" size={14}/> All projects</Link></nav></header>
    <div id="content" className="mx-auto max-w-[1180px] px-5 py-14 md:px-10 md:py-20">
      <p className="text-[10px] font-black uppercase tracking-[.22em] text-[#ff684d]">{project.number} / CASE STUDY · {project.platform}</p>
      <div className="mt-5 grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div><h1 className="text-5xl font-black leading-[.95] tracking-[-.06em] sm:text-7xl">{project.title}<span className="text-[#ff684d]">.</span></h1><p className="mt-7 max-w-xl text-lg leading-8 text-[#625b68]">{project.summary}</p><div className="mt-7 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded-full border border-[#d8d0c5] px-3 py-2 text-[10px] font-bold">{tag}</span>)}</div>
          <div className="mt-8 flex flex-wrap gap-3"><Link href={`/demos/${slug}`} className="inline-flex rounded-full bg-[#211b2d] px-6 py-4 text-[10px] font-black uppercase tracking-wider text-white hover:bg-[#ff684d]">Explore interactive demo <ArrowUpRight className="ml-2" size={15}/></Link><a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full border border-[#211b2d] px-6 py-4 text-[10px] font-black uppercase tracking-wider hover:bg-[#d9ff59]">Visit live website <ExternalLink className="ml-2" size={14}/></a></div>
        </div>
        <div className="rounded-[1.7rem] bg-[#eae4d9] p-5 sm:p-8"><ProjectMockup variant={variant}/><p className="mt-4 text-center text-[9px] font-bold uppercase tracking-[.18em] text-[#625b68]">Illustrative responsive concept · replace with actual project screenshot</p></div>
      </div>

      <section className="mt-12 grid gap-3 rounded-2xl border border-[#d8d0c5] bg-white p-6 sm:grid-cols-3">
        <div><p className="text-[9px] font-black uppercase tracking-widest text-[#ff684d]">Client / project</p><p className="mt-2 text-sm font-bold">{project.clientName}</p></div>
        <div><p className="text-[9px] font-black uppercase tracking-widest text-[#ff684d]">My role</p><p className="mt-2 text-sm font-bold">{project.role}</p></div>
        <div><p className="text-[9px] font-black uppercase tracking-widest text-[#ff684d]">Timeline</p><p className="mt-2 text-sm font-bold">{project.duration}</p></div>
      </section>

      <section className="mt-20"><p className="text-[10px] font-black uppercase tracking-[.2em] text-[#ff684d]">01 / PROJECT SCREENSHOTS</p><h2 className="mt-3 text-3xl font-black tracking-tight">A closer look at the work</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-[#625b68]">These are replaceable dummy visuals. Swap the image files in <code>public/images/projects/</code> with your real desktop, mobile and feature screenshots. Keep descriptive alt text.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">{project.screenshots.map((shot, index) => <figure key={shot.src} className={`overflow-hidden rounded-2xl border border-[#d8d0c5] bg-white p-3 ${index === 2 ? "md:col-span-2" : ""}`}><img src={shot.src} alt={shot.alt} className={`w-full rounded-xl object-cover ${index === 2 ? "max-h-[430px]" : "max-h-[360px]"}`}/><figcaption className="px-2 pb-2 pt-4 text-xs font-black uppercase tracking-wider">{shot.label}</figcaption></figure>)}</div>
      </section>

      <section className="mt-20 max-w-3xl"><p className="text-[10px] font-black uppercase tracking-[.2em] text-[#ff684d]">02 / THE BRIEF</p><h2 className="mt-3 text-3xl font-black tracking-tight">The experience</h2><p className="mt-5 text-base leading-8 text-[#625b68]">{project.overview}</p></section>
      <section className="mt-20"><p className="text-[10px] font-black uppercase tracking-[.2em] text-[#ff684d]">03 / BARRIERS & REMEDIATION</p><h2 className="mt-3 text-3xl font-black tracking-tight">What can get in the way</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-[#625b68]">The following are representative sample issues paired with implementation approaches and relevant WCAG success criteria. Replace them with the issues you actually found and fixed before publishing this as client work.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">{project.issues.map((issue, index) => <article key={issue.title} className="rounded-2xl border border-[#d8d0c5] bg-white p-6"><div className="flex items-center justify-between"><span className="text-[10px] font-black text-[#ff684d]">ISSUE 0{index + 1}</span><span className="rounded-full bg-[#f4f0e8] px-3 py-1 text-[9px] font-bold">WCAG</span></div><h3 className="mt-4 text-xl font-black">{issue.title}</h3><p className="mt-3 text-sm leading-7 text-[#625b68]"><strong className="text-[#211b2d]">User impact:</strong> {issue.impact}</p><p className="mt-3 text-sm leading-7 text-[#625b68]"><strong className="text-[#211b2d]">Fix:</strong> {issue.fix}</p><p className="mt-4 border-t border-[#e8e1d7] pt-4 text-[10px] font-black uppercase tracking-wide text-[#ff684d]">{issue.wcag}</p></article>)}</div>
      </section>
      <section className="mt-20 grid gap-10 rounded-[1.7rem] bg-[#211b2d] p-7 text-[#f4f0e8] sm:p-10 lg:grid-cols-[.7fr_1.3fr]"><div><p className="text-[10px] font-black uppercase tracking-[.2em] text-[#d9ff59]">04 / VALIDATION</p><h2 className="mt-3 text-3xl font-black">How to test it</h2><p className="mt-4 text-sm leading-7 text-white/60">Replace this sample checklist with the testing you performed on the actual project.</p></div><ul className="space-y-4">{project.tests.map(test => <li key={test} className="flex gap-3 text-sm leading-7 text-white/80"><CheckCircle2 className="mt-1 shrink-0 text-[#d9ff59]" size={18}/>{test}</li>)}</ul></section>
      <section className="mt-12 flex flex-col justify-between gap-5 border-t border-[#d8d0c5] pt-8 sm:flex-row sm:items-center"><div><p className="text-xs font-black">Want to inspect the interaction?</p><p className="mt-1 text-sm text-[#625b68]">Try the matching responsive demo or open the live project.</p></div><div className="flex flex-wrap gap-3"><Link href={`/demos/${slug}`} className="inline-flex items-center rounded-full bg-[#ff684d] px-6 py-4 text-[10px] font-black uppercase tracking-wider">Open demo <ArrowUpRight className="ml-2" size={15}/></Link><a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full border border-[#211b2d] px-6 py-4 text-[10px] font-black uppercase tracking-wider">Visit website <ExternalLink className="ml-2" size={14}/></a></div></section>
      <p className="mt-8 text-[11px] leading-6 text-[#817887]">Portfolio template note: replace all sample project names, timelines, descriptions, screenshots, URLs, accessibility findings and test claims with verified details before publishing.</p>
    </div>
    <footer className="border-t border-[#d8d0c5] px-5 py-7 text-center text-[10px] font-bold text-[#625b68]">© {new Date().getFullYear()} MERAJ NAQUI · ACCESS FOR EVERYONE</footer>
  </main>;
}
