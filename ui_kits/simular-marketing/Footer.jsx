// Footer.jsx — dark footer

function FooterCol({ title, links }) {
  return (
    <div className="sm-foot-col">
      <div className="sm-foot-title">{title}</div>
      <ul>{links.map((l, i) => <li key={i}><a href="#">{l}</a></li>)}</ul>
    </div>
  );
}

function Footer() {
  return (
    <footer className="sm-footer">
      <div className="sm-foot-top">
        <div className="sm-foot-brand">
          <img src="../../assets/simular-wordmark-white.png" alt="Simular" style={{ height: 22, opacity: 0.92 }} />
          <p className="sm-foot-tagline">The Autonomous Computer Company.</p>
        </div>
        <div className="sm-foot-cols">
          <FooterCol title="Product" links={["Sai", "Simular for macOS", "Simular Cloud", "For Business"]} />
          <FooterCol title="Research" links={["Agent S", "Agent S2", "Agent S3", "Papers"]} />
          <FooterCol title="Company" links={["About", "Careers", "Blog", "Use Cases"]} />
          <FooterCol title="Connect" links={["GitHub · 9.9k", "Discord", "X / Twitter", "LinkedIn"]} />
        </div>
      </div>
      <div className="sm-foot-bottom">
        <div>© 2026 Simular Inc. All rights reserved.</div>
        <div className="sm-foot-legal">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
