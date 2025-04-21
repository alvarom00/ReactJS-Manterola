import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);

  if (cart.length === 0) {
    return <p className="greeting">El carrito está vacío</p>;
  }

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - Cantidad: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;