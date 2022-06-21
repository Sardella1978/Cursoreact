import ItemCount from "./ItemCount"

function ItemDetail({name, id, descripcion, stock, price, image}) {
  return (

    <div>
    <div>
        <h3>{name}</h3>
    </div>
    <img src={image} alt={id} />
    <div >
        <h4><b>$ {price}</b></h4> 
        <p>{descripcion}</p>
    </div>
    <ItemCount stock={stock}/>

    </div>
  )
}
export default ItemDetail