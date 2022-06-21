//acá tenemos que armar una card

import {Link} from "react-router-dom"

function Item ({id, name, image, precio, stock}){
    return (
        <div key= {id} className= "cardItem">
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p>{precio}</p>
            <Link to={`/detail/${id}`}>Ver Detalle</Link>
            
        </div>
    )
}

export default Item