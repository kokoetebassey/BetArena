import React, { useState } from "react";
import "./styles/transaction.css";
import { NavLink, Outlet } from "react-router-dom";
import TransactionCoins from "./TransactionCoins";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Transaction() {
  const [selectCoin] = useState(false);

  return (
    <>
      {!selectCoin && (
        <div className="transaction">
          <div className="transaction-container">
            <div className="transaction-body">
              <div className="headers">
                <h2 className="wallet">Wallet</h2>
                <h2 className="transactions">Transactions</h2>
              </div>
              <div className="transaction-routes">
                <NavLink to="deposit">Deposit</NavLink>
                <NavLink to="withdraw">Withdraw</NavLink>
                <NavLink to="swap">BaSwap</NavLink>
                <NavLink to="vault">Vault Pro</NavLink>
              </div>
              <div className="transaction-contents">
                <div className="deposit">
                  <div className="deposit-container">
                    <h3 className="deposit-currency">Currency</h3>
                    <div className="input-coin">
                      <div className="select-coin">
                        <div className="image">
                          <img
                            src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png"
                            alt=""
                          />
                        </div>
                        <div className="c">
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
                    <Outlet />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {selectCoin && <TransactionCoins />}
    </>
  );
}
