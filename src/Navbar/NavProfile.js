import React from "react";
import medal from "../images/medal.svg";
import global from "../images/global.svg";
import reward from "../images/reward (2).svg";
import { RiVipCrown2Fill } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import ba from "../images/ba.svg";
import affiliate from "../images/affiliate.png";
import transact from "../images/transact.svg";
import vault from "../images/vault.svg";
import { FaUserAlt, FaWallet, FaChartLine } from "react-icons/fa";
import { MdHeadphones } from "react-icons/md";
import { useLogOut } from "../hooks/useLogOut";

export default function WalletCoins({ profile }) {
  const { logout } = useLogOut();

  const HandleLogOut = () => {
    logout();
  };

  return (
    <div>
      <div className="pro-pop">
        <div className="pro-pop-inner">
          <div className="pro-pop-inner-top-flex">
            <div className="pro-pop-inner-top-flex-left">
              <div className="pro-pop-inner-top-flex-left-img">
                <img src={profile.img} alt="userImage" />
              </div>
              <div className="pro-pop-inner-top-flex-left1">
                <h3>{profile.username}</h3>
                <div className="pro-pop-inner-top-flex-left1-inner">
                  <div className="pro-pop-inner-top-flex-left1-inner-medal">
                    <img src={medal} alt="medal" />
                    <img src={medal} alt="medal" />
                    <img src={medal} alt="medal" />
                    <img src={medal} alt="medal" />
                    <img src={medal} alt="medal" />
                  </div>
                  <div className="pro-pop-inner-top-flex-left1-inner-rank">
                    <h4>
                      <span>{profile.ranking}</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="pro-pop-inner-top-flex-right">
              <img src={global} alt="global" />
              <h3>Global Setting</h3>
            </div>
          </div>
          <div className="pro-pop-inner-top2-cover">
            <div className="pro-pop-inner-top2">
              <div className="pro-pop-inner-top2-left">
                <h3>vip 0</h3>
              </div>
              <div className="pro-pop-inner-top2-right">
                <h4>
                  Need <span> 0</span> xp
                </h4>
                <h3>vip 1</h3>
              </div>
            </div>
            <div className="progress-vip-cover">
              <div className="progress-vip ">
                <div className="progress-motion-vip "></div>
              </div>
              <h3>5%</h3>
            </div>
          </div>

          <div className="pro-pop-inner-body">
            <div className="pro-pop-inner-body-inner">
              <div className="pro-pop-inner-body-inner1">
                <div className="pro-pop-inner-body-inner-left">
                  <FaUserAlt color="grey" />
                  <h3>User Information</h3>
                </div>
                <div className="pro-pop-inner-body-inner-left">
                  <FaChartLine color="grey" />
                  <h3>Statistics</h3>
                </div>
                <div className="pro-pop-inner-body-inner-left">
                  <img src={transact} alt="" />
                  <h3>Transaction</h3>
                </div>
                <div className="pro-pop-inner-body-inner-left">
                  <MdHeadphones color="grey" />
                  <h3>Live Support</h3>
                </div>
                <div className="pro-pop-inner-body-inner-left">
                  <img src={affiliate} alt="profile" />
                  <h3>Affiliate</h3>
                </div>
              </div>
              <div className="pro-pop-inner-body-inner2">
                <div className="pro-pop-inner-body-inner-right">
                  <FaWallet color="grey" />
                  <h3>Wallet</h3>
                </div>
                <div className="pro-pop-inner-body-inner-right">
                  <img src={ba} alt="ba" />
                  <h3>BASwap</h3>
                </div>
                <div className="pro-pop-inner-body-inner-right">
                  <img src={vault} alt="profile" />
                  <h3>Vault Pro</h3>
                </div>
                <div className="pro-pop-inner-body-inner-right">
                  <img src={reward} alt="reward" />
                  <h3>Reward</h3>
                </div>
                <div className="pro-pop-inner-body-inner-right">
                  <RiVipCrown2Fill color="grey" />
                  <h3>VIP Club</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="pro-pop-inner-footer" onClick={HandleLogOut}>
            <FiLogOut color="grey" />
            <h3>Logout</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
