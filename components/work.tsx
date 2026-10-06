'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, Eye, LockKeyhole, X } from 'lucide-react'
import { Section } from '@/components/section'
import { projects } from '@/lib/content'

const projectMeta = {
  'Armani Web Design': {
    index: '01',
    category: 'WEB SOLUTIONS & DIGITAL SYSTEMS',
    annotation: 'CLIENT SYSTEMS',
    domain: 'armaniwebdesign.com',
  },
  'AI Sales Operating System': {
    index: '02',
    category: 'AI SALES OPERATIONS SYSTEM',
    annotation: 'AGENT ORCHESTRATION',
    domain: 'PRIVATE SYSTEM',
    privateDescription: 'The portfolio shows the system at a high level while keeping its internal operating logic, prompts, and deployment details private.',
  },
  'Nexus Health': {
    index: '03',
    category: 'HEALTHCARE WEB PLATFORM',
    annotation: 'HEALTHCARE',
    domain: 'PRIVATE PROJECT',
    privateDescription: 'This client project is represented in the portfolio, but the live deployment is intentionally not exposed.',
  },
  'Hooked On Forex': {
    index: '04',
    category: 'PUBLIC WEB PROJECT',
    annotation: 'DIGITAL PRODUCT',
    domain: 'hookedonforex.com',
  },
  Merdicrat: {
    index: '05',
    category: 'VOCABULARY LEARNING EXPERIENCE',
    annotation: 'WEB DELIVERY',
    domain: 'merdicrat.com',
  },
} as const

function TechnologyTag({ children }: { children: string }) {
  return <span className="technology-tag">{children}</span>
}

function ProjectNode({
  project,
  index,
  active,
  desktopPreview,
  mobilePreviewOpen,
  onSelect,
  onTogglePreview,
}: {
  project: (typeof projects)[number]
  index: number
  active: boolean
  desktopPreview: boolean
  mobilePreviewOpen: boolean
  onSelect: () => void
  onTogglePreview: () => void
}) {
  const meta = projectMeta[project.name as keyof typeof projectMeta]
  const isPrivate = !project.link

  return (
    <article
      className={`project-node project-${meta.index} group ${active ? 'is-preview-active' : ''}`}
      onMouseEnter={desktopPreview ? onSelect : undefined}
      onFocusCapture={desktopPreview ? onSelect : undefined}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="project-index font-mono text-[11px] tracking-[0.18em] text-ember">{meta.index}</span>
        {isPrivate ? (
          <span className="project-private-status">
            <LockKeyhole className="size-3" aria-hidden="true" /> PRIVATE / PROTECTED
          </span>
        ) : null}
      </div>

      <p className="project-category">{meta.category}</p>
      <h3 className="project-name">{project.name}</h3>
      <p className="project-description">{project.body}</p>

      {project.stack.length > 0 ? (
        <ul className="project-stack" aria-label={`${project.name} technologies`}>
          {project.stack.filter((tech) => tech !== 'AI-assisted development').map((tech) => (
            <li key={tech}><TechnologyTag>{tech}</TechnologyTag></li>
          ))}
        </ul>
      ) : null}

      <div className="project-actions">
        {project.link ? (
          <>
            <span className="project-live-state"><span className="project-status-dot" /> LIVE</span>
            <div className="project-action-links">
              <button
                type="button"
                className="project-preview-button"
                aria-expanded={mobilePreviewOpen}
                aria-controls={`project-preview-${index}`}
                onClick={onTogglePreview}
              >
                {mobilePreviewOpen ? <X className="size-3.5" aria-hidden="true" /> : <Eye className="size-3.5" aria-hidden="true" />}
                {mobilePreviewOpen ? 'Close preview' : 'Preview'}
              </button>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.name} live site (opens in a new tab)`}
                className="project-live-link"
              >
                View Live Site <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </a>
            </div>
          </>
        ) : (
          <span className="project-protected-note">Protected client project · preview intentionally unavailable</span>
        )}
      </div>
    </article>
  )
}

function SystemCore({ activeIndex }: { activeIndex: number | null }) {
  const activeProject = activeIndex === null ? null : projects[activeIndex]
  const activeMeta = activeProject ? projectMeta[activeProject.name as keyof typeof projectMeta] : null

  return (
    <div className={`system-core ${activeProject ? 'has-selection' : ''}`} aria-live="polite">
      <span className="core-ring" aria-hidden="true"><span /></span>
      {activeProject && activeMeta ? (
        <>
          <span className="system-core-kicker">SELECTED / {activeMeta.index}</span>
          <strong className="system-core-name">{activeProject.name}</strong>
          <span className="system-core-state">{activeProject.link ? 'LIVE PROJECT' : 'PRIVATE PROJECT'}</span>
        </>
      ) : (
        <>
          <span className="system-core-kicker">BUILD SYSTEM</span>
          <span className="system-core-name">Web <i>•</i> AI <i>•</i> Automation</span>
          <span className="system-core-state">Gabriel Patel</span>
        </>
      )}
    </div>
  )
}

function Connectors() {
  return (
    <svg className="connectors" viewBox="0 0 1000 760" preserveAspectRatio="none" aria-hidden="true">
      <path className="connector connector-armani" d="M430 350 C355 285 285 205 170 135" />
      <path className="connector connector-sales" d="M545 330 C635 255 720 190 835 135" />
      <path className="connector connector-nexus" d="M565 375 C675 370 745 360 855 355" />
      <path className="connector connector-forex" d="M520 430 C610 510 645 580 640 650" />
      <path className="connector connector-merdicrat" d="M420 425 C345 500 275 565 165 620" />
      <circle className="anchor" cx="430" cy="350" r="5" />
      <circle className="anchor" cx="170" cy="135" r="5" />
      <circle className="anchor" cx="545" cy="330" r="5" />
      <circle className="anchor" cx="835" cy="135" r="5" />
      <circle className="anchor" cx="565" cy="375" r="5" />
      <circle className="anchor" cx="855" cy="355" r="5" />
      <circle className="anchor" cx="520" cy="430" r="5" />
      <circle className="anchor" cx="640" cy="650" r="5" />
      <circle className="anchor" cx="420" cy="425" r="5" />
      <circle className="anchor" cx="165" cy="620" r="5" />
    </svg>
  )
}
function ProjectPreview({ index, id }: { index: number; id?: string }) {
  const project = projects[index]
  const meta = projectMeta[project.name as keyof typeof projectMeta]
  const isPrivate = !project.link

  return (
    <aside id={id} className={`work-preview ${isPrivate ? 'is-private' : ''}`} aria-live="polite">
      <div className="work-preview-rail">
        <div className="work-preview-rail-left">
          <span className={`work-preview-status ${isPrivate ? 'is-private' : ''}`} aria-hidden="true" />
          <span className="work-preview-label">{isPrivate ? 'PROTECTED PROJECT' : 'LIVE PROJECT VIEW'}</span>
          <span className="work-preview-domain">{meta.domain}</span>
        </div>
        {project.link ? (
          <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.name} in a new tab`}>
            Open live site <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </a>
        ) : null}
      </div>

      {project.link ? (
        <div className="work-preview-viewport">
          <div className="work-preview-loading" aria-hidden="true">
            <span>{meta.index}</span>
            <strong>{project.name}</strong>
            <small>Loading live project preview…</small>
          </div>
          <iframe
            key={project.link}
            src={project.link}
            title={`${project.name} live website preview`}
            loading="lazy"
            referrerPolicy="no-referrer"
            tabIndex={-1}
            aria-hidden="true"
          />
          <div className="work-preview-shade" aria-hidden="true" />
        </div>
      ) : (
        <div className="work-preview-private">
          <div className="work-preview-private-icon"><LockKeyhole className="size-5" aria-hidden="true" /></div>
          <div>
            <span>PRIVATE / PROTECTED</span>
            <strong>{project.name}</strong>
            <p>{'privateDescription' in meta ? meta.privateDescription : 'This project is represented at a high level while its private deployment and internal details remain intentionally unavailable.'}</p>
          </div>
        </div>
      )}
    </aside>
  )
}

