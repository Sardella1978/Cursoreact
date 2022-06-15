import { useState } from "react";

// const ItemCount = (stock, initial, onAdd) => {
 
// const [contador, setContador] = useState (0) //set=cambiar
//     console.log (contador)

// const aumentarContador = () => {
//      setContador (contador + 1)
//        }
      
// const disminuirContador = () => {
//     if (contador > 0) {
//     setContador (contador - 1)
//     }
// }
// const agregarAlCarrito = () => {
//     if (contador >0) {}
// }

// return(
//    <>
//     <card className= "card-grid">
//       <p>Difusor cristal</p>
//         <count className= "cuont-flex">
//           <button className="btnCount" onClick={aumentarContador}>+</button>
//           <p>{contador}</p>
//           <button className="btnCount" onClick={disminuirContador}>-</button>
//         </count> 
//        <button className="btnAgregar" onClick={agregarAlCarrito}>agregar al carrito</button>
//     </card>
//   </>

// )

// }

function ItemCount ({stock}) {
  const [count, setCount] = useState (0)
    
  function aumentar () {
      if (count < stock){
        setCount (count + 1)
      }
    }
    function disminuir (){
      if (count > 0){
        setCount (count - 1)
      }
    }
    const agregarAlCarrito = () => {
       if (count >0) {

      }
    }
  
  return (
         <div>
            <button className="btnCount" onClick={aumentar}>+</button>
            <spam>{count}</spam>
            <button className="btnCount" onClick={disminuir}>-</button>
            <button className="btnAgregar" onClick={agregarAlCarrito}>agregar al carrito</button>
         </div>       
  )
}
    //         </count> 
    //        <button className="btnAgregar" onClick={agregarAlCarrito}>agregar al carrito</button>
    //     </card>
    //   </>
    
    // )
  
export default ItemCount