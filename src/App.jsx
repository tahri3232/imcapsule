import { useState, useContext } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Dashboard from "./Pages/Dashboard";
import ProductListPage from "./Pages/ProductListPage";
import ProductCategoryCard from "./Components/ProductCategoryCard";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./Pages/ProductPage";
import StoreContext from "./Store/StoreContext";
import ThemeContext from "./Store/ThemeContext";
function App() {
  const [mode, setMode] = useState(true);
  const { store, setStore } = useContext(StoreContext);
  const {theme, setTheme} = useContext(ThemeContext)
  function toggleMode() {
    setMode((prev) => !prev);
  }

  return (
    <>
      <div
        className={`${
          theme
            ? "bg-white"
            : "bg-gray-800 text-white border border-gray-100"
        }container-fluid min-h-screen`}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/:cat" element={<ProductPage />}></Route>
        </Routes>
        {/* <ProductList /> */}
        {/* <Footer mode={mode} toggleMode={toggleMode} /> */}
      </div>
    </>
  );
}

export default App;
