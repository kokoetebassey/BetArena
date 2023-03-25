import React from "react";
import green from "../images/green star.png";
import recent from "../images/recent.png";

import pick1 from "../images/pick1.png";
import pick2 from "../images/pick2.png";
import pick7 from "../images/pick7.png";
import pick8 from "../images/pick8.png";


import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
// import "swiper/css/navigation";

import "swiper/css/bundle";
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);

export default function MobileRecent() {
  return (
    <div>
      {" "}
      <div className="mobile-recent-display">
        <div className="mobile-recent-display-flex">
          <div className="mobile-recent-display-flex-left">
            <img src={green} alt="pick1" />
            <h3>
              <span>Trending</span> Right Now
            </h3>
          </div>
          <div className="mobile-recent-display-flex-right">
            <img src={recent} alt="pick1" />
            <h3>Recently Added</h3>
          </div>
        </div>

        <div className="mobile-recent-slide-flex">
          <Swiper
            slidesPerView={1}
            spaceBetween={15}
            speed={1000}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="mobile-recent-slide-footer">
                <div className="mobile-recent-slide-flex-1">
                  <img src={pick1} alt="pick1" />
                  <h3>
                    Crash <br />
                    <span>BA Original</span>
                  </h3>
                </div>
                <div className="mobile-recent-slide-flex-1">
                  <img src={pick2} alt="pick1" />
                  <h3>
                    Crash <br />
                    <span>BA Original</span>
                  </h3>
                </div>
                <div className="mobile-recent-slide-flex-1">
                  <img src={pick1} alt="pick1" />
                  <h3>
                    Crash <br />
                    <span>BA Original</span>
                  </h3>
                </div>
                <div className="mobile-recent-slide-flex-1">
                  <img src={pick2} alt="pick1" />
                  <h3>
                    Crash <br />
                    <span>BA Original</span>
                  </h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mobile-recent-slide-footer">
                <div className="mobile-recent-slide-flex-1">
                  <img src={pick8} alt="pick1" />
                  <h3>
                    Crash <br />
                    <span>BA Original</span>
                  </h3>
                </div>
                <div className="mobile-recent-slide-flex-1">
                  <img src={pick7} alt="pick1" />
                  <h3>
                    Crash <br />
                    <span>BA Original</span>
                  </h3>
                </div>
                <div className="mobile-recent-slide-flex-1">
                  <img src={pick8} alt="pick1" />
                  <h3>
                    Crash <br />
                    <span>BA Original</span>
                  </h3>
                </div>
                <div className="mobile-recent-slide-flex-1">
                  <img src={pick7} alt="pick1" />
                  <h3>
                    Crash <br />
                    <span>BA Original</span>
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
