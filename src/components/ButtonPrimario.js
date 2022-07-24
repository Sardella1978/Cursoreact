const ButtonPrimario = ({ accion, tipoBoton, texto }) => {
    const getEstilo = (tipoBoton) => {
      switch (tipoBoton) {
        case "primario":
          return "ButtonPrimario ButtonPrimarioAceptar";
  
        case "danger":
          return "ButtonPrimario ButtonPrimarioDanger";
  
        case "confirmar":
          return "ButtonPrimario ButtonPrimarioConfirma";
  
        default:
          return "ButtonPrimario ButtonPrimarioAceptar";
      }
    };
  
    return (
      <button onClick={accion}>
        {texto}
      </button>
    );
  };
  
  export default ButtonPrimario;