import type { ReactNode } from 'react'

export function Section({
  id,
  index,
  title,
  kicker,
  children,
}: {
  id: string
  index: string
  title: string
  kicker?: string
  children: ReactNode
}) {
  return (
    <section id={id} className="portfolio-section" aria-labelledby={`${id}-title`}>
      <div className="site-container mx-auto max-w-7xl px-4 py-[clamp(4.5rem,9vw,8.75rem)]">
        <header className="section-heading mb-[clamp(2.5rem,5vw,4.5rem)]">
          <div className="section-kicker">
            <span className="section-index">{index}</span>
            <span aria-hidden="true" className="section-kicker-rule" />
            <span className="section-kicker-label">{kicker ?? title}</span>
          </div>
          <h2 id={`${id}-title`} className="section-title">{title}</h2>
        </header>
        <div className="section-body">{children}</div>
      </div>
    </section>
  )
}
