import { useState, createContext, useContext, useEffect } from "react";

const Cartcontext = createContext();
export const useCart = () => useContext(Cartcontext);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    try {
      const storedCart = JSON.parse(localStorage.getItem("cartItems"));
      if (Array.isArray(storedCart)) {
        setCartItems(storedCart);
        setCartCount(storedCart.reduce((acc, item) => acc + (item.quantity || 1), 0));
      } else {
        setCartItems([]);
        setCartCount(0);
      }
    } catch (error) {
      console.error("Error parsing cartItems from localStorage:", error);
      localStorage.removeItem("cartItems");
      setCartItems([]);
      setCartCount(0);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    const count = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);
    setCartCount(count);
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      let updatedCart;

      if (existingItem) {
        updatedCart = prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        updatedCart = [...prevItems, { ...product, quantity: 1 }];
      }

      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => {
      const updatedCart = prevItems.filter((item) => item.id !== id);
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      return updatedCart;
    });
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
