import React, { useMemo, useState } from "react";
import "./Product.css";
import { purple } from "./ProductData";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [item, setItem] = useState(purple);
  const [products, setProducts] = useState([]);

  const addToCartList = useMemo(() => {
    const storedCartList = JSON.parse(localStorage.getItem("addToCartData"));
    return storedCartList || [];
  }, []);

  const navigate = useNavigate();
  const addToCart = (product) => {
    // Check if the product is already in the cart
    const isProductInCart = products.find((item) => item.id === product.id);
    console.log("productkjhkhkj", product);
    if (isProductInCart) {
      // Product is already in the cart, show a toast message
      alert("Product is already in the cart!");
    } else {
      // Product is not in the cart, add it to the cart
      const updatedUserList = [...addToCartList, isProductInCart];
      console.log("updatedUserList", updatedUserList);
      localStorage.setItem("addToCartData", JSON.stringify(products));
      setProducts([...products, { ...product, quantity: 1 }]);
    }
  };
  console.log("product", products);
  return (
    <div>
      <div className="purple">
        <h1>RECENT RELEASE</h1>
        <div className="imagecontainer">
          {item.map((item, index) => (
            <div className="detail" key={item}>
              <div
                aria-hidden
                className="images"
                onClick={() => {
                  navigate(`/Album/${index}`);
                }}
              >
                <img src={`${item.img}`} alt="" />
                <div className="detailpageicon">
                  <i aria-hidden className="ri-book-open-line"></i>
                  <p className="viewmore">view more</p>
                </div>
              </div>
              <div className="desc">
                <h4>{item.name}</h4>
                <div className="d-flex justify-content-evenly">
                  <div className="d-flex">
                    <h6 className="me-2 fw-bold">$:{item.price}</h6>
                    <strike>{item.price}</strike>
                  </div>
                  <h6>OFF:{item.price}%</h6>
                </div>
                <button className="buynow">Buy Now</button>
                <br />
                <button onClick={() => addToCart(item)} className="buynow2 ">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
