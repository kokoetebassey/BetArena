import React from "react";
import { FaRegCopy } from "react-icons/fa";

export default function Deposit() {
  return (
    <>
      <h3 className="deposit-currency">Deposit wallet address</h3>
      <div className="input-coin">
        <div className="select-coin">
          <div className="image">
            <p>duguysiaygiaygiasfiwe78223973979827e7g8gias</p>
            <div className="copy-icon">
              <FaRegCopy />
            </div>
          </div>
        </div>
      </div>
      <h3 className="deposit-currency">Deposit Amount</h3>
      <div className="input-coin">
        <div className="select-coin">
          <input type="text" placeholder="Amount" />
        </div>
      </div>

      <div className="submit-btn">
        <button>Proceed</button>
      </div>
    </>
  );
}
