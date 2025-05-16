import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { doc, updateDoc, getFirestore, increment } from "firebase/firestore"
import "../styles.css"

const Cart = () => {
  const { cart, clearCart, restoreStock, totalPrice } = useContext(CartContext)

const handleBuy = async () => {
  const db = getFirestore()

  try {
    for (const item of cart) {
      const docRef = doc(db, "productos", item.id)
      await updateDoc(docRef, {
        stock: item.stock - item.quantity,
      });
    }

    clearCart();
    alert("¡Compra realizada con éxito!")
  } catch (error) {
    console.error("Error al actualizar el stock:", error)
    alert("Hubo un error al procesar la compra.")
  }
}

const handleCancel = async () => {
  const db = getFirestore()

  for (const item of cart) {
    const productRef = doc(db, "productos", item.id)
    await updateDoc(productRef, {
      stock: increment(item.quantity)
    })
  }

  clearCart()
}

  if (cart.length === 0) {
    return <p className="greeting">El carrito está vacío</p>
  }

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - Cantidad: {item.quantity} - Precio unitario: ${item.price.toFixed(2)} - Subtotal: ${(item.price * item.quantity).toFixed(2)}
          </li>
        ))}
      </ul>
      <h3>Total: ${totalPrice().toFixed(2)}</h3>
      <button onClick={handleBuy}>Comprar</button>
      <button onClick={handleCancel}>Cancelar compra</button>
    </div>
  )
}

export default Cart