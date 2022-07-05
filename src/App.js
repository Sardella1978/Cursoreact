import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {MiProvider} from "./components/CartContext"
import Carrito from "./components/Carrito"
import Checkout from "./components/Checkout"
import {db} from "./firebase"

console.log (db)


const App = () => {
    return (
    
      <BrowserRouter>
      
       <MiProvider>
         <NavBar/>
         <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="Home" element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
            <Route path="/carrito" element={<Carrito/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
         </Routes>
        </MiProvider>
        
      </BrowserRouter>  
     
  )
}


export default App;
