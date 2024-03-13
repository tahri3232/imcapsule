// ThemeProvider.js
import React, { useState } from "react";
import StoreContext from "./StoreContext";
import productData from "../DataJson/productData";
const ContextProvider = ({ children }) => {
  const [store, setStore] = 
    useState({ 
    allItems: productData,
    displayProduct: productData,
    favItems: [],
    isProductPage: {},
    theme: true    
});


  const contextValue = {
    store,
    setStore,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default ContextProvider;
