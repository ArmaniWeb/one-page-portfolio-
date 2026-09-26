'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const links = [
  { href: '#about', label: 'About', id: 'about' },
  { href: '#focus', label: 'Focus', id: 'focus' },
  { href: '#work', label: 'Work', id: 'work' },
  { href: '#stack', label: 'Stack', id: 'stack' },
  { href: '#experience', label: 'Experience', id: 'experience' },
  { href: '/Gabriel_Patel_Resume_Tech_2026.pdf', label: 'Resume', external: true },
  { href: '#contact', label: 'Contact', id: 'contact' },
]

const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('top')
  const progressRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        const y = window.scrollY
        const scrollable = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
        const progress = Math.min(Math.max(y / scrollable, 0), 1)
        setScrolled(y > 16)
        if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`
        frame = 0
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    const sections = links
      .filter((link) => link.id)
      .map((link) => document.getElementById(link.id!))
      .filter((section): section is HTMLElement => Boolean(section))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActiveSection(visible.target.id)
      },
      { rootMargin: '-24% 0px -58% 0px', threshold: [0.05, 0.2, 0.4, 0.6] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const focusFirstLink = () => {
      const firstLink = headerRef.current?.querySelector<HTMLAnchorElement>('#mobile-navigation a[href]')
      firstLink?.focus()
    }
    const frame = window.requestAnimationFrame(focusFirstLink)

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setMenuOpen(false)
        window.requestAnimationFrame(() => menuButtonRef.current?.focus())
        return
      }

      if (event.key !== 'Tab' || !headerRef.current) return
      const focusable = Array.from(headerRef.current.querySelectorAll<HTMLElement>(focusableSelector))
        .filter((element) => element.offsetParent !== null)
      if (!focusable.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.cancelAnimationFrame(frame)
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header ref={headerRef} className={`site-header ${scrolled || menuOpen ? 'is-scrolled' : ''}`}>
      <nav className="site-container mx-auto flex min-h-16 max-w-7xl items-center justify-between px-4" aria-label="Primary navigation">
        <a href="#top" onClick={closeMenu} className="brand-mark font-mono text-sm font-medium tracking-tight text-foreground" aria-label="Gabriel Patel — back to top">
          Gabriel<span>.Patel</span>
        </a>

        <ul className="hidden items-center gap-[clamp(.9rem,2vw,1.65rem)] lg:flex">
          {links.map((link) => {
            const active = link.id === activeSection
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  aria-current={active ? 'location' : undefined}
                  aria-label={link.external ? "View Gabriel Patel's resume" : undefined}
                  className={`nav-link ${active ? 'is-active' : ''}`}
                >
                  {link.label}
                  {link.external ? <ArrowUpRight className="size-3.5 text-ember" aria-hidden="true" /> : null}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a href="#contact" onClick={closeMenu} className="nav-cta hidden sm:inline-flex">Get in touch</a>
          <button
            ref={menuButtonRef}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((open) => !open)}
            className="nav-menu-button lg:hidden"
          >
            {menuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <div className="nav-progress-track" aria-hidden="true"><div ref={progressRef} className="nav-progress-bar" /></div>

      {menuOpen ? (
        <div id="mobile-navigation" className="mobile-nav-panel lg:hidden">
          <div className="site-container mx-auto max-w-7xl px-4 py-4">
            <div className="mobile-nav-meta"><span>Navigation</span><span>Remote · Seattle, WA</span></div>
            <ul className="mobile-nav-list">
              {links.map((link, index) => {
                const active = link.id === activeSection
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      aria-current={active ? 'location' : undefined}
                      aria-label={link.external ? "View Gabriel Patel's resume" : undefined}
                      onClick={closeMenu}
                      className={`mobile-nav-link ${active ? 'is-active' : ''}`}
                    >
                      <span className="mobile-nav-index">0{index + 1}</span>
                      <span>{link.label}</span>
                      {link.external ? <ArrowUpRight className="ml-auto size-4 text-ember" aria-hidden="true" /> : <span className="mobile-nav-arrow" aria-hidden="true">↘</span>}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      ) : null}
    </header>
  )
}
