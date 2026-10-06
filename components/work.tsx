'use client'

import { useState } from 'react'
import { ArrowUpRight, LockKeyhole } from 'lucide-react'
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
    privateDescription:
      'The portfolio shows the system at a high level while keeping its internal operating logic, prompts, and deployment details private.',
  },
  'Nexus Health': {
    index: '03',
    category: 'HEALTHCARE WEB PLATFORM',
    annotation: 'HEALTHCARE',
    domain: 'PRIVATE PROJECT',
    privateDescription:
      'This client project is represented in the portfolio, but the live deployment is intentionally not exposed.',
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

function CircuitNetwork() {
  return (
    <svg className="pcb-map" viewBox="0 0 1200 720" preserveAspectRatio="none" aria-hidden="true">
      <g className="pcb-traces">
        <path d="M560 306 H510 V258 H454 V214 H392 V174 H324" />
        <path d="M548 322 H486 V294 H430 V250 H366 V220 H294" />
        <path d="M540 340 H470 V328 H404 V300 H338 V282 H250" />
        <path d="M540 360 H464 V372 H394 V400 H326 V420 H238" />
        <path d="M548 380 H480 V416 H414 V464 H354 V510 H286" />
        <path d="M560 396 H510 V450 H462 V504 H404 V556 H326" />

        <path d="M640 306 H690 V256 H744 V216 H808 V176 H876" />
        <path d="M652 322 H714 V292 H772 V252 H836 V220 H908" />
        <path d="M660 340 H730 V326 H796 V300 H862 V282 H952" />
        <path d="M660 360 H736 V372 H806 V402 H874 V420 H962" />
        <path d="M652 380 H720 V416 H786 V464 H846 V510 H914" />
        <path d="M640 396 H690 V450 H738 V504 H796 V556 H874" />

        <path d="M578 290 V244 H548 V194 H520 V144 H486 V94" />
        <path d="M596 290 V232 H584 V172 H572 V114 H550 V64" />
        <path d="M614 290 V232 H626 V172 H640 V114 H662 V64" />
        <path d="M632 290 V244 H662 V194 H692 V144 H724 V94" />

        <path d="M578 410 V456 H548 V506 H520 V556 H486 V616" />
        <path d="M596 410 V468 H584 V528 H572 V586 H550 V656" />
        <path d="M614 410 V468 H626 V528 H640 V586 H662 V656" />
        <path d="M632 410 V456 H662 V506 H692 V556 H724 V616" />
      </g>

      <g className="pcb-routes">
        <path className="pcb-route pcb-route-01" d="M548 324 H488 V284 H422 V230 H360 V182 H290 V134" />
        <path className="pcb-route pcb-route-02" d="M652 324 H716 V282 H782 V226 H846 V176 H914 V126" />
        <path className="pcb-route pcb-route-03" d="M660 350 H752 V350 H836 V350 H918 V350 H1010" />
        <path className="pcb-route pcb-route-04" d="M644 396 H700 V452 H756 V516 H810 V574 H858 V626" />
        <path className="pcb-route pcb-route-05" d="M556 396 H500 V452 H444 V516 H388 V566 H316 V620" />
      </g>

      <g className="pcb-route-ends">
        {[290, 914, 1010, 858, 316].map((x, i) => {
          const ys = [134, 126, 350, 626, 620]
          return <circle key={x} cx={x} cy={ys[i]} r="6" className={`pcb-route-end contact-${String(i + 1).padStart(2, '0')}`} />
        })}
      </g>

      <g className="pcb-vias">
        <circle cx="324" cy="174" r="3" />
        <circle cx="250" cy="282" r="3" />
        <circle cx="238" cy="420" r="3" />
        <circle cx="286" cy="510" r="3" />
        <circle cx="876" cy="176" r="3" />
        <circle cx="952" cy="282" r="3" />
        <circle cx="962" cy="420" r="3" />
        <circle cx="914" cy="510" r="3" />
        <circle cx="486" cy="94" r="3" />
        <circle cx="550" cy="64" r="3" />
        <circle cx="662" cy="64" r="3" />
        <circle cx="724" cy="94" r="3" />
        <circle cx="486" cy="616" r="3" />
        <circle cx="550" cy="656" r="3" />
        <circle cx="662" cy="656" r="3" />
        <circle cx="724" cy="616" r="3" />
      </g>
    </svg>
  )
}

function CircuitCore({ activeIndex }: { activeIndex: number }) {
  const project = projects[activeIndex]
  const meta = projectMeta[project.name as keyof typeof projectMeta]

  return (
    <div className="project-core" aria-live="polite">
      <span className="project-core-pin project-core-pin-a" aria-hidden="true" />
      <span className="project-core-pin project-core-pin-b" aria-hidden="true" />
      <span className="project-core-pin project-core-pin-c" aria-hidden="true" />
      <span className="project-core-pin project-core-pin-d" aria-hidden="true" />
      <span className="project-core-pin project-core-pin-e" aria-hidden="true" />
      <span className="project-core-pin project-core-pin-f" aria-hidden="true" />
      <span className="project-core-pin project-core-pin-g" aria-hidden="true" />
      <span className="project-core-pin project-core-pin-h" aria-hidden="true" />
      <div className="project-core-body">
        <span className="project-core-kicker">SYSTEM / {meta.index}</span>
        <strong className="project-core-title">BUILD</strong>
        <span className="project-core-subtitle">{project.name}</span>
      </div>
    </div>
  )
}

function CircuitTerminal({
  project,
  index,
  active,
  onSelect,
}: {
  project: (typeof projects)[number]
  index: number
  active: boolean
  onSelect: () => void
}) {
  const meta = projectMeta[project.name as keyof typeof projectMeta]
  const isPrivate = !project.link

  return (
    <button
      type="button"
      className={`project-endpoint project-endpoint-${meta.index} ${active ? 'is-active' : ''}`}
      onClick={onSelect}
      onMouseEnter={onSelect}
      onFocus={onSelect}
      aria-pressed={active}
    >
      <span className="project-endpoint-topline">
        <span className="project-endpoint-index">{meta.index}</span>
        <span className={`project-endpoint-state ${isPrivate ? 'is-private' : ''}`}>
          <i aria-hidden="true" />
          {isPrivate ? 'PRIVATE' : 'LIVE'}
        </span>
      </span>
      <strong>{project.name}</strong>
      <span className="project-endpoint-meta">{meta.annotation}</span>
    </button>
  )
}

function ProjectDetails({ index }: { index: number }) {
  const project = projects[index]
  const meta = projectMeta[project.name as keyof typeof projectMeta]
  const isPrivate = !project.link

  return (
    <article className="project-inspector" aria-live="polite">
      <div className="project-inspector-head">
        <div>
          <span className="project-inspector-eyebrow">{meta.index} / {meta.category}</span>
          <h3>{project.name}</h3>
        </div>
        <span className={`project-inspector-status ${isPrivate ? 'is-private' : ''}`}>
          {isPrivate ? <LockKeyhole className="size-3.5" aria-hidden="true" /> : <i aria-hidden="true" />}
          {isPrivate ? 'PRIVATE / PROTECTED' : 'LIVE PROJECT'}
        </span>
      </div>

      <div className="project-inspector-grid">
        <p className="project-inspector-copy">{project.body}</p>
        <div className="project-inspector-side">
          {project.stack.length > 0 ? (
            <ul className="project-inspector-stack" aria-label={`${project.name} technologies`}>
              {project.stack.filter((tech) => tech !== 'AI-assisted development').map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          ) : (
            <span className="circuit-project-domain">{meta.domain}</span>
          )}

          {project.link ? (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-inspector-link">
              View live site <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          ) : (
            <p className="project-inspector-private">
              {'privateDescription' in meta
                ? meta.privateDescription
                : 'This project is intentionally presented without exposing its private deployment.'}
            </p>
          )}
        </div>
      </div>
    </article>
  )
}

function LiveProjectPreview({ index }: { index: number }) {
  const project = projects[index]
  if (!project.link) return null

  const meta = projectMeta[project.name as keyof typeof projectMeta]

  return (
    <aside className="work-preview project-preview-refined" aria-live="polite">
      <div className="work-preview-rail">
        <div className="work-preview-rail-left">
          <span className="work-preview-status" aria-hidden="true" />
          <span className="work-preview-label">LIVE PROJECT VIEW</span>
          <span className="work-preview-domain">{meta.domain}</span>
        </div>
        <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.name} in a new tab`}>
          Open live site <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </a>
      </div>
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
    </aside>
  )
}

export function Work() {
  const [active, setActive] = useState(0)

  return (
    <Section id="work" index="03" kicker="Projects" title="Selected work">
      <p className="work-lede">A connected view of the systems, products, and client work I have built and shipped.</p>

      <div className="project-matrix" data-active={active}>
        <div className="project-matrix-grid" aria-hidden="true" />
        <div className="project-matrix-label project-matrix-label-a">PROJECT NETWORK</div>
        <div className="project-matrix-label project-matrix-label-b">05 ACTIVE NODES</div>
        <CircuitNetwork />
        <CircuitCore activeIndex={active} />

        <div className="project-endpoint-list">
          {projects.map((project, index) => (
            <CircuitTerminal
              key={project.name}
              project={project}
              index={index}
              active={active === index}
              onSelect={() => setActive(index)}
            />
          ))}
        </div>
      </div>

      <ProjectDetails index={active} />
      <LiveProjectPreview index={active} />
    </Section>
  )
}
