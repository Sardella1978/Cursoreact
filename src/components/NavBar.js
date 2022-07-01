import CartWidget from "./CartWidget"
import {Link} from "react-router-dom"

const NavBar = () => {
      
    return (
        <nav className= "navbar-flex">
            
          <h1><Link to="Home">Velas y Aromas</Link></h1>
            <ul className = "nav-flex">
               <li><Link to='category/Velas'>Velas</Link></li>
               <li><Link to='category/Difusores'>Difusores</Link></li>
               <li><Link to='category/Esencias'>Esencias</Link></li>
               <div>  
                <li className="iconoCarrito"><Link to="#"><CartWidget/></Link></li>  
               </div>              
            </ul>
        </nav>
    )
    }
    

export default NavBar