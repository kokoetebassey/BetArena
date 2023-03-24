import { FaRegCopy } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import star from "../images/Star 1.svg";
import reward from "../images/reward img.svg";
import React, { useEffect, useState } from "react";

export default function Deposit({
  selectCoin,
  usdt,
  cryptoCoin,
  cryptoWallet,
}) {
  const HandleCoin = () => {
    selectCoin();
  };

  const [erc] = useState(usdt[0]);
  const [bep, setBep] = useState();
  const [erc20, setErc20] = useState(0);

  useEffect(() => {
    if (erc) {
      setBep(usdt[0].ERC20);
    }
  }, [erc, usdt]);

  const [invite] = useState(cryptoWallet.address);
  const [copied, setCopied] = useState(false);

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

  const handleErc = (e) => {
    if (e === 0) {
      setBep(usdt[0].ERC20);
      setErc20(0);
    } else if (e === 1) {
      setBep(usdt[0].BEP20);
      setErc20(1);
    }
  };

  return (
    <>
      <div className="deposit">
        <div className="deposit-container">
          <h3 className="deposit-currency">Deposit Currency</h3>
          <div className="input-coin">
            <div className="select-coin" onClick={HandleCoin}>
              <div className="image">
                {cryptoCoin.coin_image ? (
                  <img src={cryptoCoin.coin_image} alt="" />
                ) : (
                  <img src="" alt="" />
                )}
              </div>
              <div className="name">
                {cryptoCoin.coin_name ? (
                  <h4>{cryptoCoin.coin_name}</h4>
                ) : (
                  <h4>Loading....</h4>
                )}
              </div>
              <div className="arrow">
                <MdOutlineKeyboardArrowRight />
              </div>
            </div>
            <div className="showBalance">
              <h3 className="balance">Balance : </h3>
              {cryptoCoin.coin_bal ? (
                <h4>{cryptoCoin.coin_bal}</h4>
              ) : (
                <h4>Loading....</h4>
              )}
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
          {usdt && (
            <div className="network-coin">
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
            </div>
          )}

          <div className="withdraw-currency">
            Deposit Address
            <h3>
              {cryptoCoin.coin_name ? (
                <h4>
                  {" "}
                  ( Note: Only<span> {cryptoCoin.coin_name}</span>){" "}
                </h4>
              ) : (
                <h4>Loading....</h4>
              )}
            </h3>
          </div>

          {!usdt && (
            <div className="input-coin">
              <div className="select-coin">
                <div className="wallet">
                  <div className="wallet-address">
                    {cryptoWallet ? (
                      <h4>{cryptoWallet.address}</h4>
                    ) : (
                      <h4>Loading....</h4>
                    )}
                  </div>
                  <div
                    onClick={() => copyToClipboard(`${invite}`)}
                    className="copy-icon"
                  >
                    <FaRegCopy />
                  </div>
                </div>
              </div>
            </div>
          )}

          {usdt && (
            <div className="input-coin">
              <div className="select-coin">
                <div className="wallet">
                  <div className="wallet-address">
                    {erc ? <h4>{bep}</h4> : <h4>Loading....</h4>}
                  </div>
                  <div
                    onClick={() => copyToClipboard(`${invite}`)}
                    className="copy-icon"
                  >
                    <FaRegCopy />
                  </div>
                </div>
              </div>
            </div>
          )}

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
