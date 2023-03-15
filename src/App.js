import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import MenuBar from "./components/MenuBar";
import Navbar from "./components/Navbar";
import HomeNavBar from "./components/HomeNavBar";
import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";

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

// import { useLogOut } from "./hooks/useLogOut";

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


  return (
    <div className="App">
        <BrowserRouter>     
      {user && <HomeNavBar setView={setView} setScreen={setScreen} />}
      <MenuBar isTablet={isTablet} />
      {!user && <Navbar setView={setView} setScreen={setScreen} />}
      <div className={viewPoint}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<Signup />}>
            <Route path="regist" element={<Signup />} />
          </Route>
          <Route path="/signup/secon" element={<SecondStep />} />
          <Route path="/signup/finale" element={<LastStep />} />

          <Route path="/login" element={<Login />}></Route>

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
          <Route path="/wallet" element={<Transaction />}>
            <Route index element={<Deposit />} />
            <Route path="deposit" element={<Deposit />}></Route>
            <Route path="withdraw" element={<Withdraw />}></Route>
            <Route path="swap" element={<Swap />}></Route>
            <Route path="vault" element={<Vault />}></Route>
          </Route>

          {/* <Route path="BetHistory" element={<BetHistory />}></Route>

            <Route path="Recommend" element={<Recommend />}></Route>
            <Route path="CrashPoint" element={<CrashPoint />}></Route>

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
            <Route path="/Testing" element={<Testing />}></Route> */}
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
