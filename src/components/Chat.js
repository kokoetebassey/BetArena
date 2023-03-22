import React from "react";
import "./styles/chat.css";
import cup from "../images/images/cup.svg";
import { AiFillExclamationCircle } from "react-icons/ai";
import chat from "../images/chatimg.svg";
import { NavLink } from "react-router-dom";

export default function Chat({ cancel }) {
  const Clear = (e) => {
    cancel(e);
  };
  return (
    <div className="chat-display">
      <div className="chat-page">
        <div className="chat-top">
          <div className="chat-top-flex">
            <div className="chat-top-flex1">
              <h3>Global</h3>
            </div>
            <div className="chat-top-flex2">
              <h4> &#10095;</h4>
            </div>
          </div>
          <div className="chat-top-flex22">
            <div className="chat-top-flex22-1">
              <p className="exclaimation">
                <AiFillExclamationCircle />
              </p>
            </div>
            <div className="chat-top-flex22-2">
              <img src={cup} alt="cup" width={"19px"} />
            </div>
            <div
              className="chat-top-flex22-3"
              onClick={() => Clear("clear this guy")}
            >
              <h3> &#10006;</h3>
            </div>
          </div>
        </div>

        <div className="chat-body">
          <div className="chat-body-container">
            <div className="profile-contents">
              <div className="profile-img">
                <img src={chat} alt="" />
              </div>
              <div className="rank">
                <h3>V000</h3>
              </div>
            </div>
            <div className="message-container">
              <div className="profile-name">
                <h4>
                  JOy <span>2:34</span>{" "}
                </h4>
              </div>
              <div className="message-body">
                <h3>
                  my messahes dcic sjsixs sjxhxx sjxsxvuaxavxias usiasba shaisaj
                  sjhasasjaks{" "}
                </h3>
              </div>
            </div>
            '
          </div>

          <div className="chat-footer">
            <div className="send-input">
              <form>
                <div className="input-message">
                  <input type="text" placeholder="Your message" />
                </div>
                <div className="send-input-area-btn">
                  <h3>&#10147;</h3>
                </div>
              </form>
            </div>
            <div className="send-input-last">
              <div className="send-input-last1">
                <div className="send-input-last2">
                  <NavLink>
                    <AiFillExclamationCircle />
                  </NavLink>
                </div>
                <div className="send-input-last2">
                  <NavLink>
                    <AiFillExclamationCircle />
                  </NavLink>
                </div>
                <div className="send-input-last2">
                  <NavLink>
                    <AiFillExclamationCircle />
                  </NavLink>
                </div>
              </div>
              <div className="send-input-last-right">
                <div className="send-input-last2-1">
                  <NavLink>
                    <AiFillExclamationCircle />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
