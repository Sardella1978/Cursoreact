import ItemCount from "./ItemCount"
import {useState} from "react"

function ItemDetail({name, id, descripcion, stock, price, image}) {
  const [cant, setCant] = useState()

  const onAdd = (cantidadSeleccionada) => {
    console.log ("desde item detail:" + 
    cantidadSeleccionada)
    setCant(cantidadSeleccionada)
    
  }

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
    <ItemCount initial={0} onAdd={onAdd} stock={stock}/>
    </div>
    //una vez almacenado el contador tiene que desaparecer
    //eso lo hacemos con un ternario (si cantidad es 0 o null=false...)
    //redireccionamos hacia la ruta "/cart"
  )
}

export default ItemDetail