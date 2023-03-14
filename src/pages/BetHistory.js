import React, { useState } from "react";
import empty from "./images/empty.svg";

export default function BetHistory() {
  const [activeBet, setActiveBet] = useState(1);
  const handleBetClick = (index) => {
    setActiveBet(index);
  };
  return (
    <div className="crash-history-cover">
      <div className="crash-history">
        <button
          onClick={() => handleBetClick(1)}
          className={`crash-tab-button ${activeBet === 1 ? "active" : ""}`}
        >
          My Bets
        </button>
        <button
          onClick={() => handleBetClick(2)}
          className={`crash-tab-button ${activeBet === 2 ? "active" : ""}`}
        >
          History
        </button>
      </div>

      {activeBet === 1 && (
        <div className="bet-history-table">
          <table className="crash-table">
            <thead>
              <tr>
                <th>Bet ID</th>
                <th>Time</th>
                <th>Bet </th>
                <th>Payout</th>
                <th>Profit</th>
              </tr>
            </thead>

            {/* <tbody>
                <tr>
                  <td>Valiant</td>
                  <td>Bang</td>
                  <td>0.73458732543</td>
                  <td>0.56</td>
                </tr>
              </tbody> */}
          </table>
          <div className="bet-history-table-inner">
            <img src={empty} alt="empty" width={"120px"} />
            <h3>No Data Available</h3>
          </div>
        </div>
      )}
      {activeBet === 2 && (
        <div className="bet-history-table">
          <table className="crash-table">
            <thead>
              <tr>
                <th>Bet ID</th>
                <th>Time</th>
                <th>Bet </th>
              </tr>
            </thead>
            {/* <div className="bet-history-table-inner">
              <img src={empty} alt="empty" width={"120px"} />
              <h3>No Data Available</h3>
            </div> */}
            <tbody>
              <tr>
                <td>Valiant</td>
                <td>Bang</td>
                <td>0.73458732543</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
