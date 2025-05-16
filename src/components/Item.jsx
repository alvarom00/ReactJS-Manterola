import ItemCount from "./ItemCount"
import '../styles.css'
import hllImage from '../images/hll.png'
import dayzImage from '../images/dayz.jpg'
import veinImage from '../images/vein.png'
import scumImage from '../images/scum.jpg'

const Item = ({ product, onAddToCart }) => {
  const imageMap = {
    "hll.png": hllImage,
    "dayz.jpg": dayzImage,
    "vein.png": veinImage,
    "scum.jpg": scumImage,
  }

  return (
    <div className="item-detail">
      <h2>{product.name}</h2>

      {product.image && imageMap[product.image] && (
        <img
          src={imageMap[product.image]}
          alt={product.name}
          className="productImage"
        />
      )}

      <p>{product.description}</p>
      <p><strong>Precio:</strong> ${product.price.toFixed(2)}</p>
      <p><strong>Stock disponible:</strong> {product.stock}</p>

      <ItemCount stock={product.stock} onAdd={onAddToCart} />
    </div>
  )
}

export default Item
