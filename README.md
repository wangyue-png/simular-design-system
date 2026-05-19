# Simular Design System

> Internal brand and design reference for Simular and Sai.
> Use this when creating slides, marketing materials, social posts, one-pagers, or any branded visual.
> Last updated: 2026-05-19

---

## What's in this repo

```
assets/                        ← logos, marks, wordmarks
fonts/                         ← Manrope (variable) + Adamina TTFs
tokens.json                    ← design tokens (source of truth)
colors_and_type.css            ← CSS variables, ready to import
ui_kits/
  simular-marketing/           ← marketing site components (hero, nav, footer)
  sai-app/                     ← Sai product UI components
preview/                       ← rendered previews of design system elements
SKILL.md                       ← Claude AI skill manifest for automated design tasks
```

---

## Default mode: light

**Light mode is the default for all outputs** — slides, social posts, marketing, email, one-pagers. Use dark mode only when explicitly needed (e.g. announcement banners, dark-themed decks).

---

# Simular Brand

Simular is the company. Use the Simular brand for company-level communications: website, press, investor materials, hiring, company announcements.

## Logo

The Simular logo is a bold geometric **S-mark** — two interlocking half-circles.

| Version | File | Use |
|---|---|---|
| Mark — light surfaces | `assets/simular-mark-s.png` (black S) | Default; slides, docs, light backgrounds |
| Mark — dark surfaces | white S variant | Dark backgrounds, dark slides |
| Social avatar | `assets/simular-mark-square.jpg` | Profile pictures, social headers |
| Wordmark — light | `assets/simular-wordmark-black.png` | Light surface lockups |
| Wordmark — dark | `assets/simular-wordmark-white.png` | Dark surface lockups |
| Lockup reference | `assets/simular-lockup.png` | Reference only — rebuild in code from individual assets |

**Rules:**
- Always use the S-mark for Simular company content
- Do not use the Sai green icon as the Simular logo
- Clear-space = 1× mark height on all sides
- Do not recolor or stretch any asset

## Colors

### Light mode (default)
| Token | Hex | Use |
|---|---|---|
| White | `#FFFFFF` | Primary background |
| Cream | `#fff2e2` | Warm section backgrounds |
| Light Gray | `#F0F0F0` | Secondary backgrounds, tags |
| Black | `#000000` | Primary text, headings |
| Text Body | `#333333` | Body copy |
| Text Muted | `#6A6A6A` | Captions, metadata |
| Accent Green | `#16d342` | CTAs, highlights — the only vibrant color |
| Peach | `#fcdbb8` | Warm accent, lifestyle imagery |
| Khaki | `#9b8a72` | Secondary text on warm backgrounds |

### Dark mode
| Token | Hex | Use |
|---|---|---|
| Background | `#000000` | Primary dark surface |
| Background Alt | `#1E1E1E` | Dark cards, code blocks |
| Text | `#FFFFFF` | All text |
| Accent Green | `#16d342` | Primary color pop — same in both modes |

> One accent only. `#16d342` is the sole vibrant color in the palette. Everything else is black, white, and warm neutrals. Avoid gradients, hue-tinted grays, and blue→purple "AI" color schemes.

## Typography

| Role | Font | Size | Use |
|---|---|---|---|
| Display / H1 | Adamina | 66px | Marketing hero headlines |
| H2 | Adamina | 54px | Section headlines |
| H3 | Adamina | 32px | Sub-section headlines |
| H4 | Manrope | 24px | Card titles, feature headings |
| Body | Manrope | 16–18px | All body copy |
| Caption | Manrope | 12–14px | Footnotes, metadata |

Adamina is editorial and authoritative — marketing titles only. Manrope is the workhorse for everything else. Never use Adamina in product UI.

Fonts are in [`fonts/`](./fonts). Full scale in [`colors_and_type.css`](./colors_and_type.css).

## Slide & Presentation Style

- **Default:** white background, black text, Simular S-mark top-left
- Title: Adamina 40–54px
- Body: Manrope 15–17px
- One core message per slide
- Generous whitespace — no crowded layouts
- Background options: plain white, binary-code texture (`assets/slide-bg-binary.jpg`), robot-hand photo (`assets/slide-bg-robot.jpg`)
- Key slides can flip to black background + white text + green accent

## Social & Marketing Style

