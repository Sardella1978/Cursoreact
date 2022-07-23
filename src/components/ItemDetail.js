import ItemCount from "./ItemCount"
import {useState} from "react"
import {useContext} from "react"
import {contexto} from "./CartContext"

function ItemDetail ({name, id, descripcion, stock, precio, image}) {

  const {agregarProducto} = useContext (contexto)
  const [cant, setCant] = useState(0)

  
  
  const onAdd = (cantidadSeleccionada) => {
    console.log ("desde item detail:" + cantidadSeleccionada)
    if (cantidadSeleccionada > 0) {
      agregarProducto ({ id, descripcion, stock, precio, image, cantidadSeleccionada})
    }
    setCant(cantidadSeleccionada);
   
  };
  return (
    <div className="itemDetail">
        <div>
           <img src={image} alt={id} className="imgItemDetail" />
        </div>
        <div className="descrption">
          <h3>{name}</h3>
          <p>{descripcion}</p>
          <h4><b>$ {precio}</b></h4>
          <ItemCount initial={0} onAdd={onAdd} stock={stock}/>
        </div>
        
    </div>
    //una vez almacenado el contador tiene que desaparecer
    //eso lo hacemos con un ternario (si cantidad es 0 o null=false...)
    //redireccionamos hacia la ruta "/cart"
  )
  }

export default ItemDetail