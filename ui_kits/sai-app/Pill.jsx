// Pill.jsx — shared tiny status pill used across the Sai surface

const PillColors = {
  running: { bg: "rgba(44,124,255,0.10)", fg: "var(--info)", dot: "var(--info)", pulse: true },
  waiting: { bg: "rgba(232,155,34,0.12)", fg: "var(--warning)", dot: "var(--warning)" },
  done:    { bg: "var(--simular-green-soft)", fg: "var(--simular-green-deep)", dot: "var(--simular-green)" },
  error:   { bg: "rgba(229,72,77,0.10)", fg: "var(--danger)", dot: "var(--danger)" },
  idle:    { bg: "var(--bg-tint)", fg: "var(--fg-2)", dot: "var(--fg-3)" },
  accent:  { bg: "var(--simular-green-soft)", fg: "var(--simular-green-deep)", dot: "var(--simular-green)" },
};

function Pill({ kind = "idle", children, dot = true, style }) {
  const c = PillColors[kind] || PillColors.idle;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "4px 10px",
        borderRadius: 999,
        background: c.bg,
        color: c.fg,
        font: "600 11px/1.3 var(--font-sans)",
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      {dot && (
        <span
          className={c.pulse ? "sai-pulse" : ""}
          style={{ width: 6, height: 6, borderRadius: 999, background: c.dot }}
        />
      )}
      {children}
    </span>
  );
}

// Tiny inline-SVG icons used inside the Sai chrome.
// (One-off icons — see ui_kits/sai-app/README.md for the substitution note.)
const Icon = {
  Home:     () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l9-8 9 8M5 9v11h14V9"/></svg>,
  Play:     () => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l16 9-16 9V3z"/></svg>,
  Pause:    () => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>,
  Stop:     () => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="5" width="14" height="14" rx="2"/></svg>,
  Send:     () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l14-7-7 14-2-5-5-2z"/></svg>,
  Sparkles: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3z"/><path d="M18 14l.8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8L18 14z"/></svg>,
  Plus:     () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>,
  Search:   () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>,
  Folder:   () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/></svg>,
  Clock:    () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>,
  Check:    () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4 10-10"/></svg>,
  X:        () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>,
  Mouse:    () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 3l5 14 2-5 5-2L5 3z"/></svg>,
  Type:     () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7V5h16v2M9 5v14M5 19h8"/></svg>,
  Terminal: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 10l3 2-3 2M12 14h5"/></svg>,
  Chevron:  () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6"/></svg>,
  Globe:    () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>,
  Refresh:  () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-3-6.7M21 4v5h-5"/></svg>,
};

Object.assign(window, { Pill, Icon });