- **Twitter/X:** White card (white bg + black text) or dark banner (black bg + white text). Title 48–56px Adamina, body 18–20px Manrope. `◆ Powered by Sai` tag when relevant.
- **LinkedIn:** Landscape 1200×627. Data-driven, benchmark charts. Simular logo top-left, simular.ai footer.
- **Email:** Single column, 600px wide. Black CTA button, white text. "Hi {name}," opening, "Best, The Simular Team" close.

---

# Sai Brand

Sai is the product — the AI coworker people use every day. Use the Sai brand for product-specific materials: onboarding, feature announcements, app UI, Sai-specific social posts.

## Logo

The Sai logo is a **green rounded square with a white >|< symbol**.

| Version | File | Use |
|---|---|---|
| Default | `assets/sai-mark-green.svg` | All Sai product surfaces |
| Alternate | `assets/simular-mark-green.svg` | Same icon, alternate file |

The green color is fixed — it does not invert in dark mode.

**Rules:**
- Use the Sai green mark for Sai product content only
- Do not use it as the Simular company logo
- When referencing Sai from within Simular-branded content, use: `◆ Powered by Sai`

## Colors

The Sai product UI uses a purpose-built token system. Full palette in [`tokens.json`](./tokens.json).

### Light mode (default)
| Token | Value | Use |
|---|---|---|
| `--bg` | `#f9faf5` | Primary surface |
| `--t1` | `#0c0c0c` | Primary text |
| `--t2` | `#3a3a3a` | Secondary text |
| `--b1` | `#e2e2df` | Borders, dividers |
| `--as` | `#16D342` | Lime — brand accent, buttons, active states, agent pulse |
| `--ab` | dark fill | Primary CTA (inverts between modes for max contrast) |
| `--am` | `#FFAB3C` | Approval pending, warnings |
| `--bl` | `#0022FF` | External links, info |
| `--cc` | `#D4634B` | Pause / secondary states |
| `--teach` | `#8B5CF6` | Learn-mode / teach-mode UI |
| `--r` | `#EF4444` | Destructive actions only |

### Dark mode
| Token | Value | Use |
|---|---|---|
| `--bg` | `#0c0c0c` | Primary surface |
| `--t1` | `#f0f0f0` | Primary text |
| `--b1` | `#1f1f1f` | Borders (hairlines) |
| `--as` | `#16D342` | Same lime — unchanged |
| `--ab` | light fill | Primary CTA (inverts to light on dark) |

## Typography

| Role | Font | Size | Notes |
|---|---|---|---|
| Display | Manrope | 32px | In-app headers |
| H1–H3 | Manrope | 14–20px | UI section titles |
| Body | Manrope | 14px | All copy |
| Status chips / meta | JetBrains Mono | 11–12px | Uppercase tracked labels: `MODEL · OPUS · 2.3K TOKENS` |
| Code | JetBrains Mono | 400/500 | Code blocks |

Adamina is never used in Sai product UI. JetBrains Mono loaded via Google Fonts CDN.

---

# Quick Reference Checklist

Before shipping any branded asset:

- [ ] **Which brand?** Simular S-mark for company content, Sai green mark for product content
- [ ] **Mode?** Light by default — dark only if explicitly needed
- [ ] **Logo variant correct?** Black S-mark on light / white S-mark on dark
- [ ] **Typography?** Adamina for Simular marketing titles; Manrope for everything else; JetBrains Mono for Sai metadata
- [ ] **One accent only?** Green `#16d342` is the only vibrant color
- [ ] **Enough whitespace?** When in doubt, add more
- [ ] **Platform size correct?** Twitter 1600×900 · LinkedIn 1200×627 · Instagram 1080×1080 · Deck 1920×1080

---

## Tokens & Assets Index

| Resource | File | Notes |
|---|---|---|
| Design tokens | [`tokens.json`](./tokens.json) | Machine-readable, source of truth |
| CSS variables | [`colors_and_type.css`](./colors_and_type.css) | Ready to import |
| W3C tokens | [`tokens.w3c.json`](./tokens.w3c.json) | W3C Design Tokens format |
| Fonts | [`fonts/`](./fonts) | Manrope + Adamina bundled; JetBrains via CDN |
| All assets | [`assets/`](./assets) | Logos, marks, wordmarks |
| Claude Skill | [`SKILL.md`](./SKILL.md) | AI design assistant manifest |
