import React from "react";

export default function Withdraw() {
  return (
    <>
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
    </>
  );
}
