import "./styles/mobile-menubar.css";
import { NavLink } from "react-router-dom";
import dice from "../images/Dice.svg";
import home from "../images/home.svg";
import arrow from "../images/arrow.svg";
import slot from "../images/slot.svg";
import live from "../images/live-casino.svg";
import promotion from "../images/promotion.svg";
import Baoriginal from "./Ba_original";
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

export default function MobileMenubar(props) {
  const cancel = () => {
    props.cancel("close");
  };

  function switchHandle() {
    alert("Light mode is comming Soon");
  }

  return (
    <div className="MenuBar-mobile">
      <div className="MenuBar-mobile">
        <div className="MenuBar-mobile-header">
          <div className="casino">
            <NavLink to="/">Casino</NavLink>
          </div>
          <div className="sport">
            <h3>Sport</h3>
          </div>
          <div className="cancel" onClick={cancel}>
            <span>&#10006;</span>
          </div>
        </div>

        <div className="MenuBar-mobile-container">
          <div className="MenuBar-mobile-content">
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

            <div className="ba-original">
              <div className="game-icon">
                <img src={dice} alt="casino" />
              </div>
              <div className="game-text">
                <h3>BA Original</h3>
              </div>
              <div className="game-arrow">
                <img src={arrow} alt="casino" />
              </div>
            </div>
            <Baoriginal />

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

                <hr />
                <div className="contents">
                  <p>Language & Currently</p>
                  <div className="input">
                    <input type="text" placeholder="English" />
                    <img src={arrow} alt="" />
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
      </div>
    </div>
  );
}
