import React from "react";
import { useState } from "react";
import dollar from "../images/dollar_pin.png";
import star from "../images/star stand.png";
import pick1 from "../images/pick1.png";
import pick2 from "../images/pick2.png";
import pick7 from "../images/pick7.png";
import pick8 from "../images/pick8.png";
// Import Swiper React component4
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
// import "swiper/css/navigation";

import "swiper/css/bundle";
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);


export default function MobileWin() {

  const [activeBet, setActiveBet] = useState(0);

  const handleBetClick = (index) => {
    setActiveBet(index);
  };

  return (
    <div>
      {" "}
      <div className="home-page-top-section">
        <div className="home-page-top-first-flex">
          <button
            onClick={() => handleBetClick(0)}
            className={`crash-tab-button-win ${
              activeBet === 0 ? "active" : ""
            }`}
          >
            <div className="home-page-top-first-flex-top">
              <img src={dollar} alt="dollar" width={"35px"} />
              <h3>
                <span>Much </span> Wow Wins
              </h3>
            </div>
          </button>
          <button
            onClick={() => handleBetClick(1)}
            className={`crash-tab-button-win ${
              activeBet === 1 ? "active" : ""
            }`}
          >
            <div className="home-page-top-first-flex-top1">
              <img src={star} alt="star" width={"35px"} />
              <h3>
                <span>Top </span> Winning Games
              </h3>
            </div>
          </button>
        </div>

        {activeBet === 0 && (
          <div className="home-page-top-first-flex-page">
            <Swiper
              slidesPerView={1}
              spaceBetween={15}
              speed={2000}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              className="mySwiper-top"
            >
              <SwiperSlide>
                <div className="home-page-top-first-flex-page-slide-cover">
                  <div className="home-page-top-first-flex-page-slide">
                    <div className="home-page-top-first-flex-page-img">
                      <img src={pick1} alt="pick1" width={"53px"} />
                    </div>
                    <div className="home-page-top-first-flex-page-texts">
                      <h2>Hidden</h2>
                      <h3>
                        Won: <span>$1250.00</span>
                      </h3>
                      <h3>In Lucky Lady Moon Megaways</h3>
                    </div>
                  </div>
                  <div className="home-page-top-first-flex-page-slide">
                    <div className="home-page-top-first-flex-page-img">
                      <img src={pick2} alt="pick1" width={"53px"} />
                    </div>
                    <div className="home-page-top-first-flex-page-texts">
                      <h2>Hidden</h2>
                      <h3>
                        Won: <span>$1447.00</span>
                      </h3>
                      <h3>In Crash</h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="home-page-top-first-flex-page-slide-cover">
                  <div className="home-page-top-first-flex-page-slide">
                    <div className="home-page-top-first-flex-page-img">
                      <img src={pick7} alt="pick1" width={"53px"} />
                    </div>
                    <div className="home-page-top-first-flex-page-texts">
                      <h2>Hidden</h2>
                      <h3>
                        Won: <span>$150.00</span>
                      </h3>
                      <h3>In Keno</h3>
                    </div>
                  </div>
                  <div className="home-page-top-first-flex-page-slide">
                    <div className="home-page-top-first-flex-page-img">
                      <img src={pick2} alt="pick1" width={"53px"} />
                    </div>
                    <div className="home-page-top-first-flex-page-texts">
                      <h2>Hidden</h2>
                      <h3>
                        Won: <span>$69.00</span>
                      </h3>
                      <h3>In Hidden</h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        )}
        {activeBet === 1 && (
          <div className="home-page-top-first-flex-page">
            <Swiper
              slidesPerView={1}
              spaceBetween={15}
              speed={2000}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              className="mySwiper-top"
            >
              <SwiperSlide>
                <div className="home-page-top-first-flex-page-slide-cover">
                  <div className="home-page-top-first-flex-page-slide">
                    <div className="home-page-top-first-flex-page-img">
                      <img src={pick8} alt="pick1" width={"53px"} />
                    </div>
                    <div className="home-page-top-first-flex-page-texts">
                      <h2>Hidden</h2>
                      <h3>
                        Won: <span>$1780.00</span>
                      </h3>
                      <h3>In Lucky Lady Moon Megaways</h3>
                    </div>
                  </div>
                  <div className="home-page-top-first-flex-page-slide">
                    <div className="home-page-top-first-flex-page-img">
                      <img src={pick2} alt="pick1" width={"53px"} />
                    </div>
                    <div className="home-page-top-first-flex-page-texts">
                      <h2>Hidden</h2>
                      <h3>
                        Won: <span>$56.00</span>
                      </h3>
                      <h3>In Crash</h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="home-page-top-first-flex-page-slide-cover">
                  <div className="home-page-top-first-flex-page-slide">
                    <div className="home-page-top-first-flex-page-img">
                      <img src={pick7} alt="pick1" width={"53px"} />
                    </div>
                    <div className="home-page-top-first-flex-page-texts">
                      <h2>Hidden</h2>
                      <h3>
                        Won: <span>$150.00</span>
                      </h3>
                      <h3>In Keno</h3>
                    </div>
                  </div>
                  <div className="home-page-top-first-flex-page-slide">
                    <div className="home-page-top-first-flex-page-img">
                      <img src={pick2} alt="pick1" width={"53px"} />
                    </div>
                    <div className="home-page-top-first-flex-page-texts">
                      <h2>Hidden</h2>
                      <h3>
                        Won: <span>$69.00</span>
                      </h3>
                      <h3>In Hidden</h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        )}
      </div>
    </div>
  );
}
