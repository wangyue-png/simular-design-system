# Sai — Cloud-desktop product UI kit

Sai is Simular's always-on AI coworker that runs on a private, cloud-based virtual desktop. The user gives it a task in plain English; Sai operates the GUI (and APIs, terminal, code) inside that workspace. The product surfaces are:

- A **task composer** where you describe what you want done
- A **live cloud desktop view** showing what the agent is actually doing
- An **activity stream** where each step is logged, with the option to interrupt
- **Approval banners** that interrupt the run when Sai is about to do something consequential
- A **sidebar** with workspaces, runs history, and saved skills

## What's in here

| File | What it is |
|---|---|
| `index.html` | A full, click-through Sai dashboard at desktop resolution |
| `Sidebar.jsx` | Left navigation: workspaces, runs, skills, footer user chip |
| `TopBar.jsx` | Workspace switcher + status pill + run controls |
| `DesktopPreview.jsx` | A faux remote desktop showing the agent operating apps |
| `Composer.jsx` | Plain-English task input + skill picker + send |
| `ActivityStream.jsx` | Step-by-step log with status, screenshot thumbs |
| `ApprovalBanner.jsx` | Inline approval prompt with "Approve" / "Deny" |
| `Pill.jsx` | Tiny shared status pill |

## What this kit cuts corners on

- The remote desktop is rendered as a styled mock, not a real VNC stream.
- Workspace + skill data is hand-authored; no backend.
- Animation of the agent "thinking" is a CSS pulse on the dot, not full live updates.
- Several icons are Lucide via CDN; if Simular ships its own icon set, swap.

## What we got right (we hope)

- The mostly-monochrome canvas with a single green accent matches the marketing site's restraint.
- Type uses Manrope at the same sizes the public site uses (16/18px body, 28–48px heads).
- The approval flow is built into the dominant layout, not hidden in a menu, in line with Simular's "no surprises" positioning.

> **Note:** the actual Sai product UI is gated behind invite codes. This kit infers the product surface from the marketing site, FAQ language, and TechCrunch coverage. **Please attach screenshots or Figma if you want pixel fidelity.**
