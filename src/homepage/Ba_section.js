import React from "react";

import best1 from "../images/best img 1.png";
import best2 from "../images/best img 2.png";
import best3 from "../images/best img 3.png";
import best4 from "../images/best img 4.png";
import best5 from "../images/best img 5.png";
import best6 from "../images/best img 6.png";
import best7 from "../images/best img 7.png";
import best8 from "../images/best img 8.png";
import best9 from "../images/best img 9.png";
import best10 from "../images/best img 10.png";
import feature1 from "../images/feature 1.png";
import feature2 from "../images/feature 2.png";
import feature3 from "../images/feature 3.png";
import feature4 from "../images/feature 4.png";
import feature5 from "../images/feature 5.png";
import partner14 from "../images/partner 14.png";
import partner1 from "../images/partner 1.png";
import partner2 from "../images/partner 2.png";
import partner3 from "../images/partner 3.png";
import partner4 from "../images/partner 4.png";
import partner5 from "../images/partner 5.png";
import partner6 from "../images/partner 6.png";
import partner7 from "../images/partner 7.png";
import partner8 from "../images/partner 8.png";
import partner9 from "../images/partner 9.png";
import partner10 from "../images/partner 10.png";
import partner11 from "../images/partner 11.png";
import partner12 from "../images/partner 12.png";
import partner13 from "../images/partner 13.png";
import winner1 from "../images/winner 1.png";
import winner2 from "../images/winner 2.png";
import winner3 from "../images/winner 3.png";
import winner4 from "../images/winner 4.png";
import winner6 from "../images/winner 6.png";
import winner7 from "../images/winner 7.png";
import winner8 from "../images/winner 8.png";
import winner9 from "../images/winner 9.png";
import table1 from "../images/table 1.png";
import table2 from "../images/table 2.png";
import table3 from "../images/table 3.png";
import play from "../images/play-icon.png";
import Footer from "../components/Footer";

// import Chat from "../components/Chat";

// import mark from "../images/best question mark.png";

import mark from "../images/best question mark.png";

