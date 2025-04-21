import { createContext, useState } from "react"

export const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addItem = (item, quantity) => {
    const itemInCart = cart.find((prod) => prod.id === item.id)

    if (itemInCart) {
      const updatedCart = cart.map((prod) =>
        prod.id === item.id
          ? { ...prod, quantity: prod.quantity + quantity }
          : prod
      )
      setCart(updatedCart)
    } else {
      setCart([...cart, { ...item, quantity }])
    }
  }

  const getTotalItems = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity, 0)
  }

  return (
    <CartContext.Provider value={{ cart, addItem, getTotalItems }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
