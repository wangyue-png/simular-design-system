// DesktopPreview.jsx — faux remote desktop showing what the agent is doing.
// Not a real VNC stream; this is a styled mock of a macOS-y desktop with a
// Gmail tab open while the agent operates it. The little green crosshair
// shows the agent's cursor.

function DesktopPreview({ stepLabel }) {
  return (
    <div className="sai-desktop-shell">
      {/* Faux macOS window chrome */}
      <div className="sai-mac-chrome">
        <div className="sai-traffic">
          <span style={{ background: "#FF5F57" }} />
          <span style={{ background: "#FEBC2E" }} />
          <span style={{ background: "#28C840" }} />
        </div>
        <div className="sai-mac-url">
          <span className="sai-globe"><Icon.Globe /></span>
          <span>mail.google.com</span>
          <span style={{ marginLeft: "auto", opacity: 0.5, fontSize: 12 }}><Icon.Refresh /></span>
        </div>
        <div style={{ width: 60 }} />
      </div>

      {/* Faux Gmail surface */}
      <div className="sai-desktop-canvas">
        <div className="sai-gmail">
          <div className="sai-gmail-side">
            <div className="sai-gmail-compose">＋ Compose</div>
            <div className="sai-gmail-item active">Inbox <span>284</span></div>
            <div className="sai-gmail-item">Starred</div>
            <div className="sai-gmail-item">Sent</div>
            <div className="sai-gmail-item">Drafts <span>3</span></div>
          </div>
          <div className="sai-gmail-main">
            <div className="sai-gmail-row unread">
              <span className="sai-gmail-sender">Priya R.</span>
              <span className="sai-gmail-subject">Re: Q4 partnership ping — let's pick this up next week</span>
              <span className="sai-gmail-time">9:42 AM</span>
            </div>
            <div className="sai-gmail-row unread highlighted">
              <span className="sai-gmail-sender">Marcus L.</span>
              <span className="sai-gmail-subject">Following up on our intro call — happy to share more on the pilot</span>
              <span className="sai-gmail-time">9:18 AM</span>
            </div>
            <div className="sai-gmail-row">
              <span className="sai-gmail-sender">Helena B.</span>
              <span className="sai-gmail-subject">Resending the deck with the new pricing slide</span>
              <span className="sai-gmail-time">Yesterday</span>
            </div>
            <div className="sai-gmail-row">
              <span className="sai-gmail-sender">Jordan A.</span>
              <span className="sai-gmail-subject">Calendly link — pick anything Tue/Wed that works</span>
              <span className="sai-gmail-time">Yesterday</span>
            </div>
            <div className="sai-gmail-row">
              <span className="sai-gmail-sender">Northwind Ops</span>
              <span className="sai-gmail-subject">Weekly digest · 14 new replies, 2 needing your input</span>
              <span className="sai-gmail-time">Mon</span>
            </div>

            {/* Agent cursor + action hint */}
            <div className="sai-cursor" aria-hidden="true">
              <div className="sai-cursor-ring" />
              <div className="sai-cursor-dot" />
              <div className="sai-cursor-tip">{stepLabel}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer: who is driving */}
      <div className="sai-desktop-footer">
        <span className="sai-driver">
          <span className="sai-pulse-dot" />
          Sai is driving · live cloud desktop
        </span>
        <span className="sai-driver-meta">Mac mini · 4 vCPU · us-west-2</span>
      </div>
    </div>
  );
}

window.DesktopPreview = DesktopPreview;
