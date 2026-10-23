const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <p className="brand d-flex align-items-center gap-2">
              <span className="brand-mark" aria-hidden="true">
                TA
              </span>
              Tech Academy
            </p>
            <p className="footer-tagline">
              Formación práctica en Arquitectura Web Avanzada.
            </p>
          </div>

          <a className="btn btn-primary cta-button" href="./registro.html">
            Inscribirse ahora
          </a>
        </div>

        <nav className="footer-links" aria-label="Navegación del pie de página">
          <a href="#programa">Programa</a>
          <a href="#instructores">Integrantes</a>
          <a href="#faq">Preguntas</a>
        </nav>

        <p className="footer-copy">
          © {currentYear} Tech Academy. Proyecto académico sin fines comerciales.
        </p>
      </div>
    </footer>
  )
}
