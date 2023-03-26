import React from "react";
import "./styles/homeNavbar/home1.css";
import "./styles/navbar/navbar.css";
import "./styles/navbar/navbar1.css";
import "./styles/navbar/navbar2.css";
import "./styles/navbar/navbar3.css";
import "./styles/navbar/openNavbar.css";
import "./styles/navbar/navbarResponsive.css";
import play from "../images/play.png";
import message from "../images/message.svg";
import wallet from "../images/wallet bet.svg";
import not from "../images/not bet.svg";

import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import menu from "../images/menu.svg";
import logo from "../images/betarena.png";
import search from "../images/search.svg";
import Chat from "./Chat";
import Notification from "./Notification";
import WalletCoins from "../Navbar/WalletCoins";
import NavProfile from "../Navbar/NavProfile.js";

import mobileIcon from "../images/mobile-icon.svg";
import mobileMenu from "../images/mobile-menu.svg";
import MobileMenubar from "./Mobile-Menubar";
import icon1 from "../images/home icon 1.png";
// import icon3 from "../images/home icon 3.png";
// import icon4 from "../images/home icon 4.png";
import spin1 from "../images/spin rotaete.png";
import spin2 from "../images/spin rotaete pointer.png";
// import key from "../images/key svg.svg";
import bitcoinIcon from "../images/bitcoin icon svg.svg";
import bitcoinLogo from "../images/bitcoin logo cover.svg";
import shitcode from "../images/shitcode icon.svg";

import { useAuthContext } from "../hooks/useAuthContext";

// =============== Import HTTPS request ==================
import axios from "axios";
// import ChatRoom from "../Pop up/ChatRoom";

