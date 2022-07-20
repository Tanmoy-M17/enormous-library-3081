import React from 'react'
import "./Productcard.css"
const ProductCard = ({data}) => {
  return (
    <div className='acard'>
      <img className='img' src={data.img} alt="" />
       <h2>₹ {data.price}</h2>
       <p className='p'>{data.product_desc}</p>
    </div>

    
  )
}

export default ProductCard