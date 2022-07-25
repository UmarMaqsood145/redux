import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";

function Login() {
  const [showPassowrd, setShowPassowrd] = useState(false);
  return (
    <div id="login">
      <div className="form-box">
        <h1>GET STARTED</h1>
        <div className="mt-2">
          <div className="inputField">
            <input type="email" placeholder="Email address" />
          </div>
          <div className="inputField mt-3">
            <input
              type={showPassowrd ? "text" : "password"}
              placeholder="Password"
            />
            <i
              className={showPassowrd ? "fa fa-eye-slash" : "fa fa-eye"}
              id="password-icon"
              onClick={() => setShowPassowrd(!showPassowrd)}
            ></i>
          </div>
          <div className="mt-3">
            <Link to="#">Forgot your password?</Link>
          </div>
        </div>
        <button className="loginBtn">Log In</button>
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
          Don't have an account? <Link to="/signup"> Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
