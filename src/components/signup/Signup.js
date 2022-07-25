import React, { useState } from "react";
import "./Signup.css";
import { Link, Navigate } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { signUpAction } from "../../Redux/Actions";
import { useNavigate } from "react-router-dom";

function Signup() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [showPassowrd, setShowPassowrd] = useState(false);
  const [showConfirmPass, setShowConfirmPassowrd] = useState(false);

  const [signUp, setSignUp] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  let Name, Value;
  const handleInputs = (e) => {
    Name = e.target.name;
    Value = e.target.value;
    setSignUp({ ...signUp, [Name]: Value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = { id: new Date().getTime().toString(), data: signUp };
    if (dispatch(signUpAction(obj))) {
      alert("Successfully Registered...");
      Navigate("/login");
    }
    setSignUp({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div id="signup">
      <div className="form-box">
        <h1>REGISTRATION</h1>
        <div className="mt-2">
          <div className="inputField">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={signUp.name}
              onChange={handleInputs}
            />
          </div>
          <div className="inputField mt-3">
            <input
              type="email"
              placeholder="Email address"
              name="email"
              value={signUp.email}
              onChange={handleInputs}
            />
          </div>
          <div className="inputField mt-3">
            <input
              type={showPassowrd ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={signUp.password}
              onChange={handleInputs}
            />
            <i
              className={showPassowrd ? "fa fa-eye-slash" : "fa fa-eye"}
              id="password-icon"
              onClick={() => setShowPassowrd(!showPassowrd)}
            ></i>
          </div>
          <div className="inputField mt-3">
            <input
              type={showConfirmPass ? "text" : "password"}
              placeholder="Confirm password"
              name="confirmPassword"
              value={signUp.confirmPassword}
              onChange={handleInputs}
            />
            <i
              className={showConfirmPass ? "fa fa-eye-slash" : "fa fa-eye"}
              id="password-icon"
              onClick={() => setShowConfirmPassowrd(!showConfirmPass)}
            ></i>
          </div>
          <div className="termsInput">
            <input type="checkbox" />
            <span className="mt-2">
              By creating an account, you agree to Bharmar's
              <Link to="#"> Terms and Conditions</Link>
            </span>
          </div>
        </div>
        <button className="signupBtn" onClick={handleSubmit}>
          Sign Up
        </button>
        <h5 className="mt-3">OR</h5>
        <div className="authBtn">
          <button className="auth">
            <FaFacebookF />
            <p>Continue with Facebook</p>
          </button>
          <button className="auth">
            <AiOutlineGoogle />
            <p>Continue with Google</p>
          </button>
        </div>
        <div className="mt-3 last">
          Don't have an account?
          <Link to="/login"> Log In</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
