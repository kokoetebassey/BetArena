import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import MenuBar from "./components/MenuBar";
import Navbar from "./components/Navbar";
import HomeNavBar from "./components/HomeNavBar";
import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";
import Chat from "./components/Chat";

import Signup from "./Logins/Signup";
import Login from "./Logins/Login";

import { useAuthContext } from "./hooks/useAuthContext";
import Slot from "./pages/Slot";
import Affiliate from "./pages/Affiliate";
import Lottery from "./pages/Lottery";
import History from "./pages/History";
import Ticket from "./pages/Tickets";
import BCD from "./pages/BCD";
import Vip from "./pages/Vip";
import Promotion from "./pages/Promotion";
import TaskHup from "./pages/TaskHub";
import LiveCasino from "./pages/LiveCasino";
import Crash from "./Crash/Crash";
import Transaction from "./Pop up/Transaction";
import Deposit from "./Pop up/Deposit";
import Withdraw from "./Pop up/Withdraw";
import Swap from "./Pop up/Swap";
import Vault from "./Pop up/Vault";
import SecondStep from "./Logins/SecondStep";
import LastStep from "./Logins/LastStep";
import ChatRoom from "./Pop up/ChatRoom";
import Request from "./Pop up/Request";
import Options from "./Pop up/Options";

// import axios from "axios";
import UserInfo from "./Navbar/UserInfo";

// =============== Import HTTPS request ==================
import axios from "axios";

function App() {
  const [isTablet, setIsTablet] = useState(false);
  const [viewPoint, setViewPoint] = useState("default-view");

  const { user } = useAuthContext();

  const setScreen = () => {
    if (isTablet) {
      setIsTablet(false);
    } else {
      setIsTablet(true);
    }
  };

  const setView = (e) => {
    if (e === "full_view") {
      setViewPoint("full_view");
    } else if (e === "middle_view") {
      setViewPoint("middle_view");
    } else if (e === "left_view") {
      setViewPoint("left_view");
    } else if (e === "default") {
      setViewPoint("default-view");
    }
  };

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
          setCryptoCoin(response.data[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    if (user) {
      fetchData();
    }
  }, [user]);

  // console.log(cryptoCoin)

  const [displaySelectCoin, setDisplaySelectCoin] = useState(false);
  const [PublicMsg] = useState(false);

  const SelectCoin = (e) => {
    if (displaySelectCoin) {
      setDisplaySelectCoin(false);
    } else {
      setDisplaySelectCoin(true);
    }
  };

  const [cryptoWallet, setCryptoWallet] = useState("");
  const [cryptoCoin, setCryptoCoin] = useState("");
  const [USDTCoin, setUSDTCoin] = useState("");

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
          setCryptoCoin(response.data[0]);
          setCryptoWallet(response.data[0].wallet_address[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    if (user) {
      fetchData();
    }
  }, [user]);

  const coinData = (e) => {
    setCryptoCoin(e);
    setDisplaySelectCoin(false);
    if (e.coin_name === "USDT") {
      setUSDTCoin(e.wallet_address[0].address);
      setCryptoWallet("");
    } else {
      setUSDTCoin("");
      setCryptoWallet(e.wallet_address[0]);
    }
  };

  const Cancel = (e) => {
    // setPublicMsg(false);
    // if (menucount) {
    //   setView("default");
    //   setNavBarPage("Navbar-container");
    // } else {
    //   setView("full_view");
    //   setNavBarPage("openNavbar-container");
    // }
  };

  const WalletAddress = (e) => {
    console.log(e);
  };

  return (
    <div className="App">
      <BrowserRouter>
        {user && <HomeNavBar setView={setView} setScreen={setScreen} />}
        {PublicMsg && <Chat cancel={Cancel} />}

        <MenuBar isTablet={isTablet} />
        {!user && <Navbar setView={setView} setScreen={setScreen} />}
        <div className={viewPoint}>
          <Routes>
            <Route path="/" element={<Home />}></Route>

            {/* ================ Login route ============================= */}

            <Route path="/signup" element={<Signup />}>
              <Route path="regist" element={<Signup />} />
            </Route>
            <Route path="/signup/secon" element={<SecondStep />} />
            <Route path="/signup/finale" element={<LastStep />} />
            <Route path="/login" element={<Login />}></Route>

            <Route path="/user/information" element={<UserInfo />} />
            <Route path="/options" element={<Options />} />
            <Route path="/chat" element={<ChatRoom />}>
              <Route path="request" element={<Request />} />
            </Route>

            {/* ========= Pages ================= */}
            <Route path="/slots" element={<Slot />}></Route>
            <Route path="/affiliate" element={<Affiliate />}></Route>
            <Route path="/lottery" element={<Lottery />}>
              <Route index element={<Ticket />} />
              <Route path="tickets" element={<Ticket />} />
              <Route path="history" element={<History />} />
            </Route>
            <Route path="/vip" element={<Vip />}></Route>
            <Route path="/promotion" element={<Promotion />}></Route>
            <Route path="/live-casino" element={<LiveCasino />}></Route>

            {/* ========== Pop ============== */}
            <Route path="/BCD" element={<BCD />}></Route>
            <Route path="/TaskHup" element={<TaskHup />}></Route>

            {/* ============= Games =================== */}
            <Route path="/crash" element={<Crash />}></Route>

            {/* ====================== Transactions ================================ */}
            <Route
              path="/wallet"
              element={
                <Transaction
                  WalletAddress={WalletAddress}
                  coinData={coinData}
                  SelectCoin={SelectCoin}
                  displaySelectCoin={displaySelectCoin}
                />
              }
            >
              <Route index element={<Deposit />} />
              <Route
                path="deposit"
                element={
                  <Deposit
                    cryptoCoin={cryptoCoin}
                    usdt={USDTCoin}
                    cryptoWallet={cryptoWallet}
                    selectCoin={SelectCoin}
                  />
                }
              ></Route>
              <Route
                path="withdraw"
                element={
                  <Withdraw cryptoCoin={cryptoCoin} selectCoin={SelectCoin} />
                }
              ></Route>
              <Route
                path="swap"
                element={<Swap cryptoCoin={cryptoCoin} />}
              ></Route>
              <Route
                path="vault"
                element={<Vault cryptoCoin={cryptoCoin} />}
              ></Route>
            </Route>

            <Route path="/crash" element={<Crash />}></Route>
            {/* <Route path="BetHistory" element={<BetHistory />}></Route>

            <Route path="Recommend" element={<Recommend />}></Route>

            <Route path="/Support" element={<Support />}></Route>
            <Route path="/Support1" element={<Support1 />}></Route>
            <Route path="/Support2" element={<Support2 />}></Route>
            <Route path="/Support3" element={<Support3 />}></Route>
            <Route path="/Popup" element={<Popup />}></Route>
            <Route path="/ChatBox" element={<ChatBox />}></Route>
            <Route
              path="UsersNotification"
              element={<UsersNotification />}
            ></Route>

            <Route path="/ShitCode" element={<ShitCode />}></Route>
            <Route path="/TaskHub" element={<TaskHub />}></Route>
            <Route path="/Testing" element={<Testing />}></Route>*/}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
