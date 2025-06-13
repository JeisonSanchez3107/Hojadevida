const Referencias = () => {
    const references = [
      {
        name: "Mariaa Ascheneth Villanueva Burgo",
        position: "Jefa local de Crepes Town",
        phone: "3153693239",
      },
      {
        name: "Nubia Ducuara Garcia",
        position: "Jefe de Merca11",
        phone: "3138836741"
      }
    ];
  
    return (
      <section className="section">
        <h2>REFERENCIAS PROFESIONALES</h2>
        <div className="references-list">
          {references.map((ref, index) => (
            <div key={index} className="reference-item">
              <h3>{ref.name}</h3>
              <p>{ref.position}</p>
              {ref.description && <p>{ref.description}</p>}
              <p>Teléfono: {ref.phone}</p>
              {ref.email && <p>Email: {ref.email}</p>}
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Referencias;