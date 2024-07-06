import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';



const Product = () => {
  const {AllProducts}= useContext(ShopContext);
  const {productId} = useParams();
  const product = AllProducts.find((e)=> e.id === Number(productId));
  return (
    <div>
     
      <ProductDisplay product={product}/>
    
     
    </div>
  )
}

export default Product
