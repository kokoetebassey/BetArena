import "./styles/transaction.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import TransactionCoins from "./TransactionCoins";
import deposit from "../images/deposit.svg";
import withdraw from "../images/widthdraw.svg";
import swap from "../images/swap.svg";
import vault from "../images/vault.svg";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Transaction({
  displaySelectCoin,
  coinData,
  WalletAddress,
  SelectCoin,
}) {
  const navigate = useNavigate();
  const HandleBack = () => {
    navigate(-1);
  };

  const { user } = useAuthContext();

  const [navCoins, setNavCoins] = useState("");

  // =================Fetch default coins ==========================
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://betarena.herokuapp.com/api/profile/default-coin", {
          headers: {
            Authorization: `Bearer ${user.Token}`,
          },
        })
        .then((response) => {
          setNavCoins(response.data[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, [user]);

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
                <span className="cancelWallet" onClick={HandleBack}>
                  &#10006;
                </span>
              </div>
              <div className="transaction-routes">
                <div onClick={()=>navigate('deposit',{
                  state:{
                    navCoins
                  }
                })}>
                  <img src={deposit} width={"20px"} alt="" />
                  <p>Deposit</p>
                </div>
                <div onClick={()=>{navigate('withdraw',{
                  state:{
                    navCoins
                  }
                })}}>
                  <img src={withdraw} width={"20px"} alt="" />
                  <p>Withdarw</p>
                </div>
                <div onClick={()=>navigate('swap',{
                  state:{
                    navCoins
                  }
                })}>
                  <img src={swap} width={"20px"} alt="" />
                  <p>BaSwap</p>
                </div>
                <div onClick={()=>{navigate('vault',{
                  state:{
                    navCoins
                  }
                })}}>
                  <img src={vault} width={"20px"} alt="" />
                  <p>Vault Pro</p>
                </div>
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
