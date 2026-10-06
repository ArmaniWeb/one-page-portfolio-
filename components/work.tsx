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
    preview: 'armani',
  },
  'AI Sales Operating System': {
    index: '02',
    category: 'AI SALES OPERATIONS SYSTEM',
    annotation: 'AGENT ORCHESTRATION',
    domain: 'PRIVATE SYSTEM',
    privateDescription:
      'A reusable AI-assisted sales operations framework that starts with business discovery, then coordinates specialized agents across prospecting, qualification, outreach, inbox management, CRM activity, and supervised workflow improvement.',
  },
  'Nexus Health': {
    index: '03',
    category: 'HEALTHCARE WEB PLATFORM',
    annotation: 'HEALTHCARE',
    domain: 'PRIVATE PROJECT',
    privateDescription:
      'A production healthcare website built for a private medical practice, with responsive service architecture, search-conscious content structure, administrative functionality, and modern deployment infrastructure.',
  },
  'Hooked On Forex': {
    index: '04',
    category: 'PUBLIC WEB PROJECT',
    annotation: 'DIGITAL PRODUCT',
    domain: 'hookedonforex.com',
    preview: 'forex',
  },
  Merdicrat: {
    index: '05',
    category: 'VOCABULARY LEARNING EXPERIENCE',
    annotation: 'WEB DELIVERY',
    domain: 'merdicrat.com',
    preview: 'merdicrat',
  },
} as const

