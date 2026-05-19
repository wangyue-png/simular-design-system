// TopBar.jsx — top chrome above the desktop preview

function TopBar({ runStatus, runTitle, onPause, onStop }) {
  const isRunning = runStatus === "running";
  const isPaused = runStatus === "paused";
  return (
    <div className="sai-topbar">
      <div className="sai-topbar-left">
        <button className="sai-icon-btn" title="Search">
          <Icon.Search />
        </button>
        <div className="sai-breadcrumb">
          <span className="sai-crumb-muted">Home</span>
          <span style={{ opacity: 0.4 }}><Icon.Chevron /></span>
          <span className="sai-crumb">{runTitle}</span>
        </div>
      </div>

      <div className="sai-topbar-right">
        <Pill kind={runStatus === "done" ? "done" : runStatus === "waiting" ? "waiting" : runStatus === "error" ? "error" : isPaused ? "idle" : "running"}>
          {runStatus === "done" ? "Completed" :
           runStatus === "waiting" ? "Awaiting approval" :
           runStatus === "error" ? "Errored" :
           isPaused ? "Paused" : "Running"}
        </Pill>

        <div className="sai-control-group">
          {isRunning ? (
            <button className="sai-icon-btn" onClick={onPause} title="Pause"><Icon.Pause /></button>
          ) : (
            <button className="sai-icon-btn" title="Resume"><Icon.Play /></button>
          )}
          <button className="sai-icon-btn danger" onClick={onStop} title="Stop"><Icon.Stop /></button>
        </div>

        <div className="sai-divider" />

        <button className="sai-btn sai-btn-ghost">Share</button>
        <button className="sai-btn sai-btn-accent">Save as skill</button>
      </div>
    </div>
  );
}

window.TopBar = TopBar;
