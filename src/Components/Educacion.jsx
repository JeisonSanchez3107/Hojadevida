const Educacion = () => {
    const formacionAcademica = [
      {
        year: "2012 - 2018",
        titulo: "Basica Primaria",
        institucion: "Institución Educativa Santa Rosa De Lima - Suarez-Tolima"
      },
      {
        year: "2018 - 2022",
        titulo: "Basica Secundaria",
        institucion: "Institución Educativa Santa Rosa De Lima - Suarez-Tolima"
      },
      {
        year: "2024 - Actualmente",
        titulo: "Tecnologo en Analisis y Desarrollo de Software",
        institucion: "Sena Centro de Industria y Construcción - Ibagué"
      },
    ];
  
    return (
      <section className="section">
        <h2>ESTUDIOS</h2>
        <div className="education-list">
          {formacionAcademica.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="year">{edu.year}</div>
              <div className="education-details">
                <h3>{edu.titulo}</h3>
                <p>{edu.institucion}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Educacion;