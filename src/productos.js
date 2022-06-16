const productos = [
    {
    id: 1,
    name: 'Difusor cristal',
    image: './imagenes/difusores.jpg' ,
    precio: 1500,
    stock: 10,
    },
    {id: 2,
        name: "Difusor cristal",
        image: "./imagenes/difusores.jpg" ,
        precio: 1500,
        stock: 20,
    },
    {id: 3,
        name: "Difusor cristal",
        image: "./imagenes/difusores.jpg" ,
        precio: 1500,
        stock: 15,
    },
    {id: 4,
        name: "Difusor cristal",
        image: "./imagenes/difusores.jpg" ,
        precio: 1500,
        stock: 15,
    },
    {id: 5,
        name: "Difusor cristal",
        image: "./imagenes/difusores.jpg", 
        precio: 1500,
        stock: 20,
    },
    {id: 6,
        name: "Difusor cristal",
        image: "./imagenes/difusores.jpg" ,
        precio: 1500,
        stock: 10,
    }
]   

export const producto = {
    id: 1,
    name: 'Difusor cristal',
    image: './imagenes/difusores.jpg' ,
    precio: 1500,
    stock: 10,
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ab deleniti modi numquam magnam veritatis? Saepe quaerat natus quibusdam quasi nam nisi cupiditate temporibus incidunt, laudantium labore odit debitis consequatur."
    }        

export const traerProducto = () => {
        return new Promise ((resolve) => {
            setTimeout (() =>{
                resolve (producto);
            },2000)
        })
    }

export default productos;