import React, { useState } from "react";
import "./pagesStyles/crash.css";
import graph from "./images/graph.svg";
import Keyboard from "./images/Keyboard.svg";
import green from "./images/trenball_green.png";
import red from "./images/trenball_red.png";
import cycle from "./images/cycle.png";
import plus from "./images/plus sign.svg";
import empty from "./images/empty.svg";
import Footer from "./FooterPage";
import Recommend from "./Recommend";
import CrashPoint from "./CrashPoint";
import BetHistory from "./BetHistory";
import { NavLink } from "react-router-dom";

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

  // const crashGames = [
  //   {
  //     id: Math.random().toString(),
  //     gameName: "BankRoll",
  //     gameNumber: Math.random().toString(),
  //     coinType: "BTC",
  //   },
  //   {
  //     id: Math.random().toString(),
  //     gameWin: Math.random().toFixed(3),
  //     gameNumber: Math.random().toString(),
  //     coinType: "ETH",
  //   },
  //   {
  //     id: Math.random().toString(),
  //     gameWin: Math.random().toString(),
  //     gameNumber: Math.random().toString(),
  //     coinType: "SHB",
  //   },
  // ];

  return (
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

            <div className="crash-Display-left-crash">
              <CrashPoint />
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
                        <input type="number" name="number" />
                      </div>
                      <div className="ball-input-flex2">
                        <button>/2</button>
                        <button>x2</button>
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
                      <NavLink to="/login">
                        <button className="button-cover">
                          <div className="button-inner">
                            <div>Bet</div>
                            <div className="sub-text">(Next round)</div>
                          </div>
                        </button>
                      </NavLink>
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
                          <NavLink to="/login">
                            <div className="crash-input-flex1">
                              <input type="number" name="number" />
                            </div>
                            <div className="crash-input-flex2">
                              <button>/2</button>
                              <button>x2</button>
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
                        <NavLink to="/login">
                          <input
                            type="number"
                            name="number"
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
                    <div className="crash-Display-right-body-inner">
                      <img src={empty} alt="empty" width={"25px"} />
                      <h3>No Data Available</h3>
                    </div>
                  </div>
                  <div className="crash-Display-right-footer">
                    <div className="crash-Display-right-footer-left">
                      <h2>
                        <span>0</span>/0
                      </h2>
                      <h3>Players</h3>
                    </div>
                    <NavLink to="/login">
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
  );
}
