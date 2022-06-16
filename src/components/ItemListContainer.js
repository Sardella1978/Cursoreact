import { useState } from "react";
import { useEffect } from "react";
import productos from "../productos";
import ItemList from "./ItemList";
import traerProductos from "../promesas/traerProductos";

function ItemListContainer (props) {
  const [items, setItems] = useState ([])
  
  useEffect (() => {
    // console.log ("pidiendo productos")
    traerProductos (3000, productos)
    .then (resultado => setItems(resultado))
  }, [items])
  // console.log (items)

  return (
    
    <>
      <h2>Catálogo de productos</h2>
      <ItemList productos={items}/>
    </>
  )
  }
  
  export default ItemListContainer   