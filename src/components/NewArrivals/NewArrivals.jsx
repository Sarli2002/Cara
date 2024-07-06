import React from 'react'
import NewArrivalsProducts from "../assets/NewArrivalsData"
import ProductBox from '../ProductBox/ProductBox'
import "./NewArrivals.css"
function NewArrivals() {
  return (
    <div className='new-arrivals section-p1'>
    <h2>New Arrivals</h2>
    <p> Summer Collection New Modern Design</p>
    <div className="pro-container">
      {NewArrivalsProducts.map((product,i)=>{
          return <ProductBox key={i} id={product.id} name={product.name} companyName={product.companyName} image={product.image} price={product.price} />
      })}
    </div>
  </div>
  )
}

export default NewArrivals
