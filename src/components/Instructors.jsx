import stevenPhoto from '../assets/steven-perea.png'

const team = [
  {
    name: 'Alexis David Cajamarca Largo',
    role: 'Formulario validado',
  },
  {
    name: 'Eduardo Elías Alvarado Escobar',
    role: 'Página independiente de inscripción',
  },
  {
    name: 'Erick Adrian Minda Granja',
    role: 'Programa, estadísticas y preguntas',
  },
  {
    name: 'Gabriel Andres Asuncion Perez',
    role: 'Diseño adaptable y documentación',
  },
  {
    name: 'Steven Jose Perea Romero',
    role: 'Landing, navegación e integración',
    photo: stevenPhoto,
  },
]

function initialsOf(name) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
}

export default function Instructors() {
  return (
    <section id="instructores" aria-labelledby="instructores-title" className="team-section">
      <div className="container">
        <h2 id="instructores-title" className="section-title">
          El equipo detrás del programa
        </h2>
        <p className="section-subtitle">
          Cinco integrantes, un mismo objetivo: una landing responsiva y
          accesible, construida con React y Bootstrap.
        </p>

        <div className="team-grid">
          {team.map((member) => (
            <article key={member.name} className="team-card">
              {member.photo ? (
                <div className="team-photo team-photo-img">
                  <img src={member.photo} alt={member.name} loading="lazy" />
                </div>
              ) : (
                <div className="team-photo" aria-hidden="true">
                  <span>{initialsOf(member.name)}</span>
                </div>
              )}
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
