import React from "react";
import "./pagesStyles/lottery.css";
// import { useState } from "react";
import lotteryBg from "./images/lottery bg1.png";
import lotteryBg1 from "./images/lottery bg.png";
import lottery1 from "./images/lottery1 img1.png";
import lottery2 from "./images/lottery1 img2.png";
import bar from "./images/lottery bar img.png";
import white from "./images/lottery white ball.png";
import green from "./images/lottery green ball.png";
import display from "./images/lottery-display-img.png";
import displayBg from "./images/lottery-display-bg.png";
import displayBg1 from "./images/lottery-display-bg1.png";
import displayBg2 from "./images/lottery-display-bg2.png";
import displayImg1 from "./images/lottery-display-img1.png";
import displayImg2 from "./images/lottery-display-img2.png";
import displayImg3 from "./images/lottery-display-img3.png";
import gold from "./images/gold arrow forward.png";
import footer from "./images/lottery footer img.png";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "./FooterPage";

export default function Lottery() {
  return (
    <div className="lottery-page-cover">
      <div className="lottery1">
        <div className="lottery1-bg">
          <img src={lotteryBg} alt="lotteryBg" />
        </div>
        <div className="lottery1-bg1">
          <img src={lotteryBg1} alt="lotteryBg1" />
          <h3>Rules</h3>
          <h4>Provably fair</h4>
        </div>
        <div className="lottery1-img1">
          <img src={lottery1} alt="lottery1" />
          <h4>Lottery game ID: 0000000</h4>
        </div>
        <div className="lottery1-img2">
          <img src={lottery2} alt="lottery2" />
          <h4>
            Don't miss your chance! <span>26382</span> tickets have been sold
            today!
          </h4>
          <div className="lottery-top-text">
            <h1>Buy Ticket </h1>
            <h2>1 ticket for $0.1</h2>
          </div>
        </div>
      </div>

      <div className="lottery-text-flex">
        <div className="lottery-text1">
          <NavLink to="tickets">
            <h4>My Ticket</h4>
          </NavLink>
        </div>
        <div className="lottery-text2">
          <NavLink to="History">
            <h4>History</h4>
          </NavLink>
        </div>
      </div>

      <Outlet />

      <div className="lottery2-heading">
        <h2>HOW TO PLAY</h2>
        <div className="lottery2-flex">
          <div className="lottery2-flex1">
            <div className="lottery2-flex1-bg">
              <img src={displayBg} alt="displayBg" width={"100%"} />
            </div>
            <div className="lottery2-flex1-text">
              <img src={displayImg1} alt="displayImg1" />
              <h3>BUY TICKETS</h3>
              <h4>Buy ticket with $0.1, and choose numbers for ticket.</h4>
            </div>
          </div>

          <div className="lottery2-flex1">
            <div className="lottery2-flex1-bg">
              <img src={displayBg1} alt="displayBg1" width={"100%"} />
            </div>
            <div className="lottery2-flex1-text">
              <img src={displayImg2} alt="displayImg2" />
              <h3>WAIT FOR THE DRAW</h3>
              <h4>Wait for the draw at 15:00 UTC+0 daily.</h4>
            </div>
          </div>

          <div className="lottery2-flex1">
            <div className="lottery2-flex1-bg">
              <img src={displayBg2} alt="displayBg2" width={"100%"} />
            </div>
            <div className="lottery2-flex1-text">
              <img src={displayImg3} alt="displayImg3" />
              <h3>CHECK FOR PRICES</h3>
              <h4>
                Once the draw is over, come back to this page and check your
                prize.
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="lottery3-heading">
        <h2>COCO LOTTERY RULE</h2>
      </div>

      <div className="lottery-main2">
        <div className="lottery-display">
          <div className="lottery-display-flex">
            <div className="lottery-display-flex1">
              <img src={display} alt="display" />
              <h4>Lorem Ipsum</h4>
            </div>
            <div className="lottery-display-flex2">
              <div className="lottery-display-flex-img">
                <img src={bar} alt="bar" />
              </div>
              <div className="lottery-display-flex-balls">
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={green} alt="green" />
              </div>
              <div className="lottery-display-flex2-text">
                <h4>x1</h4>
              </div>
            </div>
            <div className="lottery-display-flex3">
              <h4>4</h4>
            </div>
            <div className="lottery-display-flex4">
              <h4>$0.00</h4>
            </div>
          </div>
          <div className="lottery-display-flex">
            <div className="lottery-display-flex1">
              <img src={display} alt="display" />
              <h4>Lorem Ipsum</h4>
            </div>
            <div className="lottery-display-flex2">
              <div className="lottery-display-flex-img">
                <img src={bar} alt="bar" />
              </div>
              <div className="lottery-display-flex-balls">
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={green} alt="green" />
              </div>
              <div className="lottery-display-flex2-text">
                <h4>x1</h4>
              </div>
            </div>
            <div className="lottery-display-flex3">
              <h4>4</h4>
            </div>
            <div className="lottery-display-flex4">
              <h4>$0.00</h4>
            </div>
          </div>
          <div className="lottery-display-flex">
            <div className="lottery-display-flex1">
              <img src={display} alt="display" />
              <h4>Lorem Ipsum</h4>
            </div>
            <div className="lottery-display-flex2">
              <div className="lottery-display-flex-img">
                <img src={bar} alt="bar" />
              </div>
              <div className="lottery-display-flex-balls">
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={green} alt="green" />
              </div>
              <div className="lottery-display-flex2-text">
                <h4>x1</h4>
              </div>
            </div>
            <div className="lottery-display-flex3">
              <h4>4</h4>
            </div>
            <div className="lottery-display-flex4">
              <h4>$0.00</h4>
            </div>
          </div>
          <div className="lottery-display-flex">
            <div className="lottery-display-flex1">
              <img src={display} alt="display" />
              <h4>Lorem Ipsum</h4>
            </div>
            <div className="lottery-display-flex2">
              <div className="lottery-display-flex-img">
                <img src={bar} alt="bar" />
              </div>
              <div className="lottery-display-flex-balls">
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={green} alt="green" />
              </div>
              <div className="lottery-display-flex2-text">
                <h4>x1</h4>
              </div>
            </div>
            <div className="lottery-display-flex3">
              <h4>4</h4>
            </div>
            <div className="lottery-display-flex4">
              <h4>$0.00</h4>
            </div>
          </div>
          <div className="lottery-display-flex">
            <div className="lottery-display-flex1">
              <img src={display} alt="display" />
              <h4>Lorem Ipsum</h4>
            </div>
            <div className="lottery-display-flex2">
              <div className="lottery-display-flex-img">
                <img src={bar} alt="bar" />
              </div>
              <div className="lottery-display-flex-balls">
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={green} alt="green" />
              </div>
              <div className="lottery-display-flex2-text">
                <h4>x1</h4>
              </div>
            </div>
            <div className="lottery-display-flex3">
              <h4>4</h4>
            </div>
            <div className="lottery-display-flex4">
              <h4>$0.00</h4>
            </div>
          </div>
          <div className="lottery-display-flex">
            <div className="lottery-display-flex1">
              <img src={display} alt="display" />
              <h4>Lorem Ipsum</h4>
            </div>
            <div className="lottery-display-flex2">
              <div className="lottery-display-flex-img">
                <img src={bar} alt="bar" />
              </div>
              <div className="lottery-display-flex-balls">
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={green} alt="green" />
              </div>
              <div className="lottery-display-flex2-text">
                <h4>x1</h4>
              </div>
            </div>
            <div className="lottery-display-flex3">
              <h4>4</h4>
            </div>
            <div className="lottery-display-flex4">
              <h4>$0.00</h4>
            </div>
          </div>
          <div className="lottery-display-flex">
            <div className="lottery-display-flex1">
              <img src={display} alt="display" />
              <h4>Lorem Ipsum</h4>
            </div>
            <div className="lottery-display-flex2">
              <div className="lottery-display-flex-img">
                <img src={bar} alt="bar" />
              </div>
              <div className="lottery-display-flex-balls">
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={green} alt="green" />
              </div>
              <div className="lottery-display-flex2-text">
                <h4>x1</h4>
              </div>
            </div>
            <div className="lottery-display-flex3">
              <h4>4</h4>
            </div>
            <div className="lottery-display-flex4">
              <h4>$0.00</h4>
            </div>
          </div>
          <div className="lottery-display-flex">
            <div className="lottery-display-flex1">
              <img src={display} alt="display" />
              <h4>Lorem Ipsum</h4>
            </div>
            <div className="lottery-display-flex2">
              <div className="lottery-display-flex-img">
                <img src={bar} alt="bar" />
              </div>
              <div className="lottery-display-flex-balls">
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={white} alt="white" />
                <img src={green} alt="green" />
              </div>
              <div className="lottery-display-flex2-text">
                <h4>x1</h4>
              </div>
            </div>
            <div className="lottery-display-flex3">
              <h4>4</h4>
            </div>
            <div className="lottery-display-flex4">
              <h4>$0.00</h4>
            </div>
          </div>
        </div>

        <div className="lottery4">
          <h3>Lottery Instructions:</h3>
          <h4>
            A provably fair algorithm is used to draw the lottery prizes. <br />
            Prizes are drawn at 15:00 UTC+0 everyday. <br />
            You can buy a ticket for $0.1. The sale of tickets stop at 14:55
            UTC+0 everyday. <br />
            The player chooses six numbers for each ticket, the first five are
            from 1 to 36, and the last one is from 1 to 10. <br />
            You can choose numbers manually or automatically. <br />
            If you have BCL, you can use BCL to redeem Tickets. <br />
            Each draw produces six numbers. <br />
            The more numbers you match in the first five numbers, greater prize
            you will win.
          </h4>
          <h3>Winning Price Details:</h3>
          <h4>
            All six numbers matched: $100,000 prize. In case you are not the
            only winner, you may need to share the prize equally with others.
            <br />
            Five numbers matched, and the sixth number is missed: Each ticket
            gets a $3,000 prize. <br />
            Four of the first 5 numbers matched: Each ticket gets a $20 prize.
            <br />
            Three of the first 5 numbers matched: Each ticket gets a $1 prize.
            <br />
            If all six numbers are missed, the lottery will be reserved for
            free, and continue participating in the next day's draw.
          </h4>
          <div className="lottery-footer-btn">
               <h1>Probably Fair</h1>
            <img src={gold} alt="gold" width={"10px"} />
          </div>
        </div>
      </div>

      <div className="lottery-last-text">
        <div className="lottery-last-flex">
          <div className="lottery-last-text1">
            <h3>
              WHAT IS <span>BA?</span>
            </h3>

            <h4>
              BCL (BC Lottery) is a token created by BC.GAME for players who
              love
              <br />
              the Lottery. You can use BCL to redeem lottery tickets in the
              Lottery
              <br />
              at any time, 1 BCL = 1 lottery ticket.
            </h4>

            <div className="lottery-last-text2">
              <h4>Details</h4>
              <img src={gold} alt="gold" width={"10px"} />
            </div>
          </div>
          <img src={footer} alt="footer" />
        </div>
      </div>

      <Footer />
    </div>
  );
}
