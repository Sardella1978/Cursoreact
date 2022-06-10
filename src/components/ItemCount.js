import { useState } from "react";

const ItemCount = (stock, initial, onAdd) => {
 
const [contador, setContador] = useState (initial) //set=cambiar
    console.log (contador)

const aumentarContador = () => {
    if (contador <=  stock) 
     setContador (contador + 1)
    else{
      alert ("Sin stock")
     } 
}

const disminuirContador = () => {
    if (contador > 0) {
    setContador (contador - 1)
    }
}
const agregarAlCarrito = () => {
    if (contador >0) {}
}


return(
   <>
    <card className= "card-grid">
      <p>Difusor cristal</p>
        <count className= "cuont-flex">
          <button className="btnCount" onClick={aumentarContador}>+</button>
          <p>{contador}</p>
          <button className="btnCount" onClick={disminuirContador}>-</button>
        </count> 
       <button className="btnAgregar" onClick={agregarAlCarrito}>agregar al carrito</button>
    </card>
  </>

)

}

export default ItemCount