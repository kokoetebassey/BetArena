import React, { useEffect, useState } from "react";
import "./style/crash.css";
import graph from "../images/images/graph.svg";
import Keyboard from "../images/images/Keyboard.svg";
import green from "../images/images/trenball_green.png";
import red from "../images/images/trenball_red.png";
import cycle from "../images/images/cycle.png";
import plus from "../images/images/plus sign.svg";
import crash from "../images/crash (1).svg";
import dicer from "../images/Dicers.svg";
import dice from "../images/Dice (1).svg";
import Jackpot from "../images/Jackpot.svg";
import Fragmentation from "../images/Fragmentation.svg";
import Wheel from "../images/Wheel of fortune.svg";
import machine from "../images/Slot machine.svg";
import Coin from "../images/Coin.svg";
import Dices from "../images/Dices.svg";
import Rectangle from "../images/Rectangle.svg";
import Rectangle1 from "../images/Rectangle (1).svg";
import Rectangle2 from "../images/Rectangle (2).svg";
import Sword from "../images/Sword.svg";
import Crown from "../images/Crown.svg";
import Spade from "../images/Spade Token.svg";
import Group from "../images/Group 621.svg";
import empty from "../images/images/empty.svg";
import Footer from "../pages/FooterPage";
import Recommend from "../pages/Recommend";
// import CrashPoint from "./CrashPoint";
import BetHistory from "../pages/BetHistory";
import { NavLink } from "react-router-dom";
import Baoriginal from "./Ba_original";

import axios from "axios";

import CrashTime from "./CrashTime";
import CrashMessage from "./CrashMessage";
import Crashcount from "./Crashcount";

