import "./styles/menubar/menubar.css";
import "./styles/menubar/tabletMenu.css";
import "./styles/menubar/mobileMenubar.css";
import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import casinoIcon from "../images/casinoIcon.svg";
import sportImg from "../images/sportIcon.svg";
import dice from "../images/Dice.svg";
import home from "../images/home.svg";
import arrow from "../images/arrow.svg";
import slot from "../images/slot.svg";
import live from "../images/live-casino.svg";
import promotion from "../images/promotion.svg";
import Baoriginal from "./Ba_original";
import spiner from "../images/spin.svg";
import spinerRotate from "../images/spin.99a0cd5f.png";
import pointer from "../images/pointer.webp";
import key from "../images/key.svg";
import nike from "../images/Nike.png";
import nike2 from "../images/NIKE22.png";
import homeHear from "../images/homeHear.png";
import dollar from "../images/dollar.svg";
import coinIcon from "../images/BTC-coin.svg";
import coinHolder from "../images/BTC-holder.svg";
import lotteryImg from "../images/lottery.svg";
import affiliateImg from "../images/affilliate.svg";
import VIPImg from "../images/VIP.svg";
import probablyImg from "../images/probably.svg";
import recent from "../images/recent.svg";
import favourite from "../images/favourite.svg";
import moon from "../images/moon.svg";
import setting from "../images/setting.svg";
import telegram from "../images/telegram.svg";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import twitter from "../images/twitter.svg";