import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Ba_section() {
  const [setShowHoverImg] = useState(false);
  // const [ setShowHoverImg2] = useState(false);
  // const [ setShowHoverImg3] = useState(false);

  function showHover() {
    setShowHoverImg(true);
  }
  function hideHover() {
    setShowHoverImg(false);
  }
  // function showHover2() {
  //   setShowHoverImg2(true);
  // }
  // function hideHover2() {
  //   setShowHoverImg2(false);
  // }
  // function showHover3() {
  //   setShowHoverImg3(true);
  // }
  // function hideHover3() {
  //   setShowHoverImg3(false);
  // }
  return (
    <div>
      <div className="home-display-cover">
        <div className="best-display">
          <div className="best-display-top">
            <div className="best-display-text-top">
              <h4>
                BEST FROM <br />
                THE <span> SLOTS</span>
              </h4>
            </div>
            <div className="best-display-text-top-left">
              <div className="best-text-left">
                <h4>
                  All <span>20</span> Slots
                </h4>
              </div>
              <div className="slot-line1-arrows-third-top">
                <div className="slot-arrow-left-third-top">
                  <h3> &#10094;</h3>
                </div>
                <div className="slot-arrow-right-third-top">
                  <h3> &#10095;</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="best-display-main">
            <div className="best-display-main-display">
              <div className="ba-display-main-flex">
                <NavLink to="/Evoplay">
                  <div className="ba-display-main-image">
                    <div className="overlay2">
                      <div className="image_overlay2">
                        <img src={play} alt="play" width={"100%"} />
                        <h2>House Edge 1%</h2>
                      </div>
                      <img src={best1} alt="best" width={"100%"} />
                    </div>
                  </div>
                  <div className="ba-display-main-image-text">
                    <h4>Evoplay</h4>
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
                <NavLink to="/Red Tiger">
                  <div className="ba-display-main-image">
                    <div className="overlay2">
                      <div className="image_overlay2">
                        <img src={play} alt="play" width={"100%"} />
                        <h2>House Edge 1%</h2>
                      </div>
                      <img src={best2} alt="best2" width={"100%"} />
                    </div>
                  </div>
                  <div className="ba-display-main-image-text">
                    <h4>Red Tiger</h4>
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
                <NavLink to="/GameArt">
                  <div className="ba-display-main-image">
                    <div className="overlay2">
                      <div className="image_overlay2">
                        <img src={play} alt="play" width={"100%"} />
                        <h2>House Edge 1%</h2>
                      </div>
                      <img src={best3} alt="best3" width={"100%"} />
                    </div>
                  </div>
                  <div className="ba-display-main-image-text">
                    <h4>GameArt</h4>
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
                <NavLink to="/Endorphina">
                  <div className="ba-display-main-image">
                    <div className="overlay2">
                      <div className="image_overlay2">
                        <img src={play} alt="play" width={"100%"} />
                        <h2>House Edge 1%</h2>
                      </div>
                      <img src={best4} alt="best4" width={"100%"} />
                    </div>
                  </div>
                  <div className="ba-display-main-image-text">
                    <h4>Endorphina</h4>
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
                <NavLink to="/Spinomenal">
                  <div className="ba-display-main-image">
                    <div className="overlay2">
                      <div className="image_overlay2">
                        <img src={play} alt="play" width={"100%"} />
                        <h2>House Edge 1%</h2>
                      </div>
                      <img src={best5} alt="best5" width={"100%"} />
                    </div>
                  </div>
                  <div className="ba-display-main-image-text">
                    <h4>Spinomenal</h4>
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
          </div>
          <div className="best-display-main">
            <div className="best-display-main-display ">
              <div className="ba-display-main-flex">
                <NavLink to="/Hacksaw">
                  <div className="ba-display-main-image">
                    <div className="overlay2">
                      <div className="image_overlay2">
                        <img src={play} alt="play" width={"100%"} />
                        <h2>House Edge 1%</h2>
                      </div>
                      <img src={best6} alt="best6" width={"100%"} />
                    </div>
                  </div>
                  <div className="ba-display-main-image-text">
                    <h4>Hacksaw</h4>
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
                <NavLink to="/Microgaming">
                  <div className="ba-display-main-image">
                    <div className="overlay2">
                      <div className="image_overlay2">
                        <img src={play} alt="play" width={"100%"} />
                        <h2>House Edge 1%</h2>
                      </div>
                      <img src={best7} alt="best7" width={"100%"} />
                    </div>
                  </div>
                  <div className="ba-display-main-image-text">
                    <h4>Microgaming</h4>
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
                <NavLink to="/PG soft">
                  <div className="ba-display-main-image">
                    <div className="overlay2">
                      <div className="image_overlay2">
                        <img src={play} alt="play" width={"100%"} />
                        <h2>House Edge 1%</h2>
                      </div>
                      <img src={best8} alt="best8" width={"100%"} />
                    </div>
                  </div>
                  <div className="ba-display-main-image-text">
                    <h4>PG soft</h4>
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
                <NavLink to="/Endorphina">
                  <div className="ba-display-main-image">
                    <div className="overlay2">
                      <div className="image_overlay2">
                        <img src={play} alt="play" width={"100%"} />
                        <h2>House Edge 1%</h2>
                      </div>
                      <img src={best9} alt="best9" width={"100%"} />
                    </div>
                  </div>
                  <div className="ba-display-main-image-text">
                    <h4>Endorphina</h4>
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
                <NavLink to="/Hacksaw">
                  <div className="ba-display-main-image">
                    <div className="overlay2">
                      <div className="image_overlay2">
                        <img src={play} alt="play" width={"100%"} />
                        <h2>House Edge 1%</h2>
                      </div>
                      <img src={best10} alt="best10" width={"100%"} />
                    </div>
                  </div>
                  <div className="ba-display-main-image-text">
                    <h4>Hacksaw</h4>
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
          </div>
        </div>

        <div className="best-display">
          <div className="best-display-top">
            <div className="best-display-text-top">
              <h4>
                FEATURE <br />
                BUY-IN <span> SLOTS</span>
              </h4>
            </div>
            <div className="best-display-text-top-left">
              <div className="best-text-left">
                <h4>
                  All <span>20</span> Slots
                </h4>
              </div>
              <div className="slot-line1-arrows-third-top">
                <div className="slot-arrow-left-third-top">
                  <h3> &#10094;</h3>
                </div>
                <div className="slot-arrow-right-third-top">
                  <h3> &#10095;</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="best-display-main">
            <div className="best-display-main-display">
              <div className="ba-display-main-flex">
                <NavLink to="/Evoplay">
                  <div className="ba-display-main-image">
                    <div className="overlay2">
                      <div className="image_overlay2">
                        <img src={play} alt="play" width={"100%"} />
                        <h2>House Edge 1%</h2>
                      </div>
                      <img src={feature1} alt="feature1" width={"100%"} />
                    </div>
                  </div>
                  <div className="ba-display-main-image-text">
                    <h4>Evoplay</h4>
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
                <NavLink to="/Red Tiger">
                  <div className="ba-display-main-image">
                    <div className="overlay2">
                      <div className="image_overlay2">
                        <img src={play} alt="play" width={"100%"} />
                        <h2>House Edge 1%</h2>
                      </div>
                      <img src={feature2} alt="feature2" width={"100%"} />
                    </div>
                  </div>
                  <div className="ba-display-main-image-text">
                    <h4>Red Tiger</h4>
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
                <NavLink to="/GameArt">
                  <div className="ba-display-main-image">
                    <div className="overlay2">
                      <div className="image_overlay2">
                        <img src={play} alt="play" width={"100%"} />
                        <h2>House Edge 1%</h2>
                      </div>
                      <img src={feature3} alt="feature3" width={"100%"} />
                    </div>
                  </div>
                  <div className="ba-display-main-image-text">
                    <h4>GameArt</h4>
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
                <NavLink to="/Endorphina">
                  <div className="ba-display-main-image">
                    <div className="overlay2">
                      <div className="image_overlay2">
                        <img src={play} alt="play" width={"100%"} />
                        <h2>House Edge 1%</h2>
                      </div>
                      <img src={feature4} alt="feature4" width={"100%"} />
                    </div>
                  </div>
                  <div className="ba-display-main-image-text">
                    <h4>Endorphina</h4>
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
                <NavLink to="/Spinomenal">
                  <div className="ba-display-main-image">
                    <div className="overlay2">
                      <div className="image_overlay2">
                        <img src={play} alt="play" width={"100%"} />
                        <h2>House Edge 1%</h2>
                      </div>
                      <img src={feature5} alt="feature5" width={"100%"} />
                    </div>
                  </div>
                  <div className="ba-display-main-image-text">
                    <h4>Spinomenal</h4>
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
          </div>
        </div>

        <div className="partner">
          <div className="partner-display">
            <div className="partner-row-1">
              <img src={partner1} alt="partner1" width={"83px"} />
              <img src={partner2} alt="partner2" width={"83px"} />
              <img src={partner3} alt="partner3" width={"83px"} />
              <img src={partner4} alt="partner4" width={"83px"} />
              <img src={partner5} alt="partner5" width={"83px"} />
              <img src={partner6} alt="partner6" width={"83px"} />
              <img src={partner7} alt="partner7" width={"83px"} />
            </div>

            <div className="partner-row-2">
              <img src={partner8} alt="partner8" width={"83px"} />
              <img src={partner9} alt="partner9" width={"83px"} />
              <img src={partner10} alt="partner10" width={"83px"} />
              <img src={partner11} alt="partner11" width={"83px"} />
              <img src={partner12} alt="partner12" width={"83px"} />
              <img src={partner13} alt="partner13" width={"83px"} />
              <img src={partner14} alt="partner14" width={"83px"} />
            </div>
          </div>
        </div>

        <div className="best-display">
          <div className="best-display-top">
            <div className="best-display-text-top">
              <h4>
                RECOMMENDED <br />
                LIVE <span> SLOTS</span>
              </h4>
            </div>
            <div className="best-display-text-top-left">
              <div className="best-text-left">
                <h4>
                  All <span>20</span> Slots
                </h4>
              </div>
              <div className="slot-line1-arrows-third-top">
                <div className="slot-arrow-left-third-top">
                  <h3> &#10094;</h3>
                </div>
                <div className="slot-arrow-right-third-top">
                  <h3> &#10095;</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="best-display-main">
            <div className="best-display-main-display">
              <div className="ba-display-main-flex">
                <NavLink to="/Evoplay">
                  <div className="ba-display-main-image">
                    <div className="overlay2">
                      <div className="image_overlay2">
                        <img src={play} alt="play" width={"100%"} />
                        <h2>House Edge 1%</h2>
                      </div>
                      <img src={best1} alt="best" width={"100%"} />
                    </div>
                  </div>
                  <div className="ba-display-main-image-text">
                    <h4>Evoplay</h4>
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
                <NavLink to="/Red Tiger">
                  <div className="ba-display-main-image">
                    <div className="overlay2">
                      <div className="image_overlay2">
                        <img src={play} alt="play" width={"100%"} />
                        <h2>House Edge 1%</h2>
                      </div>
                      <img src={best2} alt="best2" width={"100%"} />
                    </div>
                  </div>
                  <div className="ba-display-main-image-text">
                    <h4>Red Tiger</h4>
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
                <NavLink to="/GameArt">
                  <div className="ba-display-main-image">
                    <div className="overlay2">
                      <div className="image_overlay2">
                        <img src={play} alt="play" width={"100%"} />
                        <h2>House Edge 1%</h2>
                      </div>
                      <img src={best3} alt="best3" width={"100%"} />
                    </div>
                  </div>
                  <div className="ba-display-main-image-text">
                    <h4>GameArt</h4>
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
                <NavLink to="/Endorphina">
                  <div className="ba-display-main-image">
                    <div className="overlay2">
                      <div className="image_overlay2">
                        <img src={play} alt="play" width={"100%"} />
                        <h2>House Edge 1%</h2>
                      </div>
                      <img src={best4} alt="best4" width={"100%"} />
                    </div>
                  </div>
                  <div className="ba-display-main-image-text">
                    <h4>Endorphina</h4>
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
                <NavLink to="/Spinomenal">
                  <div className="ba-display-main-image">
                    <div className="overlay2">
                      <div className="image_overlay2">
                        <img src={play} alt="play" width={"100%"} />
                        <h2>House Edge 1%</h2>
                      </div>
                      <img src={best5} alt="best5" width={"100%"} />
                    </div>
                  </div>
                  <div className="ba-display-main-image-text">
                    <h4>Spinomenal</h4>
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
          </div>

          <div className="best-display-main">
            <div className="best-display-main-display ">
              <div className="ba-display-main-flex">
                <NavLink to="/Hacksaw">
                  <div className="ba-display-main-image">
                    <div className="overlay2">
                      <div className="image_overlay2">
                        <img src={play} alt="play" width={"100%"} />
                        <h2>House Edge 1%</h2>
                      </div>
                      <img src={best6} alt="best6" width={"100%"} />
                    </div>
                  </div>
                  <div className="ba-display-main-image-text">
                    <h4>Hacksaw</h4>
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
                <NavLink to="/Microgaming">
                  <div className="ba-display-main-image">
                    <div className="overlay2">
                      <div className="image_overlay2">
                        <img src={play} alt="play" width={"100%"} />
                        <h2>House Edge 1%</h2>
                      </div>
                      <img src={best7} alt="best7" width={"100%"} />
                    </div>
                  </div>
                  <div className="ba-display-main-image-text">
                    <h4>Microgaming</h4>
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
                <NavLink to="/PG soft">
                  <div className="ba-display-main-image">
                    <div className="overlay2">
                      <div className="image_overlay2">
                        <img src={play} alt="play" width={"100%"} />
                        <h2>House Edge 1%</h2>
                      </div>
                      <img src={best8} alt="best8" width={"100%"} />
                    </div>
                  </div>
                  <div className="ba-display-main-image-text">
                    <h4>PG soft</h4>
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
                <NavLink to="/Endorphina">
                  <div className="ba-display-main-image">
                    <div className="overlay2">
                      <div className="image_overlay2">
                        <img src={play} alt="play" width={"100%"} />
                        <h2>House Edge 1%</h2>
                      </div>
                      <img src={best9} alt="best9" width={"100%"} />
                    </div>
                  </div>
                  <div className="ba-display-main-image-text">
                    <h4>Endorphina</h4>
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
                <NavLink to="/Hacksaw">
                  <div className="ba-display-main-image">
                    <div className="overlay2">
                      <div className="image_overlay2">
                        <img src={play} alt="play" width={"100%"} />
                        <h2>House Edge 1%</h2>
                      </div>
                      <img src={best10} alt="best10" width={"100%"} />
                    </div>
                  </div>
                  <div className="ba-display-main-image-text">
                    <h4>Hacksaw</h4>
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
          </div>
        </div>

        <div className="winner-cover">
          <div className="winner">
            <div className="winner-flex-1">
              <div className="flex-1-img">
                <h4>
                  WINNER WINNER <br />
                  CHICKEN DINNER
                </h4>
                <img src={winner2} alt="best" />

                <div className="flex-text-text">
                  <img src={winner1} alt="best" />
                </div>
              </div>
            </div>

            <div className="top">
              <img src={winner9} alt="best" />
            </div>
            <div className="winner-flex-2">
              <div className="winner-flex1">
                <div className="flex2">
                  <img src={winner6} alt="best" />
                </div>
                <div className="flex3">
                  <img src={winner3} alt="best" />
                  <h4>Hidden</h4>
                </div>
                <div className="flex4">
                  <h4>$45,000</h4>
                </div>
              </div>

              <div className="winner-flex1">
                <div className="flex2-1">
                  <img src={winner8} alt="best" />
                </div>
                <div className="flex3-1">
                  <img src={winner4} alt="best" />
                  <h4>Atomic Slots</h4>
                </div>
                <div className="flex4-1">
                  <h4>$45,000</h4>
                </div>
              </div>

              <div className="winner-flex1">
                <div className="flex2">
                  <img src={winner7} alt="best" />
                </div>
                <div className="flex3">
                  <img src={winner3} alt="best" />
                  <h4>Hidden</h4>
                </div>
                <div className="flex4">
                  <h4>$45,000</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="latest">
          <div className="row">
            <h4>Latest Bets</h4>
          </div>
          <div className="row-1">
            <h4>High rollers</h4>
          </div>
          <div className="row-2">
            <h4>Wager contest</h4>
          </div>
        </div>

        <div className="table">
          <div className="table-items">
            <div className="table-head1">
              <h4>Game</h4>
              <div className="table-game-row1">
                <img src={table1} alt="table1" width={"20px"} />
                <h4>Lorem</h4>
              </div>
              <div className="table-game-row1">
                <img src={table1} alt="table1" width={"20px"} />
                <h4>Lorem</h4>
              </div>
              <div className="table-game-row1">
                <img src={table1} alt="table1" width={"20px"} />
                <h4>Lorem</h4>
              </div>
              <div className="table-game-row1">
                <img src={table1} alt="table1" width={"20px"} />
                <h4>Lorem</h4>
              </div>
              <div className="table-game-row1">
                <img src={table1} alt="table1" width={"20px"} />
                <h4>Lorem</h4>
              </div>
              <div className="table-game-row1">
                <img src={table1} alt="table1" width={"20px"} />
                <h4>Lorem</h4>
              </div>
              <div className="table-game-row1">
                <img src={table1} alt="table1" width={"20px"} />
                <h4>Lorem</h4>
              </div>
              <div className="table-game-row1">
                <img src={table1} alt="table1" width={"20px"} />
                <h4>Lorem</h4>
              </div>
              <div className="table-game-row1">
                <img src={table1} alt="table1" width={"20px"} />
                <h4>Lorem</h4>
              </div>
              <div className="table-game-row1">
                <img src={table1} alt="table1" width={"20px"} />
                <h4>Lorem</h4>
              </div>

              <div className="table-game-row1">
                <img src={table1} alt="table1" width={"20px"} />
                <h4>Lorem</h4>
              </div>
              <div className="table-game-row1">
                <img src={table1} alt="table1" width={"20px"} />
                <h4>Lorem</h4>
              </div>
            </div>

            <div className="table-head2">
              <h4>Player</h4>
              <div className="table-player2">
                <h4>Ipsum</h4>
              </div>
              <div className="table-player2">
                <h4>Ipsum</h4>
              </div>
              <div className="table-player2">
                <h4>Ipsum</h4>
              </div>
              <div className="table-player2">
                <h4>Ipsum</h4>
              </div>
              <div className="table-player2">
                <h4>Ipsum</h4>
              </div>
              <div className="table-player2">
                <h4>Ipsum</h4>
              </div>
              <div className="table-player2">
                <h4>Ipsum</h4>
              </div>
              <div className="table-player2">
                <h4>Ipsum</h4>
              </div>
              <div className="table-player2">
                <h4>Ipsum</h4>
              </div>
              <div className="table-player2">
                <h4>Ipsum</h4>
              </div>
              <div className="table-player2">
                <h4>Ipsum</h4>
              </div>
              <div className="table-player2">
                <h4>Ipsum</h4>
              </div>
            </div>

            <div className="table-head3">
              <h4>Bet Amount</h4>
              <div className="table-bet-row">
                <h4>0.000000</h4>
                <img src={table2} alt="table2" width={"20px"} />
              </div>
              <div className="table-bet-row1">
                <h4>0.000000</h4>
                <img src={table2} alt="table2" width={"20px"} />
              </div>
              <div className="table-bet-row1">
                <h4>0.000000</h4>
                <img src={table2} alt="table2" width={"20px"} />
              </div>
              <div className="table-bet-row1">
                <h4>0.000000</h4>
                <img src={table3} alt="table3" width={"14px"} />
              </div>
              <div className="table-bet-row1">
                <h4>0.000000</h4>
                <img src={table2} alt="table2" width={"20px"} />
              </div>
              <div className="table-bet-row1">
                <h4>0.000000</h4>
                <img src={table3} alt="table3" width={"14px"} />
              </div>
              <div className="table-bet-row1">
                <h4>0.000000</h4>
                <img src={table2} alt="table2" width={"20px"} />
              </div>
              <div className="table-bet-row1">
                <h4>0.000000</h4>
                <img src={table3} alt="table3" width={"14px"} />
              </div>
              <div className="table-bet-row1">
                <h4>0.000000</h4>
                <img src={table2} alt="table2" width={"20px"} />
              </div>
              <div className="table-bet-row1">
                <h4>0.000000</h4>
                <img src={table3} alt="table3" width={"14px"} />
              </div>
              <div className="table-bet-row1">
                <h4>0.000000</h4>
                <img src={table2} alt="table2" width={"20px"} />
              </div>
              <div className="table-bet-row1">
                <h4>0.000000</h4>
                <img src={table3} alt="table3" width={"14px"} />
              </div>
            </div>

            <div className="table-head4">
              <h4>Multipier</h4>
              <div className="table-player2">
                <h4>0.00x</h4>
              </div>
              <div className="table-player2">
                <h4>0.00x</h4>
              </div>
              <div className="table-player2">
                <h4>0.00x</h4>
              </div>
              <div className="table-player2">
                <h4>0.00x</h4>
              </div>
              <div className="table-player2">
                <h4>0.00x</h4>
              </div>
              <div className="table-player2">
                <h4>0.00x</h4>
              </div>
              <div className="table-player2">
                <h4>0.00x</h4>
              </div>
              <div className="table-player2">
                <h4>0.00x</h4>
              </div>
              <div className="table-player2">
                <h4>0.00x</h4>
              </div>
              <div className="table-player2">
                <h4>0.00x</h4>
              </div>
              <div className="table-player2">
                <h4>0.00x</h4>
              </div>
              <div className="table-player2">
                <h4>0.00x</h4>
              </div>
            </div>
            <div className="table-head5">
              <h4>Bet Amount</h4>
              <div className="table-bet-row">
                <h4>0.000000</h4>
                <img src={table2} alt="table2" width={"20px"} />
              </div>
              <div className="table-bet-row1">
                <h4>0.000000</h4>
                <img src={table3} alt="table3" width={"14px"} />
              </div>
              <div className="table-bet-row1">
                <h4>0.000000</h4>
                <img src={table2} alt="table2" width={"20px"} />
              </div>
              <div className="table-bet-row1">
                <h4>0.000000</h4>
                <img src={table3} alt="table3" width={"14px"} />
              </div>
              <div className="table-bet-row1">
                <h4>0.000000</h4>
                <img src={table3} alt="table3" width={"14px"} />
              </div>
              <div className="table-bet-row1">
                <h4>0.000000</h4>
                <img src={table2} alt="table3" width={"20px"} />
              </div>
              <div className="table-bet-row1">
                <h4>0.000000</h4>
                <img src={table3} alt="table3" width={"14px"} />
              </div>
              <div className="table-bet-row1">
                <h4>0.000000</h4>
                <img src={table3} alt="table3" width={"14px"} />
              </div>
              <div className="table-bet-row1">
                <h4>0.000000</h4>
                <img src={table2} alt="table3" width={"20px"} />
              </div>
              <div className="table-bet-row1">
                <h4>0.000000</h4>
                <img src={table3} alt="table3" width={"14px"} />
              </div>
              <div className="table-bet-row1">
                <h4>0.000000</h4>
                <img src={table2} alt="table3" width={"20px"} />
              </div>
              <div className="table-bet-row1">
                <h4>0.000000</h4>
                <img src={table3} alt="table3" width={"14px"} />
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="footer-head">
            <h4>Crypto Online Casino</h4>
          </div>
          <div className="footer-text">
            <h4>
              Casinos online have not always been around, but we can safely say
              that online casinos have been used a lot since they came on the
              market. And it's not in short demand nor options, and now in 2022,
              we have 1000s and 1000s to pick from - it's just a matter of what
              you like and what payment options you would like to see at the
              casino.
              <br />
              <br />
              Players are always looking for something new, which will help make
              the gaming experience so much better and more accessible. Allowing
              the player to focus on the absolute fun of a casino, that's right,
              the games themselves.
              <br />
              <br />
              That's why we are now going to tell you all you need to know about
              a crypto casino or bitcoin gambling or bitcoin casino, whatever
              you want to call it.
            </h4>
          </div>
          <div className="footer-link">
            <h4>
              Show more <span>&raquo;</span>
            </h4>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
