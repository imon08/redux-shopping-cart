import React from 'react'

const ProductCard = ({name, price, image}) => {
  return (
    
        <div>
            <p>{name}</p>
            <p>{price}</p>
            <p><img src={image} alt="" /></p>
        </div>
    
  )
}

export default ProductCard