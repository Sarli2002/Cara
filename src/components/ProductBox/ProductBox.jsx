import React from 'react'
import "./ProductBox.css"
import { Link } from 'react-router-dom'
const ProductBox = (props) => {
  return (
    <div className='productBox '> 
       <Link to={`/Cara/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
            <div className="des">
                <span>{props.companyName}</span>
                <h5>{props.name}</h5>
                <h4>{props.price}</h4>
            </div>  
              
    </div>
  )
}

export default ProductBox
