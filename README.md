# Meraj Naqui — Web Accessibility Portfolio

A premium portfolio extension that preserves the supplied homepage, stack and Aubergine / Coral / Electric Lime / Warm Cream visual identity.

## Stack
- Next.js 15 (App Router)
- React 19 + TypeScript
- Tailwind CSS
- Lucide icons

## Run locally
Requires Node.js 20.9+.

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Added routes
- `/projects/shopify-accessibility`
- `/projects/wordpress-accessibility`
- `/projects/react-nextjs-accessibility`
- `/projects/elearning-accessibility`
- Matching `/demos/<slug>` routes for each project.

## What changed
- Preserved the existing homepage sections, navigation, about content, expertise, toolkit and contact section.
- Expanded Selected Work into four platform-specific project cards.
- Added CSS-built desktop and mobile interface mockups for each project.
- Added individual case studies with representative accessibility barriers, remediation approaches, WCAG success-criterion references and suggested validation plans.
- Added responsive internal demo pages with keyboard-operable controls and status feedback.
- Added reduced-motion support and visible focus styles for form controls.

## Important publishing notes
The projects and interfaces are illustrative portfolio concepts, not verified client engagements or audits of production websites. Do not describe the listed issues as findings from a real audit, or claim WCAG conformance, until you have performed and documented testing on the final implementation. The mockups are generated UI previews, not captured screenshots of deployed products.

Before publishing, replace the placeholder email and social URLs in `app/page.tsx`, and personalize project outcomes with evidence from your own work.

## Homepage case-study filters
The Accessibility Projects section includes five responsive, keyboard-operable filter buttons: All Case Studies, Shopify E-Commerce, WordPress & CMS, React / Next.js, and E-Learning & LMS. The active filter is exposed with `aria-pressed`, and the result count is announced through a polite live region.


## Replacing sample project content

Each project is configured in `app/projects/data.ts`. For each project, replace:
- `clientName`, `role`, and `duration` with the real project details.
- `liveUrl` with the actual public website URL.
- `overview`, `summary`, `issues`, and `tests` with work you genuinely completed and verified.
- `screenshots` labels, `src` paths, and `alt` text with your own screenshots.

### Screenshot files
The current images in `public/images/projects/` are illustrative SVG placeholders. Replace the files with your actual project screenshots. If you use JPG or PNG, update the matching `src` value in `app/projects/data.ts` too. Suggested names:
- `shopify-desktop.svg`, `shopify-mobile.svg`, `shopify-detail.svg`
- `wordpress-desktop.svg`, `wordpress-mobile.svg`, `wordpress-detail.svg`
- `react-desktop.svg`, `react-mobile.svg`, `react-detail.svg`
- `elearning-desktop.svg`, `elearning-mobile.svg`, `elearning-detail.svg`

The sample live URLs all point to `https://example.com`. Replace them before publishing. The case-study copy, screenshots, timelines, and test plans are dummy examples; do not present them as verified client audits or completed work until updated.
