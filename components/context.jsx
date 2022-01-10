import { createContext } from "react";

const menuContext = createContext({
  menuOpen: false,
  setMenuOpen: (menu) => {}
});

export default menuContext;