// Feature.jsx — the three feature cards (the actual marketing site uses exactly these three).

function FeatureIcon({ kind }) {
  const path = {
    human:    <path d="M12 4l-7 4v8l7 4 7-4V8l-7-4zm0 0v16M5 8l14 8M19 8L5 16" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" fill="none"/>,
    desktop:  <><rect x="3" y="5" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" fill="none"/><path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></>,
    shield:   <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinejoin="round"/>,
  }[kind];
  return <svg width="32" height="32" viewBox="0 0 24 24">{path}</svg>;
}

function FeatureCard({ icon, title, body }) {
  return (
    <article className="sm-feature">
      <div className="sm-feature-icon"><FeatureIcon kind={icon} /></div>
      <h3 className="sm-feature-title">{title}</h3>
      <p className="sm-feature-body">{body}</p>
    </article>
  );
}

function Feature() {
  return (
    <section className="sm-feature-section">
      <div className="sm-section-head">
        <div className="sm-eyebrow">Work smarter with Sai</div>
        <h2 className="sm-section-title">An always-on AI co-worker that does your job when you're not there.</h2>
      </div>

      <div className="sm-feature-grid">
        <FeatureCard
          icon="human"
          title="Works like a human"
          body="Sai uses your desktop the way you do. Clicking, typing, operating the GUI. It also uses APIs, terminals, and writes code."
        />
        <FeatureCard
          icon="desktop"
          title="Your own remote desktop"
          body="Sai runs on a private, cloud-based virtual desktop, isolated, secure and always on. All you need is the device you already own."
        />
        <FeatureCard
          icon="shield"
          title="Secure and transparent"
          body="Sai is deliberately designed with guardrails, always double-checking with you before executing critical actions. No surprises."
        />
      </div>
    </section>
  );
}

window.Feature = Feature;
