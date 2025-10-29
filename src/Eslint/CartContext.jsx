
import { useState, createContext, useContext } from "react";

const Cartcontext = createContext();

export const useCart = () => useContext(Cartcontext);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setCartCount((prevCount) => prevCount + 1);
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    setCartCount((prevCount) => prevCount - 1);
  };

  return (
    <Cartcontext.Provider
      value={{ cartItems, cartCount, addToCart, removeFromCart }}
    >
      {children}
    </Cartcontext.Provider>
  );
}
