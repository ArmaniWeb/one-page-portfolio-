import { Section } from '@/components/section'
import { profile } from '@/lib/content'

export function About() {
  return (
    <Section id="about" index="01" kicker="Profile" title="About">
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <p className="text-balance text-xl leading-relaxed text-foreground md:text-2xl">
          {profile.intro}
        </p>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-6 self-start md:grid-cols-1">
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Based in
            </dt>
            <dd className="mt-1 text-foreground">{profile.location}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Working on
            </dt>
            <dd className="mt-1 text-foreground">Applied AI & full-stack systems</dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Open to
            </dt>
            <dd className="mt-1 text-foreground">Full-time & contract roles</dd>
          </div>
        </dl>
      </div>
    </Section>
  )
}
