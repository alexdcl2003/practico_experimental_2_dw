import heroImg from '../assets/hero.png'

export default function Hero() {
  return (
    <section id="center" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Cohorte abierta · Modalidad online en vivo</p>
            <h1>
              Domina la Arquitectura Web Avanzada y conviértete en un
              desarrollador integral
            </h1>
            <p className="lead">
              Un programa práctico de Tech Academy enfocado en semántica,
              accesibilidad, SEO técnico y rendimiento: todo lo que necesitas
              para construir productos web profesionales.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary btn-lg cta-button" href="./registro.html">
                Reserva tu cupo
              </a>
              <a className="btn btn-outline-primary btn-lg" href="#programa">
                Ver el programa
              </a>
            </div>
          </div>

          <div className="hero-media">
            <img
              src={heroImg}
              alt="Vista previa del programa de Arquitectura Web Avanzada de Tech Academy"
              width="343"
              height="361"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
