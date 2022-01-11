import { createContext } from "react";

const menuContext = createContext({
  menuOpen: false,
  setMenuOpen: (menu) => {}
});

const cartContext = createContext({
    cartItems: [],
    setCartItems: (item) => {}
  });

const loginContext = createContext({
    loginState: false,
    setLoginState: (state) => {}
})

export {menuContext, cartContext, loginContext};
