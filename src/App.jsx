import './App.css';
import Encabezado from './Components/Encabezado.jsx';
import Acerca from './Components/Acerca.jsx';
import Experiencia from './Components/Experiencia.jsx';
import Educacion from './Components/Educacion.jsx';
import Habilidades from './Components/Habilidades.jsx';
import Referencias from './Components/Referencias.jsx';

function App() {
  return (
    <div className="App">
      <Encabezado />
      <main className="container">
        <Acerca />
        <Experiencia />
        <Educacion />
        <Habilidades />
        <Referencias />
      </main>
    </div>
  )
}

export default App;
