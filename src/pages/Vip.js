import React from "react";
import "./pagesStyles/vip.css";
import vip1 from "../images/images/vip1.png";
import forumCube from "../images/images/forum cube.png";
import forumMoney from "../images/images/forum money.png";
import forumBox from "../images/images/forum box.png";
import forumIcon from "../images/images/forum icon.png";
import forum1 from "../images/images/forum footer1.png";
import forum2 from "../images/images/forum footer2.png";
import forum3 from "../images/images/forum footer3.png";
import Footer from "./FooterPage";

export default function Vip() {
  return (
    <div className="forum-display">
      <div className="forum-page">
        <img className="classic" src={vip1} alt="vip1" />
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
        <div className="forum-flex-section">
          <div className="forum-flex-section-inner">
            <div className="forum-flex-section-inner-top">
              <div className="forum-flex-section-inner-top-left">Unlocked</div>
              <div className="forum-flex-section-inner-top-right">Vip</div>
            </div>
            <div className="forum-flex-section-inner-img1">
              <img src={forumCube} alt="forumCube" />
            </div>
            <div className="forum-flex-section-inner-text1">
              <div className="forum-flex-section-inner-text1-header">
                Roll Competition
              </div>
              <div className="forum-flex-section-inner-text1-header-body">
                Try your luck once a day for a spot on our daily top 10 and win
                some free Doge!
              </div>
            </div>
          </div>
          <div className="forum-flex-section-inner">
            <div className="forum-flex-section-inner-top">
              <div className="forum-flex-section-inner-top-left">Unlocked</div>
              <div className="forum-flex-section-inner-top-right">Vip</div>
            </div>
            <div className="forum-flex-section-inner-img1">
              <img src={forumMoney} alt="forumMoney" />
            </div>
            <div className="forum-flex-section-inner-text1">
              <div className="forum-flex-section-inner-text1-header">Tip</div>
              <div className="forum-flex-section-inner-text1-header-body">
                Send a little (or a lot of) luck to your friends, you have
                earned the ability to tip others.
              </div>
            </div>
          </div>
          <div className="forum-flex-section-inner">
            <div className="forum-flex-section-inner-top">
              <div className="forum-flex-section-inner-top-left">Unlocked</div>
              <div className="forum-flex-section-inner-top-right">Vip</div>
            </div>
            <div className="forum-flex-section-inner-img1">
              <img src={forumBox} alt="forumBox" />
            </div>
            <div className="forum-flex-section-inner-text1">
              <div className="forum-flex-section-inner-text1-header">
                Secret treasure
              </div>
              <div className="forum-flex-section-inner-text1-header-body">
                The higher rank you are, the more surprising it will be
              </div>
            </div>
          </div>
          <div className="forum-flex-section-inner">
            <div className="forum-flex-section-inner-top">
              <div className="forum-flex-section-inner-top-left">Unlocked</div>
              <div className="forum-flex-section-inner-top-right">Vip</div>
            </div>
            <div className="forum-flex-section-inner-img1">
              <img src={forumIcon} alt="forumIcon" />
            </div>
            <div className="forum-flex-section-inner-text1">
              <div className="forum-flex-section-inner-text1-header">
                Private Chat
              </div>
              <div className="forum-flex-section-inner-text1-header-body">
                Send messages and chat with your closest friends in private
                on-site
              </div>
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
            BETARENA.GG respects and welcomes every distinguished VIP and will
            give you an exclusive VIP status that you can continue your honor
            here. Contact us for details.
          </h4>
        </div>
        <div className="forum-footer-second">
          <img src={forum2} alt="forum2" />
          <h2>Unique VIP Transfer Program</h2>
          <h4>
            BETARENA.GG respects and welcomes every distinguished VIP and will
            give you an exclusive VIP status that you can continue your honor
            here. Contact us for details.
          </h4>
        </div>
        <div className="forum-footer-third">
          <img src={forum3} alt="forum3" />
          <h2>Unique VIP Transfer Program</h2>
          <h4>
            BETARENA.GG respects and welcomes every distinguished VIP and will
            give you an exclusive VIP status that you can continue your honor
            here. Contact us for details.
          </h4>
        </div>
      </div>
      <Footer />
    </div>
  );
}
