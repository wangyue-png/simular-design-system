// Nav.jsx — top marketing nav. Matches simular.ai layout.

function Nav() {
  return (
    <header className="sm-nav">
      <a className="sm-nav-brand" href="#">
        <img src="../../assets/simular-mark-green.svg" alt="" width="28" height="28" style={{ borderRadius: 7 }} />
        <img src="../../assets/simular-wordmark-black.png" alt="Simular" style={{ height: 16 }} />
      </a>

      <nav className="sm-nav-links">
        <a href="#">About</a>
        <a href="#">Product</a>
        <a href="#">Research</a>
        <a href="#">Business</a>
        <a href="#">Use Cases</a>
        <a href="#">Pricing</a>
        <a href="#">Blog</a>
      </nav>

      <div className="sm-nav-cta">
        <a className="sm-nav-link" href="#">Sign in</a>
        <a className="sm-btn sm-btn-accent" href="#">Try Sai →</a>
      </div>
    </header>
  );
}

window.Nav = Nav;
