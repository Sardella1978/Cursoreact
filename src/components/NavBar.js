import CartWidget from "./CartWidget"
import {Link} from "react-router-dom"
// import { useContext } from "react"
// import { useState, useEffect } from "react"
// import { contexto } from "./CartContext"

const NavBar = () => {
//     const {cantidad_total} = useContext (contexto)  
//     const [carritoVacio, setCarritoVacio] = useState (true)

//    useEffect (()=>{
//     setCarritoVacio (cantidad_total > 0 ? false: true)
//     }, [cantidad_total])   

    return (
        <nav className= "navbar-flex">
            
          <h1><Link to="Home">Velas y Aromas</Link></h1>
            <ul className = "nav-flex">
               <li><Link to='category/Velas'>Velas</Link></li>
               <li><Link to='category/Difusores'>Difusores</Link></li>
               <li><Link to='category/Esencias'>Esencias</Link></li>
               <div>  
                <li className="iconoCarrito"><Link to="Carrito"><CartWidget/></Link></li>  
               </div>              
            </ul>
        </nav>
    )
    }
    

export default NavBar