import React, { useState } from "react";
import "../Pop up/styles/swap.css";
import bitcoin from "../images/bitcoin icon svg.svg";
import arrow from "../images/arrow.svg";
import vect from "../images/database.svg";
// import { useLocation } from "react-router";

export default function Swap() {
  const [swapAltcoin, setSwapAltcoin] = useState(0);
  // const { state } = useLocation();

  function handleSwap(index) {
    setSwapAltcoin(index);
  }
  return (
    <>
      <div className="swapcontainer">
        <div className="container">
          <div className="swapswitch">
            <div className="swapp">
              <div
                onClick={() => handleSwap(0)}
                className={`swappp ${swapAltcoin === 0 ? "active" : " "}`}
              >
                <h1>swap</h1>
              </div>
            </div>
            <div className="fromaltcoin">
              <div
                onClick={() => handleSwap(1)}
                className={`swappp ${swapAltcoin === 1 ? "active" : " "}`}
              >
                <h1>From Altcoin</h1>
              </div>
            </div>
          </div>
        </div>

        {swapAltcoin === 0 && (
          <>
            <div className="yousenddiv">
              <div className="yousend">
                <h1>You Send</h1>
              </div>
              <div className="minBal">
                <h1>Min:0</h1>
                <h2>Balance:0</h2>
              </div>
            </div>

            <div className="containerbottom">
              <div className="cbottomleft">
                <h1>0</h1>
                <span>
                  <h2>max</h2>
                </span>
              </div>
              <div className="cbottomright">
                <img src={bitcoin} alt="" width={"54px"} />
                <h1>BTC</h1>
                <img src={arrow} alt="" width={"7px"} className="arroww" />
              </div>
            </div>

            <div className="ccontbottom">
              <h1>1BTC</h1>
              <h4>=</h4>
              <h2>0.000000</h2>
              <h3>BTC</h3>
            </div>

            <div className="middlearrow"></div>

            <div className="aproximdiv">
              <h5>You get Approximately</h5>
              <h4>Record</h4>
            </div>

            <div className="containerbottom">
              <div className="cbottomleft">
                <h1>0</h1>
                <span></span>
              </div>
              <div className="cbottomright">
                <img src={bitcoin} alt="" width={"54px"} />
                <h1>BTC</h1>
                <img src={arrow} alt="" width={"7px"} className="arroww" />
              </div>
            </div>

            <div className="darkdiv">
              <div className="estimdiv">
                <h3>Estimated Time*</h3>
                <h4>Seconds</h4>
              </div>
              <div className="swapdiv">
                <h1>Swap fee:</h1>
                <h2>-</h2>
                <h3>BTC</h3>
              </div>
            </div>

            <button className="divbutton">Swap Now</button>
          </>
        )}

        {swapAltcoin === 1 && (
          <>
            <div className="fromaltcoin"></div>
            <div className="fromaltcoin"></div>

            <div className="altcointext">
              <span>
                <b>From Altcoin: </b>
              </span>
              Deposit using any ERC altcoins. Your funds will be converted and
              credited in the chosen currency supported by BETARENA.GG.
              Currently only alt coins on ERC chain are supported.
            </div>

            <div className="limitedanddeposit">
              <h2>You Send (Limited Time Deposit Bonus)</h2>
              <h3>More</h3>
            </div>

            <div className="middlecontainer">
              <div className="middlecleft">
                <div className="middlecleftinner">
                  <h2>$30</h2>
                  <h3> (or above to get bonus)</h3>
                </div>
                <h4>= 51.8843628 1INCH</h4>
              </div>
              <div className="middlecright">
                <h2>1INCH</h2>
                <img src={arrow} alt="" width={"7px"} />
              </div>
            </div>

            <div className="standalone">
              <h1>1BTC</h1>
              <h2>=</h2>
              <h3>0.0000000 BTC</h3>
            </div>

            <div className="aprodiv">
              <h2>You get Approximately</h2>
              <h3>Record</h3>
            </div>

            <div className="centercontainer">
              <div className="centerleft">
                <h2 className="hach">0.01607364</h2>
                <div className="innercenterleft">
                  <img src={vect} alt="" width={"20px"} />
                  <h2 className="hech">+100% Bonus</h2>
                  <div className="innerincenterleft">
                    <h1 className="hesh">End in</h1>
                    <h2 className="hesh1">00:00</h2>
                  </div>
                </div>
              </div>
              <div className="centerright">
                <img src={bitcoin} alt="" width={"54px"} />
                <h1>BTC</h1>
                <img src={arrow} alt="" width={"7px"} className="arroww" />
              </div>
            </div>

            <div className="endiv">
              <div className="endivinner">
                <h1 className="calor">Network fee </h1>
                <h1>0.00193586 ETH</h1>
              </div>
              <div className="endivinner">
                <h1 className="calor">Exchange fee </h1>
                <h1>0.000007232 ETH</h1>
              </div>
              <div className="endivinner">
                <h1 className="calor">Estimated Time</h1>
                <h1>5-30 minutes</h1>
              </div>
            </div>

            <button className="enbutton">Start Transaction</button>
          </>
        )}
      </div>
    </>
  );
}
