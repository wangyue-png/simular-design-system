# Simular Design — a Sai skill

[![Skill](https://img.shields.io/badge/Sai-skill-16D342)](https://simular.ai) [![License](https://img.shields.io/badge/license-MIT-blue)](#license)

A [Sai](https://simular.ai) skill that teaches the agent to design well-branded interfaces and assets for **Simular** ("The Autonomous Computer Company") and its product **Sai** — production code or throwaway prototypes, mocks, decks, and slides.

Includes dark + light design tokens, type scale, fonts (Manrope, Adamina), the real 29-icon set, brand logos, and reference UI kits for the Sai product and the Simular marketing site.

## Install

**Option 1 — Sai app (recommended):**
1. Download this repo as a ZIP: `Code → Download ZIP` (or clone and zip it).
2. In Sai: **Settings → Skills → Import skill** and select the ZIP.
3. The skill is now available — invoke it by asking Sai to "design", "mock up", or "build a Simular/Sai" UI.

**Option 2 — clone locally:**
```bash
git clone https://github.com/wangyue-png/simular-design-system.git
cd simular-design-system
# zip it for upload
zip -r simular-design.zip . -x ".git/*"
```

## What's inside

| Path | What's in it |
|---|---|
| `SKILL.md` | Skill manifest Sai loads on invocation |
| `colors_and_type.css` | Dark + light CSS variables, type scale, `@font-face` |
| `tokens.json` / `tokens.w3c.json` | Token export (raw + W3C Design Tokens format) |
| `assets/` | Logos, 29-icon set, integration brand logos |
| `fonts/` | Manrope (variable) + Adamina TTFs |
| `ui_kits/sai-app/` | Reference Sai product UI (dark + light) |
| `ui_kits/simular-marketing/` | Marketing site reference |
| `preview/` | Atomic specimen cards for every token and pattern |

## Usage examples

Once installed, try prompts like:
- *"Design a landing page hero for a new Sai feature"*
- *"Mock up a Sai approval banner in dark mode"*
- *"Build a deck cover slide using the Simular brand"*

## License

MIT — see [`LICENSE`](./LICENSE).

---

# Simular Design System

> **The Autonomous Computer Company** — design tokens, brand assets, and UI kits for building branded interfaces for Simular and its products.

Simular Inc. is an AI research and product company building **autonomous computer-use agents** — software that sees a screen, moves the mouse, types, and operates real apps the way a human does. The company was founded in 2023 by AI researchers from DeepMind and academia (CEO Ang Li and CTO Xin Eric Wang), and raised a **$21.5M Series A** led by Felicis with participation from NVentures (Nvidia) and South Park Commons in December 2025.

Simular's core thesis: AI agents shouldn't be limited to browser tabs or chat boxes. They should operate the whole desktop — GUI, terminal, code, APIs — the way a real teammate does. The company's open-source **Agent S** research framework has topped the OSWorld, WebVoyager, and AndroidWorld benchmarks, recently reaching **72.6%** on OSWorld — surpassing human-level performance.

---

## Products

| Product | What it is | Surface |
|---|---|---|
| **Sai** | Always-on AI coworker on a secure cloud desktop. Plain-English tasks, GUI + API + terminal, with approval guardrails. | Web app at `sai.simular.ai` / `sai.work` |
| **Simular for macOS** ("Simular 1.0" / "Simular Pro") | Native desktop agent that runs locally, learns from supervision, and can be taught workflows like a teammate. Bigfoot persona surfaces tips. | macOS app (Windows in dev w/ Microsoft) |
| **Simular Cloud** | Fully autonomous Linux desktop in the cloud, operated by Agent S. | Web |
| **Agent S / S2 / S3** | Open-source agentic framework. The research backbone that powers everything. | GitHub: `simular-ai/Agent-S` |
| **Simular Lab** | Research-lab subdomain (`lab.simular.ai`). | Web |

---

## Source materials consulted

- **Real codebase tokens** (the source of truth): exported from `src/app/globals.css` + `src/stories/tokens/_data.ts` at `sai-design-prototype`. Saved to [`tokens.json`](./tokens.json) and translated into [`colors_and_type.css`](./colors_and_type.css).
- **Logos & fonts** (uploaded): `Logo clr white.svg`, `Sai logo black.svg`, two PNG wordmarks, `logo_icon.jpg`, `Adamina-Regular.ttf`, `Manrope-VariableFont_wght.ttf`.
- **JetBrains Mono**: pulled from Google Fonts CDN (not bundled — too many weight files).
- **Marketing site**: https://www.simular.ai/ — home, /sai, /simular-for-macos, /simular-pro, /articles/agent-s3
- **Press**: Wired, MIT Tech Review, IBM Think, TechCrunch coverage of the $21.5M Series A

---

## Files in this system

```
README.md                      ← this file
SKILL.md                       ← Claude Skill manifest for cross-project use
tokens.json                    ← machine-readable token export (source of truth)
colors_and_type.css            ← canonical CSS variables + semantic type roles
fonts/                         ← Manrope (variable) + Adamina TTFs (JetBrains via CDN)
assets/                        ← logos, marks, wordmarks
preview/                       ← cards rendered in the Design System tab
ui_kits/
  simular-marketing/           ← marketing surfaces (hero, nav, feature, footer)
  sai-app/                     ← Sai product UI (sidebar, composer, run timeline)
```

---

## Content fundamentals

The brand voice is **researcher-credible meets practical-and-warm**. Simular sits at the intersection of frontier AI research (papers, benchmarks, open source) and a real shipping product (a desktop app a salesperson can install today). Copy reflects both.

### Tone

- **Direct and human.** "Close your laptop. Reclaim your time. Come back to work done." Short sentences. Active verbs. No hedging.
- **Confident, not breathless.** Facts and numbers beat adjectives. "72.6% on OSWorld" appears more often than "revolutionary."
- **Transparent, not hype.** The product page leads with *"No surprises"* and *"approval-based control"*. Trust is a feature, not a footnote.
- **Researcher's voice on technical writing.** Blog posts read like ICLR papers re-edited for a smart-but-non-expert reader.
- **Human-first framing.** The agent is a *coworker*, *teammate*, or *digital worker* — never an "assistant" or "bot."

### Voice & person

- **"We" for the company. "You" for the reader.**
- **"Sai" is named, never "the agent" in product surfaces.** Sai gets human pronouns informally ("Sai does your job when you're not there").

### Casing

- **Sentence case for UI strings.** "Try Sai now", "Have invite code?", "Sign in".
- **Title Case for product names and major page sections.**
- **UPPERCASE with tracking** for tiny labels and `--font-mono` metadata chips ("MODEL · OPUS · 2.3K TOKENS"). This is everywhere in the app.
- The product name `Sai` is always exactly `S-a-i`, not SAI.

### Emoji & punctuation

- **Emoji: essentially never** in product or marketing.
- **Em-dashes** for emphasis. **Curly quotes** in editorial. Straight quotes in UI.

### Sample copy

- Headline: *"The Autonomous Computer Company"*
- Tagline: *"Work smarter with Sai"*
- Feature header: *"Works like a human on the full desktop"*
- Trust: *"Approval based security — Sai is deliberately designed with guardrails, always double-checking with you before executing critical actions. No surprises."*

---

## Visual foundations

### Overall vibe
**Dark-first product. Light-first marketing.** The Sai app is built for long sessions in a near-black canvas (`--bg: #0c0c0c`), with the lime accent providing visual rhythm. The marketing site flips to a warm cream (`#f9faf5`) for an editorial, research-lab feel. The system is one design language, two themes.

### Color
- **One chromatic accent: Simular Lime `#16D342`** (`--as`). Used for the brand mark, primary action buttons, focus states, success states, and "agent is doing the thing" pulses. Same in both themes.
- **Secondary accents are functional, not decorative:**
  - **Amber `#FFAB3C`** (`--am`) — approval pending, warnings.
  - **Blue `#0022FF`** (`--bl`) — external links, info states.
  - **Coral `#D4634B`** (`--cc`) — pause/secondary states.
  - **Teach-purple `#8B5CF6`** (`--teach`) — Learn-mode / teach-mode UI (when the user is recording a workflow for Sai).
  - **Red `#EF4444`** (`--r`) — destructive only.
- **Neutrals: pure greyscale.** `t1`→`t4` for text, `bg`→`bg3h` for surfaces, `b1`/`b2` for borders. Always neutral — no tinted greys.
- **Avoid:** rainbow gradients, hue-tinted shadows, blue→purple "AI" gradients.
- The full palette is in [`colors_and_type.css`](./colors_and_type.css) and [`tokens.json`](./tokens.json).

### Typography
- **Manrope** (variable, 200–800) is the workhorse for everything UI and editorial sans.
- **JetBrains Mono** (400/500) for metadata, code, the uppercase-tracked status chips you see throughout the app.
- **Adamina** (regular only) is reserved for *marketing pull-quotes* — never in the product.
- **The scale is small and dense.** Real product type:
  - Display 32 / H1 20 / H2 18 / H3 14
  - Body 14 / UI 13 / body-sm 13 / meta 12 / label 10 / mono 11
- Marketing surfaces can break up to 48–88px on display heads; the product stays tight.

### Motion & easing
The codebase ships a **rich animation library**. Use named curves and named keyframes — don't invent your own.

- **Easing curves:**
  - `--ease-out-strong` `cubic-bezier(0.23, 1, 0.32, 1)` — default for entries/hovers
  - `--ease-in-out-strong` `cubic-bezier(0.77, 0, 0.175, 1)` — sectional reveals
  - `--ease-drawer` `cubic-bezier(0.32, 0.72, 0, 1)` — sheets, drawers, the workspace switcher
- **Keyframes** (full list in `tokens.json`): `working-dots`, `pulse-dot`, `agent-orbit`, `shimmer-text`, `shimmer-bar`, `running-ping`, `step-row-enter`, `slide-in-right`, `blink-cursor`, `msg-send`, `imsg-dot`, plus a full `logo-*` family for the chevron mark.
- **Agent-thinking is alive.** Use `working-dots` or `agent-orbit` when Sai is processing — never a generic spinner.
- **Page transitions:** the drawer/sheet curve. Crossfade for everything else.

### Backgrounds & imagery
- **Solid surfaces, not gradients.** Tiniest tint is the ambient `--mg` radial (6% green at 30%/0%) on hero / auth backgrounds. Optional.
- **Product imagery:** real screenshots of the Sai cloud desktop or the macOS app, often inside a faux macOS window chrome.
- **Photography (marketing):** warm-cool neutral, natural light, never heavily graded.
- **No hand-drawn illustrations** in product. The aesthetic is screenshot-led.

### Borders, dividers, cards
- **Hairlines.** Default border is `--b1` (= `#1f1f1f` dark / `#e2e2df` light) — barely visible, just enough to separate.
- **Cards** sit on `--bgcard` with `--sc` shadow. Selected cards get a `--as` border + a soft `--gs` tint.
- **Inputs:** `--bgi` fill, `--b1` border, lime focus ring via `0 0 0 3px var(--gs)`.

### Corner radii
- 4px small controls (`rounded-md`)
- 8px inputs, mid-sized buttons (`rounded-lg`)
- 12px cards (`rounded-xl`)
- 16px hero / panel containers (`rounded-2xl`)
- 9999px pills, CTAs, badges, tags (`rounded-full`)

### Shadows
- **Three-step shadow scale**, not five:
  - `--sc` — card / modal (1px tinted in dark, soft 8px in light)
  - `--thumb-shadow` — workspace thumbnails, floating cards
  - `--screen-shadow` — the desktop preview window (very deep)
- Light-mode shadows are warm neutral; dark-mode shadows mostly disappear and rely on a 1px border instead.

### The inverting button
`--ab` is the **primary button fill** — it inverts between themes: **light fill in dark mode, dark fill in light mode**. The result is always a strong contrast against the surface. Use it for primary CTAs and the chat user-message bubble.

### Component tropes to avoid
- Bluish-purple "AI" gradients
- Glassmorphism / heavy backdrop blur (we use solid surfaces)
- Colored left-border accent on cards (cards get either a real `--as` border or a soft `--gs` tint, never just a stripe)
- Emoji-as-icon
- Neon glow on buttons
- Card hover lifts > 4px (we mostly only swap fills, not transforms)

---

## Iconography

> **Substitution flag still standing.** The real codebase ships its own SVG icon set. I don't have the export — please drop the icon directory into `assets/icons/` and I'll re-skin the kits. In the meantime, the kits use one-off inline SVGs matched to a 1.5px stroke, square-cap style.

If you need an icon during prototyping and can't wait for the real set:
- **Lucide** via CDN — closest match to the codebase's stroke style.
  ```html
  <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
  <i data-lucide="play"></i>
  <script>lucide.createIcons();</script>
  ```

### Logo / mark assets (in `assets/`)

- `simular-mark-green.svg` — chevron-S in Simular Lime. **The primary brand mark.** Use everywhere: app icon, favicon, GitHub avatar, lockup pairings.
- `simular-wordmark-black.png` / `simular-wordmark-white.png` — the `SIMULAR` wordmark on light / dark surfaces.
- `simular-lockup.png` — the canonical mark + wordmark lockup (reference; rebuild from individual assets in code).
- `simular-mark-square.jpg` — alternate mark on black (legacy / GitHub avatar fallback).
- `simular-mark-s.png` — alternate geometric interlocking-S (legacy).
- `simular-icon-black.jpg` — favicon source.

### Rules
- **Clear-space** = 1× mark height (and between the mark and wordmark in the lockup).
- **Don't** recolor the lime mark or stretch any wordmark.
- **No emoji**, no unicode glyphs as icons.

---

## Index

- **Tokens:** [`tokens.json`](./tokens.json) (machine-readable), [`colors_and_type.css`](./colors_and_type.css) (CSS vars).
- **Brand assets:** [`assets/`](./assets)
- **Fonts:** [`fonts/`](./fonts) — Manrope + Adamina TTFs; JetBrains Mono via Google Fonts CDN.
- **Preview cards:** [`preview/`](./preview)
- **UI kits:**
  - [`ui_kits/sai-app/`](./ui_kits/sai-app) — Sai product surface (⚠ currently rendered in light; see CAVEATS)
  - [`ui_kits/simular-marketing/`](./ui_kits/simular-marketing) — marketing home
- **Skill manifest:** [`SKILL.md`](./SKILL.md)