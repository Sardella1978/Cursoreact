import ItemCartList from "./ItemCartList";
import { useContext } from "react";
import {contexto} from "./CartContext"


const ItemCartContainer = () => {
  const { vaciarCarrito, cantidad_total, precio_total } =
    useContext(contexto);

  const navigate = useNavigate();

  const limpiarCarrito = () => {
    vaciarCarrito();
    const notificacion = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });

    notificacion.fire({
      icon: "warning",
      title: "Se quitaron todos los artículos del carrito.",
    });
  };

  return (
    <div className="App-body">
      <div className="ItemCartContainer">
        <div className="ItemCartContainer__titulo">
          <h1 className="greeting">Tu carrito</h1>
        </div>
        {cantidad_total > 0 ? (
          <>
            <div className="ItemCartContainer__lista">
              <ItemCartList />
            </div>
            <div className="ItemCartContainer__total">
              Total:{" "}
              <span className="ItemCartContainer__total-monto">
                {"$" + precio_total}
              </span>
            </div>
            <div className="ItemCartContainer__acciones">
              <div className="ItemCartContainer__acciones_botonera">
                <ButtonPrimario
                  accion={limpiarCarrito}
                  texto="Quitar todos"
                  tipoBoton={"danger"}
                />
                <ButtonPrimario
                  accion={() => navigate("/checkout")}
                  texto="Terminar compra"
                  tipoBoton={"confirmar"}
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <h2 className="ItemCartContainer__lista-NoProductos-titulo">
              No hay productos para mostrar aquí
            </h2>
            <div className="ItemCartContainer__lista-NoProductos-botonVolverHome">
              <ButtonPrimario
                accion={() => navigate("/")}
                texto="Volver a Home"
                tipoBoton={"primario"}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ItemCartContainer;