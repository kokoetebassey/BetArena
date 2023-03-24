import React from "react";
import "./styles/signup.css";
import { useState } from "react";
import signupLogo from "../images/signupLogo.png";
import NIKE1 from "../images/NIKE1 (34) 1.png";
import gift from "../images/gift.png";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";
import { NavLink } from "react-router-dom";

import { useSignup } from "../hooks/useSignup";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [promo, setPromo] = useState("");
  const [ref, setRef] = useState(false);

  const { signup, isLoading, error } = useSignup();

  function HandleSubmit(e) {
    e.preventDefault();
    const data = { email, password, promo };
    signup(data);
  }

  const ShowReferral = () => {
    setRef(true);
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
          <img src={NIKE1} alt="sNIKE1" width={"400px"} />
        </div>
        <div className="signUp-display-page-main">
          <form onSubmit={HandleSubmit}>
            <div className="signUp-first-flex">
              <label htmlFor="Email">Email Address</label>
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                value={email}
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
            <div className="signUp-third-flex">
              <label onClick={ShowReferral} htmlFor="Promo">
                Referral/Promo Code(Optional)
              </label>
              {ref && (
                <input
                  type="text"
                  onChange={(e) => setPromo(e.target.value)}
                  placeholder="Referral/Promo Code"
                ></input>
              )}
            </div>

            <div className="signUp-check">
              <input type="checkbox" required />
              <label>
                I agree with user agreement, and confirm that I am at least 18
                years old!
              </label>
            </div>
            <div className="signUp-claim">
              <img src={gift} alt="gift" width={"20px"} />
              <h1>CLAIM UPTO 5BTC</h1>
            </div>
            <div className="signUp-submit">
              <NavLink to="/login">
                <div className="signUp-login">
                  <h3> &#10094;</h3>
                  <h2>Sign in</h2>
                </div>
              </NavLink>
              <div className="signUp-signUp">
                {!isLoading ? (
                  <button type="submit">Sign up</button>
                ) : (
                  <button disabled={isLoading} >
                    Loading...
                  </button>
                )}
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
