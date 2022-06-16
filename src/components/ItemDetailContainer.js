import { useState } from "react";
import { useEffect } from "react";
import { traerProducto } from "../productos";
import ItemDetail from "./ItemDetail";




function ItemDetailContainer () {
    const [producto, setProducto] = useState ({})
  
  useEffect (() => {
    traerProducto ()
    .then ((res) => {
        setProducto (res);
    }
    )
  },[])

  console.log (producto)
  

  return (
    
    <>
      <ItemDetail producto = {producto}/>
    </>
  )
}

export default ItemDetailContainer