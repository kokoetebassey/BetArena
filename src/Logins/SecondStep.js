import React from "react";
import { useState } from "react";
import "./styles/second_step.css";
import avater1 from "../images/chatimg.svg";
import male from "../images/male.png";
import female from "../images/female.png";
import guy from "../images/guy.png";

export default function SecondStep({second}) {
  const [username, setUsername] = useState("");
  const [ava, setAva] = useState("");
  const [roundImg, setroundImg] = useState("");
  const [roundImg2, setroundImg2] = useState("");
  const [roundImg3, setroundImg3] = useState("");
  const [roundImg4, setroundImg4] = useState("");

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

  const HandleSubmit = (e) => {
    e.preventDefault();
    const data = { username, ava };
    if(!ava){
      console.log("select a default image")
    }else{
      second(data)
    }
  };

  return (
    <div className="second-step">
      <form onSubmit={HandleSubmit}>
        <div className="second-step-header">
          <h2>Glad to have you on board</h2>
          <hr />
        </div>
        <div className="second-step-container">
          <div className="second-step-contents">
            <label htmlFor="Username">Username (Can be modify later)</label>
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
          <button>Continue</button>
        </div>
      </form>
    </div>
  );
}
