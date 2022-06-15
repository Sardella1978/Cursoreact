import { useState } from "react";
import { useEffect } from "react";
import ItemCount from "./ItemCount";
import promesa from "../promesa";
import productos from "../productos";
import ItemList from "./ItemList";

function ItemListContainer (props) {
  const [items, setItems] = useState ([])
  
  useEffect (() => {
    console.log ("pidiendo productos")
    promesa (3000, productos)
    .then (resultado => setItems(resultado))
  }, [items])
  console.log (items)

//   useEffect(()=>{
//     setTimeout (() => {
//     console.log ("pidiendo productos...")
//     const productos = ["producto 1", "producto2", "producto 3"]
//     setItems (productosDeBD)
//   }, 2000)
// }, [])

  // if (items.length > 0) {
    
  return (
    
    <>
      <h2>Catálogo de productos</h2>
      <ItemList productos={items}/>
    </>
  )
  }
  

  export default ItemListContainer   