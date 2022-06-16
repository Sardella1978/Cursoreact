//acá tenemos que armar una card

import ItemCount from "./ItemCount"

function Item ({id, name, image, precio, stock}){
    return (
        <div key= {id} className= "cardItem">
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p>{precio}</p>
            {/* <ItemCount stock= {stock}/>  */}
        </div>
    )
}

export default Item