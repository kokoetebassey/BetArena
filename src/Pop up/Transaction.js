import "./styles/transaction.css";
import { NavLink, Outlet } from "react-router-dom";
import TransactionCoins from "./TransactionCoins";
import deposit from "../images/deposit.svg";
import withdraw from "../images/widthdraw.svg";
import swap from "../images/swap.svg";
import vault from "../images/vault.svg";

export default function Transaction({
  displaySelectCoin,
  coinData,
  WalletAddress,
  SelectCoin,
}) {
  const ClearChooseCoin = () => {
    SelectCoin();
  };

  return (
    <>
      {!displaySelectCoin && (
        <div className="transaction">
          <div className="transaction-container">
            <div className="transaction-body">
              <div className="headers">
                <h2 className="wallet">Wallet</h2>
                <h2 className="transactions">Transactions </h2>
                <span className="cancelWallet">
                  <NavLink to="/">
                    <h3>&#10006;</h3>
                  </NavLink>
                </span>
              </div>
              <div className="transaction-routes">
                <NavLink to="deposit">
                  <img src={deposit} width={"20px"} alt="" />
                  <p>Deposit</p>
                </NavLink>
                <NavLink to="withdraw">
                  <img src={withdraw} width={"20px"} alt="" />
                  <p>Withdarw</p>
                </NavLink>
                <NavLink to="swap">
                  <img src={swap} width={"20px"} alt="" />
                  <p>BaSwap</p>
                </NavLink>
                <NavLink to="vault">
                  <img src={vault} width={"20px"} alt="" />
                  <p>Vault Pro</p>
                </NavLink>
              </div>
              <div className="transaction-contents">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      )}
      {displaySelectCoin && (
        <TransactionCoins
          WalletAddress={WalletAddress}
          ClearChooseCoin={ClearChooseCoin}
          coinData={coinData}
        />
      )}
    </>
  );
}
