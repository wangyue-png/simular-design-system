# Simular — Marketing site UI kit

Recreates the public-facing simular.ai marketing surface: top navigation, the "The Autonomous Computer Company" hero, social-proof strip, feature grid, benchmark stats, a press quote in Adamina, and the dark footer.

The actual site (https://www.simular.ai/) is Webflow-built. This kit faithfully borrows the same content patterns and visual rhythm — large display headlines, plenty of whitespace, mostly-mono palette with the green mark as the only accent, photographs/screenshots as imagery — but is **hand-rolled in React for clean handoff**, not a Webflow export.

## What's in here

| File | What it is |
|---|---|
| `index.html` | The full marketing surface as one scrollable page |
| `Nav.jsx` | Top navigation with logo + pill CTA |
| `Hero.jsx` | "The Autonomous Computer Company" hero + product imagery placeholder |
| `BenchmarkStrip.jsx` | The three big stats (Browser / Computer / Smartphone) |
| `Feature.jsx` | The 3-up feature block (Works like a human / Remote desktop / Secure) |
| `PressQuote.jsx` | Pull-quote block using Adamina |
| `Footer.jsx` | Dark footer with sitemap |

## Substitutions

- Press logos (Wired, MIT Tech Review, IBM Think) are rendered as text wordmarks — we don't have rights to the real marks. **Flag.**
- Hero product image is a placeholder slot — please drop in `home-figure.png` from the live site if you want it real.
- Icons are inline SVG matched to the line style of the real site icons.
