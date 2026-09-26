import { ArrowUpRight } from 'lucide-react'
import { Section } from '@/components/section'

const roleAreas = [
  {
    label: 'BUILD',
    items: ['Web products', 'Digital systems', 'AI-assisted workflows'],
  },
  {
    label: 'CLIENT',
    items: ['Discovery', 'Requirements', 'Direct communication'],
  },
  {
    label: 'OPERATE',
    items: ['Deployment', 'Troubleshooting', 'Iteration'],
  },
]

export function Experience() {
  return (
    <Section id="experience" index="05" kicker="Role history" title="Experience">
      <article className="experience-shell">
        <div className="experience-identity">
          <span className="experience-status"><i aria-hidden="true" /> CURRENT ROLE</span>
          <p className="experience-role">Founder / Developer</p>
          <p className="experience-period">May 2025 — Present</p>
          <h3>Armani Web Design</h3>
          <p className="experience-location">Seattle, WA · Remote</p>
        </div>

        <div className="experience-detail">
          <p className="experience-summary">
            Founded and operate Armani Web Design, where I work directly with businesses from discovery through deployment. I translate business requirements into websites and digital systems, handle development and technical implementation, and use AI and automation where they meaningfully improve workflows or customer experience. The role has required me to combine technical execution with client communication, problem-solving, iteration, and ownership of the final result.
          </p>

          <div className="experience-areas" aria-label="Responsibilities across build, client, and operations work">
            {roleAreas.map((area) => (
              <div key={area.label} className="experience-area">
                <span>{area.label}</span>
                <ul>
                  {area.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <a
            href="/Gabriel_Patel_Resume_Tech_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Gabriel Patel's resume"
            className="experience-resume-link"
          >
            View full resume
            <ArrowUpRight className="size-3.5 text-ember" />
          </a>
        </div>
      </article>
    </Section>
  )
}
