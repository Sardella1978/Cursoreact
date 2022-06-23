//acá tenemos que armar una card que se verá en ItemListContainer

import {Link} from "react-router-dom"

function Item ({id, name, image, precio, stock}){
    return (
        <div key= {id} className= "container">
            <div className="card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p className="price">$ {precio}</p>
            <Link className="buttonCard" to={`/detail/${id}`}>Ver Detalle</Link> 
            </div>
        </div>
    )
}

export default Item