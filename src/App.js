import React, { useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

const App = () => {
  const isUserLogin = useMemo(() => {
    return JSON.parse(localStorage.getItem("user"));
  }, []);
  console.log("kjbkj", isUserLogin);
  return (
    <div>
      <Navbar />
      <Routes>
        {isUserLogin?.email ? (
          <>
            <Route path="/product" element={<Product />} />
            <Route path="/Album/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </>
        )}
      </Routes>
    </div>
  );
};

export default App;
