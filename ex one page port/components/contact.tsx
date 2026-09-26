import { ArrowUpRight, FileText, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { profile } from '@/lib/content'

function ContactNetwork() {
  return (
    <div className="contact-network" aria-hidden="true">
      <span className="contact-glow contact-glow-blue" />
      <span className="contact-glow contact-glow-ember" />
      <svg viewBox="0 0 1200 520" preserveAspectRatio="none">
        <path className="contact-path contact-path-a" pathLength="1" d="M-40 120 H235 C320 120 348 218 444 218 H760 C845 218 874 150 956 150 H1240" />
        <path className="contact-path contact-path-b" pathLength="1" d="M-40 390 H170 C270 390 300 300 404 300 H650 C758 300 802 382 900 382 H1240" />
        <path className="contact-path contact-path-c" pathLength="1" d="M970 -20 V100 C970 180 890 214 890 286 V540" />
        <circle className="contact-node" cx="444" cy="218" r="4" />
        <circle className="contact-node" cx="760" cy="218" r="4" />
        <circle className="contact-node contact-node-ember" cx="900" cy="382" r="4" />
        <circle className="contact-signal contact-signal-a" r="3">
          <animateMotion dur="16s" begin="1s" repeatCount="indefinite" path="M-40 120 H235 C320 120 348 218 444 218 H760 C845 218 874 150 956 150 H1240" />
        </circle>
        <circle className="contact-signal contact-signal-b" r="3">
          <animateMotion dur="19s" begin="7s" repeatCount="indefinite" path="M-40 390 H170 C270 390 300 300 404 300 H650 C758 300 802 382 900 382 H1240" />
        </circle>
      </svg>
    </div>
  )
}

export function Contact() {
  return (
    <footer id="contact" className="contact-section scroll-mt-20">
      <ContactNetwork />
      <div className="site-container relative z-10 mx-auto max-w-7xl px-4 py-[clamp(5.5rem,12vw,10rem)]">
        <div className="contact-kicker"><span>06</span><i aria-hidden="true" /> CONTACT</div>
        <h2 className="contact-title">Interested in working together?</h2>
        <p className="contact-copy">
          I’m looking for remote opportunities where I can contribute as a builder while continuing to deepen my engineering practice, particularly across AI, full-stack systems, and automation. Email is the best way to reach me.
        </p>

        <a href={`mailto:${profile.email}`} aria-label="Email Gabriel Patel" className="contact-email">
          <Mail className="size-5" aria-hidden="true" />
          <span>{profile.email}</span>
          <ArrowUpRight className="size-5 text-ember" aria-hidden="true" />
        </a>

        <nav aria-label="Professional contact links" className="contact-links">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="View Gabriel Patel on LinkedIn">
            <LinkedinIcon className="size-4" />
            LinkedIn
            <ArrowUpRight className="size-3.5" />
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="View Gabriel Patel on GitHub">
            <GithubIcon className="size-4" />
            GitHub
            <ArrowUpRight className="size-3.5" />
          </a>
          <a href="/Gabriel_Patel_Resume_Tech_2026.pdf" target="_blank" rel="noopener noreferrer" aria-label="View Gabriel Patel's resume">
            <FileText className="size-4" />
            Resume
            <ArrowUpRight className="size-3.5" />
          </a>
        </nav>

        <div className="contact-footer">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Built with Next.js · Deployed on Vercel</span>
        </div>
      </div>
    </footer>
  )
}
