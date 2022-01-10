import { createContext } from "react";

const menuContext = createContext({
  menuOpen: false,
  setMenuOpen: (menu) => {}
});

const cartContext = createContext({
    cartItems: [],
    setCartItems: (item) => {}
  });

export {menuContext, cartContext};
