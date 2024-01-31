import React, { useCallback, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import shop from "../assets/images/shop.avif";
import { toast } from "react-toastify";

const Login = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    },
    [formData]
  );

  const handleLogin = useCallback(
    (e) => {
      e.preventDefault();
      const storedUserList = JSON.parse(localStorage.getItem("userList")) || [];
      const loginUser = storedUserList.find(
        (user) =>
          user.username === formData.username &&
          user.password === formData.password
      );
      if (!loginUser) {
        toast.error("User not found");
        return;
      }
      if (
        loginUser.username === formData.username &&
        loginUser.password === formData.password
      ) {
        toast.success("Login successful");
        localStorage.setItem("user", JSON.stringify(loginUser));
        navigate("/product");
      } else {
        toast.error("Invalid credentials");
      }
    },
    [formData.password, formData.username, navigate]
  );

  return (
    <div className="SignMain">
      <div className="signflex">
        <div className="signone">
          <img src={shop} alt="" />
        </div>
        <div className="signtwo">
          <form onSubmit={handleLogin}>
            <h5>
              Welcome to E-commerce. <br /> Sign in to shop much more
            </h5>
            <h6>
              No account?{" "}
              <span onClick={() => navigate("/signup")}> Sign up</span>
            </h6>
            <input
              className=""
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <div className="eyesshow">
              <input
                className="eyesshowinput mt-2"
                type={show ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {show ? (
                <i onClick={() => setShow(false)} class="eyes ri-eye-fill"></i>
              ) : (
                <i
                  onClick={() => setShow(true)}
                  class="eyes ri-eye-off-fill"
                ></i>
              )}
            </div>

            <p style={{ cursor: "pointer" }}>Forgot Password?</p>
            {/* <Link to="/product" className="text-dark">
              <button>Continue</button>
            </Link> */}
            <button type="submit">sign in</button>
          </form>

          <div className="signicon">
            <i class="ri-google-fill "></i>
            <i class="ri-facebook-fill ms-2"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
