import React from "react";
import "./styles/login.css";
import { useState } from "react";
import signupLogo from "../images/signupLogo.png";
import NIKE1 from "../images/NIKE1 (34) 1.png";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";
import { NavLink } from "react-router-dom";

import { useLOgin } from "../hooks/useLogin";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useLOgin();

  const HandleSubmit = (e) => {
    e.preventDefault();
    const data = { email, password };
    login(data);
  };

  return (
    <div className="signUp-display">
       {error && <p className="error-message">{error}</p>}

      <div className="signUp-display-page">
        <div className="signUp-display-page-top">
          <img src={signupLogo} alt="signupLogo" width={"160px"} />
          <NavLink to="/"> &#10006;</NavLink>
        </div>
        <div className="signUp-display-page-text">
          <h1>BUILD THE BEST CRYPTO CASINO TOGETHER</h1>
          <img src={NIKE1} alt="sNIKE1" />
        </div>
        <div className="signUp-display-page-main">
          <form onSubmit={HandleSubmit}>
            <div className="signUp-first-flex">
              <label htmlFor="Email">Email Address</label>
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Email"
                required
              ></input>
            </div>
            <div className="signUp-second-flex">
              <label htmlFor="Password">Login Password</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Login Password"
                required
              ></input>
            </div>
            <div className="login-submit">
              <div className="login-login">
                { !isLoading ?   <button disabled={isLoading} type="submit">
                  Sign in
                </button> :  <button disabled={isLoading} type="submit"> <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div></button> }
         
              </div>
              <div className="login-signUp">
                <NavLink to="/signup/regist">
                  <h2>Sign up</h2>
                  <h3> &#10095;</h3>
                </NavLink>
              </div>
            </div>
          </form>
          <div className="login-socials">
            <div className="login-socials-inner">
              <div className="login-socials-top">
                <h1>Login Directly with</h1>
              </div>
              <div className="login-socials-icons">
                <div className="login-socials-icons-inner">
                  <img src={icon1} alt="sNIKE1" width={"20"} />
                  <img src={icon2} alt="sNIKE1" width={"20"} />
                  <img src={icon3} alt="sNIKE1" width={"20"} />
                  <img src={icon4} alt="sNIKE1" width={"20"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
