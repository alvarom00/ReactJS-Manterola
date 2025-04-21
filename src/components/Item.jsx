import ItemCount from "./ItemCount"
import '../styles.css'
import hllImage from '../images/hll.png'
import dayzImage from '../images/dayz.jpg'
import veinImage from '../images/vein.png'
import scumImage from '../images/scum.jpg'

const Item = ({ product, onAddToCart }) => {
 const imageMap = {
    "1": hllImage,
    "2": dayzImage,
    "3": veinImage,
    "4": scumImage,
  }

  return (
    <div className="item-detail">
      <h2>{product.name}</h2>
      {product.id && imageMap[product.id] && (
        <img
          src={imageMap[product.id]}
          alt={product.name}
          className="productImage"
        />
      )}
      <p>{product.description}</p>
      <ItemCount onAdd={onAddToCart} />
    </div>
  )
}

export default Item