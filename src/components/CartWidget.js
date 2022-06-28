import React, { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { contexto } from './CartContext'
import ShopIcon from "./iconos/ShopIcon.png"

const CartWidget = () => {

    const {CarCantidad} = useContext (contexto)
    const total = CarCantidad ()
    console.log (total)

      
    return (
        <Link to="/carrito"><img className='iconoCarrito' src= {ShopIcon} alt= "IconoCarrito"/>
        <p>{total}</p>
        </Link>
    )
}
export default CartWidget

