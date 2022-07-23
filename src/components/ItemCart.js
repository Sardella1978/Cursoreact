
// import ButtonPrimario from "../ButtonPrimario/ButtonPrimario";
import { useContext } from "react";
import {contexto} from "./CartContext"
// import Swal from "sweetalert2";

const ItemCart = ({ id, img, nombre, cantidad, precio }) => {
  const { quitarProducto } = useContext(contexto);

  const quitarProductoCarrito = (id) => {
    quitarProducto(id);
    const notificacion = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });

    notificacion.fire({
      icon: "warning",
      title: "Artículo eliminado",
    });
  };

  return (
    <div className="ItemCart">
      <div className="ItemCart__imagen">
        <img className="ItemCart__imagen-productoImg" src={img}></img>
      </div>
      <div className="ItemCart__descripcion">
        <div className="ItemCart__descripcion-nombreProducto">{nombre}</div>
        <div className="ItemCart__descripcion-detallePedido">
          <p className="ItemCart__descripcion-detallePedido-cantidad">
            <span className="descripcion-detallePedido-item">Cantidad: </span>{" "}
            <span className="descripcion-detallePedido-cantidad">
              {cantidad}
            </span>
          </p>
          <p className="ItemCart__descripcion-detallePedido-precio">
            <span className="descripcion-detallePedido-item">
              Precio Unitario:
            </span>
            <span className="descripcion-detallePedido-cantidad">
              {" "}
              ${precio}
            </span>
          </p>
          <p className="ItemCart__descripcion-detallePedido-subTotal">
            <span className="descripcion-detallePedido-item">Subtotal: </span>
            <span className="descripcion-detallePedido-cantidad">
              {" "}
              ${precio * cantidad}
            </span>
          </p>
        </div>
      </div>
      <div className="ItemCart__botones">
        {/* <ButtonPrimario
          accion={() => quitarProductoCarrito(id)}
          tipoBoton={"danger"}
          texto="Quitar"
        /> */}
      </div>
    </div>
  );
};

export default ItemCart;