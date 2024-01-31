import React, { useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Product from "./components/Product";

const App = () => {
  const isUserLogin = useMemo(() => {
    return JSON.parse(localStorage.getItem("user"));
  }, []);
  console.log("kjbkj", isUserLogin);
  return (
    <div>
      <Routes>
        {isUserLogin?.email ? (
          <Route path="/product" element={<Product />} />
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
