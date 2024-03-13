// ThemeProvider.js
import React, { useState } from "react";
import productData from "../DataJson/productData";
import ThemeContext from "./ThemeContext";
const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);

  const contextValue = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