function ProjectMap() {
  return (
    <svg className="project-map-svg" viewBox="0 0 900 680" preserveAspectRatio="none" aria-hidden="true">
      <g className="project-map-traces">
        <path className="pcb-trace" d="M408 286 H356 V246 H292 V208 H224" />
        <path className="pcb-trace pcb-trace-muted" d="M408 306 H332 V290 H266 V260 H196" />
        <path className="pcb-trace" d="M492 286 H544 V246 H608 V208 H676" />
        <path className="pcb-trace pcb-trace-muted" d="M492 306 H568 V290 H634 V260 H704" />
        <path className="pcb-trace pcb-trace-muted" d="M408 362 H344 V394 H278 V430 H210" />
        <path className="pcb-trace" d="M492 362 H556 V394 H622 V430 H690" />
        <path className="pcb-trace pcb-trace-muted" d="M432 258 V214 H406 V174 H382 V136" />
        <path className="pcb-trace pcb-trace-muted" d="M468 258 V214 H494 V174 H518 V136" />
        <path className="pcb-trace pcb-trace-muted" d="M432 390 V434 H406 V480 H384 V530" />
        <path className="pcb-trace pcb-trace-muted" d="M468 390 V434 H494 V480 H516 V530" />
      </g>

      <g className="project-map-routes">
        <path className="pcb-route pcb-route-01" d="M408 294 H350 V250 H286 V198 H220 V144 H162" />
        <path className="pcb-route pcb-route-02" d="M492 294 H550 V250 H614 V198 H680 V144 H738" />
        <path className="pcb-route pcb-route-03" d="M492 336 H578 V350 H654 V376 H734 V388" />
        <path className="pcb-route pcb-route-04" d="M468 390 V446 H500 V494 H530 V544 H560" />
        <path className="pcb-route pcb-route-05" d="M408 362 H340 V400 H274 V452 H208 V500 H158" />
      </g>

      <g className="project-map-vias">
        <circle className="pcb-via" cx="286" cy="198" r="3" />
        <circle className="pcb-via" cx="614" cy="198" r="3" />
        <circle className="pcb-via" cx="654" cy="376" r="3" />
        <circle className="pcb-via" cx="530" cy="544" r="3" />
        <circle className="pcb-via" cx="274" cy="452" r="3" />
        <circle className="pcb-via" cx="382" cy="136" r="3" />
        <circle className="pcb-via" cx="518" cy="136" r="3" />
        <circle className="pcb-via" cx="384" cy="530" r="3" />
        <circle className="pcb-via" cx="516" cy="530" r="3" />
      </g>

      <g className="project-map-ends">
        <circle className="pcb-route-end pcb-end-01" cx="162" cy="144" r="6" />
        <circle className="pcb-route-end pcb-end-02" cx="738" cy="144" r="6" />
        <circle className="pcb-route-end pcb-end-03" cx="734" cy="388" r="6" />
        <circle className="pcb-route-end pcb-end-04" cx="560" cy="544" r="6" />
        <circle className="pcb-route-end pcb-end-05" cx="158" cy="500" r="6" />
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
      aria-label={`${project.name}, ${isPrivate ? 'private project' : 'live project'}`}
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

function ProjectThumbnail({ name }: { name: string }) {
  const meta = projectMeta[name as keyof typeof projectMeta]
  if (!('preview' in meta)) return null

  return (
    <div className={`project-thumb project-thumb-${meta.preview}`} aria-hidden="true">
      <div className="project-thumb-browser">
        <span />
        <span />
        <span />
        <small>{meta.domain}</small>
      </div>
      {meta.preview === 'armani' ? (
        <div className="project-thumb-scene project-thumb-scene-armani">
          <div className="project-thumb-nav" />
          <div className="project-thumb-hero-line project-thumb-hero-line-lg" />
          <div className="project-thumb-hero-line project-thumb-hero-line-sm" />
          <div className="project-thumb-cta" />
          <div className="project-thumb-grid">
            <i /><i /><i />
          </div>
        </div>
      ) : null}
      {meta.preview === 'forex' ? (
        <div className="project-thumb-scene project-thumb-scene-forex">
          <div className="project-thumb-market-head" />
          <div className="project-thumb-chart">
            <i /><i /><i /><i /><i /><i />
          </div>
          <div className="project-thumb-metrics"><i /><i /><i /></div>
        </div>
      ) : null}
      {meta.preview === 'merdicrat' ? (
        <div className="project-thumb-scene project-thumb-scene-merdicrat">
          <div className="project-thumb-word">MERDI</div>
          <div className="project-thumb-definition" />
          <div className="project-thumb-definition project-thumb-definition-short" />
          <div className="project-thumb-pill">VOCABULARY</div>
        </div>
      ) : null}
    </div>
  )
}

function ProjectInspector({ index }: { index: number }) {
  const project = projects[index]
  const meta = projectMeta[project.name as keyof typeof projectMeta]
  const isPrivate = !project.link

  return (
    <aside className="project-inspector" aria-live="polite">
      <div className="project-inspector-head">
        <div>
          <span className="project-inspector-eyebrow">{meta.index} / {meta.category}</span>
          <h3>{project.name}</h3>
        </div>
        <span className={`project-inspector-status ${isPrivate ? 'is-private' : ''}`}>
          {isPrivate ? <LockKeyhole className="size-3.5" aria-hidden="true" /> : <i aria-hidden="true" />}
          {isPrivate ? 'PRIVATE' : 'LIVE'}
        </span>
      </div>

      <p className="project-inspector-copy">
        {'privateDescription' in meta ? meta.privateDescription : project.body}
      </p>

      {project.link ? (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-thumb-link">
          <ProjectThumbnail name={project.name} />
          <span>
            <strong>Open live project</strong>
            <small>{meta.domain}</small>
          </span>
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      ) : null}

      {project.stack.length > 0 ? (
        <ul className="project-inspector-stack" aria-label={`${project.name} technologies`}>
          {project.stack.filter((tech) => tech !== 'AI-assisted development').map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      ) : null}
    </aside>
  )
}

export function Work() {
  const [active, setActive] = useState(0)

  return (
    <Section id="work" index="03" kicker="Projects" title="Selected work">
      <p className="work-lede">A connected view of the systems, products, and client work I have built and shipped.</p>

      <div className="project-explorer">
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
      </div>
    </Section>
  )
}