export function Work() {
  const [active, setActive] = useState<number | null>(null)
  const [desktopPreview, setDesktopPreview] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(min-width: 901px)')
    const sync = () => {
      setDesktopPreview(media.matches)
      setActive((current) => media.matches ? (current ?? 0) : null)
    }
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  const toggleMobilePreview = (index: number) => {
    if (desktopPreview) return
    setActive((current) => current === index ? null : index)
  }

  return (
    <Section id="work" index="03" kicker="Projects" title="Selected work">
      <p className="work-lede">Real projects built, deployed, and refined around practical business and user needs.</p>
      <div className="diagram-canvas" data-active={active ?? ''}>
        <div className="corner-mark corner-top" aria-hidden="true" />
        <div className="corner-mark corner-bottom" aria-hidden="true" />
        <Connectors />
        <div className="diagram-annotation annotation-armani">CLIENT SYSTEMS</div>
        <div className="diagram-annotation annotation-sales">AGENT ORCHESTRATION</div>
        <div className="diagram-annotation annotation-nexus">HEALTHCARE</div>
        <div className="diagram-annotation annotation-forex">DIGITAL PRODUCT</div>
        <div className="diagram-annotation annotation-merdicrat">WEB DELIVERY</div>
        <SystemCore activeIndex={active} />
        {projects.map((project, index) => (
          <ProjectNode
            key={project.name}
            project={project}
            index={index}
            active={active === index}
            desktopPreview={desktopPreview}
            mobilePreviewOpen={!desktopPreview && active === index}
            onSelect={() => setActive(index)}
            onTogglePreview={() => toggleMobilePreview(index)}
          />
        ))}
      </div>

      {active !== null ? <ProjectPreview index={active} id={`project-preview-${active}`} /> : (
        <>
          <div className="work-preview-placeholder" aria-hidden="true">
            <span>LIVE PROJECT VIEW</span>
            <strong>Select a project to inspect the live interface</strong>
          </div>
          <p className="work-preview-mobile-hint">Tap Preview on a public project to inspect it here without leaving the portfolio.</p>
        </>
      )}
    </Section>
  )
}
