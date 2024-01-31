import React, { useCallback, useMemo, useState } from "react";
import shop from "../assets/images/shop.avif";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const [confirmPass, setConfirmPass] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
  });

  const [validationErrors, setValidationErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const validateNumber = (number) => {
    return /^\d{10}$/.test(number);
  };

  const validateName = (name) => {
    return name.trim() !== "";
  };

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
      setValidationErrors({ ...validationErrors, [name]: "" }); // Clear validation error on change
    },
    [formData, validationErrors]
  );

  const userList = useMemo(() => {
    const storedUserList = JSON.parse(localStorage.getItem("userList"));
    return storedUserList || [];
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      let isValid = true;
      const errors = {};

      if (!validateName(formData.name)) {
        errors.name = "Name is required";
        isValid = false;
      }

      if (!validateEmail(formData.email)) {
        errors.email = "Invalid email address";
        isValid = false;
      }

      if (!validateNumber(formData.number)) {
        errors.number = "Invalid phone number";
        isValid = false;
      }

      if (!validatePassword(formData.password)) {
        errors.password = "Password must be at least 8 characters";
        isValid = false;
      }

      if (!isValid) {
        setValidationErrors(errors);
        return;
      }

      localStorage.setItem("user", JSON.stringify(formData));
      const updatedUserList = [...userList, formData];
      localStorage.setItem("userList", JSON.stringify(updatedUserList));
      setFormData({
        name: "",
        email: "",
        password: "",
        number: "",
      });
      navigate("/product");
      toast.success("Login successful");
      console.log("user", formData);
    },
    [
      formData,
      navigate,
      userList,
      validateEmail,
      validatePassword,
      validateNumber,
      validateName,
    ]
  );

  return (
    <div className="sinmain2">
      <div className="signflex2">
        <div className="signone2">
          <img src={shop} alt="" />
        </div>
        <div className="signtwo2">
          <form onSubmit={handleSubmit}>
            <h5>
              Welcome to E-commerce. <br /> Sign up to enjoy shopping
            </h5>
            <h6>
              Already registered?{" "}
              <span onClick={() => navigate("/")}> Sign in</span>
            </h6>
            <input
              placeholder="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {validationErrors.name && (
              <p
                style={{
                  color: "red",
                }}
                className="error-message"
              >
                {validationErrors.name}
              </p>
            )}

            <input
              className=""
              type="email"
              placeholder="Email"
              name="email"
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

            <input
              className="border border-warning mt-2"
              type="number"
              name="number"
              placeholder="Contact number"
              value={formData.number}
              onChange={handleChange}
            />
            {validationErrors.number && (
              <p
                style={{
                  color: "red",
                }}
                className="error-message"
              >
                {validationErrors.number}
              </p>
            )}

            <input
              className="mt-2"
              name="password"
              type={show ? "text" : "password"}
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
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
            <p>
              Password must be at least 8 characters with 1 uppercase letter and
              1 special character
            </p>
            <button type="submit">Sign Up</button>
          </form>
          <h3>
            By signing up, you accept our <span>Terms of Use</span> and{" "}
            <span>Privacy Policy</span>
          </h3>

          <h4>or continue with</h4>
          <div className="signicon2">
            <i className="ri-google-fill "></i>
            <i className="ri-facebook-fill ms-5"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
