import React from 'react'
import axios from 'axios'

function Checkout({product}) {

  const handleCheckout = async()=>{
      try{
  const response =  await axios.post('http://localhost:3000/checkout-session', {product})
   window.location.href = response.data.url;
  }catch(error){
console.error("checkout: ",error)
  }
}

  return (
    <div className='product-section'>
      <div className='product-grid'>
   <div className='product-card'>
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.price}</p>
      <button onClick={handleCheckout}>Buy now</button>
   </div>
      </div>
    </div>
  )
}

export default Checkout