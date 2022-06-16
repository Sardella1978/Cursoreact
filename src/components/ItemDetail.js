import ItemCount from "./ItemCount"


const ItemDetail = ({producto}) => {
  return(
    <div className="detail">
        <img src ={producto.image} alt= {producto.name} width= "450" height="450"/>
        <div className="descripcion">
            <h3>{producto.name}</h3> <br />
            <p>{producto.descripcion}</p> <br></br>
            <p> ${producto.precio}</p>
            <p> Stock:{producto.stock}</p>
            <ItemCount stock= {producto.stock}/>
        </div>
    
    </div>
  )
}
export default ItemDetail