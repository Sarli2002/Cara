import React, { createContext, useState } from 'react';
import AllProducts from '../components/assets/AllProducts';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  AllProducts.forEach(product => {
    cart[product.id] = {};
  });
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId, size, quantity = 1) => {
    if (!size) return; // If no size selected, do nothing

    setCartItems((prev) => ({
      ...prev,
      [itemId]: {
        ...prev[itemId],
        [size]: (prev[itemId][size] || 0) + quantity,
      },
    }));
    console.log(cartItems);
  };

  const removeFromCart = (itemId, size) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: {
        ...prev[itemId],
        [size]: Math.max((prev[itemId][size] || 0) - 1, 0),
      },
    }));
  };
  

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      for (const size in cartItems[item]) {
        if (cartItems[item][size] > 0) {
          let itemInfo = AllProducts.find((product) => product.id === Number(item));
          totalAmount += cartItems[item][size] * itemInfo.price;
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      for (const size in cartItems[item]) {
        if (cartItems[item][size] > 0) {
          totalItem += cartItems[item][size];
        }
      }
    }
    return totalItem;
  };

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    AllProducts,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
