import React from "react";
import { useState } from "react";
// import winner2 from "../images/winner 2.png";
import winner3 from "../images/winner 3.png";
import winner4 from "../images/winner 4.png";
import winner6 from "../images/winner 6.png";
import winner7 from "../images/winner 7.png";
import winner8 from "../images/winner 8.png";
import winner9 from "../images/winner 9.png";
import table1 from "../images/table 1.png";
import table2 from "../images/table 2.png";
import winner1 from "../images/winner 1.png";

export default function MobileGame() {
  const [activeContest, setActiveContest] = useState(0);

  const handleBetContest = (index) => {
    setActiveContest(index);
  };

  const Game = [
    {
      Game: "crash",
      Player: "crusher01",
      Amount: "100",
      Multiplier: "23.87",
      Profit: "100",
      icon: "table3",
    },
    {
      Game: "baccarat",
      Player: "dave",
      Amount: "45",
      Multiplier: "23.23",
      Profit: "748",
      icon: "table1",
    },
    {
      Game: "keno",
      Player: "valiant",
      Amount: "33",
      Multiplier: "23.93",
      Profit: "2",
      icon: "table1",
    },
    {
      Game: "limbo",
      Player: "destiny",
      Amount: "89",
      Multiplier: "2.63",
      Profit: "354",
      icon: "table2",
    },
    {
      Game: "plinko",
      Player: "joy21",
      Amount: "35",
      Multiplier: "3.68",
      Profit: "4598",
      icon: "table1",
    },
  ];
  return (
    <div>
      {" "}
      <div className="mobile-biggest-display">
        <div className="mobile-biggest-display-header">
          <h1>BIGGEST WINNERS TODAY</h1>
        </div>

        <div className="mobile-biggest-page">
          <div className="mobile-biggest-page-flex">
            <div className="mobile-biggest-page-text">
              <h1>
                WINNER WINNER <br />
                CHICKEN DINNER
              </h1>

              <button>Play Now</button>
            </div>
            <div className="mobile-biggest-page-img">
              <img src={winner1} alt="best" />
            </div>
          </div>

          <div className="mobile-biggest-page-table">
            <div className="mobile-cover-winner">
              <div className="mobile-top-winner">
                <img src={winner9} alt="best" />
              </div>
              <div className="mobile-biggest-page-table1">
                <img src={winner6} alt="best" />
                <div className="table1-center">
                  <img src={winner8} alt="best" />
                  <h3>hidden</h3>
                </div>
                <button>$185,365</button>
              </div>
              <div className="mobile-biggest-page-table2">
                <img src={winner8} alt="best" />
                <div className="table2-center">
                  <img src={winner4} alt="best" />
                  <h3>hidden</h3>
                </div>
                <button>$3,000</button>
              </div>
              <div className="mobile-biggest-page-table3">
                <img src={winner7} alt="best" />
                <div className="table3-center">
                  <img src={winner3} alt="best" />
                  <h3>hidden</h3>
                </div>
                <button>$45,000</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-latest">
        <button
          onClick={() => handleBetContest(0)}
          className={`mobile-row ${activeContest === 0 ? "active" : ""}`}
        >
          <h3>Latest Best</h3>
        </button>
        <button
          onClick={() => handleBetContest(1)}
          className={`mobile-row ${activeContest === 1 ? "active" : ""}`}
        >
          <h3>contest</h3>
        </button>
      </div>
      {activeContest === 0 && (
        <div className="table">
          <table className="mobile-table">
            <thead>
              <tr>
                <th>Game</th>
                <th>Player</th>
                <th>Amount</th>
                <th>Multiplier</th>
                <th>Profit</th>
              </tr>
            </thead>

            <tbody>
              {Game &&
                Game.map((bet) => (
                  <tr>
                    <td className="first-row-flex">
                      <img src={table1} alt="table1" width={"16px"} />
                      <h4>{bet.Game}</h4>
                    </td>
                    <td>{bet.Player}</td>
                    <td className="first-row-flex">
                      <img src={table2} alt="table2" width={"12px"} />
                      <h4>{bet.Amount}</h4>
                    </td>
                    <td>{bet.Multiplier}x</td>
                    <td>{bet.Profit}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
      {activeContest === 1 && (
        <div className="table">
          <div className="contest">
            <h3>No Contest Available yet</h3>
          </div>
        </div>
      )}
    </div>
  );
}
