import CartWidget from "./CartWidget"
import {Link} from "react-router-dom"

const NavBar = () => {
      
    return (
        <navbar className= "navbar-flex">
            
            {/* <nav className = "nav-flex">
                <li><a href="Facebook">Facebook</a></li>
                <li><a href="Instagram">Instagram</a></li>
                <li><a href="mail">mail</a></li>  
            </nav> */}
                <h1><a href="#">Velas y Aromas</a></h1>
            <nav className = "nav-flex">
            <li><Link to='category/Velas'>Velas</Link></li>
            <li><Link to='category/Difusores'>Difusores</Link></li>
            <li><Link to='category/Esencias'>Esencias</Link></li>
              <div className="iconoCarrito">  
                <li><Link to="#"><CartWidget/></Link></li>  
              </div>              
            </nav>
        </navbar>
    )
    }
    

export default NavBar