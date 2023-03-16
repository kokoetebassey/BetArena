import React from "react";
import { useState } from "react";
import "./styles/second_step.css";
import avater1 from "../images/chatimg.svg";
import male from "../images/male.png";
import female from "../images/female.png";
import guy from "../images/guy.png";
import signupLogo from "../images/signupLogo.png";
import NIKE1 from "../images/NIKE1 (34) 1.png";

import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";

import { NavLink, useNavigate } from "react-router-dom";

export default function SecondStep() {
  const [username, setUsername] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [ava, setAva] = useState("");
  const [roundImg, setroundImg] = useState("");
  const [roundImg2, setroundImg2] = useState("");
  const [roundImg3, setroundImg3] = useState("");
  const [roundImg4, setroundImg4] = useState("");

  let navigate = useNavigate();

  const SubmitImage = (e) => {
    setAva(e);
    if (e === 1) {
      setroundImg("roundImg");
      setroundImg2("");
      setroundImg4("");
      setroundImg3("");
    } else if (e === 2) {
      setroundImg("");
      setroundImg4("");
      setroundImg3("");
      setroundImg2("roundImg");
    } else if (e === 3) {
      setroundImg("");
      setroundImg2("");
      setroundImg3("roundImg");
      setroundImg4("");
    } else {
      setroundImg("");
      setroundImg2("");
      setroundImg3("");
      setroundImg4("roundImg");
    }
  };
  const { user } = useAuthContext();

  const HandleSubmit = (e) => {
    e.preventDefault();
    setIsloading(true);
    if (!ava) {
      alert("select a default image");
    } else {
      axios
        .post(
          "https://betarena.herokuapp.com/api/profile/second-step",
          {
            username: username,
            image: ava,
          },
          {
            headers: {
              Authorization: `Bearer ${user.Token}`,
            },
          }
        )
        .then((response) => {
          setIsloading(false);
          navigate("/signup/finale");
        })
        .catch((error) => {
          setIsloading(false);
        });
    }
  };

  return (
    <div className="signUp-display">
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
          <div className="second-step">
            <form onSubmit={HandleSubmit}>
              <div className="second-step-header">
                <h2>Glad to have you on board</h2>
                <hr />
              </div>
              <div className="second-step-container">
                <div className="second-step-contents">
                  <label htmlFor="Username">
                    Username (Can be modify later)
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    placeholder="Username"
                    required
                  ></input>
                </div>
                <div className="second-step-selectProfile">
                  <h3 className="default_avater">Default Avater</h3>
                  <div className="second-step-selectProfile-content">
                    <div className="images" onClick={() => SubmitImage(1)}>
                      <img className={roundImg} src={avater1} alt="" />
                    </div>
                    <div className="images" onClick={() => SubmitImage(2)}>
                      <img className={roundImg2} src={male} alt="" />
                    </div>
                    <div className="images" onClick={() => SubmitImage(3)}>
                      <img className={roundImg3} src={female} alt="" />
                    </div>
                    <div className="images" onClick={() => SubmitImage(4)}>
                      <img className={roundImg4} src={guy} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="loginBtn">
                {!isLoading ? (
                  <button type="submit">Continue</button>
                ) : (
                  <button disabled={isLoading}>Loading...</button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
