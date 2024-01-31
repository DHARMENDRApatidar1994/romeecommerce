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
    <div className="pt-5">
      <h3 className="mt-5 pt-5 ms-3">Your cart ({cart?.length} items)</h3>
      <button
        onClick={() => {
          navigate("/product");
        }}
      >
        Back
      </button>
      <div>
        <div className="col-10 d-flex justify-content-evenly align-items-center ms-3 mt-5 bg-secondary p-3 text-light">
          <h6 className="col-4">Item</h6>
          <h6 className="col-2">Price</h6>
          <h6 className="col-2">Total</h6>
        </div>
        {cart?.map((item) => {
          return (
            <div className="d-flex justify-content-evenly align-items-center ms-3 shadow mt-2 col-10">
              <div className="col-4  d-flex align-items-center">
                <img className="col-2" src={item?.img} alt="" />
                <h3 className="col-6">{item.name}</h3>
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

        <div className="col-9 d-flex justify-content-end align-items-end flex-column mt-5 ">
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
