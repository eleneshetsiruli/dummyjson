import { useState } from "react";
import { CartContext } from "../context/CartContext";

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  const addToCart = (product) => {
    const isProductInCart = cartItems.some((item) => item.id === product.id);

    if (!isProductInCart) {
      const newCartItems = [...cartItems, product];
      setCartItems(newCartItems);

      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }
  };

  const removeCart = (id) => {
    const deleteItems = cartItems.filter((el) => el.id !== id);
    setCartItems(deleteItems);
    localStorage.setItem("cartItems", JSON.stringify(deleteItems));
  };

  return (
    <CartContext.Provider value={{ addToCart, cartItems, removeCart }}>
      {children}
    </CartContext.Provider>
  );
};
