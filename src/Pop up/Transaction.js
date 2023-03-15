import React, { useState } from "react";
import "./styles/transaction.css";
import { NavLink, Outlet } from "react-router-dom";
import TransactionCoins from "./TransactionCoins";

export default function Transaction() {

  const [ selectCoin] = useState(false)

  return (
    <>
    { !selectCoin &&
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
            <Outlet />
          </div>
        </div>
      </div>
    </div>}
    { selectCoin && <TransactionCoins /> }
    </>
  );
}