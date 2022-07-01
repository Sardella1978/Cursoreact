//Provider es un COMPONENTE que viene DENTRO de la creacion del contexto. 
//Determina que componentes pueden usar el contexto, quienes obtebdrán su información
//DETERMINA EL VALOR DEL CONTEXTO


import { createContext, useState } from "react"

export const contexto = createContext()

const Provider = contexto.Provider //Provider es un componente

export const MiProvider=({children}) =>{
    console.log (children)
    //información que queremos compartir (carrito, cantidad total, precio total)
    const [carrito, setCarrito] = useState([])
    console.log (carrito)

    let i=0;

    const agregarProducto= (prod)=>{
        if (!estaDentro (prod [i].id)){
            console.log (prod [i].id)
            setCarrito([...carrito, prod])
            i++
        }
    }

    const estaDentro=(id)=>{
        return carrito.some (produ=> produ[i].id ===id)
    }

    const Borrar=({id})=>{
        const borrado = carrito.filter(prod=>prod [i].id === id)
        setCarrito (borrado)
        console.log (carrito)
    }

    const CarCantidad=()=>{
        let cantidad =0;

           carrito.forEach (prod=>{
               cantidad += prod[i].cantidad
               console.log (cantidad)
           })
           return cantidad
    }

    const CarTotal=()=>{
        let cantidad=0
        let total;
        carrito.forEach (prod=>{
            cantidad += (prod[i].cantidad)
            total=cantidad*prod[i].precio
            console.log (cantidad)
        })
        return total
    }

    return(
        <Provider value={{carrito, estaDentro,agregarProducto,Borrar, CarCantidad, CarTotal}}>
            {children}
        </Provider>
    )

}
    
