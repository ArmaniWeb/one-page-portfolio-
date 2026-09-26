'use client'

import { useState } from 'react'
import { Section } from '@/components/section'
import { focusAreas } from '@/lib/content'

const terms = [
  ['INTERFACES', 'APPLICATION LOGIC', 'RESPONSIVE UI', 'DEPLOYMENT'],
  ['LLM WORKFLOWS', 'AI AGENTS', 'PROMPT DESIGN', 'AUTOMATION'],
  ['SUPABASE', 'POSTGRESQL', 'APIS', 'INTEGRATIONS'],
  ['REQUIREMENTS', 'PROTOTYPING', 'TESTING', 'ITERATION'],
]

export function Focus() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <Section id="focus" index="02" kicker="Capabilities" title="Areas of focus">
      <p className="focus-lede">The areas where I spend most of my time building, solving, and improving.</p>
      <div className="capability-index">
        <aside className="capability-index-intro">
          <div className="capability-index-label">CAPABILITY INDEX</div>
          <div className="capability-index-count" aria-hidden="true">04</div>
          <p>Four areas that shape how I approach digital products, AI-enabled workflows, and technical implementation.</p>
          <span className="capability-index-rule" aria-hidden="true" />
        </aside>
        <div className="capability-ledger" onMouseLeave={() => setActive(null)}>
          {focusAreas.map((area, index) => (
            <article
              key={area.title}
              tabIndex={0}
              className={`capability-row ${active === index ? 'is-active' : ''}`}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
            >
              <span className="capability-row-number">0{index + 1}</span>
              <div className="capability-row-main">
                <h3>{area.title}</h3>
                <p>{area.body}</p>
              </div>
              <ul aria-label={`${area.title} capabilities`}>
                {terms[index].map((term) => <li key={term}>{term}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
