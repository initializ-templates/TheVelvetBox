import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      const existingProductIndex = state.cartProducts.findIndex(item => item.productId === action.payload.productId);
      if (existingProductIndex !== -1) {
        const updatedProducts = state.cartProducts.map((product, index) =>
          index === existingProductIndex ? { ...product, quantity: product.quantity + 1 } : product
        );
        return {
          ...state,
          cartValue: state.cartValue + action.payload.sale_price,
          cartProducts: updatedProducts
        };
      } else {
        return {
          ...state,
          cartValue: state.cartValue + action.payload.sale_price,
          cartProducts: [...state.cartProducts, { ...action.payload, quantity: 1 }]
        };
      }
    case 'REMOVE_PRODUCT':
      const productIndex = state.cartProducts.findIndex(item => item.productId === action.payload.productId);
      if (productIndex !== -1) {
        const updatedProducts = state.cartProducts.map((product, index) =>
          index === productIndex ? { ...product, quantity: product.quantity - 1 } : product
        ).filter(product => product.quantity > 0);
        return {
          ...state,
          cartValue: state.cartValue - action.payload.sale_price,
          cartProducts: updatedProducts
        };
      }
      return state;
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cartValue: 0,
    cartProducts: []
  });

 const addProduct = (product) => {
    dispatch({ type: 'ADD_PRODUCT', payload: product });
  };

  const removeProduct = (product) => {
    dispatch({ type: 'REMOVE_PRODUCT', payload: product });
  };

  return (
    <CartContext.Provider value={{ ...state, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
