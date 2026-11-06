import {
  Accessibility,
  ArrowUpRight,
  AudioLines,
  Code2,
  Eye,
  Github,
  Linkedin,
  ScanEye,
  ShieldCheck,
  Sparkles,
  Keyboard,
  Captions,
} from 'lucide-react';
import Link from 'next/link';
import ProjectGrid from './components/ProjectGrid';
import { projects } from './projects/data';

const skills = [
  'WCAG 2.1 / 2.2 AA',
  'Section 508',
  'WAI-ARIA',
  'Semantic HTML',
  'NVDA',
  'VoiceOver',
  'axe DevTools',
  'Lighthouse',
  'React',
  'WordPress',
  'Shopify',
  'Next.js',
  'Tailwind CSS',
  'JavaScript',
  'Figma to Code',
  'Responsive UI',
];

export default function Home() {
  return (
    <>
      <a href='#main' className='skip-link'>
        Skip to content
      </a>
      <header className='sticky top-0 z-50 border-b border-[#ded7cd] bg-[#f4f0e8]/90 backdrop-blur-xl'>
        <nav
          aria-label='Main navigation'
          className='mx-auto flex max-w-[1380px] items-center justify-between px-5 py-4 md:px-10'
        >
          <a href='#home' className='flex items-center gap-3'>
            <span className='grid h-10 w-10 place-items-center rounded-full bg-[#d9ff59] text-sm font-black'>
              MN
            </span>
            <span className='text-sm font-black tracking-tight'>
              MERAJ NAQUI<span className='text-[#ff684d]'>®</span>
            </span>
          </a>
          <div className='hidden items-center gap-8 text-xs font-extrabold uppercase tracking-[.13em] text-[#625b68] md:flex'>
            <a href='#about' className='hover:text-[#ff684d]'>
              About
            </a>
            <a href='#expertise' className='hover:text-[#ff684d]'>
              Expertise
            </a>
            <a href='#work' className='hover:text-[#ff684d]'>
              Selected work
            </a>
          </div>
          <a
            href='#contact'
            className='rounded-full bg-[#211b2d] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#ff684d]'
          >
            Let&apos;s talk <ArrowUpRight className='ml-2 inline' size={15} />
          </a>
        </nav>
      </header>

      <main id='main'>
        <section id='home' className='relative overflow-hidden'>
          <div className='absolute -right-24 top-16 h-[430px] w-[430px] rounded-full border border-[#d9d1c6]' />
          <div className='absolute -right-10 top-32 h-[300px] w-[300px] rounded-full border border-[#d9d1c6]' />
          <div className='mx-auto grid max-w-[1380px] gap-12 px-5 pb-24 pt-20 md:px-10 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:pb-32 lg:pt-28'>
            <div className='relative z-10'>
              <div className='mb-8 inline-flex items-center gap-2 rounded-full border border-[#d8d0c5] bg-white/60 px-4 py-2 text-[10px] font-black uppercase tracking-[.18em]'>
                <span className='h-2 w-2 rounded-full bg-[#ff684d]' /> DHS TRUSTED TESTER™ CERTIFIED
              </div>
              <p className='mb-5 text-xs font-black uppercase tracking-[.24em] text-[#ff684d]'>
                FRONTEND DEVELOPER × ACCESSIBILITY
              </p>
              <h1 className='max-w-3xl text-[clamp(3.7rem,8vw,7.6rem)] font-black leading-[.88] tracking-[-.075em]'>
                Access
                <br />
                is for{' '}
                <span className='relative inline-block'>
                  everyone
                  <span className='absolute -bottom-1 left-0 -z-10 h-[23%] w-full bg-[#d9ff59]' />
                </span>
                <span className='text-[#ff684d]'>.</span>
              </h1>
              <p className='mt-9 max-w-xl text-lg leading-8 text-[#625b68]'>
                I make digital experiences more inclusive — combining thoughtful UI development with
                real-world accessibility testing and remediation.
              </p>
              <div className='mt-9 flex flex-wrap items-center gap-4'>
                <a
                  href='#work'
                  className='rounded-full bg-[#211b2d] px-7 py-4 text-xs font-black uppercase tracking-wider text-white hover:bg-[#ff684d]'
                >
                  Explore projects <ArrowUpRight className='ml-2 inline' size={16} />
                </a>
                <a
                  href='#about'
                  className='text-xs font-black uppercase tracking-wider underline decoration-[#ff684d] decoration-2 underline-offset-4'
                >
                  Get to know me
                </a>
              </div>
              <div className='mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#d8d0c5] pt-6 text-[11px] font-bold uppercase tracking-wider text-[#625b68]'>
                <span>WCAG & Section 508</span>
                <span>Accessible UI</span>
                <span>Inclusive by design</span>
              </div>
            </div>
            <div className='relative mx-auto w-full max-w-[570px]'>
              <div className='relative aspect-[.92] overflow-hidden rounded-[2rem] bg-[#211b2d] p-7 text-white shadow-[18px_18px_0_#d9ff59] sm:p-10'>
                <div className='flex items-start justify-between'>
                  <span className='text-[10px] font-black tracking-[.22em] text-[#d9ff59]'>
                    THE ACCESSIBILITY PLAYBOOK / 001
                  </span>
                  <Accessibility size={28} className='text-[#d9ff59]' />
                </div>
                <div className='absolute left-8 top-[25%] text-[clamp(3rem,6vw,5.4rem)] font-black leading-[.9] tracking-[-.07em] sm:left-10'>
                  Design
                  <br />
                  <span className='text-[#d9ff59]'>without</span>
                  <br />
                  barriers.
                </div>
                <div className='absolute bottom-8 left-8 right-8 sm:bottom-10 sm:left-10 sm:right-10'>
                  <div className='mb-5 grid grid-cols-4 gap-2'>
                    {[
                      { I: Eye, t: 'SEE' },
                      { I: Keyboard, t: 'USE' },
                      { I: AudioLines, t: 'HEAR' },
                      { I: Captions, t: 'READ' },
                    ].map(({ I, t }) => (
                      <div
                        key={t}
                        className='rounded-xl border border-white/20 bg-white/5 p-3 text-center'
                      >
                        <I className='mx-auto mb-2 text-[#d9ff59]' size={22} />
                        <span className='text-[9px] font-black tracking-widest'>{t}</span>
                      </div>
                    ))}
                  </div>
                  <div className='flex items-center justify-between border-t border-white/20 pt-4 text-[10px] font-bold uppercase tracking-[.18em] text-white/60'>
                    <span>People first. Always.</span>
                    <span>WCAG · UX · CODE</span>
                  </div>
                </div>
                <span className='absolute -right-1 top-[48%] rotate-90 text-[9px] font-black tracking-[.3em] text-white/35'>
                  INCLUSIVE DIGITAL FUTURES
                </span>
              </div>
              <div className='absolute -left-8 -top-8 grid h-24 w-24 rotate-[-10deg] place-items-center rounded-full bg-[#ff684d] text-center text-[10px] font-black uppercase leading-tight tracking-wider text-white shadow-xl'>
                A better
                <br />
                web for
                <br />
                all ✳
              </div>
            </div>
          </div>
        </section>

        <section className='border-y border-[#d8d0c5] bg-[#eae4d9]'>
          <div className='mx-auto flex max-w-[1380px] flex-wrap items-center justify-between gap-5 px-5 py-6 md:px-10'>
            <span className='text-[10px] font-black uppercase tracking-[.2em] text-[#817887]'>
              MY APPROACH
            </span>
            <span className='text-sm font-black tracking-tight'>
              NOTICE THE BARRIER <b className='mx-2 text-[#ff684d]'>✳</b> REMOVE THE BARRIER{' '}
              <b className='mx-2 text-[#ff684d]'>✳</b> MAKE IT BETTER
            </span>
          </div>
        </section>

        <section
          id='about'
          className='mx-auto grid max-w-[1380px] gap-12 px-5 py-24 md:px-10 lg:grid-cols-[.72fr_1.28fr] lg:py-32'
        >
          <div>
            <p className='mb-4 text-[10px] font-black uppercase tracking-[.22em] text-[#ff684d]'>
              01 / THE PERSON
            </p>
            <h2 className='text-5xl font-black leading-[.95] tracking-[-.06em] sm:text-6xl'>
              Hello,
              <br />
              I&apos;m Meraj<span className='text-[#ff684d]'>.</span>
            </h2>
            <div className='mt-8 inline-flex items-center gap-3 rounded-2xl bg-[#d9ff59] px-4 py-3'>
              <ShieldCheck size={22} />
              <span className='text-xs font-black uppercase tracking-wide'>
                DHS Trusted Tester™
              </span>
            </div>
          </div>
          <div className='max-w-3xl'>
            <p className='text-2xl font-bold leading-relaxed tracking-tight'>
              I believe accessibility is not a checklist at the end. It&apos;s a quality of the
              experience from the very beginning.
            </p>
            <p className='mt-7 text-base leading-8 text-[#625b68]'>
              I&apos;m a frontend UI and web accessibility professional. I work across accessible
              interface development, manual and automated testing, and practical remediation —
              helping teams create websites that more people can perceive, understand and use.
            </p>
            <p className='mt-5 text-base leading-8 text-[#625b68]'>
              From semantic HTML and keyboard navigation to screen-reader support and responsive
              components, I focus on details that make digital products work better for real people.
            </p>
          </div>
        </section>

        <section id='expertise' className='bg-[#211b2d] py-24 text-[#f4f0e8] lg:py-28'>
          <div className='mx-auto max-w-[1380px] px-5 md:px-10'>
            <div className='mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end'>
              <div>
                <p className='mb-4 text-[10px] font-black uppercase tracking-[.22em] text-[#d9ff59]'>
                  02 / WHAT I BRING
                </p>
                <h2 className='max-w-2xl text-5xl font-black leading-[.95] tracking-[-.06em] sm:text-6xl'>
                  Make the web
                  <br />
                  work better.
                </h2>
              </div>
              <p className='max-w-sm text-sm leading-7 text-white/60'>
                A hands-on mix of accessibility thinking, frontend craft and practical problem
                solving.
              </p>
            </div>
            <div className='grid gap-px overflow-hidden rounded-3xl border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-4'>
              {[
                {
                  I: ScanEye,
                  t: 'Audit & test',
                  d: 'Manual and automated accessibility reviews that uncover real user barriers.',
                },
                {
                  I: Code2,
                  t: 'Build accessible UI',
                  d: 'Responsive frontend experiences with semantic, maintainable code.',
                },
                {
                  I: ShieldCheck,
                  t: 'Remediate',
                  d: 'Developer-friendly fixes for focus, keyboard, forms, contrast and ARIA.',
                },
                {
                  I: Sparkles,
                  t: 'Design to code',
                  d: 'Turn design intent into inclusive, polished and usable interfaces.',
                },
              ].map(({ I, t, d }, i) => (
                <article key={t} className='bg-[#292336] p-7 transition hover:bg-[#342b43] sm:p-8'>
                  <span className='mb-12 block text-xs font-black text-[#d9ff59]'>0{i + 1}</span>
                  <I className='mb-5 text-[#ff8069]' size={28} />
                  <h3 className='text-xl font-black'>{t}</h3>
                  <p className='mt-3 text-sm leading-7 text-white/60'>{d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id='work' className='mx-auto max-w-[1380px] px-5 py-24 md:px-10 lg:py-32'>
          <div className='flex flex-col justify-between gap-6 md:flex-row md:items-end'>
            <div>
              <p className='mb-4 text-[10px] font-black uppercase tracking-[.22em] text-[#ff684d]'>
                03 / ACCESSIBILITY PROJECTS
              </p>
              <h2 className='text-5xl font-black leading-[.95] tracking-[-.06em] sm:text-6xl'>
                Proof of
                <br />
                possibility<span className='text-[#ff684d]'>.</span>
              </h2>
            </div>
            <p className='max-w-sm text-sm leading-7 text-[#625b68]'>
              Four platform-focused concepts showing how inclusive design decisions translate into
              practical interface patterns.
            </p>
          </div>
          <ProjectGrid projects={projects} />
        </section>

        <section className='border-y border-[#d8d0c5] bg-[#eae4d9] py-20'>
          <div className='mx-auto grid max-w-[1380px] gap-10 px-5 md:px-10 lg:grid-cols-[.7fr_1.3fr]'>
            <div>
              <p className='mb-4 text-[10px] font-black uppercase tracking-[.22em] text-[#ff684d]'>
                04 / THE TOOLKIT
              </p>
              <h2 className='text-4xl font-black leading-none tracking-[-.05em]'>
                Tools are useful.
                <br />
                People are the point.
              </h2>
            </div>
            <div className='flex flex-wrap content-start gap-3'>
              {skills.map((s) => (
                <span
                  key={s}
                  className='rounded-full border border-[#cfc6ba] bg-[#f4f0e8] px-4 py-3 text-xs font-bold text-[#393143] transition hover:border-[#211b2d] hover:bg-[#d9ff59]'
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id='contact' className='mx-auto max-w-[1380px] px-5 py-24 md:px-10 lg:py-32'>
          <div className='relative overflow-hidden rounded-[2rem] bg-[#ff684d] p-8 text-[#211b2d] sm:p-14 lg:p-20'>
            <div className='absolute -right-20 -top-32 h-96 w-96 rounded-full border-[45px] border-[#211b2d]/10' />
            <div className='relative max-w-3xl'>
              <p className='text-[10px] font-black uppercase tracking-[.22em]'>
                05 / START A CONVERSATION
              </p>
              <h2 className='mt-6 text-5xl font-black leading-[.92] tracking-[-.065em] sm:text-7xl'>
                Let&apos;s make
                <br />
                access happen<span className='text-white'>.</span>
              </h2>
              <p className='mt-7 max-w-lg text-base leading-8'>
                Have a project, opportunity or accessibility challenge? I&apos;d love to hear about
                it.
              </p>
              <a
                href='mailto:your.email@example.com'
                className='mt-9 inline-flex items-center rounded-full bg-[#211b2d] px-7 py-4 text-xs font-black uppercase tracking-wider text-white transition hover:bg-white hover:text-[#211b2d]'
              >
                Say hello <ArrowUpRight className='ml-3' size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className='border-t border-[#d8d0c5]'>
        <div className='mx-auto flex max-w-[1380px] flex-col gap-4 px-5 py-8 text-xs font-semibold text-[#625b68] sm:flex-row sm:items-center sm:justify-between md:px-10'>
          <p>© {new Date().getFullYear()} MERAJ NAQUI. MADE FOR EVERYONE.</p>
          <div className='flex gap-6'>
            <a
              className='inline-flex items-center gap-2 hover:text-[#ff684d]'
              href='https://www.linkedin.com/'
              target='_blank'
              rel='noreferrer'
            >
              <Linkedin size={15} /> LINKEDIN
            </a>
            <a
              className='inline-flex items-center gap-2 hover:text-[#ff684d]'
              href='https://github.com/'
              target='_blank'
              rel='noreferrer'
            >
              <Github size={15} /> GITHUB
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
