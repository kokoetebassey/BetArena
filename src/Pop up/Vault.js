import React, { useState } from "react";
import "../Pop up/styles/vault.css";
import question from "../images/question.svg";
import arrow from "../images/arrow.svg";

export default function Vault({ cryptoCoin }) {
  const [sswitch, setSswitch] = useState(0);

  function handleSwitch(index) {
    setSswitch(index);
  }

  return (
    <>
      <div className="outofcont">
        <div className="outofcontleft">
          <h1>Annual Percentage Rate </h1>
          <h2> 5%</h2>
        </div>
        <div className="outofcontright">
          <img src={question} alt="" width={"15px"} />
          <h3> Security Rules</h3>
        </div>
      </div>

      <div className="containerboxx">
        <div className="transferswitch">
          <div className="switchleft">
            <div
              onClick={() => handleSwitch(0)}
              className={`switchleft1 ${sswitch === 0 ? "active" : " "}`}
            >
              <h1>Transfer In</h1>
            </div>
          </div>
          <div className="switchright">
            <div
              onClick={() => handleSwitch(1)}
              className={`switchleft1 ${sswitch === 1 ? "active" : " "}`}
            >
              <h1>Transfer Out</h1>
            </div>
          </div>
        </div>

        {sswitch === 0 && (
          <>
            <div className="topstandalone">
              <h1>You Send</h1>
              <div className="topstandflex">
                <h2>Wallet Balance: </h2>
                <h3>{cryptoCoin.coin_bal}</h3>
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
                <img
                  className="round"
                  src={cryptoCoin.coin_image}
                  alt=""
                  width={"24px"}
                />
                <h1>{cryptoCoin.coin_name}</h1>
                <img src={arrow} alt="" width={"7px"} className="arroww" />
              </div>
            </div>

            <button className="vaultbutton">Transfer to Vault Pro</button>
          </>
        )}

        {sswitch === 1 && (
          <>
            <div className="topstandalone">
              <h1>You Send</h1>
              <div className="topstandflex">
                <h2>Vault Balance: </h2>
                <h3>{cryptoCoin.coin_bal}</h3>
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
                <img src={cryptoCoin.coin_image} alt="" width={"30px"} />
                <h1>{cryptoCoin.coin_name}</h1>
                <img src={arrow} alt="" width={"7px"} className="arroww" />
              </div>
            </div>

            <button className="vaultbutton">Withdraw Wallet</button>
          </>
        )}
      </div>
    </>
  );
}
