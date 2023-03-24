import React from "react";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";

export default function TransactionCoins({ coinData, ClearChooseCoin }) {
  // const [walletAddress, setwalletAddress] = useState("");

  const [coinEl] = useState([
    {
      id: 1,
      coin_name: "BTC",
      coin_bal: "0.00000",
      coin_image:
        "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
        wallet_address: [{
          address: `128TUZbbpJ73zjEU1UUUJP2ftBYveTPXdC`,
        }]
    },
    {
      id: 2,
      coin_name: "USDT",
      coin_bal: "0.00000",
      coin_image:
        "https://assets.coingecko.com/coins/images/325/large/Tether.png",
        wallet_address:[{
          address:[{
            ERC20: `0x60a3171d77c38c4BEB84c0102680d4F4dc75e3db`,
            BEP20: `128TUZbbpJ73zjEU1UUUJP2ftBYveTPXdC`
          }] ,
        }]
    },
    {
      id: 3,
      coin_name: "ETH",
      coin_bal: "0.00000",
      coin_image:
        "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
        wallet_address:[{
          address: `0x60a3171d77c38c4BEB84c0102680d4F4dc75e3db`,
        }]
    },
    {
      id: 4,
      coin_name: "SOL",
      coin_bal: "0.00000",
      coin_image:
        "https://assets.coingecko.com/coins/images/4128/large/solana.png",
        wallet_address : [
          {
            address: `0x60a3171d77c38c4BEB84c0102680d4F4dc75e3db`,
          }
        ]
    },
    {
      id: 5,
      coin_name: "NEXO",
      coin_bal: "0.00000",
      coin_image:
        "https://assets.coingecko.com/coins/images/3695/large/nexo.png",
        wallet_address: [{
          address: `0x121d60bd726b0f79ed9b94e607f2d2bf1d11133b`,
        }]
    },
    {
      id: 6,
      coin_name: "USDC",
      coin_bal: "0.00000",
      coin_image:
        "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png",
        wallet_address:[{
          address: `0x121d60bd726b0f79ed9b94e607f2d2bf1d11133b`,
        }]
    },
    {
      id: 8,
      coin_name: "BNB",
      coin_bal: "0.00000",
      coin_image:
        "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png",
        wallet_address:[{
          address: `0x121d60bd726b0f79ed9b94e607f2d2bf1d11133b`,
        }]
    },
    {
      id: 9,
      coin_name: "BUSD",
      coin_bal: "0.00000",
      coin_image:
        "https://assets.coingecko.com/coins/images/9576/large/BUSD.png",
        wallet_address:[{
          address: `0x121d60bd726b0f79ed9b94e607f2d2bf1d11133b`,
        }]
    },
  ]);


  const HandleCoinSelect = (coin_name, coin_image, coin_bal, wallet_address) => {
    const data = { coin_name, coin_image, coin_bal, wallet_address};
    coinData(data);
    // console.log(data)
  };

  const Cancel = () => {
    ClearChooseCoin();
  };

  return (
    <div className="transaction">
      <div className="transaction-container">
        <div className="choose-coin-header">
          <h2 className="choose-coin">Choose Coin</h2>
          <h2 onClick={Cancel} className="cancel">
            &#x2715;
          </h2>
        </div>
        <div className="choose-coin-content">
          <div className="search-bar">
            <div className="search-bar-content">
              <div className="search-icon">
                <BiSearch />
              </div>
              <div className="input-section">
                <input type="text" />
              </div>
            </div>
          </div>

          {coinEl.map((e) => (
            <div
              key={e.id}
              onClick={() =>
                HandleCoinSelect(
                  e.coin_name,
                  e.coin_image,
                  e.coin_bal,
                  e.wallet_address
                )
              }
              className="choose-coin-body"
            >
              <div className="image">
                <img src={e.coin_image} alt="" />
              </div>
              <div className="name">
                <h3>{e.coin_name}</h3>
              </div>
              <div className="price">
                <h3>{e.coin_bal}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
