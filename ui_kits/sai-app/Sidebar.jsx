// Sidebar.jsx — left navigation for the Sai app

function Sidebar({ activeRunId, setActiveRunId, runs }) {
  return (
    <aside className="sai-sidebar">
      {/* Brand chip */}
      <div className="sai-brand">
        <img src="../../assets/simular-mark-green.svg" alt="" width="28" height="28" style={{ borderRadius: 7 }} />
        <div>
          <div className="sai-brand-name">Sai</div>
          <div className="sai-brand-sub">by Simular</div>
        </div>
      </div>

      {/* Workspace switcher */}
      <button className="sai-workspace">
        <div className="sai-ws-avatar">EM</div>
        <div className="sai-ws-meta">
          <div className="sai-ws-name">Emma's workspace</div>
          <div className="sai-ws-plan">Pro · 200 agent-hours</div>
        </div>
        <span style={{ color: "var(--fg-3)" }}><Icon.Chevron /></span>
      </button>

      {/* Primary nav */}
      <nav className="sai-nav">
        <a className="sai-nav-item active" href="#">
          <Icon.Home /> <span>Home</span>
        </a>
        <a className="sai-nav-item" href="#">
          <Icon.Sparkles /> <span>Skills</span>
          <span className="sai-nav-count">12</span>
        </a>
        <a className="sai-nav-item" href="#">
          <Icon.Folder /> <span>Workflows</span>
        </a>
        <a className="sai-nav-item" href="#">
          <Icon.Clock /> <span>History</span>
        </a>
      </nav>

      {/* Runs list */}
      <div className="sai-section-title">
        <span>Active runs</span>
        <button className="sai-section-add"><Icon.Plus /></button>
      </div>
      <div className="sai-runs">
        {runs.map((r) => (
          <button
            key={r.id}
            className={"sai-run " + (r.id === activeRunId ? "active" : "")}
            onClick={() => setActiveRunId(r.id)}
          >
            <div className="sai-run-top">
              <Pill kind={r.status} style={{ padding: "2px 8px", fontSize: 10 }}>{r.statusLabel}</Pill>
              <span className="sai-run-time">{r.time}</span>
            </div>
            <div className="sai-run-title">{r.title}</div>
          </button>
        ))}
      </div>

      <div className="sai-sidebar-spacer" />

      {/* User chip */}
      <div className="sai-user">
        <div className="sai-user-avatar">EM</div>
        <div className="sai-user-meta">
          <div className="sai-user-name">Emma Marlowe</div>
          <div className="sai-user-email">emma@northwind.co</div>
        </div>
      </div>
    </aside>
  );
}

window.Sidebar = Sidebar;
