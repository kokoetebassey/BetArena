import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Withdraw({ defaultTransaction, selectCoin }) {
  const HandleCoin = () => {
    selectCoin();
  };

  return (
    <>
      <div className="deposit">
        <div className="deposit-container">
          <h3 className="deposit-currency"> Currency</h3>
          <div className="input-coin">
            <div className="select-coin" onClick={HandleCoin}>
              <div className="image">
                <img src={defaultTransaction.coin_image} alt="" />
              </div>
              <div className="c">
                <h4>{defaultTransaction.coin_name}</h4>
              </div>
              <div className="arrow">
                <MdOutlineKeyboardArrowRight />
              </div>
            </div>
            <div className="showBalance">
              <h3 className="balance">Balance</h3>
              <h3>{defaultTransaction.coin_bal}</h3>
            </div>
          </div>

          <div className="withdraw-currency">
            Withdraw Address
            <h3>
              (Note: Only<span> {defaultTransaction.coin_name}</span>)
            </h3>
          </div>
          <div className="input-coin">
            <div className="select-coin">
              <input type="text" placeholder="Address" />
            </div>
          </div>

          <h3 className="deposit-currency">Withdraw Amount</h3>
          <div className="input-coin">
            <div className="select-coin">
              <input type="number" placeholder="Amount" />
            </div>
          </div>

          <div className="submit-btn">
            <button>Proceed</button>
          </div>
        </div>
      </div>
    </>
  );
}
