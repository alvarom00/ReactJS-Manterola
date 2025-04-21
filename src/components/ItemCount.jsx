import { useState } from "react"

const ItemCount = ({ onAdd }) => {
  const [count, setCount] = useState(1)

  const increase = () => setCount(count + 1)
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
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount
