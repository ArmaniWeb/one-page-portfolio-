# Design QA Checklist

Review the deployed Vercel preview at these widths before production promotion:

- 1440px — large desktop
- 1280px — desktop
- 1024px — laptop / tablet landscape
- 900px — project topology transition
- 768px — tablet
- 430px — large mobile
- 390px — common mobile
- 360px — small mobile
- 320px — minimum supported width

## Must pass

- No horizontal scrolling or clipped content
- Navigation active state and scroll progress remain accurate
- Mobile navigation traps focus, closes with Escape, and restores focus
- Hero animation never competes with headline readability
- Reduced-motion mode removes nonessential movement
- Focus ledger remains readable without behaving like cards
- Selected Work topology stays connected on tablet/mobile
- Only one live project iframe is loaded at a time
- Public project previews do not create layout shifts on desktop
- Nexus remains private and unlinked
- Stack pipeline remains understandable after the vertical transition
- Resume links all resolve to `/Gabriel_Patel_Resume_Tech_2026.pdf`
- Contact email wraps safely on narrow screens
- Keyboard focus is visible on all interactive controls

## Preview caveat

The public project viewport uses live iframes. If a public project later adds `X-Frame-Options` or a restrictive `frame-ancestors` CSP directive, replace that project’s iframe with a locally stored screenshot rather than weakening the project’s security headers.
