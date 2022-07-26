import { db } from "../firebase"
import { collection , addDoc , serverTimestamp } from "firebase/firestore"
import { useState, useContext,useReducer } from "react"
import { contexto } from "./CartContext"


const Checkout = () => {

  const [idCompra,setIdCompra] = useState("")
  const { carrito } = useContext(contexto)
  const [nombre, setNombre] = useState("")
  const [tel, setTel] = useState("")
  const [email, setEmail] = useState("")
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    telefono: ""
  })
  
  const handleSubmit = (e) => {
    e.preventDefault()
      console.log(usuario)
  }

  const handleClick = (e) => {
    e.preventDefault()
  }

  const handleNombreChange = (e) => {
    setNombre(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleTelChange = (e) => {
    setTel(e.target.value)
  }

  const handleChange = (e) => {
        setUsuario({ ...usuario, [e.target.id] : e.target.value})
    
  }

  const handleBuy = () => {
    
    const collectionOrdenes = collection(db,"orden")

    const orderData = {
      buyer : {
        name : "Silvina",
        phone : "1165579781",
        email : "slsardella@hotmail.com"
      },
      items : [{id:1,titulo:"test producto"}],
      date : serverTimestamp(),
      total : 100
    }

    const consulta = addDoc(collectionOrdenes,orderData)

    consulta
      .then(resultado=>{
        setIdCompra(resultado.id)
      })
      .catch(error=>{
        console.log(error)
      })


  }

  return (
    <>
    <div>Checkout</div>
    <form onSubmit={handleSubmit}>
        <div>
          <input onChange={handleChange} type="text" id="nombre" placeholder="Nombre..." value={nombre} />
        </div>
        <div>
          <input onChange={handleChange} type="email" id="email" placeholder="Email..." value={email} />
        </div>
        <div>
          <input onChange={handleChange} type="number" id="telefono" placeholder="Telefono..." />
        </div>
        <button /* onClick={handleClick} */>comprar</button>
      </form>
    {idCompra&&<p>Su compra es : {idCompra}</p>}
    <button onClick={handleBuy}>guardar</button>
    </>
  )
}
export default Checkout