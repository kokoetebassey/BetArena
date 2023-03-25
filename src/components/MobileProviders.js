import React from 'react'
import partner1 from "../images/partner 1.png";
import partner2 from "../images/partner 2.png";
import partner3 from "../images/partner 3.png";
import partner4 from "../images/partner 4.png";
import partner5 from "../images/partner 5.png";
import partner6 from "../images/partner 6.png";
import partner7 from "../images/partner 7.png";
import partner8 from "../images/partner 8.png";
import partner9 from "../images/partner 9.png";
import partner10 from "../images/partner 10.png";
import partner11 from "../images/partner 11.png";
import partner12 from "../images/partner 12.png";
// import partner13 from "../images/partner 13.png";

// Import Swiper React component4
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import { Navigation } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);

export default function MobileProviders() {
  return (
    <div>    <div className="mobile-game-provider-display">
    <div className="mobile-game-provider-text">
      <h1>GAME PROVIDERS</h1>
    </div>

    <div className="slot-line1-arrows-pro-top">
      <div className="slot-arrow-left-pro-top">
        <h3> &#10094;</h3>
      </div>
      <div className="slot-arrow-right-pro-top">
        <h3> &#10095;</h3>
      </div>
    </div>
    <Swiper
      slidesPerView={1}
      spaceBetween={15}
      speed={1000}
      loop={true}
      navigation={{
        nextEl: ".slot-arrow-right-pro-top",
        prevEl: ".slot-arrow-left-pro-top",
      }}
      modules={[Navigation]}
      className="mySwiper-pro"
    >
      <SwiperSlide>
        <div className="mobile-game-provider-first-flex">
          <div className="game-row1">
            <img src={partner1} alt="partner1" width={"83px"} />
          </div>
          <div className="game-row2">
            <img src={partner2} alt="partner2" width={"83px"} />
          </div>
        </div>
        <div className="mobile-game-provider-second-flex">
          <div className="game-row3">
            <img src={partner3} alt="partner3" width={"83px"} />
          </div>
          <div className="game-row4">
            <img src={partner4} alt="partner4" width={"83px"} />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="mobile-game-provider-first-flex">
          <div className="game-row1">
            <img src={partner5} alt="partner5" width={"83px"} />
          </div>
          <div className="game-row2">
            <img src={partner6} alt="partner6" width={"83px"} />
          </div>
        </div>
        <div className="mobile-game-provider-second-flex">
          <div className="game-row3">
            <img src={partner7} alt="partner7" width={"63px"} />
          </div>
          <div className="game-row4">
            <img src={partner8} alt="partner8" width={"83px"} />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="mobile-game-provider-first-flex">
          <div className="game-row1">
            <img src={partner9} alt="partner9" width={"83px"} />
          </div>
          <div className="game-row2">
            <img src={partner10} alt="partner10" width={"83px"} />
          </div>
        </div>
        <div className="mobile-game-provider-second-flex">
          <div className="game-row3">
            <img src={partner11} alt="partner11" width={"83px"} />
          </div>
          <div className="game-row4">
            <img src={partner12} alt="partner12" width={"83px"} />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="mobile-game-provider-first-flex">
          <div className="game-row1">
            <img src={partner1} alt="partner1" width={"83px"} />
          </div>
          <div className="game-row2">
            <img src={partner2} alt="partner2" width={"83px"} />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div></div>
  )
}
