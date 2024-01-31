import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [cart, setCart] = useState([]);
  const [isUser, setIsUser] = useState({});
  const isUserLogin = useMemo(() => {
    return JSON.parse(localStorage.getItem("user"));
  }, []);

  const storedCart = useMemo(() => {
    return JSON.parse(localStorage.getItem("addToCartData")) || [];
  }, []);

  useEffect(() => {
    JSON.parse(localStorage.getItem("addToCartData"));
  }, []);

  useEffect(() => {
    setCart(storedCart);
  }, [storedCart]);

  useEffect(() => {
    setIsUser(isUserLogin);
  }, [isUserLogin]);

  const navigate = useNavigate();
  const handleLogout = useCallback(() => {
    localStorage.removeItem("user");
    navigate("/");
    toast.success("logout succesfull");
  }, [navigate]);

  console.log("cart", cart, storedCart);

  return (
    <div>
      <div className="nav d-flex justify-content-between align-items-center w-100">
        <div className="left d-flex   ms-5 mt-2">
          <h3 className="text-light">E-COMMERCE</h3>
        </div>
        <div
          className={
            isMobile
              ? "nav-links-mobile"
              : "right d-flex justify-content-evenly col-3"
          }
          onClick={() => setIsMobile(false)}
        >
          <Link to="" className="text-decoration-none ">
            <h6 className="fs-2">{isUser?.name}</h6>
          </Link>
          <Link to="/cart" className="text-decoration-none">
            <h6>
              <i class="ri-shopping-cart-2-fill fs-2"></i>
              <span className="itemcount bg-danger px-2 rounded-circle">
                {cart?.length !== 0 && cart?.length}
              </span>
            </h6>
          </Link>
          <Link>
            <h6 className="fs-4">
              <button
                onClick={() => handleLogout()}
                className="text-decoration-none bg-danger rounded text-light "
              >
                LOGOUT
              </button>
            </h6>
          </Link>
        </div>
        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? (
            <i class="ri-close-line"></i>
          ) : (
            <i class="ri-menu-line"></i>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
