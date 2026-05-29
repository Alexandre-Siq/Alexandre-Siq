function Header() {
  return (
    <header className="site-header">
      <nav className="nav-container" aria-label="Navegacao principal">
        <a className="brand" href="/" aria-label="Página inicial MedAgenda">
          <span className="brand-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img">
              <path d="M7 4v5a5 5 0 0 0 10 0V4" />
              <path d="M9 4H5" />
              <path d="M19 4h-4" />
              <path d="M12 14v1a4 4 0 0 0 8 0v-2" />
              <circle cx="20" cy="11" r="2" />
            </svg>
          </span>
          <span className="brand-name">MedAgenda</span>
          <span className="brand-context">TCC + ADS</span>
        </a>

        <div className="nav-actions">
          <a className="nav-link" href="#marcar-consulta">
            Marcar consulta
          </a>
          <a className="login-button" href="#entrar">
            Entrar
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
