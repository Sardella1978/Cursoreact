//promesa para traer productos a ItemListContainer

const traerProductos = (time, task) => {
    return new Promise ((resolve) => {
        setTimeout (() =>{
            resolve (task);
        },time)
    })
}

export default traerProductos;