import React, { useState, useEffect } from "react";
import { FaRegCopy } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import star from "../images/Star 1.svg";
import reward from "../images/reward img.svg";
import { useAuthContext } from "../hooks/useAuthContext";

import axios from "axios"

export default function Deposit({
  defaultTransaction,
  selectCoin,
  walletAddress,
}) {
  const HandleCoin = () => {
    selectCoin();
  };

  const { user } = useAuthContext();


  const [address] = useState(walletAddress);
  const [copied, setCopied] = useState(false);

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
            console.log(response.data[0]);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      fetchData();
    }, [user]);
  
    // const updateCoin = (e) => {
    //   setNavCoins(e);
    // };

  useEffect(() => {
    if (copied) {
      alert("Copied!");
    }
  }, [copied]);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      function () {
        setCopied(true);
      },
      function (err) {
        console.error("Could not copy text: ", err);
      }
    );
  };

  return (
    <>
      <div className="deposit">
        <div className="deposit-container">
          <h3 className="deposit-currency">Deposit Currency</h3>
          <div className="input-coin">
            <div className="select-coin" onClick={HandleCoin}>
              <div className="image">
                <img src={defaultTransaction.coin_image} alt="" />
              </div>
              <div className="name">
                <h4>{defaultTransaction.coin_name}</h4>
              </div>
              <div className="arrow">
                <MdOutlineKeyboardArrowRight />
              </div>
            </div>
            <div className="showBalance">
              <h3 className="balance">Balance : </h3>
              <h3>{defaultTransaction.coin_bal}</h3>
            </div>
          </div>

          <div className="deposit-reward-cover">
            <div className="deposit-reward-cover-tops">
              <h2>First Deposit Bonus</h2>
              <h3>More</h3>
            </div>
            <div className="deposit-reward">
              <div className="deposit-reward-inner">
                <div className="deposit-reward-inner1">
                  <h3 className="flexA">
                    $30 <span>(or above to get bonus)</span>
                  </h3>
                  <h3 className="flexB">
                    <span>≈ </span>
                    <span>
                      0.00125633 <span>BTC</span>
                    </span>
                  </h3>
                </div>
                <div className="deposit-reward-inner2">
                  <div className="deposit-reward-inner2-1">
                    <div className="deposit-reward-animation">
                      <img
                        className="deposit-reward-rotate"
                        src={star}
                        alt="star"
                      />
                      <img
                        className="deposit-reward-img"
                        src={reward}
                        alt="reward"
                      />
                    </div>
                    <div className="deposit-reward-text">
                      <h3>
                        +80% <span>Bonus</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="network-coin">
            <div className="network-coin-top">Choose Network</div>
            <div className="network-selection-cover">
              <div className="network-selection">
                <div
                  onClick={() => handleErc(0)}
                  className={`network-selection1 ${
                    erc20 === 0 ? "active" : ""
                  }`}
                >
                  <button>ERC20</button>
                </div>
                <div
                  onClick={() => handleErc(1)}
                  className={`network-selection1 ${
                    erc20 === 1 ? "active" : ""
                  }`}
                >
                  <button>BEP20</button>
                </div>
              </div>
            </div>
          </div> */}

          <div className="withdraw-currency">
            Deposit Address
            <h3>
              (Note: Only<span> {defaultTransaction.coin_name}</span>)
            </h3>
          </div>
          <div className="input-coin">
            <div className="select-coin">
              <div className="wallet">
                <div className="wallet-address">
                  <p>agirrhtffnrshnsrhntshnshshsrhsG</p>
                </div>
                <div className="copy-icon">
                  <FaRegCopy onClick={() => copyToClipboard(`${address}`)} />
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
        </div>
      </div>
    </>
  );
}
