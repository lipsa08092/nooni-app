
import { useState, createContext, useContext } from "react";

const Cartcontext = createContext();

export const useCart = () => useContext(Cartcontext);

export function CartProvider({ children }) {
  const [cartCount, setCartCount] = useState(0);
  // setCartCount(cartCount + 1);

  return (
    <Cartcontext.Provider value={{ cartCount, setCartCount }}>
      {children}
    </Cartcontext.Provider>
  );
}
