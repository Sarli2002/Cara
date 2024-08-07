import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../assets/cart_cross_icon.png';

const CartItems = () => {
  const { getTotalCartAmount, AllProducts, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Size</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {AllProducts.map((product) => {
        if (cartItems[product.id]) {
          return Object.entries(cartItems[product.id]).map(([size, quantity]) => {
            if (quantity > 0) {
              return (
                <div key={`${product.id}-${size}`}>
                  <div className="cartitems-format cartitems-format-main">
                    <img src={product.image} alt="" className='carticon-product-icon' />
                    <p>{product.name}</p>
                    <p>${product.price}</p>
                    <p>{size}</p>
                    <button className='cartitems-quantity'>{quantity}</button>
                    <p>${product.price * quantity}</p>
                    <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(product.id, size) }} alt="" />
                  </div>
                  <hr />
                </div>
              );
            }
            return null;
          });
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder='promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
