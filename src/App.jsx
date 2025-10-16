import './App.css';
import Encabezado from './Components/Encabezado.jsx';
import Acerca from './Components/Acerca.jsx';
import Experiencia from './Components/Experiencia.jsx';
import Educacion from './Components/Educacion.jsx';
import Habilidades from './Components/Habilidades.jsx';


function App() {
  return (
    <div className="App">
      <Encabezado />
      <main className="container">
        <Acerca />
        <Experiencia />
        <Educacion />
        <Habilidades />
      </main>
    </div>
  )
}

export default App;
