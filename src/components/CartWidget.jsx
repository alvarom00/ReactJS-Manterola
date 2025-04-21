import { ShoppingCartOutlined } from '@ant-design/icons'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext)

  const totalItems = getTotalItems()

  return (
    <div>
      <ShoppingCartOutlined />
      <span>{totalItems}</span>
    </div>
  )
}

export default CartWidget