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

function ProjectMap() {
  return (
    <svg className="project-map-svg" viewBox="0 0 1200 720" preserveAspectRatio="none" aria-hidden="true">
      <g className="project-map-traces">
        <path className="pcb-trace" d="M548 324 H500 V278 H430 V230 H360" />
        <path className="pcb-trace pcb-trace-muted" d="M548 342 H470 V320 H400 V288 H320" />
        <path className="pcb-trace" d="M652 324 H700 V278 H770 V230 H840" />
        <path className="pcb-trace pcb-trace-muted" d="M652 342 H730 V320 H800 V288 H880" />
        <path className="pcb-trace pcb-trace-muted" d="M548 382 H482 V414 H414 V452 H342" />
        <path className="pcb-trace" d="M652 382 H718 V414 H786 V452 H858" />
        <path className="pcb-trace pcb-trace-muted" d="M580 294 V250 H550 V206 H520 V164" />
        <path className="pcb-trace pcb-trace-muted" d="M620 294 V250 H650 V206 H680 V164" />
        <path className="pcb-trace pcb-trace-muted" d="M580 406 V454 H552 V504 H528 V552" />
        <path className="pcb-trace pcb-trace-muted" d="M620 406 V454 H648 V504 H672 V552" />
      </g>

      <g className="project-map-routes">
        <path className="pcb-route pcb-route-01" d="M548 330 H476 V278 H398 V214 H318 V152 H260" />
        <path className="pcb-route pcb-route-02" d="M652 330 H724 V278 H802 V214 H882 V152 H940" />
        <path className="pcb-route pcb-route-03" d="M652 370 H742 V392 H832 V420 H930 V430 H1016" />
        <path className="pcb-route pcb-route-04" d="M620 406 V470 H654 V524 H690 V574 H706 V628" />
        <path className="pcb-route pcb-route-05" d="M548 382 H470 V426 H390 V482 H316 V540 H254" />
      </g>

      <g className="project-map-vias">
        <circle className="pcb-via" cx="398" cy="214" r="3" />
        <circle className="pcb-via" cx="802" cy="214" r="3" />
        <circle className="pcb-via" cx="832" cy="420" r="3" />
        <circle className="pcb-via" cx="690" cy="574" r="3" />
        <circle className="pcb-via" cx="390" cy="482" r="3" />
        <circle className="pcb-via" cx="520" cy="164" r="3" />
        <circle className="pcb-via" cx="680" cy="164" r="3" />
        <circle className="pcb-via" cx="528" cy="552" r="3" />
        <circle className="pcb-via" cx="672" cy="552" r="3" />
      </g>

      <g className="project-map-ends">
        <circle className="pcb-route-end pcb-end-01" cx="260" cy="152" r="6" />
        <circle className="pcb-route-end pcb-end-02" cx="940" cy="152" r="6" />
        <circle className="pcb-route-end pcb-end-03" cx="1016" cy="430" r="6" />
        <circle className="pcb-route-end pcb-end-04" cx="706" cy="628" r="6" />
        <circle className="pcb-route-end pcb-end-05" cx="254" cy="540" r="6" />
      </g>
    </svg>
  )
}

function ProjectCore({ activeIndex }: { activeIndex: number }) {
  const project = projects[activeIndex]
  const meta = projectMeta[project.name as keyof typeof projectMeta]

  return (
    <div className="project-core" aria-live="polite">
      <span className="project-core-pin project-core-pin-a" aria-hidden="true" />
      <span className="project-core-pin project-core-pin-b" aria-hidden="true" />
      <span className="project-core-pin project-core-pin-c" aria-hidden="true" />
      <span className="project-core-pin project-core-pin-d" aria-hidden="true" />
      <div className="project-core-body">
        <span className="project-core-kicker">SYSTEM / {meta.index}</span>
        <strong className="project-core-title">BUILD</strong>
        <span className="project-core-subtitle">{project.name}</span>
      </div>
    </div>
  )
}

function ProjectEndpoint({
  project,
  active,
  onSelect,
}: {
  project: (typeof projects)[number]
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
      <span className="project-endpoint-number">{meta.index}</span>
      <span className="project-endpoint-copy">
        <strong>{project.name}</strong>
        <span>{meta.annotation}</span>
      </span>
      <span className={`project-endpoint-state ${isPrivate ? 'is-private' : ''}`}>
        <i aria-hidden="true" />
        {isPrivate ? 'PRIVATE' : 'LIVE'}
      </span>
    </button>
  )
}

function ProjectInspector({ index }: { index: number }) {
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
            <span className="project-inspector-domain">{meta.domain}</span>
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
        <div className="project-matrix-meta project-matrix-meta-left">PROJECT NETWORK</div>
        <div className="project-matrix-meta project-matrix-meta-right"><i aria-hidden="true" /> 05 NODES</div>
        <ProjectMap />
        <ProjectCore activeIndex={active} />

        <div className="project-endpoint-list">
          {projects.map((project, index) => (
            <ProjectEndpoint
              key={project.name}
              project={project}
              active={active === index}
              onSelect={() => setActive(index)}
            />
          ))}
        </div>
      </div>

      <ProjectInspector index={active} />
      <LiveProjectPreview index={active} />
    </Section>
  )
}
