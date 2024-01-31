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

  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
      setValidationErrors({ ...validationErrors, [name]: "" }); // Clear validation error on change
    },
    [formData, validationErrors]
  );

  const validateEmail = (email) => {
    // Basic email validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.trim() !== "";
  };

  const handleLogin = useCallback(
    (e) => {
      e.preventDefault();

      let isValid = true;
      const errors = {};

      if (!validateEmail(formData.email)) {
        errors.email = "Invalid email address";
        isValid = false;
      }

      if (!validatePassword(formData.password)) {
        errors.password = "Password is required";
        isValid = false;
      }

      if (!isValid) {
        setValidationErrors(errors);
        return;
      }

      const storedUserList = JSON.parse(localStorage.getItem("userList")) || [];
      const loginUser = storedUserList.find(
        (user) =>
          user.email === formData.email && user.password === formData.password
      );

      if (!loginUser) {
        toast.error("User not found");
        return;
      }

      localStorage.setItem("user", JSON.stringify(loginUser));
      navigate("/product");
      toast.success("Login successful");
    },
    [formData.email, formData.password, navigate]
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
              required
              value={formData.email}
              onChange={handleChange}
            />
            {validationErrors.email && (
              <p
                style={{
                  color: "red",
                }}
                className="error-message"
              >
                {validationErrors.email}
              </p>
            )}

            <div className="eyesshow">
              <input
                className="eyesshowinput mt-2"
                type={show ? "text" : "password"}
                placeholder="Password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
              />

              {show ? (
                <i
                  onClick={() => setShow(false)}
                  className="eyes ri-eye-fill"
                ></i>
              ) : (
                <i
                  onClick={() => setShow(true)}
                  className="eyes ri-eye-off-fill"
                ></i>
              )}
            </div>
            {validationErrors.password && (
              <p
                style={{
                  color: "red",
                }}
                className="error-message"
              >
                {validationErrors.password}
              </p>
            )}
            <p style={{ cursor: "pointer" }}>Forgot Password?</p>
            <button type="submit">sign in</button>
          </form>

          <div className="signicon">
            <i className="ri-google-fill "></i>
            <i className="ri-facebook-fill ms-2"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
