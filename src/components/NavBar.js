const NavBar = () => {
    return (
        <navbar className = "navbar-flex">
            <nav className = "nav-flex">
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">mail</a></li>  
            </nav>
            <h1><a href="#">Velas y Aromas</a></h1>
            <nav className = "nav-flex">
                <li><a href="#">Shop</a></li>
                <li><a href="#">Universo</a></li>
                <li><a href="#">Carrito</a></li>             
            </nav>
        </navbar>
    )
}
export default NavBar