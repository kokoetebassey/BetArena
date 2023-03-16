import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Withdraw() {
  return (
    <div className="deposit">
      <div className="deposit-container">
        <h3 className="deposit-currency">Withdraw Currency</h3>
        <div className="input-coin">
          <div className="select-coin">
            <div className="image">
              <img
                src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png"
                alt=""
              />
            </div>
            <div className="name">
              <h4>BTC</h4>
            </div>
            <div className="arrow">
              <MdOutlineKeyboardArrowRight />
            </div>
          </div>
          <div className="showBalance">
            <h3 className="balance">Balance</h3>
            <h3>0</h3>
          </div>
        </div>

        <div className="withdraw-address">
          <label htmlFor="withdraw">Withdraw wallet address</label>
          <input type="text" placeholder="Wallet Address" />
        </div>

        <h3 className="deposit-currency">Withdraw Amount</h3>
        <div className="input-coin">
          <div className="select-coin">
            <input type="text" placeholder="Amount" />
          </div>
        </div>
        <div className="submit-btn">
          <button>Proceed</button>
        </div>
      </div>
    </div>
  );
}
