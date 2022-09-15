import "./App.css";
import Boton from "./componentes/boton";
import Contador from "./componentes/contador";
import logo from "./img/logo.png"; //importar imagenes
import {useState} from 'react';//hook importante para actualizar un estado
function App() {
  //interactividad

const[numClics,setNumClics]=useState(0);

  const manejarClic = () => {
   setNumClics(numClics+1);
  };

  const ReiniciarContador = () => {
    setNumClics(0);
  };
  //---------------
  return (
    <div className="App">
      <div className="logo-contenedor">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="contendor-principal">
        <Contador numClics={numClics} />
        <Boton texto="Clic" esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={ReiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
