import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isUser, setIsUser] = useState({});
  const isUserLogin = useMemo(() => {
    return JSON.parse(localStorage.getItem("user"));
  }, []);

  useEffect(() => {
    setIsUser(isUserLogin);
  }, [isUserLogin]);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const handleLogout = useCallback(() => {
    localStorage.removeItem("user");
    navigate("/");
    toast.success("logout succesfull");
  }, [navigate]);

  const storedCart = useMemo(() => {
    return JSON.parse(localStorage.getItem("addToCartData")) || [];
  }, []);

  useEffect(() => {
    setCart(storedCart);
  }, [storedCart]);

  console.log("cart", cart);

  return (
    <div>
      <div className='nav d-flex justify-content-between align-items-center w-100'>
        <div className='left d-flex w-25  ms-5 mt-2'>
          {/* <img src="http://demos.codexcoder.com/anthem/wp-content/uploads/2017/05/Anthem-Logo.png" alt="" /> */}
          <h3 className='text-light'>E-COMMERCE</h3>

        </div>
        <div
          className={
            isMobile
              ? "nav-links-mobile"
              : "right d-flex justify-content-evenly col-3"
          }
          onClick={() => setIsMobile(false)}
        >
          <Link to="" className="text-decoration-none">
            <h6>{isUser?.name}</h6>
          </Link>
          <Link to="/cart" className="text-decoration-none">
            <h6>
              <i class="ri-shopping-cart-2-fill"></i>
              {cart?.length !== 0 && cart?.length}
            </h6>
          </Link>
          <button
            onClick={() => handleLogout()}
            className="text-decoration-none"
          >
            <h6>LOGOUT</h6>
          </button>
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
