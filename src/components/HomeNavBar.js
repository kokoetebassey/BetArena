import React from "react";
import "./styles/homeNavbar/home1.css";
import "./styles/navbar/navbar.css";
import "./styles/navbar/navbar1.css";
import "./styles/navbar/navbar2.css";
import "./styles/navbar/navbar3.css";
import "./styles/navbar/openNavbar.css";
import "./styles/navbar/navbarResponsive.css";
import play from "../images/play.png";
import table3 from "../images/table 3.png";
import userImage from "../images/chatimg.svg";
import message from "../images/message.svg";
import wallet from "../images/wallet bet.svg";
import not from "../images/not bet.svg";

import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import menu from "../images/menu.svg";
import logo from "../images/betarena.png";
import search from "../images/search.svg";
// import MobileMenubar from "./Mobile-Menubar";
import Chat from "./Chat";

export default function HomeNavBar({ setScreen, setView }) {
  const [searchEL, setSearch] = useState("search");
  const [NavBarPage, setNavBarPage] = useState("Navbar-container");
  const [count, setCount] = useState(true);
  const [menucount, setMenuCount] = useState(true);
  const [PublicMsg, setPublicMsg] = useState(false);

  function searchHandle() {
    if (count) {
      setSearch("search-line");
      setCount(false);
    } else {
      setSearch("search");
      setCount(true);
    }
  }

  function menuHandler() {
    if (menucount) {
      setScreen();
      setMenuCount(false);
      if (PublicMsg) {
        setView("left_view");
        setNavBarPage("Navbar-container3");
      } else {
        setView("full_view");
        setNavBarPage("openNavbar-container");
      }
    } else {
      setScreen();
      setMenuCount(true);
      if (PublicMsg) {
        setView("default");
        setNavBarPage("Navbar-containerEL");
      } else {
        setView("default");
        setNavBarPage("Navbar-container");
      }
    }
  }

  const handleResize = () => {
    if (window.innerWidth < 650) {
      console.log("mobile");
      setPublicMsg(false);
    } else if (window.innerWidth < 900) {
      setPublicMsg(false);
    } else {
      setPublicMsg(true);
      setMenuCount("Navbar-container");
      setNavBarPage("Navbar-container");
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  // const [showMobileMenu, setShowMobileMenu] = useState(false);

  // const MobileHandle = () => {
  //   setShowMobileMenu(true);
  // };

  const Cancel = (e) => {
    setPublicMsg(false);
    if (menucount) {
      setView("default");
      setNavBarPage("Navbar-container");
    } else {
      setView("full_view");
      setNavBarPage("openNavbar-container");
    }
  };

  // const close = (data) => {
  //   setShowMobileMenu(false);
  // };

  const Message = () => {
    setPublicMsg(true);
    if (menucount) {
      setView("middle_view");
      setNavBarPage("Navbar-containerEL");
    } else {
      setView("left_view");
      setNavBarPage("Navbar-container3");
    }
  };

  return (
    <>
      <div className="Navbar">
        <div className="normal">
          <div className={NavBarPage}>
            <div className="Navbar-content">
              <div className="menu" onClick={menuHandler}>
                <img src={menu} alt="" />
              </div>
              <div className="logo">
                <NavLink to="/">
                  <img src={logo} alt="" />
                </NavLink>
              </div>
              <div id="search" className={searchEL} onClick={searchHandle}>
                <img src={search} alt="search" />
                <input
                  type="text"
                  placeholder="Game name | Provider | Category Tag"
                />
              </div>

              <div className="Home-Items">
                <div className="Home-Items-inner-first">
                  <div className="Home-Items-inner-first1">
                    <div className="Home-Items-inner-first1-coin">
                      <img src={table3} alt="table3" width={"14px"} />
                      <h3>Ethereum</h3>
                      <h4>&#10095;</h4>
                    </div>
                    <h4>0.000000</h4>
                  </div>
                  <div className="Home-Items-inner-first2">
                    <img src={wallet} alt="wallet" width={"12px"} />
                    <h3>Wallet</h3>
                  </div>
                </div>
              </div>

              <div className="Home-Items2">
                <div className="Home-Items2-1">
                  <img src={userImage} alt="userImage" width={"25px"} />
                  <h3>&#9781;</h3>
                </div>
              </div>
              <div className="Home-Items3">
                <img src={message} alt="message" width={"20px"} />
                <img src={not} alt="not" width={"20px"} />
              </div>

              <div className="play" onClick={Message}>
                <p>28</p>
                <img src={play} alt="" />
              </div>

              <div className="coin-pop">
                <div className="coin-pop-inner">
                  <div className="coin-pop-inner-top">
                    <div className="coin-pop-inner-top-flex">
                      <img
                        className="dropSearch"
                        src={search}
                        alt="search"
                        width={"20px"}
                      />
                      <input type="text" />
                    </div>
                  </div>

                  <div className="coin-pop-inner-body">
                    <div className="coin-pop-inner-body-inner">
                      <div className="coin-pop-inner-body-inner-flex-left">
                        <div className="left1">
                          <img src={table3} alt="table3" width={"14px"} />
                        </div>
                        <div className="left2">
                          <h3>ETH</h3>
                        </div>
                        <div className="left3">
                          <h4>0.0000000</h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="coin-pop-inner-footer">
                    <button>Manage</button>
                    <div className="coin-pop-inner-footer2">
                      <h3>BTC price <span className="price"></span></h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {PublicMsg && <Chat cancel={Cancel} />}
          </div>
        </div>
      </div>
    </>
  );
}
