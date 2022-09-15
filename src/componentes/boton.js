import React from "react";
import '../estilos/boton.css'

function Boton({texto,esBotonDeClic,manejarClic}){//sintaxis de destructuracion
    return(
        <button className={ esBotonDeClic ? 'boton-clic': 'boton-reiniciar' }
        onClick={manejarClic}> 
            {texto}
        </button>//si es boton de clic le asignamos la clase si no es un boton de reinciar
    )
}

export default Boton;