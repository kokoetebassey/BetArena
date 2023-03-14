import BA1 from "../images/BA-1.png";
import BA2 from "../images/BA-2.png";
import BA3 from "../images/BA-3.png";
import BA4 from "../images/BA-4.png";
import BA5 from "../images/BA-5.png";
import BA6 from "../images/BA-6.png";
import BA7 from "../images/BA-7.png";
import BA8 from "../images/BA-8.png";
import BA9 from "../images/BA-9.png";
import BA10 from "../images/BA-10.png";
import BA11 from "../images/BA-11.png";
import BA12 from "../images/BA-12.png";
import BA13 from "../images/BA-13.png";
import BA14 from "../images/BA-14.png";
import BA15 from "../images/BA-15.png";
import BA16 from "../images/BA-16.png";
import BA17 from "../images/BA-17.png";
import BA18 from "../images/BA-18.png";
import BA19 from "../images/BA-19.png";
import BA20 from "../images/BA-20.png";
import BA21 from "../images/BA-21.png";
import BA22 from "../images/BA-22.png";
import BA23 from "../images/BA-23.png";
import BA24 from "../images/BA-24.png";
import BA25 from "../images/BA-25.png";
import BA26 from "../images/BA-26.png";

import play from "../images/play-icon.png";
import mark from "../images/best question mark.png";

