import ButtonPrimario from "./ButtonPrimario";
import { useContext } from "react";
import {contexto} from "./CartContext";

const ItemCart = ({ id, image, name, cantidadSeleccionada, precio }) => {
    const { quitarProducto } = useContext(contexto);
    const quitarProductoCarrito = (id) => {
        quitarProducto(id);
}

return (
    <div className="ItemCart" >
      {/* <div ><img src={image}></img></div> */}
      <div> <h3> {name} </h3></div>
          <p >
            <span >Cantidad: </span>{" "}
            <span >{cantidadSeleccionada}</span>
          </p>
          <p >
            <span >Precio Unitario:</span>
            <span > {" "} ${precio} </span>
          </p>
          <p >
            <span >Subtotal: </span>
            <span > {" "} ${precio * cantidadSeleccionada}</span>
          </p>
             
      <div >
        <ButtonPrimario
          accion={() => quitarProductoCarrito(id)}
          tipoBoton={"danger"}
          texto="Quitar"
        />
      </div>
    </div>
  );
};

export default ItemCart;