export default function MenuBar({ isTablet }) {
  const [matches, setMatches] = useState(true);

  const handleResize = () => {
    if (window.innerWidth < 650) {
      console.log("mobile");
      setMatches(false);
    } else if (window.innerWidth < 900) {
      setMatches(false);
    } else {
      setMatches(true);
    }
  };

  useEffect(() => {
    if (isTablet) {
      setMatches(false);
    } else {
      setMatches(true);
    }
  }, [isTablet]);

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  const [showBa, setShowBa] = useState(false);
  const openBa = () => {
    setShowBa(true);
  };
  const closeBa = () => {
    setShowBa(false);
  };

  function switchHandle() {
    alert("Light mode is comming Soon");
  }

  return (
    <div className="MainBar">
      {matches && (
        <div className="MenuBar">
          <div className="MenuBar-container">
            <div className="MenuBar-header">
              <div className="casino">
                <div className="casino-img">
                  <img src={casinoIcon} alt="casino" />
                </div>
                <div className="casino-text">
                  <NavLink to="/">Casino</NavLink>
                </div>
              </div>
              <div className="sport">
                <div className="sport-img">
                  <img src={sportImg} alt="sport" />
                  <span>New</span>
                </div>
                <div className="sport-text">
                  <h3>Sport</h3>
                </div>
              </div>
            </div>

            <div className="MenuBar-contents">
              <NavLink to="/">
                <div className="nav-details">
                  <div className="game-icon">
                    <img src={home} alt="casino" />
                  </div>
                  <div className="game-text">
                    <h3>Home</h3>
                  </div>
                </div>
              </NavLink>

              <NavLink onMouseLeave={closeBa} onMouseEnter={openBa} to="/crash">
                <div
                  // onMouseLeave={closeBa}
                  // onMouseEnter={openBa}
                  className="nav-details-cover"
                >
                  <div className="nav-details">
                    <div className="ba-original">
                      <div className="game-icon">
                        <img src={dice} alt="casino" />
                      </div>
                      <div className="game-text">
                        <h3>BA Original</h3>
                      </div>
                    </div>
                  </div>
                  <div className="game-arrow">
                    <img src={arrow} alt="casino" />
                  </div>
                  {showBa && <Baoriginal />}
                </div>
              </NavLink>

              <NavLink to="/slots">
                <div className="nav-details">
                  <div className="game-icon">
                    <img src={slot} alt="casino" />
                  </div>
                  <div className="game-text">
                    <h3>Slots</h3>
                  </div>
                </div>
              </NavLink>

              <NavLink to="/live-casino">
                <div className="nav-details">
                  <div className="game-icon">
                    <img src={live} alt="casino" />
                  </div>
                  <div className="game-text">
                    <h3>Live Casino</h3>
                  </div>
                </div>
              </NavLink>

              <NavLink to="/promotion">
                <div className="nav-details">
                  <div className="game-icon">
                    <img src={promotion} alt="casino" />
                  </div>
                  <div className="promotion">
                    <h3>Promotions</h3>
                  </div>
                </div>
              </NavLink>

              <div className="middle-contents">
                <div className="middle">
                  <NavLink to="/TaskHup">
                    <div className="middle-belt">
                      <img src={spiner} alt="casino" />
                    </div>
                  </NavLink>

                  <NavLink to="/popup">
                    <div className="middle-belt">
                      <div className="pointer">
                        <img src={pointer} alt="casino" />
                      </div>
                      <div className="rotate">
                        <img src={spinerRotate} alt="casino" />
                      </div>
                    </div>
                  </NavLink>

                  <NavLink to="">
                    <div className="middle-belt">
                      <div className="key">
                        <img src={key} alt="casino" />
                      </div>
                      <div className="rotat">
                        <img src={nike} alt="casino" />
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>

              <div className="middle-contents">
                <div className="middle">
                  <NavLink to="">
                    <div className="middle-belt">
                      <div className="key">
                        <img src={key} alt="casino" />
                      </div>
                      <div className="rotat">
                        <img src={nike2} alt="casino" />
                      </div>
                    </div>
                  </NavLink>

                  <NavLink to="/ShitCode">
                    <div className="middle-belt">
                      <div className="dollar">
                        <img src={dollar} alt="casino" />
                      </div>
                    </div>
                  </NavLink>

                  <NavLink to="/UnlockPopup">
                    <div className="middle-belt">
                      <div className="holder">
                        <img src={coinIcon} alt="casino" />
                      </div>
                      <div className="coin">
                        <img src={coinHolder} alt="casino" />
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>

              <hr />

              <NavLink to="/lottery">
                <div className="nav-details">
                  <div className="game-icon">
                    <img src={lotteryImg} alt="casino" />
                  </div>
                  <div className="game-text">
                    <h3>Lottery</h3>
                  </div>
                </div>
              </NavLink>
              <NavLink to="/affiliate">
                <div className="nav-details">
                  <div className="game-icon">
                    <img src={affiliateImg} alt="casino" />
                  </div>
                  <div className="game-text">
                    <h3>Affiliate</h3>
                  </div>
                </div>
              </NavLink>

              <NavLink to="/vip">
                <div className="nav-details">
                  <div className="game-icon">
                    <img src={VIPImg} alt="casino" />
                  </div>
                  <div className="promotion">
                    <h3>VIP</h3>
                  </div>
                </div>
              </NavLink>

              <NavLink to="/login">
                <div className="nav-details">
                  <div className="game-icon">
                    <img src={probablyImg} alt="casino" />
                  </div>
                  <div className="game-text">
                    <h3>Probably Fair</h3>
                  </div>
                </div>
              </NavLink>

              <hr />

              <NavLink to="/login">
                <div className="nav-details">
                  <div className="game-icon">
                    <img src={favourite} alt="casino" />
                  </div>
                  <div className="game-text">
                    <h3>Favourite Games</h3>
                  </div>
                </div>
              </NavLink>

              <NavLink to="/login">
                <div className="nav-details">
                  <div className="game-icon">
                    <img src={recent} alt="casino" />
                  </div>
                  <div className="game-text">
                    <h3>My Recent Play</h3>
                  </div>
                </div>
              </NavLink>

              <hr />

              <div className="language-currency">
                <div className="container">
                  <div className="contents">
                    <p>Language & Currently</p>
                    <div className="input">
                      <input type="text" placeholder="English" />
                      <img src={arrow} alt="" />
                    </div>
                  </div>

                  <div className="switch-mode">
                    <div className="switch" onClick={switchHandle}>
                      <div className="switch-contents">
                        <div className="moon">
                          <img src={moon} alt="" />
                        </div>
                        <div className="setting">
                          <img src={setting} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="mode">
                      <div className="mode-contents">
                        <h3>Dark mode</h3>
                        <h4>Currently</h4>
                      </div>
                    </div>
                  </div>

                  <div className="language-currency">
                    <div className="container">
                      {/* <div className="contents">
                        <p>Language & Currently</p>
                        <div className="input">
                          <input type="text" placeholder="English" />
                          <img src={arrow} alt="" />
                        </div>
                      </div> */}

                      {/* <div className="switch-mode">
                        <div className="switch" onClick={switchHandle}>
                          <div className="switch-contents">
                            <div className="moon">
                              <img src={moon} alt="" />
                            </div>
                            <div className="setting">
                              <img src={setting} alt="" />
                            </div>
                          </div>
                        </div>
                        <div className="mode">
                          <div className="mode-contents">
                            <h3>Dark mode</h3>
                            <h4>Currently</h4>
                          </div>
                        </div>
                      </div> */}

                      <hr />
                      <div className="live_support_head">
                        <Link to="/Support">
                          <div className="live_support_piece">
                            <img src={homeHear} alt="" />
                          </div>
                          <div className="live_support_text">
                            <h3>Live Support</h3>
                          </div>
                        </Link>
                      </div>
                      <hr />
                      <div className="socials">
                        <p>Social Media</p>
                        <div className="social-contents">
                          <a href="https://www.telegram.com">
                            <img src={telegram} alt="" />
                          </a>
                          <a href="https://www.facebook.com">
                            <img src={facebook} alt="" />
                          </a>
                          <a href="https://www.instagram.com">
                            <img src={instagram} alt="" />
                          </a>
                          <a href="https://www.twitter.com">
                            <img src={twitter} alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {!matches && (
        <div className="MenuBar-tab">
          <div className="tablet-MenuBar">
            <div className="casino-img">
              <img src={casinoIcon} alt="casino" />
            </div>

            <NavLink to="/">
              <div className="nav-details">
                <div className="game-icon-tab">
                  <img src={home} alt="casino" />
                </div>
              </div>
            </NavLink>

            <div
              className="ba-original"
              onMouseLeave={closeBa}
              onMouseEnter={openBa}
            >
              <div className="game-icon">
                <img src={dice} alt="casino" />
              </div>
              <div className="game-arrow">
                <img src={arrow} alt="casino" />
              </div>
              {showBa && <Baoriginal />}
            </div>

            <NavLink to="/slots">
              <div className="nav-details">
                <div className="game-icon-tab">
                  <img src={slot} alt="casino" />
                </div>
              </div>
            </NavLink>

            <NavLink to="/live-casino">
              <div className="nav-details">
                <div className="game-icon-tab">
                  <img src={live} alt="casino" />
                </div>
              </div>
            </NavLink>

            <NavLink to="/promotion">
              <div className="nav-details">
                <div className="game-icon-tab">
                  <img src={promotion} alt="casino" />
                </div>
              </div>
            </NavLink>

            <NavLink to="/popup">
              <div className="middle-belt">
                <div className="pointer">
                  <img src={pointer} alt="casino" />
                </div>
                <div className="rotate">
                  <img src={spinerRotate} alt="casino" />
                </div>
              </div>
            </NavLink>
            <hr />

            <NavLink to="/lottery">
              <div className="nav-details">
                <div className="game-icon-tab">
                  <img src={lotteryImg} alt="casino" />
                </div>
              </div>
            </NavLink>
            <NavLink to="/affiliate">
              <div className="nav-details">
                <div className="game-icon-tab">
                  <img src={affiliateImg} alt="casino" />
                </div>
              </div>
            </NavLink>

            <NavLink to="/promotion">
              <div className="nav-details">
                <div className="game-icon-tab">
                  <img src={VIPImg} alt="casino" />
                </div>
              </div>
            </NavLink>

            <NavLink to="/probably-fair">
              <div className="nav-details">
                <div className="game-icon-tab">
                  <img src={probablyImg} alt="casino" />
                </div>
              </div>
            </NavLink>

            <hr />

            <NavLink to="/probably-fair">
              <div className="nav-details">
                <div className="game-icon-tab">
                  <img src={favourite} alt="casino" />
                </div>
              </div>
            </NavLink>

            <NavLink to="/probably-fair">
              <div className="nav-details">
                <div className="game-icon-tab">
                  <img src={recent} alt="casino" />
                </div>
              </div>
            </NavLink>

            <div className="language-currency">
              <div className="container">
                <div className="contents">
                  <div className="input">Eng</div>
                </div>

                <div className="switch-mode">
                  <div className="switch" onClick={switchHandle}>
                    <div className="switch-contents">
                      <div className="moon">
                        <img src={moon} alt="" />
                      </div>
                      <div className="setting">
                        <img src={setting} alt="" />
                      </div>
                    </div>
                  </div>
                </div>

                <hr />

                <div className="socials">
                  <p>Social Media</p>
                  <div className="social-contents">
                    <a href="https://www.telegram.com">
                      <img src={telegram} alt="" />
                    </a>
                    <a href="https://www.facebook.com">
                      <img src={facebook} alt="" />
                    </a>
                    <a href="https://www.instagram.com">
                      <img src={instagram} alt="" />
                    </a>
                    <a href="https://www.twitter.com">
                      <img src={twitter} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
