import type { CSSProperties } from 'react'
import { Section } from '@/components/section'
import { currentLearning, stack } from '@/lib/content'

const stages = [
  { number: '01', title: 'BUILD', label: 'INTERFACE + APPLICATION', items: stack[0].items, color: '#5b8cff' },
  { number: '02', title: 'DATA', label: 'STORAGE + CONNECTIONS', items: stack[1].items, color: '#7dd3fc' },
  { number: '03', title: 'INTELLIGENCE', label: 'REASONING + AUTOMATION', items: stack[2].items, color: '#8b7cff' },
  { number: '04', title: 'SHIP', label: 'DEPLOYMENT + TOOLING', items: stack[3].items, color: '#ff7a45' },
]

export function TechStack() {
  return <Section id="stack" index="04" kicker="Toolchain" title="Tools & technologies">
    <div className="development-pipeline" aria-label="Development pipeline from build to ship"><div className="pipeline-baseline" aria-hidden="true" /><div className="pipeline-signal" aria-hidden="true" />
      {stages.map((stage) => <article key={stage.number} className="pipeline-stage" style={{ '--stage-color': stage.color } as CSSProperties}><div className="pipeline-anchor" aria-hidden="true" /><span className="font-mono text-[11px] tracking-[0.2em]" style={{ color: stage.color }}>{stage.number}</span><h3 className="mt-3 text-2xl font-medium tracking-tight text-[#f4f7fb]">{stage.title}</h3><p className="mt-2 font-mono text-[9px] tracking-[0.13em] text-[#6f7c91]">{stage.label}</p><ul className="pipeline-items">{stage.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}
    </div>
    <div className="learning-panel mt-14 border-t border-border pt-8"><h3 className="font-mono text-xs uppercase tracking-widest text-signal">Currently deepening</h3><p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">I&apos;m intentionally strengthening the engineering foundations behind the systems I already build, with an emphasis on understanding how and why the technology works rather than relying on tools as a black box.</p><ul className="mt-5 grid gap-x-8 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-3">{currentLearning.map((item) => <li key={item} className="flex items-center gap-2.5 text-foreground"><span className="h-1 w-1 rounded-full bg-signal/70" />{item}</li>)}</ul></div>
  </Section>
}
