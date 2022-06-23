import { useState } from "react";
import { useEffect } from "react";
import productos from "../productos";
import ItemList from "./ItemList";
import traerProductos from "../Promises/traerProductos";
import { useParams } from "react-router-dom";
import getProductsByCategory from "../Promises/getProductsByCategory";

//pido que me traiga la lista de todos los productos del array (productos) con la promesa traerProductos

function ItemListContainer () {
  const [items, setItems] = useState ([])
  const [loading, setLoading] = useState (true)
  const {categoryId} = useParams ()
  
  useEffect (() => {
    setLoading (true)

    new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve(categoryId ? productos.filter((producto)=>{
          console.log (producto.categoryId===categoryId)
        }): productos)
      },2000)
    })
    .then(resultado =>{
      setItems(resultado)
      setLoading (false)
    })
    .catch(()=>{

    })
  },[categoryId])
//     if (!categoryId){
//     traerProductos (3000, productos).then (resultado => {setItems(resultado)
//   })
// } else {
//     getProductsByCategory(categoryId).then(resultado =>{setItems(resultado)
//   })
// }
//   },[categoryId])
    
  return (
    
    <>
      <h2>Catálogo de productos</h2>
      <ItemList productos={items}/>
    </>
  )
  }
  export default ItemListContainer   