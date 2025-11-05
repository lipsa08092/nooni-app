import { useState, createContext, useContext, useEffect } from "react";

const Cartcontext = createContext();
export const useCart = () => useContext(Cartcontext);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCart);
    setCartCount(storedCart.length);
  }, []);


  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  
  const addToCart = (product) => {
    setCartItems((prevItems) => {
    const updatedCart = [...prevItems, product];
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      return updatedCart;
    });
    setCartCount((prevCount) => prevCount + 1);
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => {
      const updatedCart = prevItems.filter((item) => item.id !== id);
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      return updatedCart;
    });
    setCartCount((prevCount) => prevCount - 1);
  };
  
  const updateCartItem = (id, updatedData) => {
    setCartItems((prevItems) => {
      const updatedCart = prevItems.map((item) =>
        item.id === id ? { ...item, ...updatedData } : item
      );
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCartItems([]);
    setCartCount(0);
    localStorage.removeItem("cartItems");
  };

  return (
    <Cartcontext.Provider
      value={{
        cartItems,
        cartCount,
        addToCart,
        removeFromCart,
        updateCartItem,
        clearCart,
      }}
    >
      {children}
    </Cartcontext.Provider>
  );
}
