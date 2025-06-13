const Experiencia = () => {
    const experienciaLaboral = [
      {
        id: 1,
        empresa: "Heladeria Crepes Town",
        cargo: "Mesero",
        period: "20 de abril de 2023 - Actualidad",
        funciones: [
          "Atención al cliente y servicio de mesa.",
        ],
        supervisor: "Mariaa Ascheneth Villanueva Burgo",
        contacto: "3153693239"
      },
      {
        id: 2,
        empresa: "Supermercado Merca11",
        cargo: "Atecion al Cliente y Empaque",
        period: "1 de enero de 2023 - 20 de abril de 2023",
        funciones: [
          "Atención al cliente y servicio de empaque.",
          "Manejo de caja registradora y cobro de productos.",
          "Organización y limpieza del área de trabajo."
        ],

      supervisor: "Nubia Ducuara Garcia",
        contacto: "3138836741"
      }
    ];
  
    return (
      <section className="section">
        <h2>EXPERIENCIA PROFESIONAL</h2>
        <div className="experience-list">
          {experienciaLaboral.map(exp => (
            <div key={exp.id} className="experience-item">
              <h3>{exp.company}</h3>
              <p className="position">{exp.cargo} | {exp.period}</p>
              <h4>Funciones:</h4>
              <ul>
                {exp.funciones.map((func, index) => (
                  <li key={index}>{func}</li>
                ))}
              </ul>
              <p className="supervisor"><strong>Jefe inmediato:</strong> {exp.supervisor}</p>
              <p className="contact"><strong>Contacto:</strong> {exp.contacto}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Experiencia;