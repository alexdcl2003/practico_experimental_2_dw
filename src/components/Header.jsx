import { useState } from 'react'

const navLinks = [
  { href: '#programa', label: 'Programa' },
  { href: '#instructores', label: 'Integrantes' },
  { href: '#faq', label: 'Preguntas' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg" aria-label="Navegación principal">
        <div className="container d-flex align-items-center justify-content-between py-3">
          <a className="brand d-flex align-items-center gap-2" href="#center">
            <span className="brand-mark" aria-hidden="true">
              TA
            </span>
            Tech Academy
          </a>

          <button
            type="button"
            className="navbar-toggler d-lg-none"
            aria-label="Abrir menú de navegación"
            aria-expanded={open}
            aria-controls="main-nav-links"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="navbar-toggler-icon" aria-hidden="true">
              ☰
            </span>
          </button>

          <div
            id="main-nav-links"
            className={`nav-links-wrapper${open ? ' is-open' : ''}`}
          >
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setOpen(false)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              className="btn btn-primary cta-button"
              href="./registro.html"
              onClick={() => setOpen(false)}
            >
              Inscribirse
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
