import React from "react";
import dollar from "../images/dollar_pin.png";
import green from "../images/green star.png";
import recent from "../images/recent.png";
import star from "../images/star stand.png";
import pick1 from "../images/pick1.png";
import win2 from "../images/win2.png";
import mi1 from "../images/image23.png";
import mi2 from "../images/image24.png";
import mi3 from "../images/image25.png";
import mi4 from "../images/image26.png";
import mi5 from "../images/image27.png";

// Import Swiper React component4
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";

import "swiper/css/bundle";

// import required modules
import { Navigation } from "swiper";
import SwiperCore, { Autoplay } from "swiper";

SwiperCore.use([Autoplay]);

export default function WinSection() {
  return (
    <div className="win-page">
      <div className="win-page-container">
        <div className="home-page-top-first-flex">
          <div className="home-page-top-first-flex-top">
            <img src={dollar} alt="dollar" width={"35px"} />
            <h3>
              <span>Much </span> Wowo Wins
            </h3>
          </div>
          <Swiper
            slidesPerView={1}
            direction={"vertical"}
            // spaceBetween={30}
            speed={3000}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="mySwiper-top"
          >
            <SwiperSlide>
              <div className="home-page-top-first-flex-page">
                <div className="home-page-top-first-flex-page-img">
                  <img src={win2} alt="pick1" width={"53px"} />
                </div>
                <div className="home-page-top-first-flex-page-texts">
                  <h2>David</h2>
                  <h3>
                    Won: <span>$50</span>
                  </h3>
                  <h3>In limbo</h3>
                </div>
              </div>
              <div className="home-page-top-first-flex-page2">
                <div className="home-page-top-first-flex-page-img">
                  <img src={pick1} alt="pick1" width={"53px"} />
                </div>
                <div className="home-page-top-first-flex-page-texts">
                  <h2>Steve</h2>
                  <h3>
                    Won: <span>350</span>
                  </h3>
                  <h3>In limbo</h3>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="home-page-top-first-flex">
          <div className="home-page-top-first-flex-top">
            <img src={star} alt="star" width={"35px"} />
            <h3>
              <span>Top </span> Winning Games
            </h3>
          </div>

          <Swiper
            slidesPerView={1}
            direction={"vertical"}
            speed={3000}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="mySwiper-top"
          >
            <SwiperSlide>
              <div className="home-page-top-first-flex-page">
                <div className="home-page-top-first-flex-page-img">
                  <img src={pick1} alt="pick1" width={"53px"} />
                </div>
                <div className="home-page-top-first-flex-page-texts">
                  <h2>Hidden</h2>
                  <h3>
                    Won: <span>$50</span>
                  </h3>
                  <h3>In limbo</h3>
                </div>
              </div>
              <div className="home-page-top-first-flex-page2">
                <div className="home-page-top-first-flex-page-img">
                  <img src={win2} alt="pick1" width={"53px"} />
                </div>
                <div className="home-page-top-first-flex-page-texts">
                  <h2>Hidden</h2>
                  <h3>
                    Won: <span>350</span>
                  </h3>
                  <h3>In limbo</h3>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="home-page-top-third-flex">
          <div className="home-page-top-third-flex-top">
            <div className="home-page-top-third-flex-top-img">
              <img src={green} alt="green" width={"35px"} />
              <h3>
                <span>Trending </span> Right Now
              </h3>
            </div>
            <div className="slot-line1-arrows-third-top">
              <div className="slot-arrow-left-third-top">
                <h3> &#10094;</h3>
              </div>
              <div className="slot-arrow-right-third-top">
                <h3> &#10095;</h3>
              </div>
            </div>
          </div>

          <Swiper
            slidesPerView={1}
            // spaceBetween={}
            speed={3000}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".slot-arrow-right-third-top",
              prevEl: ".slot-arrow-left-third-top",
            }}
            modules={[Navigation]}
            className="mySwiper-side"
          >
            <SwiperSlide>
              <div className="home-page-top-third-flex-page-cover">
                <div className="home-page-top-third-flex-page">
                  <div className="home-page-top-third-flex-page-img">
                    <img src={mi1} alt="pick1" width={"83px"} />
                  </div>
                  <div className="home-page-top-third-flex-page-texts">
                    <h2>Crash</h2>
                    <h3>BA Original</h3>
                  </div>
                </div>
                <div className="home-page-top-third-flex-page">
                  <div className="home-page-top-third-flex-page-img">
                    <img src={mi2} alt="pick1" width={"83px"} />
                  </div>
                  <div className="home-page-top-third-flex-page-texts">
                    <h2>Crash</h2>
                    <h3>BA Original</h3>
                  </div>
                </div>
                <div className="home-page-top-third-flex-page">
                  <div className="home-page-top-third-flex-page-img">
                    <img src={mi3} alt="pick1" width={"83px"} />
                  </div>
                  <div className="home-page-top-third-flex-page-texts">
                    <h2>Crash</h2>
                    <h3>BA Original</h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="home-page-top-third-flex-page-cover">
                <div className="home-page-top-third-flex-page">
                  <div className="home-page-top-third-flex-page-img">
                    <img src={mi3} alt="pick1" width={"83px"} />
                  </div>
                  <div className="home-page-top-third-flex-page-texts">
                    <h2>Crash</h2>
                    <h3>BA Original</h3>
                  </div>
                </div>

                <div className="home-page-top-third-flex-page">
                  <div className="home-page-top-third-flex-page-img">
                    <img src={mi2} alt="pick1" width={"83px"} />
                  </div>
                  <div className="home-page-top-third-flex-page-texts">
                    <h2>Crash</h2>
                    <h3>BA Original</h3>
                  </div>
                </div>

                <div className="home-page-top-third-flex-page">
                  <div className="home-page-top-third-flex-page-img">
                    <img src={mi1} alt="pick1" width={"83px"} />
                  </div>
                  <div className="home-page-top-third-flex-page-texts">
                    <h2>Crash</h2>
                    <h3>BA Original</h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="home-page-top-third-flex">
          <div className="home-page-top-third-flex-top">
            <div className="home-page-top-third-flex-top-img">
              <img src={recent} alt="recent" width={"35px"} />
              <h3>Recently Added</h3>
            </div>
            <div className="slot-line1-arrows-fourth-top">
              <div className="slot-arrow-left-fourth-top">
                <h3> &#10094;</h3>
              </div>
              <div className="slot-arrow-right-fourth-top">
                <h3> &#10095;</h3>
              </div>
            </div>
          </div>

          <Swiper
            slidesPerView={1}
            // spaceBetween={}
            speed={3000}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".slot-arrow-right-fourth-top",
              prevEl: ".slot-arrow-left-fourth-top",
            }}
            modules={[Navigation]}
            className="mySwiper-side"
          >
            <SwiperSlide>
              <div className="home-page-top-third-flex-page-cover">
                <div className="home-page-top-third-flex-page">
                  <div className="home-page-top-third-flex-page-img">
                    <img src={mi4} alt="pick1" width={"83px"} />
                  </div>
                  <div className="home-page-top-third-flex-page-texts">
                    <h2>Crash</h2>
                    <h3>BA Original</h3>
                  </div>
                </div>
                <div className="home-page-top-third-flex-page">
                  <div className="home-page-top-third-flex-page-img">
                    <img src={pick1} alt="pick1" width={"83px"} />
                  </div>
                  <div className="home-page-top-third-flex-page-texts">
                    <h2>Crash</h2>
                    <h3>BA Original</h3>
                  </div>
                </div>
                <div className="home-page-top-third-flex-page">
                  <div className="home-page-top-third-flex-page-img">
                    <img src={mi5} alt="pick1" width={"83px"} />
                  </div>
                  <div className="home-page-top-third-flex-page-texts">
                    <h2>Crash</h2>
                    <h3>BA Original</h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="home-page-top-third-flex-page-cover">
                <div className="home-page-top-third-flex-page">
                  <div className="home-page-top-third-flex-page-img">
                    <img src={mi4} alt="pick1" width={"83px"} />
                  </div>
                  <div className="home-page-top-third-flex-page-texts">
                    <h2>Crash</h2>
                    <h3>BA Original</h3>
                  </div>
                </div>
                <div className="home-page-top-third-flex-page">
                  <div className="home-page-top-third-flex-page-img">
                    <img src={pick1} alt="pick1" width={"83px"} />
                  </div>
                  <div className="home-page-top-third-flex-page-texts">
                    <h2>Crash</h2>
                    <h3>BA Original</h3>
                  </div>
                </div>
                <div className="home-page-top-third-flex-page">
                  <div className="home-page-top-third-flex-page-img">
                    <img src={mi5} alt="pick1" width={"83px"} />
                  </div>
                  <div className="home-page-top-third-flex-page-texts">
                    <h2>Crash</h2>
                    <h3>BA Original</h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* <div className="home-page-top-third-flex-page-cover">
            <div className="home-page-top-third-flex-page">
              <div className="home-page-top-third-flex-page-img">
                <img src={mi4} alt="pick1" width={"83px"} />
              </div>
              <div className="home-page-top-third-flex-page-texts">
                <h2>Crash</h2>
                <h3>BA Original</h3>
              </div>
            </div>
            <div className="home-page-top-third-flex-page">
              <div className="home-page-top-third-flex-page-img">
                <img src={pick1} alt="pick1" width={"83px"} />
              </div>
              <div className="home-page-top-third-flex-page-texts">
                <h2>Crash</h2>
                <h3>BA Original</h3>
              </div>
            </div>
            <div className="home-page-top-third-flex-page">
              <div className="home-page-top-third-flex-page-img">
                <img src={mi5} alt="pick1" width={"83px"} />
              </div>
              <div className="home-page-top-third-flex-page-texts">
                <h2>Crash</h2>
                <h3>BA Original</h3>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
