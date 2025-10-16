import foto from '../assets/Imagen de WhatsApp 2025-10-16 a las 13.13.18_940b829f.jpg';


const Encabezado = () => {
  return (
    <header className="header">
      <img
        src={foto}
        alt="Foto del aspirante"
        className="foto-perfil"
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          objectFit: 'cover',
          marginBottom: '20px',
        }}
      />
      <h1>Jeison Steven Villanueva</h1>
      <h2>Desarrollador de Software</h2>
      <div className="contact-info">
        <p>Ibagué, Colombia</p>
        <p>Teléfono: 3188894071</p>
        <p>Email: jeisonvillanueva3107@gmail.com</p>
      </div>
    </header>
  );
};

export default Encabezado;