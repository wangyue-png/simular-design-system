// BenchmarkStrip.jsx — three big benchmark stats.

function Stat({ label, value, sub }) {
  return (
    <div className="sm-stat">
      <div className="sm-stat-label">{label}</div>
      <div className="sm-stat-value">{value}</div>
      <div className="sm-stat-sub">{sub}</div>
    </div>
  );
}

function BenchmarkStrip() {
  return (
    <section className="sm-benchmarks">
      <div className="sm-section-head">
        <div className="sm-eyebrow">Our frontier research</div>
        <h2 className="sm-section-title">Tops every benchmark across browsers, computers, and smartphones — at the same time.</h2>
        <p className="sm-section-lede">
          Our team has been researching AI agents since 2017. To make AI truly beneficial to society, we believe agents shouldn't be built in closed labs — but out in the wild.
        </p>
      </div>

      <div className="sm-stats">
        <Stat label="Browser Use" value="90.1%" sub="Success rate on WebVoyager" />
        <Stat label="Computer Use" value="72.6%" sub="Super-human on OSWorld" />
        <Stat label="Smartphone Use" value="71.6%" sub="Success on AndroidWorld" />
      </div>

      <div className="sm-bench-cta">
        <a className="sm-btn sm-btn-secondary" href="#">Check out our GitHub →</a>
        <a className="sm-btn sm-btn-ghost" href="#">Read the Agent S3 paper →</a>
      </div>
    </section>
  );
}

window.BenchmarkStrip = BenchmarkStrip;
