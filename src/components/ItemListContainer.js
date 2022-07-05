import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import productos from "../productos";
import ItemList from "./ItemList";
import traerProductos from "../Promises/traerProductos";
import getProductsByCategory from "../Promises/getProductsByCategory";
import {db} from "../firebase";
import {getDocs, collection} from "firebase/firestore"



function ItemListContainer () {

  const [items, setItems] = useState ([])
  const {categoryId} = useParams ()

 useEffect (() => {
  
const collectionProductos= collection (db, "Productos")
const consulta = getDocs (collectionProductos)
   
consulta
    .then ((resultado)=>{
   console.log (resultado)
 })
    .catch ((error)=>{
    console.log (error)
 })
 }, [categoryId])
  
  return (
    
    <>
      <h2>Catálogo de productos</h2>
      <ItemList productos={items}/>
      
    </>
  )
  }
  export default ItemListContainer   