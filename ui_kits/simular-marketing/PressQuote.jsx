// PressQuote.jsx — Adamina serif pull-quote. Cream background section.

function PressQuote() {
  return (
    <section className="sm-press">
      <div className="sm-press-eyebrow">Simular in others' eyes</div>
      <blockquote className="sm-quote">
        "They open source their tools. They build in public. They're not trying to lock the future into a closed-loop platform. They're trying to make it usable now, by anyone."
      </blockquote>
      <div className="sm-quote-attr">
        <div className="sm-quote-author">John Biggs</div>
        <div className="sm-quote-source">Wired</div>
      </div>
      <div className="sm-press-logos">
        <span>WIRED</span>
        <span style={{ opacity: 0.5 }}>·</span>
        <span>MIT TECHNOLOGY REVIEW</span>
        <span style={{ opacity: 0.5 }}>·</span>
        <span>IBM THINK</span>
        <span style={{ opacity: 0.5 }}>·</span>
        <span>TECHCRUNCH</span>
      </div>
    </section>
  );
}

window.PressQuote = PressQuote;
