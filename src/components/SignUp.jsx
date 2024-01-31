import React, { useCallback, useMemo, useState } from "react";
import shop from "../assets/images/shop.avif";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

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

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    },
    [formData]
  );

  const userList = useMemo(() => {
    const storedUserList = JSON.parse(localStorage.getItem("userList"));
    return storedUserList || [];
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
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
      console.log("user", formData);
    },
    [formData, navigate, userList]
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
              Already resistered?{" "}
              <span onClick={() => navigate("/")}> Sign in</span>
            </h6>
            <input
              placeholder="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              className=""
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              className="border border-warning mt-2"
              type="number"
              name="number"
              placeholder="Contact number"
              value={formData.number}
              onChange={handleChange}
            />
            <input
              className="mt-2"
              name="password"
              type={show ? "text" : "password"}
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            {show ? (
              <i onClick={() => setShow(false)} class="eyes ri-eye-fill"></i>
            ) : (
              <i onClick={() => setShow(true)} class="eyes ri-eye-off-fill"></i>
            )}
            <p>
              Password must be at least 8 characters with 1 uppercase letter and
              1 special charactor
            </p>
            <button type="submit">Sign Up</button>
          </form>
          <h3>
            By signing up. you accept our <span>Terms of Use</span> and{" "}
            <span>Privacy Policy</span>
          </h3>

          <h4>or continue with</h4>
          <div className="signicon2">
            <i class="ri-google-fill "></i>
            <i class="ri-facebook-fill ms-5"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
