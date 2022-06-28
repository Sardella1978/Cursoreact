import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import productos from "../productos";
import ItemList from "./ItemList";
import traerProductos from "../Promises/traerProductos";
import getProductsByCategory from "../Promises/getProductsByCategory";

//pido que me traiga la lista de todos los productos del array (productos) con la promesa traerProductos

function ItemListContainer () {

  const [items, setItems] = useState ([])
  // const [loading, setLoading] = useState (true)
  const {categoryId} = useParams ()

  // console.log (items.length)
  
  // useEffect (() => {
    
  //   setLoading (true)

  //   new Promise((resolve, reject) => {
  //     setTimeout(()=>{
  //       resolve(categoryId ? productos.filter((producto)=>{
  //         console.log (producto.categoryId===categoryId)
  //       }): productos)
  //     },2000)
  //   })
  //   .then(resultado =>{
  //     setItems(resultado)
  //     setLoading (false)
  //   })
  //   .catch(()=>{

  //   })
  // },[categoryId])

  useEffect(() => {
    if(!categoryId) {
      traerProductos().then(response => {
        setItems(response)
        })
    } else {
        getProductsByCategory(categoryId).then(response => {
          setItems(response)
        })
    }
}, [categoryId])
    
  return (
    
    <>
      <h2>Catálogo de productos</h2>
      <ItemList productos={items}/>
      
    </>
  )
  }
  export default ItemListContainer   