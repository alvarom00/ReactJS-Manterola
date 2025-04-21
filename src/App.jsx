import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetail from "./components/ItemDetail"
import Cart from "./components/Cart"
import Navbar from "./components/Navbar"
import CartProvider from "./context/CartContext"

const App = () => {
  let greeting = "Bienvenidos a Alva Store, la mejor tienda de videojuegos en línea."

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={greeting} />} />
          <Route path="/category/:id" element={<ItemListContainer greeting={greeting} />} />
          <Route path="/item/:id" element={<ItemDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
