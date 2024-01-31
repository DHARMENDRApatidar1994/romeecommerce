import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [add, setAdd] = useState(1);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("addToCartData")) || [];
    setCart(storedCart);
  }, []);

  // Update localStorage whenever the cart changes
  useEffect(() => {
    localStorage.setItem("addToCartData", JSON.stringify(cart));
  }, [cart]);

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart
      .map((item) => item.price * item.quantity)
      .reduce((total, itemTotal) => total + itemTotal, 0);
  };

  return (
    <div
      className="pt-5 pb-5"
      style={{
        background: "linear-gradient(to right, #12394a, #044561)",
        height: "auto",
      }}
    >
      <button
        className="mt-5 ms-3 rounded-circle "
        onClick={() => {
          navigate("/product");
        }}
      >
        <i class="ri-arrow-left-circle-fill fs-2 px-1"></i>
      </button>
      <h3 className="mt-3 ms-3 text-light">Your cart ({cart?.length} items)</h3>

      <div>
        <div className="col-lg-10 col-12 d-flex justify-content-evenly align-items-center ms-lg-3 ms-0 mt-5 bg-secondary p-3 text-light">
          <h6 className="col-4">Item</h6>
          <h6 className="col-2">Price</h6>
          <h6 className="col-2">Total</h6>
        </div>
        {cart?.map((item) => {
          return (
            <div className="d-flex justify-content-evenly align-items-center ms-3 shadow mt-2 col-lg-10 col-12 text-light">
              <div className="col-4  d-flex align-items-center">
                <img
                  className="col-2 d-lg-flex d-none"
                  src={item?.img}
                  alt=""
                />
                <h3 className="col-lg-6 col-12 fs-5 ms-lg-3 ms-0">
                  {item.name}
                </h3>
              </div>
              <h4 className="col-2">${item?.price}</h4>
              <h4 className="col-2">
                $ {125 * add}{" "}
                <i
                  onClick={() => removeFromCart(item?.id)}
                  className="ri-delete-bin-line text-danger"
                ></i>
              </h4>
            </div>
          );
        })}

        <div className="col-9 d-flex justify-content-end align-items-end flex-column mt-5 text-light ">
          <div className="d-flex justify-content-between col-4 ">
            <h6 className="col-4">Subtotal</h6>
            <h6 className="col-2">:</h6>
            <p className="col-2 me-3">${calculateTotal().toFixed(2)}</p>
          </div>

          <div className="col-4">
            <button className="bg-dark text-light col-12 rounded p-2 ">
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
