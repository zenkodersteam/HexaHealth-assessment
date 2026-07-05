export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <span className="logo-dot" aria-hidden="true" />
        <h1 className="brand">Pulse Smartwatch</h1>
        <nav className="header-nav" aria-label="Primary">
          <a href="#features">Features</a>
          <a href="#footer">Contact</a>
        </nav>
      </div>
    </header>
  );
}
