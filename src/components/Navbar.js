import React from "react";
import "./styles/navbar/navbar.css";
import "./styles/navbar/navbar1.css";
import "./styles/navbar/navbar2.css";
import "./styles/navbar/navbar3.css";
import "./styles/navbar/openNavbar.css";
import "./styles/navbar/navbarResponsive.css";
import mobileIcon from "../images/mobile-icon.svg";
import mobileMenu from "../images/mobile-menu.svg";
import icon1 from "../images/home icon 1.png";
import icon3 from "../images/home icon 3.png";
import icon4 from "../images/home icon 4.png";
import play from "../images/play.png";
import spin1 from "../images/spin rotaete.png";
import spin2 from "../images/spin rotaete pointer.png";
import key from "../images/key svg.svg";
import bitcoinIcon from "../images/bitcoin icon svg.svg";
import bitcoinLogo from "../images/bitcoin logo cover.svg";
import shitcode from "../images/shitcode icon.svg";
import Chat from "./Chat";

import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import menu from "../images/menu.svg";
import logo from "../images/betarena.png";
import search from "../images/search.svg";
import MobileMenubar from "./Mobile-Menubar";

export default function Navbar({ setScreen, setView }) {
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
      setPublicMsg(false);
    } else if (window.innerWidth < 900) {
      setPublicMsg(false);
    } else {
      setPublicMsg(false);
      setMenuCount("Navbar-container");
      setNavBarPage("Navbar-container");
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const MobileHandle = () => {
    setShowMobileMenu(true);
  };

  const close = (data) => {
    setShowMobileMenu(false);
  };

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
      {showMobileMenu && <MobileMenubar cancel={close} />}

      <div className="mobile-display-navbar">
        <div className="mobile-head-container">
          <div className="mobile-first-nav">
            <div className="mobile-first-logo">
              <NavLink to="/">
                <img src={mobileIcon} alt="mobileMenu" />
              </NavLink>
            </div>
            <div className="mobile-first-menu" onClick={MobileHandle}>
              <img src={mobileMenu} alt="mobileMenu" />
            </div>
          </div>

          <div className="mobile-extreme-nav">
            <div className="mobile-login">
              <NavLink to="/login">
                <h3>Sign in</h3>
              </NavLink>
            </div>
            <div className="mobile-signup">
              <NavLink to="/signup">
                <button>Sign up</button>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="mobile-item-display">
          <div className="mobile-item-display-flex">
            <div className="mobile-item-display-task">
              <img src={icon1} alt="icon1" />
            </div>

            <div className="mobile-item-display-rotate">
              <img className="mobile-rotate" src={spin1} alt="spin1" />
              <img
                className="mobile-item-display-pointer"
                src={spin2}
                alt="spin2"
              />
            </div>

            <div className="mobile-item-display-second">
              <div className="mobile-item-display-key">
                <img src={icon3} alt="icon3" />
                <img
                  className="mobile-item-display-lock"
                  src={key}
                  alt="mobileMenu"
                />
              </div>
            </div>

            <div className="mobile-item-display-third">
              <div className="mobile-item-display-third-key">
                <img src={icon4} alt="icon4" />
                <img
                  className="mobile-item-display-third-lock"
                  src={key}
                  alt="mobileMenu"
                />
              </div>
            </div>

            <div className="mobile-item-display-fourth">
              <img src={shitcode} alt="bitcoinIcon" />
            </div>

            <div className="mobile-item-display-fifth">
              <div className="mobile-item-display-bitcoin">
                <img src={bitcoinIcon} alt="bitcoinIcon" />
                <img
                  className="mobile-item-display-bitcoin-logo-cover"
                  src={bitcoinLogo}
                  alt="bitcoinLogo"
                />
              </div>
            </div>
          </div>

          <div onClick={Message} className="mobile-item-display-play">
            <div className="mobile-item-display-playing">
              <img src={play} alt="play" />
            </div>
            <div className="mobile-item-display-play-num">
              <p>1</p>
            </div>
          </div>
          {PublicMsg && <Chat cancel={Cancel} />}
        </div>
      </div>

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
              <div className={searchEL} onClick={searchHandle}>
                <img src={search} alt="" />
                <input
                  type="text"
                  placeholder="Game name | Provider | Category Tag"
                />
              </div>
              <div className="login">
                <NavLink to="login">Login</NavLink>
              </div>
              <div className="signup">
                <NavLink to="signup/regist">Signup</NavLink>
              </div>
              <div className="play" onClick={Message}>
                <p>1</p>
                <img src={play} alt="" />
              </div>
            </div>
            {PublicMsg && <Chat cancel={Cancel} />}
          </div>
        </div>
      </div>
    </>
  );
}
