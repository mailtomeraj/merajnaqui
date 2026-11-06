"use client";

import Link from "next/link";
import { useState } from "react";
import { notFound, useParams } from "next/navigation";
import { ArrowLeft, Check, Search, ShoppingBag, Play, Pause, BookOpen } from "lucide-react";
import { projects } from "../../projects/data";

export default function DemoPage() {
  const params = useParams<{ slug: string }>();
  const project = projects.find(item => item.slug === params.slug);
  const [notice, setNotice] = useState("");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState("Medium");
  const [playing, setPlaying] = useState(false);
  if (!project) notFound();

  const isShop = project.slug.startsWith("shopify");
  const isWordpress = project.slug.startsWith("wordpress");
  const isLearning = project.slug.startsWith("elearning");

  return <main className="min-h-screen bg-[#f4f0e8] text-[#211b2d]">
    <a href="#demo-main" className="skip-link">Skip to demo content</a>
    <header className="border-b border-[#d8d0c5]"><nav aria-label="Demo navigation" className="mx-auto flex max-w-[1100px] items-center justify-between px-5 py-5 md:px-10"><Link href="/" className="text-xs font-black tracking-widest">MERAJ NAQUI<span className="text-[#ff684d]">®</span></Link><Link href={`/projects/${project.slug}`} className="text-[10px] font-black uppercase tracking-wider"><ArrowLeft className="mr-2 inline" size={14}/> Case study</Link></nav></header>
    <div id="demo-main" className="mx-auto max-w-[1100px] px-5 py-12 md:px-10 md:py-16">
      <p className="text-[10px] font-black uppercase tracking-[.22em] text-[#ff684d]">INTERACTIVE CONCEPT / {project.platform}</p>
      <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight tracking-[-.05em] sm:text-6xl">{project.title}<span className="text-[#ff684d]">.</span></h1>
      <p className="mt-5 max-w-2xl text-sm leading-7 text-[#625b68]">{project.demoDescription} This is a self-contained demonstration, not a connected production store, CMS or learning platform.</p>
      <section aria-label="Demo interface" className="mt-10 overflow-hidden rounded-[1.7rem] border border-[#d8d0c5] bg-white shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e8e1d7] bg-[#faf8f3] px-5 py-4"><span className="text-xs font-black tracking-widest">{isShop ? "FORM & FIELD" : isWordpress ? "THE GOOD EDIT" : isLearning ? "OPEN LEARNING" : "PULSE / WORKSPACE"}</span><span className="text-[9px] font-bold uppercase tracking-widest text-[#625b68]">Accessible demo environment</span></div>
        <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[1fr_.7fr]">
          <div>
            {isShop ? <>
              <div className="rounded-2xl bg-[#211b2d] p-7 text-white sm:p-10"><p className="text-[9px] font-black tracking-[.2em] text-[#d9ff59]">MADE FOR DAILY LIVING</p><h2 className="mt-3 text-3xl font-black sm:text-4xl">Objects with purpose.</h2><p className="mt-3 max-w-md text-sm leading-6 text-white/70">Thoughtful essentials, selected to make everyday moments better.</p></div>
              <div className="mt-6 rounded-2xl border border-[#e8e1d7] p-5"><div className="flex items-center gap-4"><div className="grid h-20 w-20 place-items-center rounded-xl bg-[#ff684d] text-3xl">☕</div><div><h3 className="font-black">Everyday ceramic mug</h3><p className="mt-1 text-sm text-[#625b68]">Stoneware · £18.00</p></div></div><fieldset className="mt-5"><legend className="text-sm font-black">Choose a size</legend><div className="mt-3 flex flex-wrap gap-3">{["Small","Medium","Large"].map(size => <label key={size} className={`cursor-pointer rounded-full border px-4 py-2 text-xs font-bold ${selected === size ? "border-[#211b2d] bg-[#d9ff59]" : "border-[#d8d0c5]"}`}><input className="sr-only" type="radio" name="size" value={size} checked={selected === size} onChange={() => setSelected(size)}/>{size}</label>)}</div></fieldset><button onClick={() => setNotice(`${selected} mug added to your demo bag.`)} className="mt-5 rounded-full bg-[#211b2d] px-6 py-3 text-xs font-black text-white hover:bg-[#ff684d]"><ShoppingBag className="mr-2 inline" size={15}/> Add to bag</button></div>
            </> : isWordpress ? <>
              <article className="max-w-2xl"><p className="text-[9px] font-black uppercase tracking-[.2em] text-[#ff684d]">PUBLISHING · ACCESSIBILITY</p><h2 className="mt-3 text-3xl font-black leading-tight">A better article starts with a better structure.</h2><p className="mt-4 text-sm leading-7 text-[#625b68]">Clear headings, descriptive links and useful alternatives help readers move through content in the way that works for them.</p><h3 className="mt-7 text-xl font-black">Start with the reader's journey</h3><p className="mt-3 text-sm leading-7 text-[#625b68]">Use one clear page title, organize sections with meaningful headings and write link text that makes sense when read out of context.</p><a href="#newsletter" className="mt-5 inline-block font-bold text-[#211b2d] underline decoration-[#ff684d] decoration-2 underline-offset-4">Skip to the newsletter form</a><form id="newsletter" className="mt-8 rounded-2xl bg-[#f4f0e8] p-5" onSubmit={e => {e.preventDefault(); setNotice("Thanks — the demo form was submitted.");}}><h3 className="font-black">Get the monthly edit</h3><label htmlFor="email" className="mt-4 block text-xs font-bold">Email address</label><input id="email" type="email" required autoComplete="email" className="mt-2 w-full rounded-lg border border-[#b9b0a4] bg-white px-4 py-3 text-sm" placeholder="you@example.com"/><button className="mt-4 rounded-full bg-[#211b2d] px-5 py-3 text-xs font-black text-white">Subscribe</button></form></article>
            </> : isLearning ? <>
              <div className="rounded-2xl bg-[#211b2d] p-6 text-white"><p className="text-[9px] font-black tracking-[.2em] text-[#d9ff59]">MODULE 02 · LESSON 03</p><h2 className="mt-3 text-2xl font-black">Designing inclusive experiences</h2><p className="mt-2 text-sm text-white/70">A short lesson on building access into the process.</p><div className="mt-6 rounded-xl bg-white/10 p-6 text-center"><button aria-label={playing ? "Pause lesson preview" : "Play lesson preview"} onClick={() => setPlaying(!playing)} className="rounded-full bg-[#d9ff59] p-4 text-[#211b2d]">{playing ? <Pause/> : <Play/>}</button><p className="mt-3 text-xs text-white/70">{playing ? "Preview playing (interaction demo)" : "Lesson media preview"}</p></div></div><div className="mt-5 rounded-xl border border-[#e8e1d7] p-5"><h3 className="font-black">Lesson transcript</h3><p className="mt-2 text-sm leading-7 text-[#625b68]">Accessibility works best when teams consider different ways of perceiving, understanding and interacting with information from the start.</p></div>
            </> : <>
              <div className="rounded-2xl bg-[#211b2d] p-7 text-white"><p className="text-[9px] font-black tracking-[.2em] text-[#d9ff59]">TEAM OVERVIEW</p><h2 className="mt-3 text-3xl font-black">Good afternoon.</h2><p className="mt-2 text-sm text-white/70">Here is what is happening across your workspace.</p><div className="mt-6 grid grid-cols-2 gap-3"><div className="rounded-xl bg-white/10 p-4"><p className="text-2xl font-black">12</p><p className="text-xs text-white/70">Open tasks</p></div><div className="rounded-xl bg-white/10 p-4"><p className="text-2xl font-black">04</p><p className="text-xs text-white/70">Projects</p></div></div></div><label htmlFor="task-search" className="mt-6 block text-sm font-black">Search workspace tasks</label><div className="mt-2 flex gap-2"><input id="task-search" value={query} onChange={e => setQuery(e.target.value)} className="min-w-0 flex-1 rounded-lg border border-[#b9b0a4] px-4 py-3 text-sm" placeholder="Try “design”"/><button onClick={() => setNotice(query ? `Showing demo results for “${query}”.` : "Enter a search term to filter tasks.")} aria-label="Search tasks" className="rounded-lg bg-[#211b2d] px-4 text-white"><Search size={18}/></button></div>
            </>}
          </div>
          <aside className="rounded-2xl bg-[#f4f0e8] p-5"><h2 className="text-sm font-black">{isLearning ? "Lesson outline" : "In this demo"}</h2><ul className="mt-4 space-y-3 text-sm">{(isLearning ? ["Introduction","Core principles","Knowledge check"] : isWordpress ? ["Skip navigation","Article structure","Newsletter form"] : isShop ? ["Product details","Variant selection","Cart feedback"] : ["Workspace overview","Task search","Status updates"]).map((item, i) => <li key={item} className="flex items-center gap-3"><span className="grid h-7 w-7 place-items-center rounded-full bg-[#d9ff59] text-[10px] font-black">{i + 1}</span>{item}</li>)}</ul><div className="mt-7 border-t border-[#d8d0c5] pt-5"><p className="text-xs font-black">Keyboard tip</p><p className="mt-2 text-xs leading-6 text-[#625b68]">Use Tab to move forward, Shift + Tab to move backward, and Enter or Space to activate controls. Focus indicators are intentionally visible.</p></div></aside>
        </div>
        <div aria-live="polite" aria-atomic="true" className="border-t border-[#e8e1d7] bg-[#faf8f3] px-5 py-4 text-sm font-bold">{notice || <span className="text-[#625b68]">Interaction feedback will appear here.</span>}</div>
      </section>
      <p className="mt-6 text-xs leading-6 text-[#625b68]"><BookOpen className="mr-1 inline" size={13}/> Concept demo only. Validate behavior with keyboard and assistive technology before treating any implementation as WCAG-conformant.</p>
      <Link href={`/projects/${project.slug}`} className="mt-8 inline-flex text-xs font-black uppercase tracking-wider underline decoration-[#ff684d] decoration-2 underline-offset-4"><ArrowLeft className="mr-2" size={14}/> Back to case study</Link>
    </div>
  </main>;
}
