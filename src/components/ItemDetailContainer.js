import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getProductsById from '../Promises/getProductsById'
import ItemDetail from './ItemDetail'

// cuando clickeo en boton "ver detalle" (del itemListContainer) pido que me traiga solo UN producto con la promesa getProductsById

function ItemDetailContainer() {
    const [product, setProduct] = useState()
    const [loading,setLoading] = useState(true)
    const { id } = useParams()
    
  useEffect(() => {
    getProductsById(parseInt(id)) //debo parsear el id para que no me de un string
    .then(response => {
        setProduct(response)
    })
    }, [])

  return (
         <div style={{marginTop: '30px'}}>
            <ItemDetail {...product} />
        </div>
  )
}

export default ItemDetailContainer