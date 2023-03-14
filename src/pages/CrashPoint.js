import React, { useEffect, useState } from "react";

import axios from "axios";

import CrashTime from "../Crash/CrashTime";
// import Message from "../Crash/Message";
import CrashMessage from "../Crash/CrashMessage";
import Crashcount from "../Crash/Crashcount";
import { NavLink } from "react-router-dom";

export default function CrashPoint(crash) {
  const [crashGame, setcrashGame] = useState("");
  const [ResponseMsg, setResponseMsg] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get("https://crashgame.herokuapp.com/api/crashgame")
        .then((Response) => {
          setResponseMsg(Response.data[0].message);
          if (ResponseMsg === "crash") {
            setcrashGame(<CrashMessage crash={Response.data[0].crashPoint} />);
          } else if (ResponseMsg === "running") {
            setcrashGame(<Crashcount crash={Response.data[0].crashcount} />);
          } else if (ResponseMsg === "start") {
            if (Response.data[0].startTime === -0.01) {
              // setcrashGame(<Message />);
            } else {
              setcrashGame(<CrashTime crash={Response.data[0].startTime} />);
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }, 200);
    return () => clearInterval(interval);
  }, [ResponseMsg]);

  return (
    <div className="display-crash-xzy">
      <div className="crash-Display-left-crash-top">
        <div className="crash-Display-left-crash-top1">
          <NavLink to="/login">
            <h3>
              BankRoll <span>CUB</span>
            </h3>
            <h4>37429645</h4>
          </NavLink>
        </div>
        <div className="crash-Display-left-crash-top2-cover">
          <div className="crash-Display-left-crash-top2">
            <div className="crash-Display-left-crash-top2-circle"></div>
            <div className="crash-Display-left-crash-top2-list">
              <h3>464646465</h3>
              <h4>0.33x</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="main-crash">
        <div className="main-crash-count">{crashGame}</div>
      </div>
      <div className="crash-text">
        <h3>House Edge 1%</h3>
      </div>
    </div>
  );
}
