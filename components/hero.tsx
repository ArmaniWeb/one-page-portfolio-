import { ArrowUpRight, FileText, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { profile } from '@/lib/content'

export function Hero() {
  return (
    <section id="top" className="hero-section relative overflow-hidden">
      <div className="hero-ambient pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="hero-field hero-field-sapphire" />
        <span className="hero-field hero-field-ice" />
        <span className="hero-field hero-field-violet" />
        <span className="hero-field hero-field-ember" />
        <span className="hero-flow" />
        <span className="hero-grid" />
        <span className="hero-microgrid" />
        <span className="hero-scan-band" />
        <span className="hero-contours hero-contours-right" />
        <span className="hero-contours hero-contours-left" />
        <svg className="hero-network" viewBox="0 0 1200 760" preserveAspectRatio="none" aria-hidden="true">
          <path className="hero-path hero-path-1" pathLength="1" d="M-20 168 H150 C205 168 214 130 280 130 H440 C500 130 514 184 582 184 H770 C825 184 842 112 912 112 H1220" />
          <path className="hero-path hero-path-2" pathLength="1" d="M-20 540 H190 C250 540 276 478 340 478 H514 C570 478 590 554 658 554 H820 C886 554 898 606 970 606 H1220" />
          <path className="hero-path hero-path-3" pathLength="1" d="M72 -20 V112 C72 160 126 176 126 224 V350 C126 402 190 414 190 466 V780" />
          <path className="hero-path hero-path-4" pathLength="1" d="M1090 -20 V136 C1090 190 1036 210 1036 262 V390 C1036 448 1100 464 1100 520 V780" />
          <path className="hero-path hero-path-5" pathLength="1" d="M260 780 V650 C260 600 312 582 312 530 V382 C312 330 370 310 370 260 V-20" />
          <path className="hero-path hero-path-6" pathLength="1" d="M1220 316 H1060 C1002 316 984 270 924 270 H768 C708 270 694 334 634 334 H474 C418 334 400 298 340 298 H-20" />
          <path className="hero-path hero-path-7" d="M-20 92 H112 L168 148 H292 V210 H414" />
          <path className="hero-path hero-path-8" d="M486 -20 V82 H560 L604 126 H744 V192 H864" />
          <path className="hero-path hero-path-9" d="M760 760 V668 H832 L884 616 H1048 V556 H1220" />
          <path className="hero-path hero-path-10" d="M424 760 V690 H492 C530 690 548 654 584 654 H706 C742 654 758 622 792 622" />
          <path className="hero-path hero-path-11" d="M1220 438 H1144 L1100 394 H1008 V348 H948" />
          <path className="hero-path hero-path-12" d="M160 760 V630 H220 L262 588 V438 H324" />
          <path className="hero-path hero-path-13" d="M720 232 C774 232 792 176 842 176 H976" />
          <path className="hero-path hero-path-14" d="M808 470 H876 C914 470 928 510 968 510 H1088" />
          <g className="hero-module hero-module-1"><rect x="898" y="142" width="24" height="10" rx="2" /><path d="M902 147h4m3 0h9" /></g>
          <g className="hero-module hero-module-2"><rect x="274" y="586" width="18" height="8" rx="2" /></g>
          <g className="hero-module hero-module-3"><rect x="1000" y="344" width="28" height="10" rx="2" /></g>
          <g className="hero-module hero-module-4"><rect x="690" y="648" width="20" height="8" rx="2" /></g>
          <circle className="hero-node hero-node-1" cx="126" cy="224" r="3" />
          <circle className="hero-node hero-node-2" cx="312" cy="530" r="3" />
          <circle className="hero-node hero-node-3" cx="474" cy="334" r="4" />
          <circle className="hero-node hero-node-4" cx="634" cy="334" r="3" />
          <circle className="hero-node hero-node-5" cx="820" cy="554" r="3" />
          <circle className="hero-node hero-node-6" cx="1036" cy="262" r="4" />
          <circle className="hero-node hero-node-7" cx="970" cy="606" r="3" />
          <circle className="hero-node hero-node-8" cx="582" cy="184" r="3" />
          <circle className="hero-node hero-node-9" cx="292" cy="210" r="3" />
          <circle className="hero-node hero-node-10" cx="604" cy="126" r="3" />
          <circle className="hero-node hero-node-11" cx="884" cy="616" r="3" />
          <circle className="hero-node hero-node-12" cx="1008" cy="348" r="3" />
          <circle className="hero-node hero-node-13" cx="832" cy="668" r="3" />
          <circle className="hero-core-node" cx="864" cy="342" r="5" />
          <circle className="hero-core-ring" cx="864" cy="342" r="24" />
          <circle className="hero-core-ring hero-core-ring-inner" cx="864" cy="342" r="15" />
          <circle className="hero-pulse hero-pulse-1" r="4"><animateMotion dur="17s" begin="1s" repeatCount="indefinite" path="M-20 168 H150 C205 168 214 130 280 130 H440 C500 130 514 184 582 184 H770 C825 184 842 112 912 112 H1220" /></circle>
          <circle className="hero-pulse hero-pulse-2" r="3"><animateMotion dur="20s" begin="5s" repeatCount="indefinite" path="M-20 540 H190 C250 540 276 478 340 478 H514 C570 478 590 554 658 554 H820 C886 554 898 606 970 606 H1220" /></circle>
          <circle className="hero-pulse hero-pulse-3" r="3"><animateMotion dur="19s" begin="9s" repeatCount="indefinite" path="M1220 316 H1060 C1002 316 984 270 924 270 H768 C708 270 694 334 634 334 H474 C418 334 400 298 340 298 H-20" /></circle>
          <circle className="hero-pulse hero-pulse-4" r="3"><animateMotion dur="23s" begin="14s" repeatCount="indefinite" path="M72 -20 V112 C72 160 126 176 126 224 V350 C126 402 190 414 190 466 V780" /></circle>
        </svg>
      </div>

      <div className="hero-content site-container relative z-10 mx-auto max-w-7xl px-4 pb-[clamp(4.5rem,10vw,8rem)] pt-[clamp(8.5rem,16vw,12rem)]">
        <div className="hero-entry hero-entry-1 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 font-mono text-xs text-muted-foreground">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ember" />
          </span>
          Available for remote roles
        </div>

        <h1 className="hero-entry hero-entry-2 mt-6 max-w-4xl text-balance text-[clamp(2.25rem,6vw,4.75rem)] font-semibold leading-[1.02] tracking-tight">
          {profile.name}
          <span className="mt-3 block text-2xl font-normal text-muted-foreground sm:text-3xl md:text-4xl">
            {profile.role}
          </span>
        </h1>

        <p className="hero-entry hero-entry-3 mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          {profile.tagline}
        </p>

        <div className="hero-entry hero-entry-4 mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-1.5 rounded-md bg-signal px-4 py-2.5 text-sm font-medium text-signal-foreground transition-opacity hover:opacity-90"
          >
            View Projects
            <ArrowUpRight className="size-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email Gabriel Patel"
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-signal/60"
          >
            <Mail className="size-4" />
            Contact me
          </a>
          <a
            href="/Gabriel_Patel_Resume_Tech_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Gabriel Patel's resume"
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-signal/60"
          >
            <FileText className="size-4" />
            Resume
          </a>
        </div>

        <nav aria-label="Professional links" className="hero-entry hero-entry-5 mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Gabriel Patel's GitHub profile"
            className="inline-flex min-h-8 items-center gap-2 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
          >
            <GithubIcon className="size-4" />
            GitHub
            <ArrowUpRight className="size-3.5 text-ember" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Gabriel Patel on LinkedIn"
            className="inline-flex min-h-8 items-center gap-2 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
          >
            <LinkedinIcon className="size-4" />
            LinkedIn
            <ArrowUpRight className="size-3.5 text-ember" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email Gabriel Patel"
            className="inline-flex min-h-8 items-center gap-2 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
          >
            <Mail className="size-4" />
            Email
          </a>
        </nav>

        <a href="#about" className="hero-scroll-cue" aria-label="Scroll to About section">
          <span>Explore</span>
          <i aria-hidden="true" />
        </a>
      </div>
      <div className="hero-transition" aria-hidden="true" />
    </section>
  )
}
