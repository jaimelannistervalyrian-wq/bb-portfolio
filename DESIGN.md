# Design System

## Direction

Bilal's portfolio feels like a precision-made studio instrument: warm, quiet, structured, and subtly mechanical. The physical scene is a business owner reviewing a potential long-term collaborator on a bright laptop during the workday, looking for immediate competence and calm. This calls for a warm light foundation, decisive near-black typography, controlled cobalt accents, and a darker closing scene.

## Color Strategy

Restrained with a strategic cobalt signal. Warm neutrals carry the majority of the surface; blue marks action, navigation state, progress, and a few visual details.

- Canvas: `oklch(98.2% 0.006 95)`
- Paper: `oklch(99.4% 0.004 95)`
- Ink: `oklch(18% 0.015 260)`
- Muted ink: `oklch(48% 0.018 260)`
- Line: `oklch(90% 0.009 260)`
- Cobalt: `oklch(52% 0.2 260)`
- Cobalt dark: `oklch(42% 0.18 260)`
- Night: `oklch(17% 0.012 260)`
- Positive: `oklch(70% 0.15 150)`

## Typography

Use Geist when available, with Aptos and Segoe UI as local fallbacks. The voice is compact, engineered, and personable. Headings use tight tracking and strong weight contrast. Body copy is capped around 68 characters and uses generous line-height.

- Display: fluid 56–96px, weight 650, line-height 0.96
- H2: fluid 40–72px, weight 620, line-height 1.0
- H3: 22–30px, weight 600
- Body large: 18–21px, line-height 1.6
- Body: 15–17px, line-height 1.65
- Labels: 11–13px, weight 650, letter spacing 0.1em

## Layout

Use a 12-column desktop grid with a maximum content width of 1240px and fluid gutters. Favor asymmetric editorial compositions and alternating section densities. The hero uses a 6/6 split with the portfolio composition deliberately escaping its column. Selected work uses one wide project, a split pair, then another wide project. Mobile receives a redesigned order and simplified compositions rather than a mechanical stack.

## Components

- Navigation: floating capsule-like bar with restrained radius, clear section state, and compact scroll state.
- Buttons: solid ink primary and quiet outlined secondary, 48px minimum height, translating arrow detail.
- Project frames: edge-to-edge visual stages with minimal outer chrome and descriptive metadata below.
- Service rows: full-width disclosure rows with visible summary and keyboard-accessible expansion.
- Timelines: scroll-activated progress path with clear current and completed states.
- Plans: typographic columns separated by rules; Business receives a dark cap and modest elevation.
- Tags: compact capability tokens that respond to pointer position through transform only.

## Motion

Use exponential ease-out curves. The opening sequence completes within 900ms and never blocks interaction. Scroll reveals use opacity and transform over 500–750ms. Hero parallax stays between 3px and 8px and is disabled on touch devices. Marquees are slow and decorative. Reduced-motion mode disables smooth scrolling, parallax, marquees, cursor effects, and non-essential reveals.

## Imagery

Until real case-study images are supplied, use explicitly labeled, code-native project preview structures that resemble browser, mobile, email, and campaign artifacts. Never imply fabricated clients or outcomes. Each placeholder includes a replacement note and preserves a 16:10 or 4:3 aspect ratio to avoid layout shift.

## Responsive Behavior

- 1440/1280: full asymmetric compositions and controlled parallax.
- 1024: reduced hero overlap, stable 2-column project splits.
- 768: mobile navigation, single-column content with intentionally reordered visual groups.
- 480/375: compact type scale, full-width actions, simplified mockup layers, vertical process timeline, and no pointer-specific effects.
