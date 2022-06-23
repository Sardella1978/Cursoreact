import productos from "../productos"


const getProductsByCategory= (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            console.log (productos.map(productos =>{
                console.log (productos.categoryId)
            }))
            resolve(categoryId ? productos.filter((producto)=>{
                console.log(producto.categoryId === categoryId)
            }): productos)
        }, 2000)
    })
    
}

export default getProductsByCategory