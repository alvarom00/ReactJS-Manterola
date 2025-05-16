import { useParams } from "react-router-dom"
import React, { useState, useEffect, useContext } from "react"
import { getProductById } from "../mocks/async-mocks"
import Item from "./Item"
import { CartContext } from "../context/CartContext"
import "../styles.css"

const ItemDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const { addItem } = useContext(CartContext)

  const handleAddToCart = (quantity) => {
    if (product) {
      addItem(product, quantity)
      console.log(`Agregado ${quantity} ${product.name} al carrito`)

      setProduct(prev => ({
      ...prev,
      stock: prev.stock - quantity
    }))
    }
  }

  useEffect(() => {
    getProductById(id)
      .then((res) => {
        setProduct(res)
      })
      .catch((error) => {
        console.error("Error fetching product:", error)
      })
  }, [id])

  if (!product) {
    return <p className="greeting">Cargando...</p>
  }

  return (
    <div className="item-detail-container">
      <Item product={product} onAddToCart={handleAddToCart} />
    </div>
  )
}

export default ItemDetail