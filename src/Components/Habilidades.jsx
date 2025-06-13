const Habilidades = () => {
    const habilidad = [
      "Gestión de Proyectos informáticos",
      "Trabajo en equipo",
      "Capacidad de escucha",
      "Habilidades de análisis",
      "Toma de decisiones"
    ];
  
    return (
      <section className="section">
        <h2>HABILIDADES</h2>
        <ul className="skills-list">
          {habilidad.map((habilidad, index) => (
            <li key={index}>{habilidad}</li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default Habilidades;