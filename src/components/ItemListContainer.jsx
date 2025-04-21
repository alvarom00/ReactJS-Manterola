import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts, getProductsByCategory } from '../mocks/async-mocks'
import '../styles.css'
import { Link } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
  const { id } = useParams() // categoría
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchData = id ? getProductsByCategory : getProducts

    fetchData(id).then(res => {
      setItems(res)
    })
  }, [id])

  return (
    <div className='greeting'>
      <p>{greeting}</p>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Link to={`/item/${item.id}`}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ItemListContainer
