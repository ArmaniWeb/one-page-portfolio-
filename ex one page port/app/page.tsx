import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Focus } from '@/components/focus'
import { Work } from '@/components/work'
import { TechStack } from '@/components/tech-stack'
import { Experience } from '@/components/experience'
import { Contact } from '@/components/contact'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="min-h-screen">
        <Hero />
        <About />
        <Focus />
        <Work />
        <TechStack />
        <Experience />
      </main>
      <Contact />
    </>
  )
}
