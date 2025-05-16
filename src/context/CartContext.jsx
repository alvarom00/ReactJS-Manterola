import { createContext, useState } from "react"
import { doc, updateDoc, getFirestore, increment } from "firebase/firestore"

const db = getFirestore()

export const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addItem = async (item, quantity) => {
    await updateStock(item.id, quantity)

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

  const updateStock = async (productId, quantityToSubtract) => {
    const productRef = doc(db, "productos", productId)
    await updateDoc(productRef, {
      stock: increment(-quantityToSubtract)
    })
  }

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  const restoreStock = () => {
  cart.forEach((item) => {
    item.stock += item.quantity
  })
}

const totalPrice = () => {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0)
}

const clearCart = () => {
  setCart([])
}

  return (
    <CartContext.Provider value={{ cart, addItem, clearCart, restoreStock, totalPrice, getTotalItems }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
