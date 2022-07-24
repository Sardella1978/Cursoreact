import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {MiProvider} from "./components/CartContext"
import { db} from "./firebase"
import Carrito from "./components/ItemCartContainer"
import ItemCartContainer from "./components/ItemCartContainer"

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
            <Route path="/carrito" element={<ItemCartContainer/>}/>
         </Routes>
        </MiProvider>
      </BrowserRouter>  
     
  )
}


export default App;
