import React, { useEffect, useState } from "react";

import axios from "axios";

import CrashTime from "./CrashTime";
import CrashMessage from "./CrashMessage";
import Crashcount from "./Crashcount";
import { NavLink } from "react-router-dom";

export default function CrashPoint(crash) {
  const [crashGame, setcrashGame] = useState("");
  const [ResponseMsg, setResponseMsg] = useState("");
  const [loading, setLoading] = useState(false)

  function functionLoad(){
    if(loading === true && crashGame === false){
      setLoading(false)
      setcrashGame(true)
    }else{
      setLoading(true)
      setcrashGame(false)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get("https://crashgame.herokuapp.com/api/crashgame")
        .then((Response) => {
          // setLoading(false)
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
          // setLoading(false)
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
            <h4>3742964</h4>
          </NavLink>
        </div>
        <div className="crash-Display-left-crash-top2-cover">
          <div className="crash-Display-left-crash-top2">
            <div className="crash-Display-left-crash-top2-circle"></div>
            <div className="crash-Display-left-crash-top2-list">
              <h3>46464646</h3>
              <h4>0.33x</h4>
            </div>
          </div>
          <div className="crash-Display-left-crash-top2">
            <div className="crash-Display-left-crash-top2-circle"></div>
            <div className="crash-Display-left-crash-top2-list">
              <h3>46464646</h3>
              <h4>0.33x</h4>
            </div>
          </div>
          <div className="crash-Display-left-crash-top2">
            <div className="crash-Display-left-crash-top2-circle"></div>
            <div className="crash-Display-left-crash-top2-list">
              <h3>46464646</h3>
              <h4>0.33x</h4>
            </div>
          </div>
          <div className="crash-Display-left-crash-top2">
            <div className="crash-Display-left-crash-top2-circle"></div>
            <div className="crash-Display-left-crash-top2-list">
              <h3>46464646</h3>
              <h4>0.33x</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="main-crash">
        <div className="main-crash-graph">
          <h3>0</h3>
          <h3>2</h3>
          <h3>4</h3>
          <h3>6</h3>
          <h3>8</h3>
        </div>
        <div className="main-crash-graph-side">
          <h3>8</h3>
          <h3>6</h3>
          <h3>4</h3>
          <h3>2</h3>
        </div>

          <div className="main-crash-count" onLoad={functionLoad}>
           {!loading && crashGame ? crashGame   : <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div> }
            
         </div>
      </div>
      <div className="crash-text">
        <h3>House Edge 1%</h3>
      </div>
    </div>
  );
}
