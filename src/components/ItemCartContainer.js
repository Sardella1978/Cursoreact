import ItemCartList from "./ItemCartList";
import ButtonPrimario from "./ButtonPrimario";
import { useContext } from "react";
import {contexto} from "./CartContext"
import { useNavigate } from "react-router-dom";
import Formulario from "./Checkout";

const ItemCartContainer = () => {
  const { vaciarCarrito, cantidad_total, precio_total } =
    useContext(contexto);
  
  const navigate = useNavigate();  

  const limpiarCarrito = () => {
    vaciarCarrito();
    // const notificacion = Swal.mixin({
    //   toast: true,
    //   position: "top-end",
    //   showConfirmButton: false,
    //   timer: 2000,
    //   timerProgressBar: true,
    // });

    // notificacion.fire({
    //   icon: "warning",
    //   title: "Se quitaron todos los artículos del carrito.",
    // });
  };

  return (
    <div className="ItemCartContainer">
        {cantidad_total > 0 ? (
          <>
            <div >
              <ItemCartList />
            </div>

           <div className="carritoTotal">  
              <div >
                <ButtonPrimario
                  accion={limpiarCarrito}
                  texto="Vaciar Carrito"
                  tipoBoton={"danger"}
                />
              </div> 
              <div>
                <ButtonPrimario
                  accion={() => navigate("/checkout")}
                  texto="Terminar compra"
                  tipoBoton={"confirmar"}
                />
                </div>
                <div>  
                  Total:{" "}
                  <span >{"$" + precio_total}</span>
                </div>
               </div>
              <Formulario/>
                              
          </>
        ) : (
          <>
            <h2 >
              No hay productos para mostrar aquí
            </h2>
            <div>
              <ButtonPrimario
                accion={() => navigate("/")}
                texto="Volver a Home"
                tipoBoton={"primario"}
              />
            </div>
          </>
        )}
      </div>
  );
};

export default ItemCartContainer;





