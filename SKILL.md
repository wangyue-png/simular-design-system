---
name: simular-design
description: Use this skill to generate well-branded interfaces and assets for Simular (the company) and its product Sai — slides, decks, social posts, one-pagers, marketing materials, prototypes, or production code. Light mode is the default for all generated outputs. Contains essential design guidelines, dark+light tokens, type, fonts, real icon set, brand logos, and reference UI kit components.
user-invocable: true
---

# Simular design skill

You are designing for **Simular Inc.** (the company) and its autonomous-AI-coworker product **Sai**. They are separate brands with separate logos. The default mode for all generated outputs is **light**. One chromatic accent: Simular Lime `#16D342`.

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

- **Theme — default is LIGHT.** Use light mode (`data-theme="light"`, `--bg: #f9faf5`) for all generated outputs — slides, mockups, social cards, marketing, decks — unless the user explicitly requests dark mode or the context demands it (announcement banners, dark-themed decks). The Sai product codebase uses dark by default internally, but generated outputs should be light.
- **Logos — Simular and Sai are separate.**
  - **Simular company logo:** geometric S-mark (`assets/simular-mark-s.png`) — black on light backgrounds, white on dark backgrounds.
  - **Sai product logo:** green rounded square with white >|< symbol (`assets/sai-mark-green.svg`) — always green, never inverted. Used for Sai product content only.
  - Do not use the Sai green mark as the Simular company logo.
  - When referencing Sai from Simular-branded content, use `◆ Powered by Sai`.
- **One chromatic accent.** Simular Lime `--as` (`#16D342`) is the only brand color. Functional accents (amber `--am`, blue `--bl`, coral `--cc`, teach-purple `--teach`, red `--r`) exist for specific states only.
- **No emoji** in product or marketing copy — it's off-tone.
- **Type:** Manrope for everything UI and editorial sans. JetBrains Mono for metadata, status chips, and code (uppercase-tracked is the codebase house style). Adamina is *Simular marketing titles only* — never in Sai product UI.
- **Type sizes are small and dense in product:** display 32 / h1 20 / h2 18 / h3 14 / body 14 / ui 13 / meta 12 / label 10 / mono 11. Marketing can break up to 48–88px display.
- **Radii:** 4px controls, 8px cards, 12–16px modals/panels, 9999px pills/CTAs.
- **Shadows:** three-step (`--sc`, `--thumb-shadow`, `--screen-shadow`). Light mode is soft warm-neutral; dark mode mostly relies on a 1px border.
- **Primary button:** uses `--ab` which inverts between themes — light fill in dark, dark fill in light. Always strong contrast.
- **Easing:** named curves only — `--ease-out-strong` (default), `--ease-in-out-strong` (sectional), `--ease-drawer` (drawers/sheets).
- **Icons:** use the SVG set in `assets/icons/` (29 line icons, 24×24, 2px stroke, `currentColor`). Don't invent new icons; if missing one, ask before substituting.

## Voice & tone (one-liner)

Confident, transparent, human. "We" for the company, "you" for the reader. Short active sentences. No hedging. The agent is a *coworker* or *teammate*, never an "assistant" or "bot." Sai is always capitalized exactly that way (`Sai`, not SAI). Title Case for product names; sentence case for UI strings; UPPERCASE with tracking for tiny mono labels.
