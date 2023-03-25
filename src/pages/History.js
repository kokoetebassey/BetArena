import React from "react";
import "./pagesStyles/lottery.css";
import back from "../images/images/white arrow back.png";
import arrow from "../images/images/white arrow.png";
import logo from "../images/images/lottery-main-logo.png";
import bar from "../images/images/lottery bar img.png";
import white from "../images/images/lottery white ball.png";
import green from "../images/images/lottery green ball.png";
import display from "../images/images/lottery-display-img.png";

export default function History() {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${day}/${month}/${year}`;

  let hoursMin = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className="lottery-page-cover">
      <div className="lottery-main">
        <div className="lottery-main-inner">
          <div className="lottery-main-flex">
            <div className="lottery-main-flex-text1">
              <h3>GAME ID</h3>
            </div>
            <div className="lottery-main-flex-img1">
              <img src={back} alt="back" />
            </div>
            <div className="lottery-main-flex-img2">
              <h3>000000</h3>
              <img src={arrow} alt="arrow" />
            </div>
            <img className="lottery-forward-arrow" src={arrow} alt="arrow" />
            <h4>
              {" "}
              {currentDate}, {hoursMin}
            </h4>
          </div>
          <div className="lottery-main-logo">
            <img src={logo} alt="logo" />
          </div>
        </div>

        <hr className="lottery-main-logo-line" />

        <div className="lottery-bar">
          <div className="lottery-bar-img">
            <img src={bar} alt="bar" />
          </div>
          <div className="lottery-balls">
            <img src={white} alt="white" />
            <img src={white} alt="white" />
            <img src={white} alt="white" />
            <img src={white} alt="white" />
            <img src={white} alt="white" />
            <img src={white} alt="white" />
            <img src={white} alt="white" />
            <img src={green} alt="green" />
          </div>
        </div>

        <div className="lottery-display">
          <div className="lottery-display1">
            <h3>Winners List</h3>
            <h4>
              Total tickets sold this round <span>0000</span>
            </h4>
          </div>
          <div className="lottery-display2">
            <h4>Winners List</h4>
            <h4>Numbers</h4>
            <h4>Matches</h4>
            <h4>Price</h4>
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
          <div className="lottery-display-btn">
            <h1>More</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
