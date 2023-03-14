import React from "react";
import "./pagesStyles/vip.css";
import vip1 from "./images/vip main.png";
import vip from "./images/vip.png";
import forumTop from "./images/forum toper.png";
import forumCube from "./images/forum cube.png";
import forumMoney from "./images/forum money.png";
import forumBox from "./images/forum box.png";
import forumIcon from "./images/forum icon.png";
import forum1 from "./images/forum footer1.png";
import forum2 from "./images/forum footer2.png";
import forum3 from "./images/forum footer3.png";
import Footer from "./FooterPage";

export default function Vip() {
  return (
    <div className="forum-display">
      <div className="forum-page">
        <img src={vip1} alt="vip1" />
        <div className="forum-page-text">
          <h2>VIP - Exclusive Player Benefits</h2>
          <h3>
            As a way of showing our gratitude and appreciation to our VIP
            players, BC.GAME invites you to join our VIP Club where there is an
            abundance of gifts, giveaways, higher cash back and unique features.
            Don't miss out on all the exciting and amazing fun!
          </h3>
        </div>
      </div>


        <div className="forum-main-flex-header">
          <h1>VIP & SVIP Unlocked Rights</h1>
          <div className="forum-main-flex">
            <div className="forum-main-first-flex">
              <img src={vip} alt="vip1" width={"200px"} />
              <div className="forum-main-first-flex-top">
                <img src={forumTop} alt="forumTop" />
                <h1>VIP</h1>
              </div>
              <h3>Locked</h3>
              <div className="forum-main-first-flex-main">
                <img src={forumCube} alt="forumCube" />
                <h2>Roll Competition</h2>
                <h4>
                  Try your luck once a day for a spot on our daily top 10 and
                  win some free Doge!
                </h4>
              </div>
            </div>
            <div className="forum-main-first-flex">
              <img src={vip} alt="vip1" width={"200px"} />
              <div className="forum-main-first-flex-top">
                <img src={forumTop} alt="forumTop" />
                <h1>VIP</h1>
              </div>
              <h3>Locked</h3>
              <div className="forum-main-first-flex-main">
                <img src={forumMoney} alt="forumMoney" />
                <h2>Tip</h2>
                <h4>
                  Send a little (or a lot of) luck to your friends, you have
                  earned the ability to tip others.
                </h4>
              </div>
            </div>

            <div className="forum-main-first-flex">
              <img src={vip} alt="vip1" width={"200px"} />
              <div className="forum-main-first-flex-top">
                <img src={forumTop} alt="forumTop" />
                <h1>VIP</h1>
              </div>
              <h3>Locked</h3>
              <div className="forum-main-first-flex-main">
                <img src={forumBox} alt="forumBox" />
                <h2>Secret treasure</h2>
                <h4>The higher rank you are, the more surprising it will be</h4>
              </div>
            </div>
            <div className="forum-main-first-flex">
              <img src={vip} alt="vip1" width={"200px"} />
              <div className="forum-main-first-flex-top">
                <img src={forumTop} alt="forumTop" />
                <h1>VIP</h1>
              </div>
              <h3>Locked</h3>
              <div className="forum-main-first-flex-main">
                <img src={forumIcon} alt="forumIcon" />
                <h2>Private Chat</h2>
                <h4>
                  Send messages and chat with your closest friends in private
                  on-site
                </h4>
              </div>
            </div>
          </div>
        </div>

        <h1 className="footer-text-forum">Exclusive VIP & SVIP Benefits</h1>

        <div className="forum-footer-header">
          <div className="forum-footer-first">
              <img src={forum1} alt="forum1" />
              <h2>Unique VIP Transfer Program</h2>
              <h4>
                BETARENA.GG respects and welcomes every distinguished VIP and
                will give you an exclusive VIP status that you can continue your
                honor here. Contact us for details.
              </h4>
            </div>
          <div className="forum-footer-second">
              <img src={forum2} alt="forum2" />
              <h2>Unique VIP Transfer Program</h2>
              <h4>
                BETARENA.GG respects and welcomes every distinguished VIP and
                will give you an exclusive VIP status that you can continue your
                honor here. Contact us for details.
              </h4>
            </div>
            <div className="forum-footer-third">
              <img src={forum3} alt="forum3" />
              <h2>Unique VIP Transfer Program</h2>
              <h4>
                BETARENA.GG respects and welcomes every distinguished VIP and
                will give you an exclusive VIP status that you can continue your
                honor here. Contact us for details.
              </h4>
            </div>
      </div>
      <Footer />
    </div>
  );
}
