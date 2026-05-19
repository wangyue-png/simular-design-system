// Hero.jsx — "The Autonomous Computer Company" hero
// Headline + lede + CTA + trio of credentials + product imagery placeholder

function HeroBadge({ children }) {
  return <span className="sm-hero-badge">{children}</span>;
}

function Hero() {
  return (
    <section className="sm-hero">
      <div className="sm-hero-copy">
        <h1 className="sm-hero-headline">
          The Autonomous<br/>Computer Company
        </h1>
        <p className="sm-hero-lede">
          We believe humans shouldn't be bound to computers. AI should free us from devices so we can live a better, more human life. To get there, we make our research-driven AI agents immediately usable for everyone.
        </p>
        <div className="sm-hero-cta">
          <a className="sm-btn sm-btn-accent sm-btn-lg" href="#">Try Sai — 24/7 AI Co-worker</a>
          <a className="sm-btn sm-btn-ghost sm-btn-lg" href="#">Watch the demo →</a>
        </div>
        <div className="sm-hero-badges">
          <HeroBadge>★ #1 Product of the Day · Product Hunt</HeroBadge>
          <HeroBadge>🏆 Best Paper · ICLR 2025 Agentic AI for Science</HeroBadge>
          <HeroBadge>#1 in OSWorld computer-use benchmark</HeroBadge>
        </div>
      </div>

      {/* Product imagery placeholder — drop home-figure.png here */}
      <div className="sm-hero-figure">
        <div className="sm-hero-figure-mock">
          <div className="sm-hero-figure-chrome">
            <span /><span /><span />
            <div className="sm-hero-figure-url">simular.ai · running on Mac</div>
          </div>
          <div className="sm-hero-figure-body">
            <div className="sm-hero-figure-side">
              <div style={{ background: "var(--simular-green)", color: "var(--ink)", padding: "8px 14px", borderRadius: 999, fontWeight: 700, fontSize: 12 }}>＋ New task</div>
              <div className="sm-hero-figure-item active">Active runs</div>
              <div className="sm-hero-figure-item">Skills · 12</div>
              <div className="sm-hero-figure-item">History</div>
            </div>
            <div className="sm-hero-figure-main">
              <div className="sm-hero-figure-row pulse">
                <div className="sm-dot" />
                <div>Drafting reply to Marcus L.</div>
                <div className="sm-time">1:02</div>
              </div>
              <div className="sm-hero-figure-row">
                <div className="sm-dot done" />
                <div>Filtered to unread, last 24h</div>
                <div className="sm-time">0:14</div>
              </div>
              <div className="sm-hero-figure-row">
                <div className="sm-dot done" />
                <div>Opened mail.google.com</div>
                <div className="sm-time">0:08</div>
              </div>
              <div className="sm-hero-figure-cursor">
                <div className="sm-hero-figure-cursor-ring" />
              </div>
            </div>
          </div>
        </div>
        <div className="sm-hero-figure-caption">Placeholder — drop <code>home-figure.png</code> from simular.ai here for fidelity.</div>
      </div>
    </section>
  );
}

window.Hero = Hero;
