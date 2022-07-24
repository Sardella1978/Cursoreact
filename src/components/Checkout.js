import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { contexto } from "./CartContext"

const Checkout = () => {

  const [nombre,setNombre] = useState("")
  const [tel,setTel] = useState("")
  const [email,setEmail] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault()
    
  const usuario = { nombre , tel , email}
          console.log(usuario)
  }

  const handleClick = (e) => {
    e.preventDefault()
    //e.target.value
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
  
  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        {/* <div>
          <input onChange={handleNombreChange} type="text" id="nombre" placeholder="Nombre..." value={usuario.nombre}/>
        </div>
        <div>
          <input onChange={handleEmailChange} type="email" id="email" placeholder="Email..." value={usuario.email}/>
        </div> */}
        <div>
          <input onChange={handleTelChange} type="number" id="telefono" placeholder="Telefono..."/>
        </div>
        <button onClick={handleClick}>comprar</button>
      </form>

      <Link to="/checkout">Proceder con la compra</Link>
    </div>
  )
}

export default Checkout

// import { db } from "./firebase"
// import { collection , addDoc , serverTimestamp } from "firebase/firestore"
// import { useState } from "react"


// const Checkout = () => {

//   const [idCompra,setIdCompra] = useState("")

//   const handleBuy = () => {
    
//     const collectionOrdenes = collection(db,"ordenes")

//     const orderData = {
//       buyer : {
//         name : "Horacio",
//         phone : "555555555",
//         email : "test@tes.com"
//       },
//       items : [{id:1,titulo:"test producto"}],
//       date : serverTimestamp(),
//       total : 100
//     }

//     const consulta = addDoc(collectionOrdenes,orderData)

//     consulta
//       .then(resultado=>{
//         setIdCompra(resultado.id)
//       })
//       .catch(error=>{
//         console.log(error)
//       })


//   }

//   return (
//     <>
//     <div>Checkout</div>
//     {idCompra&&<p>Su compra es : {idCompra}</p>}
//     <button onClick={handleBuy}>guardar</button>
//     </>
//   )
// }
// export default Checkout