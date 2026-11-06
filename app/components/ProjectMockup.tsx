type Props = { variant: string; compact?: boolean };

const screens: Record<string, { brand: string; title: string; subtitle: string; action: string; cards: string[] }> = {
  shopify: { brand: "FORM & FIELD", title: "Everyday essentials", subtitle: "Thoughtful objects for everyday living.", action: "Explore collection", cards: ["Ceramic mug", "Linen tote", "Desk lamp"] },
  wordpress: { brand: "THE GOOD EDIT", title: "Ideas for a more thoughtful web", subtitle: "Stories, guides and practical resources.", action: "Read the latest", cards: ["Designing for everyone", "A guide to clear content", "Better digital habits"] },
  react: { brand: "PULSE / WORKSPACE", title: "Your work, in focus", subtitle: "A calmer overview of your team's activity.", action: "View activity", cards: ["12 open tasks", "4 projects", "8 updates"] },
  elearning: { brand: "OPEN LEARNING", title: "Designing inclusive experiences", subtitle: "Module 02 · 18 minutes · Lesson 3 of 6", action: "Continue lesson", cards: ["01 Introduction", "02 Core principles", "03 Knowledge check"] }
};

export default function ProjectMockup({ variant, compact = false }: Props) {
  const item = screens[variant] ?? screens.react;
  return (
    <div className={`grid items-center gap-5 ${compact ? "grid-cols-[1fr_92px]" : "grid-cols-[1fr_132px] sm:grid-cols-[1fr_160px]"} `}>
      <div className="overflow-hidden rounded-xl border border-[#d8d0c5] bg-[#fffdf9] shadow-xl">
        <div className="flex items-center gap-1.5 border-b border-[#e8e1d7] bg-[#f4f0e8] px-3 py-2"><i className="h-2 w-2 rounded-full bg-[#ff684d]"/><i className="h-2 w-2 rounded-full bg-[#d9ff59]"/><i className="h-2 w-2 rounded-full bg-[#c8b9ef]"/><span className="ml-2 truncate text-[8px] font-bold tracking-widest text-[#817887]">PREVIEW.WEB</span></div>
        <div className="p-3 sm:p-5">
          <div className="flex items-center justify-between"><span className="text-[8px] font-black tracking-[.18em] sm:text-[10px]">{item.brand}</span><span className="text-[8px] text-[#625b68]">MENU　 ☰</span></div>
          <div className="my-4 rounded-lg bg-[#211b2d] p-4 text-[#f4f0e8] sm:my-6 sm:p-6">
            <p className="text-[7px] font-bold uppercase tracking-[.2em] text-[#d9ff59] sm:text-[9px]">DESIGNED FOR EVERYONE</p>
            <p className="mt-2 max-w-xs text-lg font-black leading-tight sm:text-2xl">{item.title}</p>
            <p className="mt-2 max-w-xs text-[8px] leading-4 text-white/70 sm:text-[10px]">{item.subtitle}</p>
            <span className="mt-3 inline-block rounded-full bg-[#d9ff59] px-3 py-2 text-[7px] font-black text-[#211b2d] sm:text-[9px]">{item.action} ↗</span>
          </div>
          <div className="grid grid-cols-3 gap-2">{item.cards.map((card, i) => <div key={card} className="rounded-md border border-[#e8e1d7] p-2"><div className={`mb-2 h-8 rounded ${i === 0 ? "bg-[#ff684d]/70" : i === 1 ? "bg-[#d9ff59]" : "bg-[#c8b9ef]"}`}/><p className="text-[7px] font-bold leading-tight text-[#393143] sm:text-[9px]">{card}</p></div>)}</div>
        </div>
      </div>
      <div className="mx-auto w-full max-w-[160px] rounded-[1.35rem] border-[4px] border-[#211b2d] bg-[#211b2d] p-1.5 shadow-xl">
        <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-white/40"/>
        <div className="min-h-[190px] overflow-hidden rounded-[.9rem] bg-[#fffdf9] p-2">
          <div className="text-[6px] font-black tracking-widest">{item.brand}</div>
          <div className="my-3 rounded-md bg-[#211b2d] p-2 text-white"><p className="text-[6px] font-bold text-[#d9ff59]">WELCOME</p><p className="mt-1 text-[11px] font-black leading-tight">{item.title}</p><p className="mt-2 rounded-full bg-[#d9ff59] p-1 text-center text-[6px] font-black text-[#211b2d]">Explore ↗</p></div>
          {item.cards.map((card, i) => <div key={card} className="mb-1.5 flex items-center gap-2 rounded border border-[#e8e1d7] p-1"><span className={`h-5 w-5 rounded ${i === 0 ? "bg-[#ff684d]" : i === 1 ? "bg-[#d9ff59]" : "bg-[#c8b9ef]"}`}/><span className="text-[6px] font-bold">{card}</span></div>)}
        </div>
      </div>
    </div>
  );
}
