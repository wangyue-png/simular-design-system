---
name: simular-design
description: Use this skill to generate well-branded interfaces and assets for Simular ("The Autonomous Computer Company") and its product Sai — either for production code or throwaway prototypes / mocks / decks / slides. Contains essential design guidelines, dark+light tokens, type, fonts, real icon set, brand logos, and reference UI kit components.
user-invocable: true
---

# Simular design skill

You are designing for **Simular Inc.** and its autonomous-AI-coworker product **Sai**. The brand is dark-first in product, light-first in marketing, with one chromatic accent (Simular Lime `#16D342`).

## Files to read first

| File | What's in it |
|---|---|
| `README.md` | Company context, content fundamentals (tone, voice, casing, emoji rules), visual foundations (color, type, motion, shadows, radii, layout), iconography. **Always read this first.** |
| `colors_and_type.css` | Canonical CSS variables for both **dark and light themes**, type scale (display, h1–h3, body, ui, body-sm, meta, label, mono), fonts via `@font-face`, easing curves, brand colors. The theme switches via `data-theme="light"` on `<html>`. |
| `tokens.json` | Machine-readable token export from the real Simular codebase (every CSS var with its dark + light value). Source of truth. |
| `tokens.w3c.json` | Same tokens in W3C Design Tokens format (Tokens Studio / Style Dictionary compatible). |
| `assets/` | Logos, the real icon set, integration brand logos. |
| `fonts/` | Manrope (variable, 200–800) + Adamina TTFs. JetBrains Mono is loaded from Google Fonts CDN — see `colors_and_type.css`. |
| `ui_kits/sai-app/` | Reference Sai product UI (sidebar, top-bar, faux remote desktop, activity stream, approval banner, composer) — both `index.html` (dark) and `index-light.html`. |
| `ui_kits/simular-marketing/` | Marketing site reference (nav, hero, benchmark stats, features, press quote, footer). |
| `preview/` | Atomic specimen cards for every token and component pattern. |

## Workflow

- **Visual artifacts (slides, mocks, throwaway prototypes):** copy the assets you need into the user's output folder, then create static HTML files. Always `<link>` the `colors_and_type.css` so dark/light themes work.
- **Production code:** copy the CSS variables and adapt the reference JSX to the user's framework. Read `README.md` to behave as an expert in this brand.
- **For agent-thinking UI:** use the named animations (`pulse-dot`, `working-dots`, `agent-orbit`, `shimmer-text`, `running-ping`, `step-log-enter`, `step-row-enter`) — don't invent new ones. See `preview/spacing-animations.html` for live examples.

## When invoked without other guidance

Ask the user what they want to build or design (deck, landing page, app screen, blog post, social card). Ask 4–6 targeted questions (audience, surface, novelty vs match-existing, variations, copy length, imagery available). Then act as an expert designer who outputs HTML artifacts **or** production code.

## Key constraints

- **Theme.** Product surfaces are **dark by default** (`--bg: #0c0c0c`). Marketing surfaces are **light** (`--bg: #f9faf5`). Use the same tokens — flip with `data-theme="light"`.
- **One chromatic accent.** Simular Lime `--as` (`#16D342`) is the only brand color. Functional accents (amber `--am`, blue `--bl`, coral `--cc`, teach-purple `--teach`, red `--r`) exist for specific states only.
- **No emoji** in product or marketing copy — it's off-tone.
- **Type:** Manrope for everything UI and editorial sans. JetBrains Mono for metadata, status chips, and code (uppercase-tracked is the codebase house style). Adamina is *marketing pull-quotes only* — never in the product.
- **Type sizes are small and dense in product:** display 32 / h1 20 / h2 18 / h3 14 / body 14 / ui 13 / meta 12 / label 10 / mono 11. Marketing can break up to 48–88px display.
- **Radii:** 4px controls, 8px cards, 12–16px modals/panels, 9999px pills/CTAs.
- **Shadows:** three-step (`--sc`, `--thumb-shadow`, `--screen-shadow`). Light mode is soft warm-neutral; dark mode mostly relies on a 1px border.
- **Primary button:** uses `--ab` which inverts between themes — light fill in dark, dark fill in light. Always strong contrast.
- **Easing:** named curves only — `--ease-out-strong` (default), `--ease-in-out-strong` (sectional), `--ease-drawer` (drawers/sheets).
- **Icons:** use the SVG set in `assets/icons/` (29 line icons, 24×24, 2px stroke, `currentColor`). Don't invent new icons; if missing one, ask before substituting.

## Voice & tone (one-liner)

Confident, transparent, human. "We" for the company, "you" for the reader. Short active sentences. No hedging. The agent is a *coworker* or *teammate*, never an "assistant" or "bot." Sai is always capitalized exactly that way (`Sai`, not SAI). Title Case for product names; sentence case for UI strings; UPPERCASE with tracking for tiny mono labels.
