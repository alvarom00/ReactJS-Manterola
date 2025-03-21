import ItemListContainer from "./components/ItemListContainer"
import Navbar from "./components/NavBar"

const App = () => {

  let greeting = "Bienvenidos a Alva Store, la mejor tienda de videojuegos en linea."

  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={greeting} />
    </div>
  )
}

export default App
