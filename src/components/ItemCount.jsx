import { useState } from "react"
import "../styles.css"

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1)

  const increase = () => {
    if (count < stock) setCount(count + 1)
  }

  const decrease = () => {
    if (count > 1) setCount(count - 1)
  }

  return (
    <div>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginBottom: "10px" }}>
        <button onClick={decrease}>-</button>
        <span>{count}</span>
        <button onClick={increase}>+</button>
      </div>
      <button onClick={() => onAdd(count)} disabled={stock === 0}>
        {stock === 0 ? "Sin stock" : "Agregar al carrito"}
      </button>
    </div>
  )
}

export default ItemCount
