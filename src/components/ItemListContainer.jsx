import React from 'react'
import '../styles.css'

const ItemListContainer = ({ greeting }) => {
  return (
    <div className='greeting'>
        <p>{greeting}</p>
    </div>
  )
}

export default ItemListContainer