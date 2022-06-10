import ItemCount from "./ItemCount";

function ItemListContainer(props) {
    
  return (

    <>
    <h2>Catálogo de productos</h2>
    <ItemCount stock={5} onAdd={()=>{}} initial={1}/>
    </>

  )
    
  }

  export default ItemListContainer