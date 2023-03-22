import React from "react";
import "./styles/notification.css";
import { useState } from "react";
import FA from "../images/betarena 2fa.JPEG";
import { NavLink } from "react-router-dom";
import empty from "../images/images/empty.svg";

export default function Chat({ cancel }) {
  const Clear = (e) => {
    cancel(e);
  };

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

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
    <div className="notify-display">
      <div className="notify-page">
        <div className="notify-top">
          <div className="notify-top-flex1">
            <h3>Notification</h3>
          </div>
          <div
            className="notify-top-flex2"
            onClick={() => Clear("clear this guy")}
          >
            <h4> &#10006;</h4>
          </div>
        </div>

        <div className="notify-body">
          <div className="notify-body-top">
            <button
              onClick={() => handleTabClick(0)}
              className={`top-flex ${activeTab === 0 ? "active" : ""}`}
            >
              <span>System Notice</span>
            </button>
            <button
              onClick={() => handleTabClick(1)}
              className={`top-flex ${activeTab === 1 ? "active" : ""}`}
            >
              <span>System Notice</span>
            </button>
          </div>
          <div className="notify-body-main">
            <div className="notify-body-main-inner">
              {activeTab === 0 && (
                <div className="notify-body-system">
                  <div className="notify-body-system-inner-cover">
                    <div className="notify-body-system-inner">
                      <h1>Secure Your account with 2FA</h1>
                      <div className="notify-ba">
                        <div className="notify-ba-flex">
                          <div className="circle-ba"></div>
                          <div className="text-ba">BETARENA.GG Official</div>
                        </div>
                        <div className="time">
                          {currentDate} {hoursMin}
                        </div>
                      </div>
                    </div>

                    <div className="notify-body-system-inner-main">
                      <div className="notify-body-system-inner-main-inner">
                        Hi UserName
                      </div>
                      <img src={FA} alt="" />
                      <p className="p">
                        Due to an increase in recent account theft, we highly
                        recommend that you secure your account with 2FA.
                        <br />
                        <br />
                        Account theives are using clever ways to steal your
                        username and passwords. One such method has been to post
                        malicious links to fake casinos, which are disguised as
                        referral links.
                        <br />
                        <br />
                        Moderators are doing their best to keep up with the
                        links posted in our chats - but it is a best practice to
                        simply not click on any unknown links from the chat
                        rooms.
                        <br />
                        <br />
                        Securing your account with 2FA greatly increases the
                        odds that these thieves will not be able to steal your
                        crypto, even if they gain access to your account.
                        <br />
                        <br />
                        Visit the links below to learn how to:
                        <br />
                        <br />
                        -Change your password and set up 2FA. -View a list of
                        devices currently logged into your account.
                        <br />
                        <br />
                        Please spread the word about this to your friends to
                        help them stay protected.
                      </p>
                      <p className="links-notify">
                        <div className="links-notify1">
                          <div className="links-notify1-1">
                            <span className="finger">Click Me!</span>
                          </div>
                        </div>
                        <div className="enable">
                          <NavLink>Enable 2FA and Change Password</NavLink>
                        </div>
                      </p>
                      <p className="links-notify">
                        <div className="links-notify1">
                          <div className="links-notify1-1">
                            <span className="finger">Click Me!</span>
                          </div>
                        </div>
                        <div className="enable">
                          <NavLink>Check for Unauthorized Sessions</NavLink>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 1 && (
                <div className="notify-reward">
                  <div className="notify-reward-inner">
                    <h3>&#9868;</h3>
                    <h3 className="view-angle">&#9871;</h3>
                  </div>
                  <div className="notify-reward-data">
                    <img src={empty} alt="empty" />
                    <div className="text-data">No Data Available</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