import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function HomeSlots() {
  const [showHoverImg, setShowHoverImg] = useState(false);
  const [showHoverImg2, setShowHoverImg2] = useState(false);
  const [showHoverImg3, setShowHoverImg3] = useState(false);

  function showHover() {
    setShowHoverImg(true);
  }
  function hideHover() {
    setShowHoverImg(false);
  }
  function showHover2() {
    setShowHoverImg2(true);
  }
  function hideHover2() {
    setShowHoverImg2(false);
  }
  function showHover3() {
    setShowHoverImg3(true);
  }
  function hideHover3() {
    setShowHoverImg3(false);
  }
  return (
    <div>
      <div className="ba-display">
        <div className="ba-display-text-top">
          <h4>
            BA <span> IN-HOUSE</span> <br />
            GAMES
          </h4>
        </div>

        <div className="ba-display-main">
          <div className="ba-display-main-display">
            <div className="ba-display-main-flex">
              <NavLink to="/Crash">
                <div className="ba-display-main-image">
                  <div className="overlay">
                    <div className="image_overlay">
                      <img src={play} alt="play" width={"100%"} />
                      <h2>House Edge 1%</h2>
                    </div>
                    <img src={BA1} alt="BA1" width={"100%"} />
                  </div>
                </div>
                <div className="ba-display-main-image-text">
                  <h4>Crash</h4>
                  <div className="ba-display-main-image-text-slide">
                    <div className="ba-display-main-image-text-slide1">
                      Michael <span>won : $20</span>
                    </div>
                    <div className="ba-display-main-image-text-slide2">
                      Michael <span>won : $20</span>
                    </div>
                    <div className="ba-display-main-image-text-slide3">
                      Michael <span>won : $20</span>
                    </div>
                  </div>
                  <div>
                    <img
                      onMouseEnter={showHover}
                      onMouseLeave={hideHover}
                      src={mark}
                      alt="mark"
                      width={"15px"}
                    />
                  </div>
                </div>
              </NavLink>
              {showHoverImg && (
                <div className="ba-display-main-image-text-pop">
                  <div className="ba-display-main-image-text-pop-inner">
                    <div className="ba-display-main-image-text-pop-flex1">
                      <h1>RTP:</h1>
                      <h2>99%</h2>
                    </div>
                    <div className="ba-display-main-image-text-pop-flex2">
                      <h1>Recently Biggest Win:</h1>
                      <h2>20000.000X</h2>
                    </div>
                    <div className="ba-display-main-image-text-pop-flex3">
                      <div className="ba-display-main-image-text-pop-flex3-1">
                        <h3>Multiple</h3>
                      </div>
                      <div className="ba-display-main-image-text-pop-flex3-2">
                        <h3>Our Best Games</h3>
                      </div>
                      <div className="ba-display-main-image-text-pop-flex3-3">
                        <h3>BC Originals</h3>
                      </div>
                      <div className="ba-display-main-image-text-pop-flex3-4">
                        <h3>NG Original</h3>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="ba-display-main-flex">
              <NavLink to="/Baccarat">
                <div className="ba-display-main-image">
                  <div className="overlay2">
                    <div className="image_overlay2">
                      <img src={play} alt="play" width={"100%"} />
                      <h2>House Edge 1%</h2>
                    </div>
                    <img src={BA2} alt="BA2" width={"100%"} />
                  </div>
                </div>
                <div className="ba-display-main-image-text">
                  <h4>Baccarat</h4>
                  <img
                    onMouseEnter={showHover2}
                    onMouseLeave={hideHover2}
                    src={mark}
                    alt="mark"
                    width={"15px"}
                  />
                </div>
              </NavLink>
              {showHoverImg2 && (
                <div className="ba-display-main-image-text-pop2">
                  <div className="ba-display-main-image-text-pop-inner">
                    <div className="ba-display-main-image-text-pop-flex1">
                      <h1>RTP:</h1>
                      <h2>99%</h2>
                    </div>
                    <div className="ba-display-main-image-text-pop-flex2">
                      <h1>Recently Biggest Win:</h1>
                      <h2>6000.000X</h2>
                    </div>
                    <div className="ba-display-main-image-text-pop-flex3">
                      <div className="ba-display-main-image-text-pop-flex3-1">
                        <h3>Multiple</h3>
                      </div>
                      <div className="ba-display-main-image-text-pop-flex3-2">
                        <h3>Our Best Games</h3>
                      </div>
                      <div className="ba-display-main-image-text-pop-flex3-3">
                        <h3>BC Originals</h3>
                      </div>
                      <div className="ba-display-main-image-text-pop-flex3-4">
                        <h3>NG Original</h3>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="ba-display-main-flex">
              <NavLink to="/Tower Legend">
                <div className="ba-display-main-image">
                  <div className="overlay2">
                    <div className="image_overlay2">
                      <img src={play} alt="play" width={"100%"} />
                      <h2>House Edge 1%</h2>
                    </div>
                    <img src={BA3} alt="BA3" width={"100%"} />
                  </div>
                </div>
                <div className="ba-display-main-image-text">
                  <h4>Tower Legend</h4>
                  <img
                    onMouseEnter={showHover3}
                    onMouseLeave={hideHover3}
                    src={mark}
                    alt="mark"
                    width={"15px"}
                  />
                </div>
              </NavLink>

              {showHoverImg3 && (
                <div className="ba-display-main-image-text-pop2">
                  <div className="ba-display-main-image-text-pop-inner">
                    <div className="ba-display-main-image-text-pop-flex1">
                      <h1>RTP:</h1>
                      <h2>99%</h2>
                    </div>
                    <div className="ba-display-main-image-text-pop-flex2">
                      <h1>Recently Biggest Win:</h1>
                      <h2>6000.000X</h2>
                    </div>
                    <div className="ba-display-main-image-text-pop-flex3">
                      <div className="ba-display-main-image-text-pop-flex3-1">
                        <h3>Multiple</h3>
                      </div>
                      <div className="ba-display-main-image-text-pop-flex3-2">
                        <h3>Our Best Games</h3>
                      </div>
                      <div className="ba-display-main-image-text-pop-flex3-3">
                        <h3>BC Originals</h3>
                      </div>
                      <div className="ba-display-main-image-text-pop-flex3-4">
                        <h3>NG Original</h3>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* <BCD /> */}
            {/* <ShitCode /> */}
            {/* <TaskHub /> */}

            <div className="ba-display-main-flex">
              <NavLink to="/Classic Dice">
                <div className="ba-display-main-image">
                  <div className="overlay2">
                    <div className="image_overlay2">
                      <img src={play} alt="play" width={"100%"} />
                      <h2>House Edge 1%</h2>
                    </div>
                    <img src={BA4} alt="BA4" width={"100%"} />
                  </div>
                </div>
                <div className="ba-display-main-image-text">
                  <h4>Classic Dice</h4>
                  <img src={mark} alt="mark" width={"15px"} />
                </div>
              </NavLink>
            </div>
          </div>

          <div className="ba-display-main-display2">
            <div className="ba-display-main-flex">
              <NavLink to="/Crash Trenball">
                <div className="ba-display-main-image">
                  <div className="overlay2">
                    <div className="image_overlay2">
                      <img src={play} alt="play" width={"100%"} />
                      <h2>House Edge 1%</h2>
                    </div>
                    <img src={BA5} alt="BA5" width={"100%"} />
                  </div>
                </div>
                <div className="ba-display-main-image-text">
                  <h4>Crash Trenball</h4>
                  <img src={mark} alt="mark" width={"15px"} />
                </div>
              </NavLink>
            </div>

            <div className="ba-display-main-flex">
              <NavLink to="/Mine">
                <div className="ba-display-main-image">
                  <div className="overlay2">
                    <div className="image_overlay2">
                      <img src={play} alt="play" width={"100%"} />
                      <h2>House Edge 1%</h2>
                    </div>
                    <img src={BA6} alt="BA6" width={"100%"} />
                  </div>
                </div>
                <div className="ba-display-main-image-text">
                  <h4>Mine</h4>
                  <img src={mark} alt="mark" width={"15px"} />
                </div>
              </NavLink>
            </div>

            <div className="ba-display-main-flex">
              <NavLink to="/Mine">
                <div className="overlay2">
                  <div className="image_overlay2">
                    <img src={play} alt="play" width={"100%"} />
                    <h2>House Edge 1%</h2>
                  </div>
                  <img src={BA7} alt="BA7" width={"100%"} />
                </div>
                <div className="ba-display-main-image-text">
                  <h4>Mine</h4>
                  <img src={mark} alt="mark" width={"15px"} />
                </div>
              </NavLink>
            </div>

            <div className="ba-display-main-flex">
              <NavLink to="/Roulette">
                <div className="overlay2">
                  <div className="image_overlay2">
                    <img src={play} alt="play" width={"100%"} />
                    <h2>House Edge 1%</h2>
                  </div>
                  <img src={BA8} alt="BA8" width={"100%"} />
                </div>
                <div className="ba-display-main-image-text">
                  <h4>Roulette</h4>
                  <img src={mark} alt="mark" width={"15px"} />
                </div>
              </NavLink>
            </div>

            <div className="ba-display-main-flex">
              <NavLink to="/King of fortune">
                <div className="ba-display-main-image">
                  <div className="overlay2">
                    <div className="image_overlay2">
                      <img src={play} alt="play" width={"100%"} />
                      <h2>House Edge 1%</h2>
                    </div>
                    <img src={BA9} alt="BA9" width={"100%"} />
                  </div>
                </div>
                <div className="ba-display-main-image-text">
                  <h4>King of fortune</h4>
                  <img src={mark} alt="mark" width={"15px"} />
                </div>
              </NavLink>
            </div>
          </div>

          <div className="ba-display-main-display2">
            <div className="ba-display-main-flex">
              <NavLink to="/Plinko">
                <div className="ba-display-main-image">
                  <div className="overlay2">
                    <div className="image_overlay2">
                      <img src={play} alt="play" width={"100%"} />
                      <h2>House Edge 1%</h2>
                    </div>
                    <img src={BA10} alt="BA10" width={"100%"} />
                  </div>
                </div>
                <div className="ba-display-main-image-text">
                  <h4>Plinko</h4>
                  <img src={mark} alt="mark" width={"15px"} />
                </div>
              </NavLink>
            </div>

            <div className="ba-display-main-flex">
              <NavLink to="/Wheel">
                <div className="ba-display-main-image">
                  <div className="overlay2">
                    <div className="image_overlay2">
                      <img src={play} alt="play" width={"100%"} />
                      <h2>House Edge 1%</h2>
                    </div>
                    <img src={BA11} alt="BA11" width={"100%"} />
                  </div>
                </div>
                <div className="ba-display-main-image-text">
                  <h4>Wheel</h4>
                  <img src={mark} alt="mark" width={"15px"} />
                </div>
              </NavLink>
            </div>

            <div className="ba-display-main-flex">
              <NavLink to="/Cave of Plunder">
                <div className="ba-display-main-image">
                  <div className="overlay2">
                    <div className="image_overlay2">
                      <img src={play} alt="play" width={"100%"} />
                      <h2>House Edge 1%</h2>
                    </div>
                    <img src={BA12} alt="BA12" width={"100%"} />
                  </div>
                </div>
                <div className="ba-display-main-image-text">
                  <h4>Cave of Plunder</h4>
                  <img src={mark} alt="mark" width={"15px"} />
                </div>
              </NavLink>
            </div>

            <div className="ba-display-main-flex">
              <NavLink to="/Ultimate Dice">
                <div className="ba-display-main-image">
                  <div className="overlay2">
                    <div className="image_overlay2">
                      <img src={play} alt="play" width={"100%"} />
                      <h2>House Edge 1%</h2>
                    </div>
                    <img src={BA13} alt="BA13" width={"100%"} />
                  </div>
                </div>
                <div className="ba-display-main-image-text">
                  <h4>Ultimate Dice</h4>
                  <img src={mark} alt="mark" width={"15px"} />
                </div>
              </NavLink>
            </div>

            <div className="ba-display-main-flex">
              <NavLink to="/Oriental Beauties">
                <div className="ba-display-main-image">
                  <div className="overlay2">
                    <div className="image_overlay2">
                      <img src={play} alt="play" width={"100%"} />
                      <h2>House Edge 1%</h2>
                    </div>
                    <img src={BA14} alt="BA14" width={"100%"} />
                  </div>
                </div>
                <div className="ba-display-main-image-text">
                  <h4>Oriental Beauties</h4>
                  <img src={mark} alt="mark" width={"15px"} />
                </div>
              </NavLink>
            </div>
          </div>

          <div className="ba-display-main-display2">
            <div className="ba-display-main-flex">
              <NavLink to="/Limbo">
                <div className="ba-display-main-image">
                  <div className="overlay2">
                    <div className="image_overlay2">
                      <img src={play} alt="play" width={"100%"} />
                      <h2>House Edge 1%</h2>
                    </div>
                    <img src={BA15} alt="BA15" width={"100%"} />
                  </div>
                </div>
                <div className="ba-display-main-image-text">
                  <h4>Limbo</h4>
                  <img src={mark} alt="mark" width={"15px"} />
                </div>
              </NavLink>
            </div>

            <div className="ba-display-main-flex">
              <NavLink to="/Saviour Sword">
                <div className="ba-display-main-image">
                  <div className="overlay2">
                    <div className="image_overlay2">
                      <img src={play} alt="play" width={"100%"} />
                      <h2>House Edge 1%</h2>
                    </div>
                    <img src={BA16} alt="BA16" width={"100%"} />
                  </div>
                </div>
                <div className="ba-display-main-image-text">
                  <h4>Saviour Sword</h4>
                  <img src={mark} alt="mark" width={"15px"} />
                </div>
              </NavLink>
            </div>

            <div className="ba-display-main-flex">
              <NavLink to="/Roulette Multiplayer">
                <div className="ba-display-main-image">
                  <div className="overlay2">
                    <div className="image_overlay2">
                      <img src={play} alt="play" width={"100%"} />
                      <h2>House Edge 1%</h2>
                    </div>
                    <img src={BA17} alt="BA17" width={"100%"} />
                  </div>
                </div>
                <div className="ba-display-main-image-text">
                  <h4>Roulette Multiplayer</h4>
                  <img src={mark} alt="mark" width={"15px"} />
                </div>
              </NavLink>
            </div>

            <div className="ba-display-main-flex">
              <NavLink to="/Video Poker">
                <div className="ba-display-main-image">
                  <div className="overlay2">
                    <div className="image_overlay2">
                      <img src={play} alt="play" width={"100%"} />
                      <h2>House Edge 1%</h2>
                    </div>
                    <img src={BA18} alt="BA18" width={"100%"} />
                  </div>
                </div>
                <div className="ba-display-main-image-text">
                  <h4>Video Poker</h4>
                  <img src={mark} alt="mark" width={"15px"} />
                </div>
              </NavLink>
            </div>

            <div className="ba-display-main-flex">
              <NavLink to="/Baccarat Multiplayer">
                <div className="ba-display-main-image">
                  <div className="overlay2">
                    <div className="image_overlay2">
                      <img src={play} alt="play" width={"100%"} />
                      <h2>House Edge 1%</h2>
                    </div>
                    <img src={BA19} alt="BA19" width={"100%"} />
                  </div>
                </div>
                <div className="ba-display-main-image-text">
                  <h4>Baccarat Multiplayer</h4>
                  <img src={mark} alt="mark" width={"15px"} />
                </div>
              </NavLink>
            </div>
          </div>

          <div className="ba-display-main-display2">
            <div className="ba-display-main-flex">
              <NavLink to="/Limbo">
                <div className="ba-display-main-image">
                  <div className="overlay2">
                    <div className="image_overlay2">
                      <img src={play} alt="play" width={"100%"} />
                      <h2>House Edge 1%</h2>
                    </div>
                    <img src={BA20} alt="BA20" width={"100%"} />
                  </div>
                </div>
                <div className="ba-display-main-image-text">
                  <h4>Limbo</h4>
                  <img src={mark} alt="mark" width={"15px"} />
                </div>
              </NavLink>
            </div>

            <div className="ba-display-main-flex">
              <NavLink to="/Keno">
                <div className="ba-display-main-image">
                  <div className="overlay2">
                    <div className="image_overlay2">
                      <img src={play} alt="play" width={"100%"} />
                      <h2>House Edge 1%</h2>
                    </div>
                    <img src={BA21} alt="BA21" width={"100%"} />
                  </div>
                </div>
                <div className="ba-display-main-image-text">
                  <h4>Keno</h4>
                  <img src={mark} alt="mark" width={"15px"} />
                </div>
              </NavLink>
            </div>

            <div className="ba-display-main-flex">
              <NavLink to="/Egyptian adventure">
                <div className="ba-display-main-image">
                  <div className="overlay2">
                    <div className="image_overlay2">
                      <img src={play} alt="play" width={"100%"} />
                      <h2>House Edge 1%</h2>
                    </div>
                    <img src={BA22} alt="BA22" width={"100%"} />
                  </div>
                </div>
                <div className="ba-display-main-image-text">
                  <h4>Egyptian adventure</h4>
                  <img src={mark} alt="mark" width={"15px"} />
                </div>
              </NavLink>
            </div>

            <div className="ba-display-main-flex">
              <NavLink to="/Keno Multiplayer">
                <div className="ba-display-main-image">
                  <div className="overlay2">
                    <div className="image_overlay2">
                      <img src={play} alt="play" width={"100%"} />
                      <h2>House Edge 1%</h2>
                    </div>
                    <img src={BA23} alt="BA23" width={"100%"} />
                  </div>
                </div>
                <div className="ba-display-main-image-text">
                  <h4>Keno Multiplayer</h4>
                  <img
                    onMouseEnter={showHover}
                    onMouseLeave={hideHover}
                    src={mark}
                    alt="mark"
                    width={"15px"}
                  />
                </div>
              </NavLink>
            </div>

            <div className="ba-display-main-flex">
              <NavLink to="/Blackjack">
                <div className="ba-display-main-image">
                  <div className="overlay2">
                    <div className="image_overlay2">
                      <img src={play} alt="play" width={"100%"} />
                      <h2>House Edge 1%</h2>
                    </div>
                    <img src={BA24} alt="BA24" width={"100%"} />
                  </div>
                </div>
                <div className="ba-display-main-image-text">
                  <h4>Blackjack</h4>
                  <img
                    onMouseEnter={showHover}
                    onMouseLeave={hideHover}
                    src={mark}
                    alt="mark"
                    width={"15px"}
                  />
                </div>
              </NavLink>
            </div>
          </div>

          <div className="ba-display-main-display2">
            <div className="ba-display-main-flex">
              <NavLink to="/Hilo">
                <div className="ba-display-main-image">
                  <div className="overlay2">
                    <div className="image_overlay2">
                      <img src={play} alt="play" width={"100%"} />
                      <h2>House Edge 1%</h2>
                    </div>
                    <img src={BA25} alt="BA25" width={"100%"} />
                  </div>
                </div>
                <div className="ba-display-main-image-text">
                  <h4>Hilo</h4>
                  <img
                    onMouseEnter={showHover}
                    onMouseLeave={hideHover}
                    src={mark}
                    alt="mark"
                    width={"15px"}
                  />
                </div>
              </NavLink>
            </div>

            <div className="ba-display-main-flex">
              <NavLink to="/Evoplay">
                <div className="ba-display-main-image">
                  <div className="overlay2">
                    <div className="image_overlay2">
                      <img src={play} alt="play" width={"100%"} />
                      <h2>House Edge 1%</h2>
                    </div>
                    <img src={BA26} alt="BA26" width={"100%"} />
                  </div>
                </div>
                <div className="ba-display-main-image-text">
                  {/* <h4>Evoplay</h4>
                      <img
                        onMouseEnter={showHover}
                        onMouseLeave={hideHover}
                        src={mark}
                        alt="mark"
                        width={"15px"}
                      /> */}
                </div>
              </NavLink>
            </div>

            <div className="ba-display-main-flex">
              <NavLink to="/Evoplay">
                <div className="ba-display-main-image">
                  <div className="overlay2">
                    <div className="image_overlay2">
                      <img src={play} alt="play" width={"100%"} />
                      <h2>House Edge 1%</h2>
                    </div>
                    <img src={BA26} alt="BA26" width={"100%"} />
                  </div>
                </div>
                <div className="ba-display-main-image-text">
                  {/* <h4>Evoplay</h4>
                      <img
                        onMouseEnter={showHover}
                        onMouseLeave={hideHover}
                        src={mark}
                        alt="mark"
                        width={"15px"}
                      /> */}
                </div>
              </NavLink>
            </div>

            <div className="ba-display-main-flex">
              <NavLink to="/Belatra">
                <div className="ba-display-main-image">
                  <div className="overlay2">
                    <div className="image_overlay2">
                      <img src={play} alt="play" width={"100%"} />
                      <h2>House Edge 1%</h2>
                    </div>
                    <img src={BA26} alt="BA26" width={"100%"} />
                  </div>
                </div>
                <div className="ba-display-main-image-text">
                  {/* <h4>Belatra</h4>
                      <img
                        onMouseEnter={showHover}
                        onMouseLeave={hideHover}
                        src={mark}
                        alt="mark"
                        width={"15px"}
                      /> */}
                </div>
              </NavLink>
            </div>

            <div className="ba-display-main-flex">
              <NavLink to="/Belatra">
                <div className="ba-display-main-image">
                  <div className="overlay2">
                    <div className="image_overlay2">
                      <img src={play} alt="play" width={"100%"} />
                      <h2>House Edge 1%</h2>
                    </div>
                    <img src={BA26} alt="BA26" width={"100%"} />
                  </div>
                </div>
                <div className="ba-display-main-image-text">
                  {/* <h4>Belatra</h4>
                      <img
                        onMouseEnter={showHover}
                        onMouseLeave={hideHover}
                        src={mark}
                        alt="mark"
                        width={"15px"}
                      /> */}
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
