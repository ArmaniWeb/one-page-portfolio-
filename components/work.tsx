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


const projectCaseStudies = {
  'Armani Web Design': {
    challenge:
      'Build a credible web-solutions business while handling design, development, lead generation, delivery, and ongoing client work without a large internal team.',
    build:
      'A production web platform paired with practical business tooling: responsive service pages, conversion-focused UX, lead workflows, AI-assisted website analysis, and repeatable deployment patterns.',
    evidence: [
      'Next.js + React production implementation',
      'Supabase-backed tooling and lead workflows',
      'GitHub + Vercel deployment workflow',
      'AI-assisted analysis and automation features',
    ],
    outcome: '10+ client projects delivered and $20K+ in revenue generated through the business.',
    architecture: ['Customer need', 'Web experience', 'Lead systems', 'Automation', 'Delivery'],
  },
  'AI Sales Operating System': {
    challenge:
      'Replace disconnected sales tasks with one configurable operating system that can first understand a business, then coordinate specialized AI agents without turning into an uncontrolled black box.',
    build:
      'A discovery-first sales framework with specialized agents for prospecting, qualification, outreach, inbox handling, CRM activity, and supervisory review, designed to work with an existing CRM rather than replace it.',
    evidence: [
      'Versioned contracts and release validation',
      'Deterministic buyer-likelihood scoring',
      'CRM integration and adapter architecture',
      'Automated validation and regression testing',
    ],
    outcome:
      'A reusable, installation-oriented system that can be configured around a business while preserving review, logging, and operational guardrails.',
    architecture: ['Discovery', 'Specialized agents', 'Shared context', 'CRM', 'Supervisor'],
  },
  'Nexus Health': {
    challenge:
      'Turn a broad healthcare service offering into a calm, credible, production-ready patient-facing website while protecting private client infrastructure and supporting future operational integrations.',
    build:
      'A responsive healthcare platform covering service architecture, patient resources, search-conscious content, structured data, protected staging, and a deployment setup designed for maintainability.',
    evidence: [
      '26 / 26 static pages completed',
      'Next.js + Supabase + Vercel production stack',
      'Protected staging and secret-handling checks',
      'Node 22 deployment and keepalive planning',
    ],
    outcome:
      'A complete protected build prepared for staging review and production rollout without exposing the private client deployment.',
    architecture: ['Service model', 'Content architecture', 'Responsive UI', 'Data layer', 'Deployment'],
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

      {project.name in projectCaseStudies ? (
        <div className="project-case-study">
          {(() => {
            const study = projectCaseStudies[project.name as keyof typeof projectCaseStudies]
            return (
              <>
                <div className="project-case-study-grid">
                  <section>
                    <span>01 / CHALLENGE</span>
                    <p>{study.challenge}</p>
                  </section>
                  <section>
                    <span>02 / BUILD</span>
                    <p>{study.build}</p>
                  </section>
                </div>

                <div className="project-architecture" aria-label={`${project.name} architecture overview`}>
                  <span className="project-case-label">03 / SYSTEM FLOW</span>
                  <div className="project-architecture-flow">
                    {study.architecture.map((item, itemIndex) => (
                      <div className="project-architecture-step" key={item}>
                        <strong>{String(itemIndex + 1).padStart(2, '0')}</strong>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="project-evidence">
                  <span className="project-case-label">04 / ENGINEERING EVIDENCE</span>
                  <ul>
                    {study.evidence.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>

                <div className="project-outcome">
                  <span className="project-case-label">05 / OUTCOME</span>
                  <p>{study.outcome}</p>
                </div>
              </>
            )
          })()}
        </div>
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