export default function HomeNavBar({ setScreen, setView }) {
  const [searchEL, setSearch] = useState("search");
  const [NavBarPage, setNavBarPage] = useState("Navbar-container");
  const [count, setCount] = useState(true);
  const [menucount, setMenuCount] = useState(true);
  const [PublicMsg, setPublicMsg] = useState(false);
  const [PublicNot, setPublicNot] = useState(false);
  const [profile, setProfile] = useState("");
  const [DBwallet, setDBwallet] = useState("");
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const MobileHandle = () => {
    setShowMobileMenu(true);
  };

  const close = (data) => {
    setShowMobileMenu(false);
  };

  // const [userInfo, setUserInfo] = useState(false)
  // const [chatRoom, setChatRoom] = useState(false)

  // function functionUserInfo(){
  //   if (userInfo) {
  //     setUserInfo(false);
  //   } else {
  //     setUserInfo(true);
  //   }
  // };

  // function functionChatRoom(){
  //   if(chatRoom){
  //     setChatRoom(true)
  //   }else{
  //     setChatRoom(true)
  //   }
  // }

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
    setPublicNot(false);
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
    // setPublicNot(true);
    if (menucount) {
      setView("middle_view");
      setNavBarPage("Navbar-containerEL");
    } else {
      setView("left_view");
      setNavBarPage("Navbar-container3");
    }
  };
  const Notify = () => {
    setPublicNot(true);
    if (menucount) {
      setView("middle_view");
      setNavBarPage("Navbar-containerEL");
    } else {
      setView("left_view");
      setNavBarPage("Navbar-container3");
    }
  };

  const [coinDropdown, setCoinDropdown] = useState(false);

  const HandleCoinDropDown = () => {
    if (coinDropdown) {
      setCoinDropdown(false);
    } else {
      setCoinDropdown(true);
    }
  };

  const [navProfile, setNavProfile] = useState(false);

  const HandleNavProfile = () => {
    if (navProfile) {
      setNavProfile(false);
    } else {
      setNavProfile(true);
    }
  };

  // Coins on the wallet

  const [navCoins, setNavCoins] = useState({
    id: 1,
    coin_name: "BTC",
    coin_bal: "0.00000",
    coin_image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
  });

  // ============= fetch wallet ================
  useEffect(() => {
    axios
      .get("https://betarena.herokuapp.com/api/profile/wallet", {
        headers: {
          Authorization: `Bearer ${user.Token}`,
        },
      })
      .then((response) => {
        setDBwallet(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user]);

  // =================Fetch default coins ==========================
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://betarena.herokuapp.com/api/profile/default-coin", {
          headers: {
            Authorization: `Bearer ${user.Token}`,
          },
        })
        .then((response) => {
          setNavCoins(response.data[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, [user]);

  const updateCoin = (e) => {
    setNavCoins(e);
  };

  //  ==================== Fetch profile doc ===================
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://betarena.herokuapp.com/api/profile", {
          headers: {
            Authorization: `Bearer ${user.Token}`,
          },
        })
        .then((response) => {
          setProfile(response.data[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, [user]);

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

          <div id="mobile-extreme-nav">
            <div className="home-wallet-container">
              <div className="home-wallet-content" onClick={HandleCoinDropDown}>
                <div className="home-wallet-details">
                  <div className="image">
                    <img src={navCoins.coin_image} alt="table3" />
                  </div>
                  <div className="coin">
                    <h3>{navCoins.coin_name}</h3>
                  </div>
                </div>
                <div className="balance">
                  <h4>{navCoins.coin_bal}</h4>
                </div>
              </div>

              <div
                onClick={() =>
                  navigate("/wallet/deposit", {
                    state: {
                      navCoins,
                    },
                  })
                }
                className="Home-wallet-btn"
              >
                <img src={wallet} alt="wallet" width={"12px"} />
                <h3>Wallet</h3>
              </div>
            </div>

            {coinDropdown && (
              <WalletCoins
                DBwallet={DBwallet}
                Clear={HandleCoinDropDown}
                updateCoin={updateCoin}
              />
            )}

            <div className="Home-Items2">
              <div className="Home-Items2-1">
                <NavLink to="/user/information">
                  <img src={profile.img} alt="userImage" width={"30px"} />
                </NavLink>

                <div onClick={HandleNavProfile} className="navPro">
                  <h3>&#9781;</h3>
                  {navProfile && (
                    <NavProfile profile={profile} Clear={HandleCoinDropDown} />
                  )}
                </div>
              </div>
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

          <div className="mobile-item-display-play">
            <div className="Home-Items3">
              <NavLink to="" className="Home-Items3">
                <img src={message} alt="message" width={"20px"} />
              </NavLink>
            </div>

            <img
              className="Notify-mobile"
              onClick={Notify}
              src={not}
              alt="not"
              width={"20px"}
            />

            <div className="mobile-item-display-playing">
              <img src={play} alt="play" />
            </div>
            <div onClick={Message} className="mobile-item-display-play-num">
              <p>1</p>
            </div>
          </div>
        </div>
        {PublicMsg && <Chat cancel={Cancel} />}
        {PublicNot && <Notification cancel={Cancel} />}
      </div>

      <div className="Navbar">
        <div className="normal">
          <div className={NavBarPage}>
            <div className="Navbar-content">
              <div className="menu" onClick={menuHandler}>
                <img src={menu} alt="" />
              </div>
              <div className="logo" onClick={() => navigate("/")}>
                <img src={logo} alt="" />
              </div>
              <div id="search" className={searchEL} onClick={searchHandle}>
                <img src={search} alt="search" />
                <input
                  type="text"
                  placeholder="Game name | Provider | Category Tag"
                />
              </div>
              <div className="home-wallet">
                <div className="home-wallet-container">
                  <div
                    className="home-wallet-content"
                    onClick={HandleCoinDropDown}
                  >
                    <div className="home-wallet-details">
                      <div className="image">
                        <img src={navCoins.coin_image} alt="table3" />
                      </div>
                      <div className="coin">
                        <h3>{navCoins.coin_name}</h3>
                      </div>
                    </div>
                    <div className="balance">
                      <h4>{navCoins.coin_bal}</h4>
                    </div>
                  </div>

                  <div
                    onClick={() =>
                      navigate("/wallet/deposit", {
                        state: {
                          navCoins,
                        },
                      })
                    }
                    className="Home-wallet-btn"
                  >
                    <img src={wallet} alt="wallet" width={"12px"} />
                    <h3>Wallet</h3>
                  </div>
                </div>
              </div>

              {coinDropdown && (
                <WalletCoins
                  DBwallet={DBwallet}
                  Clear={HandleCoinDropDown}
                  updateCoin={updateCoin}
                />
              )}

              <div className="Home-Items2">
                <div className="Home-Items2-1">
                  <NavLink to="/user/information">
                    <img src={profile.img} alt="userImage" width={"25px"} />
                  </NavLink>
                  {/* <div onClick={functionUserInfo}>
                  <img src={profile.img} alt="userImage" width={"25px"} />
                  {userInfo && (
                    <UserInfo />
                  )}
                  </div> */}

                  <div onClick={HandleNavProfile} className="navPro">
                    <h3>&#9781;</h3>
                    {navProfile && (
                      <NavProfile
                        profile={profile}
                        Clear={HandleCoinDropDown}
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className="Home-Items3">
                <NavLink to="/chat" className="Home-Items3">
                  <img src={message} alt="message" width={"20px"} />
                </NavLink>

                {/* <div onClick={functionChatRoom} className="Home-Items3">
                <img src={message} alt="message" width={"20px"} />
                {chatRoom && (
                  <ChatRoom />
                )}
                </div> */}
                <img onClick={Notify} src={not} alt="not" width={"20px"} />
              </div>

              <div className="play" onClick={Message}>
                <p>1</p>
                <img src={play} alt="" />
              </div>
            </div>
            {PublicMsg && <Chat cancel={Cancel} />}
            {PublicNot && <Notification cancel={Cancel} />}
          </div>
        </div>
      </div>
    </>
  );
}
