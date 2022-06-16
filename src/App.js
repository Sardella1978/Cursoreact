import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Main from "./components/Main"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"


const App = () => {
    return (
      <>
        <NavBar/>
        {/* <ItemListContainer/> */}
        <ItemDetailContainer/>
        <Main/>
        <Footer/>
      </> 
    )
}
export default App;