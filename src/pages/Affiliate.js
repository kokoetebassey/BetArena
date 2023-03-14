import React from "react";
import "./pagesStyles/affiliate.css";
import icon1 from "./images/affiliate icon1.png";
import icon2 from "./images/affiliate icon2.png";
import affiliateBg from "./images/affiliate bg.png";
import affiliateWrite from "./images/affiliate write up.png";
import affiliateMain from "./images/affiliate main img.png";
import affiliateBubble from "./images/affiliate bubble.png";
import affiliateIcon from "./images/affiliate icon.png";
import affiliateFlex1 from "./images/affiliate flex img1.png";
import affiliateFlex2 from "./images/affiliate flex img2.png";
import badge from "./images/affiliate badge.png";
import affiliateFlexIcon3 from "./images/affiliate-flex3 icon.png";
import affiliateFlex21 from "./images/affiliate-flex3 img.png";
import affiliateLogo from "./images/affiliate-flex4 logo.png";
import affiliateLogo1 from "./images/affiliate-flex5 logo1.png";
import affiliateLogo2 from "./images/affiliate-flex4 logo2.png";
import affiliateLogoLast from "./images/affiliate flex6 logo.png";
import Footer from "./FooterPage";

export default function Affiliate() {
  return (
    <div className="affiliate-page-cover">
      <div className="affiliate-top-flex">
        <div className="affiliate-top-menu1">
          <img src={icon1} alt="icon1" width={"19px"} />
          <h5>Commission rules</h5>
        </div>
        <div className="affiliate-top-menu2">
          <img src={icon2} alt="icon2" width={"19px"} />
          <h5>Affiliates terms</h5>
        </div>
      </div>

      <div className="affiliate-display">
        <div className="affiliate-display-main">
          <img src={affiliateBg} alt="affiliateBg" width={"100%"} />
        </div>
        <div className="affiliate-main-img3">
          <img src={affiliateWrite} alt="affiliateWrite" />
        </div>
        <div className="affiliate-main-img1">
          <img src={affiliateMain} alt="affiliateMain" />
        </div>
        <div className="affiliate-main-img2">
          <img src={affiliateBubble} alt="affiliateBubble" />
        </div>
        <div className="affiliate-main-side">
          <img src={affiliateIcon} alt="affiliateIcon" width={"17px"} />
          <h5>Affiliate Dashboard</h5>
        </div>
      </div>

      <div className="affiliate-main-btn">
        <h5>Create Referral Code Now</h5>
      </div>

      <div className="affiliate-main-heading">
        <h1>START EARNING TODAY</h1>
      </div>

      <div className="affiliate-flex2">
        <div className="affiliate-flex2-1">
          <div className="affiliate-flex2-1-img"></div>
          <h1>
            l Build Your Own <br />
            Casino Club Quickly.
          </h1>
          <h4>
            It's hard to build a casino, but you can start from managing your
            own table on <span>BETARENA.GG</span>
            <br />
            BC.GAME is not just games, its a platform to realize the potential
            of your hidden dreams. Join
            <span>BETARENA.GG</span> and set sail on a new chapter in your
            wealth journey immediately!
          </h4>
          <div className="affiliate-flex2-1-logo">
            <img src={affiliateFlex1} alt="affiliateFlex1" />
          </div>
        </div>
        <div className="affiliate-flex2-2">
          <div className="affiliate-flex2-2-img"></div>
          <h1>
            Build A Casino Website <br />
            With Your Own Domain.
          </h1>
          <h4>
            If you got your own plan. you can set up a casino website with your
            own domain, design style and theme. If you are capable to invite
            players and their wager amount reaches a billion dollars and above,
            you will be able to get your own customized casino! <br />
            Contact <span>Affiliate@betarena.gg</span> for more details
          </h4>
          <div className="affiliate-flex2-2-logo">
            <img src={affiliateFlex2} alt="affiliateFlex2" />
          </div>
        </div>
      </div>

      <div className="affiliate-main-heading2">
        <h1>
          <span>AFFILIATE</span> REWARD SYSTEM
        </h1>
        <h4>
          BC.GAME sets up a reward of 100 USD for each referral you invite in
          addition to commission. Click "Create Referral Code Now" and set sail
          on a new chapter on your journey of wealth immediately!
        </h4>
        <div className="affiliate-reward">
          <img src={badge} alt="badge" />
          <h3>Affiliate Rewards</h3>
        </div>
      </div>

      <div className="affiliate-flex3">
        <div className="affiliate-flex3-1">
          <div className="affiliate-flex3-1-img">
            {/* <img src={affiliateFlex4} alt="affiliateFlex3" /> */}
          </div>
          <div className="affiliate-flex3-1-flex1">
            <div className="affiliate-flex3-1-text">
              <h1>USD REWARDS</h1>
              <h3>Every friend you invite will get you</h3>
              <h4>
                <span>$1,000.00 USD</span> Rewards Rules
              </h4>
            </div>
            <img src={affiliateFlexIcon3} alt="affiliateFlexIcon3" />
          </div>

          <div className="affiliate-flex3-table">
            <div className="affiliate-flex3-table-flex">
              <div className="affiliate-flex3-table-flex1">
                <h1>Invitee’s VIP Level</h1>
                <div className="affiliate-flex3-table-1">
                  <h3>VIP00</h3>
                  <h3>VIP00</h3>
                  <h3>VIP00</h3>
                  <h3>VIP00</h3>
                  <h3>VIP00</h3>
                  <h3>VIP00</h3>
                  <h3>VIP00</h3>
                  <h3>VIP00</h3>
                </div>
              </div>
              <div className="affiliate-flex3-table-flex2">
                <h1>Total wager</h1>
                <div className="affiliate-flex3-table-2">
                  <h3>00000000</h3>
                  <h3>00000000</h3>
                  <h3>00000000</h3>
                  <h3>00000000</h3>
                  <h3>00000000</h3>
                  <h3>00000000</h3>
                  <h3>00000000</h3>
                  <h3>00000000</h3>
                </div>
              </div>
              <div className="affiliate-flex3-table-flex3">
                <h1>Rewards</h1>
                <div className="affiliate-flex3-table-3">
                  <h3>$00000.00</h3>
                  <h3>$00000.00</h3>
                  <h3>$00000.00</h3>
                  <h3>$00000.00</h3>
                  <h3>$00000.00</h3>
                  <h3>$00000.00</h3>
                  <h3>$00000.00</h3>
                  <h3>$00000.00</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="affiliate-flex3-1">
          <div className="affiliate-flex3-1-img"></div>
          <div className="affiliate-flex3-1-flex1">
            <div className="affiliate-flex3-1-text">
              <h1>COMMISSION REWARDS</h1>
              <h3>
                Every friend you invite will rebate you a percentage of their
                wagers as your commission and will be credited directly to your
                balance.
              </h3>
            </div>
            <img src={affiliateFlexIcon3} alt="affiliateFlexIcon3" />
          </div>

          <div className="affiliate-flex3-table">
            <div className="affiliate-flex3-table-flex">
              <img
                src={affiliateFlex21}
                alt="affiliateFlex21"
                width={"200px"}
              />
            </div>
          </div>
        </div>

        {/* <div className="affiliate-flex3-2">
          <div className="affiliate-flex3-2-img"></div>
          <div className="affiliate-flex3-1-flex2">
            <div className="affiliate-flex3-2-text">
              <h1>COMMISSION REWARDS</h1>
              <h3>
                Every friend you invite will rebate you a percentage of their
                wagers as your commission and will be credited directly to your
                balance.
              </h3>
            </div>
            <img src={affiliateFlexIcon3} alt="affiliateFlexIcon3" />
          </div>

          <div className="affiliate-flex3-table2">
            <img src={affiliateFlex21} alt="affiliateFlex21" />
            <img src="./images/affiliate-flex3 img.png" alt="" />
          </div>
        </div> */}
      </div>

      <div className="affiliate-flex4">
        <div className="affiliate-flex4-bg">
          <img src={affiliateLogo} alt="" />
          <img src="./images/affiliate-flex4 logo.png" alt="" />
          <h4>
            If you have any special offers regarding cooperation or you have
            access to a large audience. Please feel free to contact our manager
            by Telegram. We're happy to discuss individual terms of the
            affiliate program tailored to you.
          </h4>
        </div>
      </div>

      <div className="affiliate-flex5">
        <h1>REWARDS SENT TO-DATE</h1>
        <div className="affiliate-flex5-flex">
          <div className="affiliate-flex5-flex-left">
            <div className="affiliate-flex5-bg">
              <img src={affiliateLogo1} alt="affiliateLogo1" width={"100px"} />
            </div>
            <div className="affiliate-flex5-btn1">
              <h4>USD rewards sent to-date</h4>
              <h3>$0000000.00</h3>
            </div>
          </div>
          <div className="affiliate-flex5-flex-right">
            <div className="affiliate-flex5-btn1">
              <h4>Commission sent to-date</h4>
              <h3>$0000000.00</h3>
            </div>
            <div className="affiliate-flex5-btn2">
              <img src={affiliateLogo2} alt="affiliateLogo2" width={"100px"} />
            </div>
          </div>
        </div>
      </div>

      <div className="affiliate-flex6-heading">
        <h1>PLATFORM REAL-TIME REWARDS</h1>
        <div className="affiliate-flex6">
          <div className="affiliate-flex6-text1">
            <div className="affiliate-flex6-text">
              <h2>Players</h2>
              <h2>Commission/Rewards</h2>
            </div>

            <div className="affiliate-flex6-row">
              <h3>Lorem</h3>
              <div className="affiliate-flex6-row-end">
                <h3>0.0000</h3>
                <img src={affiliateLogoLast} alt="affiliateLogoLast" />
              </div>
            </div>

            <div className="affiliate-flex6-row-none">
              <h3>Lorem</h3>
              <div className="affiliate-flex6-row-end">
                <h3>0.0000</h3>
                <img src={affiliateLogoLast} alt="affiliateLogoLast" />
              </div>
            </div>

            <div className="affiliate-flex6-row">
              <h3>Lorem</h3>
              <div className="affiliate-flex6-row-end">
                <h3>0.0000</h3>
                <img src={affiliateLogoLast} alt="affiliateLogoLast" />
              </div>
            </div>

            <div className="affiliate-flex6-row-none">
              <h3>Lorem</h3>
              <div className="affiliate-flex6-row-end">
                <h3>0.0000</h3>
                <img src={affiliateLogoLast} alt="affiliateLogoLast" />
              </div>
            </div>

            <div className="affiliate-flex6-row">
              <h3>Lorem</h3>
              <div className="affiliate-flex6-row-end">
                <h3>0.0000</h3>
                <img src={affiliateLogoLast} alt="affiliateLogoLast" />
              </div>
            </div>

            <div className="affiliate-flex6-row-none">
              <h3>Lorem</h3>
              <div className="affiliate-flex6-row-end">
                <h3>0.0000</h3>
                <img src={affiliateLogoLast} alt="affiliateLogoLast" />
              </div>
            </div>

            <div className="affiliate-flex6-row">
              <h3>Lorem</h3>
              <div className="affiliate-flex6-row-end">
                <h3>0.0000</h3>
                <img src={affiliateLogoLast} alt="affiliateLogoLast" />
              </div>
            </div>

            <div className="affiliate-flex6-row-none">
              <h3>Lorem</h3>
              <div className="affiliate-flex6-row-end">
                <h3>0.0000</h3>
                <img src={affiliateLogoLast} alt="affiliateLogoLast" />
              </div>
            </div>
          </div>

          <div className="affiliate-flex6-text2">
            <div className="affiliate-flex6-text">
              <h2>Players</h2>
              <h2>Commission/Rewards</h2>
            </div>
            <div className="affiliate-flex6-row">
              <h3>Lorem</h3>
              <div className="affiliate-flex6-row-end">
                <h3>0.0000</h3>
                <img src={affiliateLogoLast} alt="affiliateLogoLast" />
              </div>
            </div>

            <div className="affiliate-flex6-row-none">
              <h3>Lorem</h3>
              <div className="affiliate-flex6-row-end">
                <h3>0.0000</h3>
                <img src={affiliateLogoLast} alt="affiliateLogoLast" />
              </div>
            </div>

            <div className="affiliate-flex6-row">
              <h3>Lorem</h3>
              <div className="affiliate-flex6-row-end">
                <h3>0.0000</h3>
                <img src={affiliateLogoLast} alt="affiliateLogoLast" />
              </div>
            </div>

            <div className="affiliate-flex6-row-none">
              <h3>Lorem</h3>
              <div className="affiliate-flex6-row-end">
                <h3>0.0000</h3>
                <img src={affiliateLogoLast} alt="affiliateLogoLast" />
              </div>
            </div>

            <div className="affiliate-flex6-row">
              <h3>Lorem</h3>
              <div className="affiliate-flex6-row-end">
                <h3>0.0000</h3>
                <img src={affiliateLogoLast} alt="affiliateLogoLast" />
              </div>
            </div>

            <div className="affiliate-flex6-row-none">
              <h3>Lorem</h3>
              <div className="affiliate-flex6-row-end">
                <h3>0.0000</h3>
                <img src={affiliateLogoLast} alt="affiliateLogoLast" />
              </div>
            </div>

            <div className="affiliate-flex6-row">
              <h3>Lorem</h3>
              <div className="affiliate-flex6-row-end">
                <h3>0.0000</h3>
                <img src={affiliateLogoLast} alt="affiliateLogoLast" />
              </div>
            </div>

            <div className="affiliate-flex6-row-none">
              <h3>Lorem</h3>
              <div className="affiliate-flex6-row-end">
                <h3>0.0000</h3>
                <img src={affiliateLogoLast} alt="affiliateLogoLast" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="affiliate-footer">
        <h1>Create Referral code</h1>
      </div>

      <Footer />
    </div>
  );
}