export default function Crash() {
  const [activeBet, setActiveBet] = useState(1);
  const handleBetClick = (index) => {
    setActiveBet(index);
  };

  const [firstPop, setFirstPop] = useState(false);
  const [secondPop, setSecondPop] = useState(false);
  const [thirdPop, setThirdPop] = useState(false);

  function clearFirstPop() {
    setFirstPop(false);
  }
  function clearSecondPop() {
    setSecondPop(false);
  }
  function clearThirdPop() {
    setThirdPop(false);
  }

  const Content = [
    {
      name: "valiant",
      cashOut: "200",
      profit: "360",
      amount: "22",
    },
  ];

  const [auto, setAuto] = useState(1);

  const [stakeValue, setStakeValue] = useState(1);
  const [stakeValue2, setStakeValue2] = useState(1);

  const Half = () => {
    setStakeValue(stakeValue / 2);
  };
  const Half2 = () => {
    setStakeValue2(stakeValue2 / 2);
  };

  const Double = () => {
    setStakeValue(stakeValue * 2);
  };
  const Double2 = () => {
    setStakeValue2(stakeValue2 * 2);
  };

  const [showBa, setShowBa] = useState(false);
  const openBa = () => {
    setShowBa(true);
  };
  const closeBa = () => {
    setShowBa(false);
  };

  const [crashGame, setcrashGame] = useState("");
  const [ResponseMsg, setResponseMsg] = useState("");
  const [Bet, setBet] = useState(true);
  const [Next, setNext] = useState("");
  const [loading, setLoading] = useState(false);

  function functionLoad() {
    if (loading === true && crashGame === false) {
      setLoading(false);
      setcrashGame(true);
    } else {
      setLoading(true);
      setcrashGame(false);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get("https://crashgame.herokuapp.com/api/crashgame")
        .then((Response) => {
          setResponseMsg(Response.data[0].message);
          if (ResponseMsg === "crash") {
            setcrashGame(<CrashMessage crash={Response.data[0].crashPoint} />);
            setNext(true);
            setBet(false);
          } else if (ResponseMsg === "running") {
            setcrashGame(<Crashcount crash={Response.data[0].crashcount} />);
            setNext(true);
            setBet(false);
          } else if (ResponseMsg === "start") {
            if (Response.data[0].startTime === -0.01) {
            } else {
              setcrashGame(<CrashTime crash={Response.data[0].startTime} />);
              setBet(true);
              setNext(false);
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }, 200);
    return () => clearInterval(interval);
  }, [ResponseMsg]);

  const [list, setList] = useState("");

  useEffect(() => {
    axios
      .get("https://betarena.herokuapp.com/api/crash/crashlist")
      .then((res) => {
        setList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  // useEffect(() => {
  //   const COLORS = [
  //     "#37afa9",
  //     "#63b19e",
  //     "#80b393",
  //     "#97b488",
  //     "#abb67d",
  //     "#beb771",
  //     "#cfb965",
  //     "#dfba57",
  //     "#efbb49",
  //     "#febc38",
  //   ];
  //   let canvas = null;
  //   function draw(nodeToData, agent) {
  //     if (window.document == null) {
  //       const nodesToDraw = [];
  //       iterateNodes(nodeToData, (_, color, node) => {
  //         nodesToDraw.push({
  //           node,
  //           color,
  //         });
  //       });
  //       agent.emit("drawTraceUpdates", nodesToDraw);
  //       return;
  //     }

  //     if (canvas === null) {
  //       initialize();
  //     }

  //     const canvasFlow = canvas;
  //     canvasFlow.width = window.innerWidth;
  //     canvasFlow.height = window.innerHeight;
  //     const context = canvasFlow.getContext("2d");
  //     context.clearRect(0, 0, canvasFlow.width, canvasFlow.height);
  //     iterateNodes(nodeToData, (rect, color) => {
  //       if (rect !== null) {
  //         drawBorder(context, rect, color);
  //       }
  //     });
  //   }

  //   function iterateNodes(nodeToData, execute) {
  //     nodeToData.forEach(({ count, rect }, node) => {
  //       const colorIndex = Math.min(COLORS.length - 1, count - 1);
  //       const color = COLORS[colorIndex];
  //       execute(rect, color, node);
  //     });
  //   }

  //   function drawBorder(context, rect, color) {
  //     const { height, left, top, width } = rect; // outline

  //     context.lineWidth = 1;
  //     context.strokeStyle = COLORS;
  //     context.strokeRect(left - 1, top - 1, width + 2, height + 2); // inset

  //     context.lineWidth = 1;
  //     context.strokeStyle = COLORS;
  //     context.strokeRect(left + 1, top + 1, width - 1, height - 1);
  //     context.strokeStyle = color;
  //     context.setLineDash([0]); // border

  //     context.lineWidth = 1;
  //     context.strokeRect(left, top, width - 1, height - 1);
  //     context.setLineDash([0]);
  //   }

  //   function destroy(agent) {
  //     if (window.document == null) {
  //       agent.emit("disableTraceUpdates");
  //       return;
  //     }

  //     if (canvas !== null) {
  //       if (canvas.parentNode != null) {
  //         canvas.parentNode.removeChild(canvas);
  //       }

  //       canvas = null;
  //     }
  //   }

  //   function initialize() {
  //     canvas = window.document.createElement("canvas");
  //     canvas.style.cssText = COLORS;
  //     const root = window.document.documentElement;
  //     root.insertBefore(canvas, root.firstChild);
  //   }
  // }) 
  ;

  return (
    <div className="crash-display-page-cover">
      <div onMouseEnter={openBa} className="side-menu-cover">
        <div className="side-menu-cover">
          <div className="side-menu-inner">
            <NavLink to="">
              <div className="side-menu-inner-icon">
                <img src={crash} alt="crash" width={"12px"} />
              </div>
            </NavLink>
            <NavLink to="">
              <div className="side-menu-inner-icon">
                <img src={dicer} alt="Dicer" width={"12px"} />
              </div>
            </NavLink>
            <NavLink to="">
              <div className="side-menu-inner-icon">
                <img src={dice} alt="Dice2" width={"12px"} />
              </div>
            </NavLink>
            <NavLink to="">
              <div className="side-menu-inner-icon">
                <img src={Jackpot} alt="Jackpot" width={"12px"} />
              </div>
            </NavLink>
            <NavLink to="">
              <div className="side-menu-inner-icon">
                <img src={Fragmentation} alt="Fragmentation" width={"30px"} />
              </div>
            </NavLink>
            <NavLink to="">
              <div className="side-menu-inner-icon">
                <img src={Wheel} alt="Wheel" width={"12px"} />
              </div>
            </NavLink>
            <NavLink to="">
              <div className="side-menu-inner-icon">
                <img src={machine} alt="machine" width={"12px"} />
              </div>
            </NavLink>
            <NavLink to="">
              <div className="side-menu-inner-icon">
                <img src={Coin} alt="Coin" width={"15px"} />
              </div>
            </NavLink>
            <NavLink to="">
              <div className="side-menu-inner-icon">
                <img src={Dices} alt="Dices" width={"12px"} />
              </div>
            </NavLink>
            <NavLink to="">
              <div className="side-menu-inner-icon">
                <img src={Rectangle} alt="Rectangle" width={"12px"} />
              </div>
            </NavLink>
            <NavLink to="">
              <div className="side-menu-inner-icon">
                <img src={Group} alt="Group" width={"12px"} />
              </div>
            </NavLink>
            <NavLink to="">
              <div className="side-menu-inner-icon">
                <img src={Rectangle1} alt="Rectangle1" width={"12px"} />
              </div>
            </NavLink>
            <NavLink to="">
              <div className="side-menu-inner-icon">
                <img src={Spade} alt="Spade" width={"12px"} />
              </div>
            </NavLink>
            <NavLink to="">
              <div className="side-menu-inner-icon">
                <img src={Sword} alt="Sword" width={"12px"} />
              </div>
            </NavLink>
            <NavLink to="">
              <div className="side-menu-inner-icon">
                <img src={Crown} alt="Crown" width={"12px"} />
              </div>
            </NavLink>
            <NavLink to="">
              <div className="side-menu-inner-icon">
                <img src={Rectangle2} alt="Rectangle2" width={"15px"} />
              </div>
            </NavLink>
          </div>
        </div>
      </div>

      {/* {showBa && <Baoriginal />} */}
      <div className="crash-Display-cover">
        <div className="crash-Display-cover-inner">
          <div className="crash-Display">
            <div className="crash-Display-left">
              <div className="crash-Display-left-top">
                <button
                  onClick={() => handleBetClick(1)}
                  className={`crash-Display-left-top1 ${
                    activeBet === 1 ? "active" : ""
                  }`}
                >
                  Classic
                </button>
                <button
                  onClick={() => handleBetClick(2)}
                  className={`crash-Display-left-top1 ${
                    activeBet === 2 ? "active" : ""
                  }`}
                >
                  Trenball
                </button>
              </div>

              {showBa && (
                <div onMouseLeave={closeBa} className="original">
                  <Baoriginal />
                </div>
              )}

              <div className="crash-Display-left-crash">
                <div className="display-crash-xzy">
                  <div className="crash-Display-left-crash-top">
                    <div className="crash-Display-left-crash-top1">
                      <h3>
                        BankRoll <span>CUB</span>
                      </h3>
                      <h4>3742964</h4>
                    </div>

                    <div className="crash-Display-left-crash-top2-cover">
                      {list &&
                        list.map((e) => (
                          <div key={e._id}>
                            {e.color === "green" && (
                              <div className="crash-Display-left-crash-top2">
                                <div className="crash-Display-left-crash-top2-circle"></div>
                                <div
                                  id="green"
                                  className="crash-Display-left-crash-top2-list"
                                >
                                  {e.crashlist}
                                </div>
                              </div>
                            )}
                            {e.color === "red" && (
                              <div className="crash-Display-left-crash-top2">
                                <div className="crash-Display-left-crash-top2-circle-red"></div>
                                <div
                                  id="red"
                                  className="crash-Display-left-crash-top2-list"
                                >
                                  {e.crashlist}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
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
                      {!loading && crashGame ? (
                        crashGame
                      ) : (
                        <div className="craash">
                          <h4>Reconnecting</h4>
                          <div className="lds-ellipsis">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="crash-text">
                    <h3>House Edge 1%</h3>
                  </div>
                </div>
                <div className="crash-light"></div>.
                <div className="main-crash-details-cover">
                  {activeBet === 2 && (
                    <div className="ball-crash-inputs1">
                      <div className="main-crash-inputs1-top">
                        <h3>Amount</h3>
                        <h3>
                          <span>0</span> USD
                        </h3>
                      </div>
                      <div className="ball-input-flex">
                        <div className="ball-input-flex1">
                          <input
                            type="number"
                            onChange={(e) => setStakeValue2(e.target.value)}
                            value={stakeValue2}
                            placeholder="1"
                          />
                        </div>
                        <div className="ball-input-flex2">
                          <button onClick={Half2}>/2</button>
                          <button onClick={Double2}>x2</button>
                          <button className="ball-input-flex2-arrows">
                            <div className="ball-input-flex2-arrows1">
                              <h3>&#10095;</h3>
                            </div>
                            <div className="ball-input-flex2-arrows2">
                              <h3>&#10095;</h3>
                            </div>
                          </button>
                        </div>
                      </div>

                      <div className="ball-buttons">
                        <div className="ball-buttons1">
                          <div className="ball-buttons1-top">
                            <h3>Payout</h3>
                            <h2>1.98x</h2>
                          </div>
                          <button className="ball-buttons1-inner-cover">
                            <div className="ball-buttons1-inner">
                              <h3>Red hot</h3>
                              <h3>(next round)</h3>
                            </div>
                          </button>
                        </div>
                        <div className="ball-buttons2">
                          <div className="ball-buttons2-top">
                            <h3>Payout</h3>
                            <h2>1.98x</h2>
                          </div>
                          <button className="ball-buttons2-inner-cover">
                            <div className="ball-buttons2-inner">
                              <h3>Red hot</h3>
                              <h3>(next round)</h3>
                            </div>
                          </button>
                        </div>
                        <div className="ball-buttons3">
                          <div className="ball-buttons3-top">
                            <h3>Payout</h3>
                            <h2>1.98x</h2>
                          </div>
                          <button className="ball-buttons3-inner-cover">
                            <div className="ball-buttons3-inner">
                              <h3>Red hot</h3>
                              <h3>(next round)</h3>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeBet === 1 && (
                    <>
                      <div className="main-crash-details">
                        {Bet && (
                          <>
                            <button className="button-cover-bet">
                              <div>Bet</div>
                            </button>
                          </>
                        )}
                        {Next && (
                          <>
                            <button className="button-cover">
                              <div>Bet</div>
                              <div className="sub-text">(Next round)</div>
                            </button>
                          </>
                        )}
                      </div>
                      <div className="main-crash-inputs">
                        <div className="main-crash-inputs1">
                          <div className="main-crash-inputs1-top">
                            <h3>Amount</h3>
                            <h3>
                              <span>0</span> USD
                            </h3>
                          </div>
                          <div className="crash-input-flex">
                            <NavLink to="">
                              <div className="crash-input-flex1">
                                <input
                                  type="number"
                                  onChange={(e) =>
                                    setStakeValue(e.target.value)
                                  }
                                  value={stakeValue}
                                  placeholder="1"
                                />
                              </div>
                              <div className="crash-input-flex2">
                                <button onClick={Half}>/2</button>
                                <button onClick={Double}>x2</button>
                                <button className="crash-input-flex2-arrows">
                                  <div className="crash-input-flex2-arrows1">
                                    <h3>&#10095;</h3>
                                  </div>
                                  <div className="crash-input-flex2-arrows2">
                                    <h3>&#10095;</h3>
                                  </div>
                                </button>
                              </div>
                            </NavLink>
                          </div>
                        </div>
                        <div className="main-crash-inputs2">
                          <div className="main-crash-inputs2-top">
                            <h3>Auto Cash out</h3>
                            <h3>
                              Chance <span>0.99%</span>
                            </h3>
                          </div>
                          <NavLink to="">
                            <input
                              type="number"
                              onChange={(e) => setAuto(e.target.value)}
                              value={auto}
                              placeholder="10.00"
                            />
                          </NavLink>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div className="main-crash-footer">
                  <img
                    className="pop-img-1"
                    onClick={() => setFirstPop(!firstPop)}
                    src={Keyboard}
                    alt="Keyboard"
                  />
                  <img
                    onClick={() => setSecondPop(!secondPop)}
                    src={graph}
                    alt="graph"
                  />
                  <img
                    onClick={() => setThirdPop(!thirdPop)}
                    src={plus}
                    alt="plus"
                  />
                </div>
                {secondPop && (
                  <div className="second-Pop">
                    <div className="second-Pop-top">Live Stats</div>
                    <div onClick={clearSecondPop} className="second-Pop-cancel">
                      &#10006;
                    </div>
                    <div className="second-Pop-bet">
                      <h2>Bet</h2>
                      <h3>&#10095;</h3>
                    </div>
                    <div className="second-Pop-body">
                      <div className="second-Pop-body1">
                        <h2>Bet</h2>
                        <img src={cycle} alt="cycle" width={"15px"} />
                      </div>
                      <div className="second-Pop-body2">
                        <div className="second-Pop-body1-1">
                          <h2>Wagered</h2>
                          <h3>
                            <span>image</span>0.00000000
                          </h3>
                        </div>
                        <div className="second-Pop-body1-2">
                          <h2>Profit</h2>
                          <h3>
                            <span>image</span>0.00000000
                          </h3>
                        </div>
                      </div>
                      <div className="second-Pop-body3"></div>
                      <div className="second-Pop-body4">
                        <div className="second-Pop-body4-1">
                          <h3>win</h3>
                          <span>0</span>
                        </div>
                        <div className="second-Pop-body4-2">
                          <h3>Lose</h3>
                          <span>0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {firstPop && (
                  <div className="first-pop-cover">
                    <div className="first-pop-inner">
                      <div className="first-pop-top">
                        <h2>Hot Keys</h2>
                        <h3 onClick={clearFirstPop}>&#10006;</h3>
                      </div>
                      <div className="first-pop-body">
                        <div className="first-pop-body-first">
                          <h2>Half Bet Amount</h2>
                          <h3>A</h3>
                        </div>
                        <div className="first-pop-body-first">
                          <h2>Double Bet Amount</h2>
                          <h3>S</h3>
                        </div>
                        <div className="first-pop-body-first">
                          <h2>Make a Bet</h2>
                          <h3>Space</h3>
                        </div>
                        <div className="first-pop-footer">
                          <input type="checkbox" name="checkbox" />
                          <h3>HotKeys Enabled</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {thirdPop && (
                  <div className="first-pop-cover">
                    <div className="first-pop-inner">
                      <div className="first-pop-top">
                        <h2>Help</h2>
                        <h3 onClick={clearThirdPop}>&#10006;</h3>
                      </div>
                      <div className="first-pop-body">
                        <div className="first-pop-question-first">
                          <h2>What Game Is This?</h2>
                          <h3>&#10095;</h3>
                        </div>
                        <div className="first-pop-question-first">
                          <h2>Fairness</h2>
                          <h3>&#10095;</h3>
                        </div>
                        <div className="first-pop-question-first">
                          <h2>Bankroll</h2>
                          <h3>&#10095;</h3>
                        </div>
                        <div className="first-pop-question-first">
                          <h2>Auto Crash Out</h2>
                          <h3>&#10095;</h3>
                        </div>
                        <div className="first-pop-question-first">
                          <h2>Trenball</h2>
                          <h3>&#10095;</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="crash-Display-right">
              <div className="crash-Display-right-top">
                <h2>All Bets</h2>
                <div className="crash-Display-right-top-right">
                  <h3>Trenball</h3>
                  <div className="check-box-setting">
                    <input type="checkbox" />
                  </div>
                </div>
              </div>
              <div className="crash-Display-right-table">
                {activeBet === 2 && (
                  <div className="crash-trenball-cover">
                    <div className="crash-versus">
                      <div className="crash-versus1">
                        <img src={red} alt="red" width={"50px"} />
                        <h3>Red Shiba</h3>
                      </div>
                      <div className="crash-versus2">
                        <h1>VS</h1>
                      </div>
                      <div className="crash-versus3">
                        <img src={green} alt="green" width={"50px"} />
                        <h3>Green Doge</h3>
                      </div>
                    </div>

                    <div className="crash-scores">
                      <div className="crash-scores1">
                        <div className="crash-scores1-1">
                          <h3>
                            Player <span>0</span>
                          </h3>
                        </div>
                        <div className="crash-scores1-2">
                          <h3>
                            Battles Won <span>0</span>
                          </h3>
                        </div>
                      </div>

                      <div className="crash-scores2">
                        <div className="crash-scores2-1">
                          <h3>
                            Player <span>0</span>
                          </h3>
                        </div>
                        <div className="crash-scores2-2">
                          <h3>
                            Battles Won <span>0</span>
                          </h3>
                        </div>
                      </div>
                    </div>

                    <table className="crash-table">
                      <thead>
                        <tr>
                          <th>Player</th>
                          <th>Cash Out</th>
                          <th>Amount</th>
                          <th>Profit</th>
                        </tr>
                      </thead>
                    </table>
                    <div className="crash-Display-right-body">
                      <div className="crash-Display-right-body-inner">
                        <img src={empty} alt="empty" width={"25px"} />
                        <h3>No Data Available</h3>
                      </div>
                    </div>
                  </div>
                )}

                {activeBet === 1 && (
                  <>
                    <table className="crash-table">
                      <thead>
                        <tr>
                          <th>Player</th>
                          <th>Cash Out</th>
                          <th>Amount</th>
                          <th>Profit</th>
                        </tr>
                      </thead>
                    </table>
                    <div className="crash-Display-right-body">
                      <table className="crash-table">
                        {Content &&
                          Content.map((data) => (
                            <tbody>
                              <tr>
                                <td>{data.name}</td>
                                <td>{data.cashOut}</td>
                                <td>{data.amount}</td>
                                <td>{data.profit}</td>
                              </tr>
                            </tbody>
                          ))}
                      </table>
                      {Content === [] && (
                        <>
                          <div className="crash-Display-right-body-inner">
                            <img src={empty} alt="empty" width={"25px"} />
                            <h3>No Data Available</h3>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="crash-Display-right-footer">
                      <div className="crash-Display-right-footer-left">
                        <h2>
                          <span>0</span>/0
                        </h2>
                        <h3>Players</h3>
                      </div>
                      <NavLink to="">
                        <button className="crash-Display-right-footer-right">
                          <div>Show More</div>
                        </button>
                      </NavLink>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="crash-history-cover">
            <BetHistory />

            <div className="bet-game-cover">
              <div className="bet-game">
                <h2>Crash</h2>
                <h3>Multiplayer</h3>
                <h3>BA Originals</h3>
              </div>
              <div className="bet-game-text">
                <h3>
                  CRASH is an online multiplayer blockchain guessing game that
                  made as an increasing curve that may crash at any time.
                </h3>
              </div>
            </div>
          </div>

          <Recommend />
        </div>
        <Footer />
      </div>
    </div>
  );
}
