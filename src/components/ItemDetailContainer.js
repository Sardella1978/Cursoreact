import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getProductsById from '../Promises/getProductsById'
import ItemDetail from './ItemDetail'
import { db } from "../firebase"
import { collection , getDoc , doc } from "firebase/firestore"


function ItemDetailContainer() {
    const [item, setItem] = useState()
    const [loading,setLoading] = useState(true)
    const { id } = useParams()
    
    useEffect(() => {

      setLoading(true)
  
      const collectionProductos = collection(db, "productos")
      const refeDelDoc = doc(collectionProductos,"kecWwFEGf9cK6CYh9XZ4")
      const consulta = getDoc(refeDelDoc)
  
      consulta
        .then(resultado=>{
          const producto = resultado.data()
          setItem(producto)
          setLoading(false)
          console.log (producto)
        })
        .catch((error)=>{
          console.log(error)
        })
  
    }, [])

  return (
         <div style={{marginTop: '30px'}}>
            <ItemDetail {...item} />
        </div>
  )
}

export default ItemDetailContainer