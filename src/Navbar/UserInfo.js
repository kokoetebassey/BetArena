import React from "react";
import "../Navbar/style/userinfo.css";
import rec from "../images/nwimages/recttdownload.svg";
import polyg from "../images/nwimages/polydown.svg";
import klose from "../images/nwimages/klosse.svg";
import brokn from "../images/nwimages/broknheart.svg";
import smallellipe from "../images/nwimages/smallellipe.svg";
import penn from "../images/nwimages/penn.svg";
import bigellipe from "../images/nwimages/bigellipe.svg";
import medal from "../images/medal.svg";
import meddal from "../images/nwimages/meddal.svg";
import arrow from "../images/arrow.svg";
import medal1 from "../images/nwimages/1medal.svg";
import medal2 from "../images/nwimages/2medal.svg";
import medal3 from "../images/nwimages/3medal.svg";
import medal4 from "../images/nwimages/4medal.svg";
import network from "../images/statistics.svg";
import toy from "../images/nwimages/toy.svg";
import oops from "../images/nwimages/oops.svg";
import { NavLink } from "react-router-dom";

const UserInfo = () => {
  return (
    <div className="main-background">
      <div className="userinform">
        <div className="userinformlayer">
          <div className="poptop">
            <div className="poptopleft">
              <h1>User Information</h1>
            </div>
            <div className="poptopright">
              <img src={rec} alt="" className="rec" />
              <img src={polyg} alt="" className="pol" />
              <NavLink to="/">
                <img src={klose} alt="" className="klose" />
              </NavLink>
            </div>
          </div>

          <div className="popheart">
            <div className="popheartleft">
              <img src={brokn} alt="" className="brokn" />
              <h1>0</h1>
            </div>
            <div className="popheartright">
              <img src={smallellipe} alt="" className="smellipe" />
              <img src={penn} alt="" className="penn" />
            </div>
          </div>

          <div className="bigellipe">
            <img src={bigellipe} alt="" className="bigelipe" />
          </div>

          <div className="lword">
            <h1>LOREM</h1>
          </div>

          <div className="medaldiv">
            <img src={medal} alt="medal" />
            <img src={medal} alt="medal" />
            <img src={medal} alt="medal" />
            <img src={medal} alt="medal" />
            <img src={medal} alt="medal" />
          </div>

          <div className="bigmedaldiv">
            <div className="big-medal-inner">
              <div className="big-medal-inner-left">
                <img src={meddal} alt="meddal" />
                <h1>Medals 0</h1>
              </div>
              <div className="big-medal-inner-right">
                <h1>Details</h1>
                <img src={arrow} alt="" />
              </div>
            </div>
            <div className="big-medal-second">
              <img src={medal1} alt="" />
              <img src={medal2} alt="" className="med" />
              <img src={medal3} alt="" className="med" />
              <img src={medal4} alt="" className="med" />
            </div>
          </div>

          <div className="bigmedaldivv">
            <div className="big-medal-inner">
              <div className="big-medal-inner-left">
                <img src={network} alt="network" />
                <h1>Statistics</h1>
              </div>
              <div className="big-medal-inner-right">
                <h1>Details</h1>
                <img src={arrow} alt="" />
              </div>
            </div>
            <div className="big-medal-secondd">
              <div className="bid-medal-div1">
                <h1>Total Wins</h1>
                <h2>0</h2>
              </div>
              <div className="bid-medal-div1">
                <h1>Total Bets</h1>
                <h2>0</h2>
              </div>
              <div className="bid-medal-div2">
                <h1>Total Wagered</h1>
                <h2>0 USD</h2>
              </div>
            </div>
          </div>

          <div className="big-middle-div">
            <h1>Top 3 Favorite Games</h1>
          </div>

          <div className="big-middle-div">
            <h1>Contest</h1>
            <div className="imagee">
              <img src={toy} alt="" className="toy" />
              <img src={oops} alt="" className="oops" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
