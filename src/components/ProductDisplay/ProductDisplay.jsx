import React, { useState, useContext } from 'react';
import './ProductDisplay.css';
import { ShopContext } from '../../Context/ShopContext';

function ProductDisplay(props) {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  return (
    <div className="product-display section-p1">
      <div className="single-pro-image">
        <img src={product.image} width="100%" id="Main-image" alt={product.name} />
      </div>
      <div className="single-pro-details">
        <h4>{product.name}</h4>
        <h2>${product.price}</h2>
        <select className="option" value={size} onChange={handleSizeChange}>
          <option value="">Select Size</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
          <option value="Small">Small</option>
          <option value="Large">Large</option>
        </select>
        <div id="quantity">
          Quantity:{" "}
          <select value={quantity} onChange={handleQuantityChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
        <button 
          onClick={() => addToCart(product.id, size, quantity)} 
          className="normal"
          disabled={!size} // Disable button if no size is selected
        >
          Add To Cart
        </button>
        <h4> Product Details</h4>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          nihil animi ipsam, ad deleniti dolorem eius id reprehenderit voluptate
          ab incidunt doloribus repudiandae nulla at perspiciatis cumque? Ab
          laboriosam corporis molestiae, minus ea sed esse nemo ratione debitis,
          deleniti aliquid dolore optio quaerat nobis atque nulla explicabo
          sequi odio voluptatum.
        </span>
      </div>
    </div>
  );
}

export default ProductDisplay;
