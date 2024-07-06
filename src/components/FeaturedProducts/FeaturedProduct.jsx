import React from 'react'
import FeaturedProduct from "../assets/FeaturedProductData"
import ProductBox from '../ProductBox/ProductBox'
import "./FeaturedProducts.css"
function FeaturedProducts() {
  return (
    <div className='featuredProducts section-p1'>
    <h2> Featured Products</h2>
    <p> Summer Collection New Modern Design</p>
    <div className="pro-container">
      {FeaturedProduct.map((product,i)=>{
          return <ProductBox key={i} id={product.id} name={product.name} companyName={product.companyName} image={product.image} price={product.price} />
      })}
    </div>
  </div>
  )
}

export default FeaturedProducts
