import React from "react";
import { NavLink } from "react-router-dom";
import BA1 from "../images/BA-1.png";
import BA2 from "../images/BA-2.png";
import BA3 from "../images/BA-3.png";
import BA4 from "../images/BA-4.png";
import BA5 from "../images/BA-5.png";
import BA6 from "../images/BA-6.png";
import BA7 from "../images/BA-7.png";
import BA8 from "../images/BA-8.png";
import BA9 from "../images/BA-9.png";
import BA10 from "../images/BA-10.png";
import BA11 from "../images/BA-11.png";
import BA12 from "../images/BA-12.png";
import BA13 from "../images/BA-13.png";
import BA14 from "../images/BA-14.png";
import BA15 from "../images/BA-15.png";
import BA16 from "../images/BA-16.png";
import BA17 from "../images/BA-17.png";
import BA18 from "../images/BA-18.png";
import BA19 from "../images/BA-19.png";
import BA20 from "../images/BA-20.png";
import BA21 from "../images/BA-21.png";
import mark from "../images/best question mark.png";
// import BA22 from "../images/BA-22.png";
// import BA23 from "../images/BA-23.png";
// import BA24 from "../images/BA-24.png";
// import BA25 from "../images/BA-25.png";
// import BA26 from "../images/BA-26.png";
// import best1 from "../images/best img 1.png";
// import best2 from "../images/best img 2.png";
// import best3 from "../images/best img 3.png";
// import best4 from "../images/best img 4.png";
// import best5 from "../images/best img 5.png";
// import best6 from "../images/best img 6.png";
// import best7 from "../images/best img 7.png";
// import best8 from "../images/best img 8.png";
// import best9 from "../images/best img 9.png";
// import best10 from "../images/best img 10.png";
// import feature1 from "../images/feature 1.png";
// import feature2 from "../images/feature 2.png";
// import feature3 from "../images/feature 3.png";
// import feature4 from "../images/feature 4.png";
// import feature5 from "../images/feature 5.png";
// import partner14 from "../images/partner 14.png";

// Import Swiper React component4
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import { Navigation } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);

export default function MobileBaSection() {
  return (
    <div>
   
      <div className="mobile-ba-display">
        <div className="mobile-ba-header">
          <h4>
            BA <span> IN-HOUSE</span> <br />
            GAMES
          </h4>
        </div>
        <div className="mobile-ba-page ba-cover">
          <NavLink to="/Crash">
            <div className="mobile-ba-crash">
              <img src={BA1} alt="BA1" />
              <div className="mobile-ba-crash-text">
                <h3>Crash</h3>
                <img src={mark} alt="mark" />
              </div>
            </div>
          </NavLink>

          <div className="content-img-swipe">
            <div className="slot-line1-arrows-ba-top">
              <div className="slot-arrow-left-ba-top">
                <h3> &#10094;</h3>
              </div>
              <div className="slot-arrow-right-ba-top">
                <h3> &#10095;</h3>
              </div>
            </div>
            <Swiper
              slidesPerView={1}
              spaceBetween={15}
              speed={1000}
              loop={true}
              navigation={{
                nextEl: ".slot-arrow-right-ba-top",
                prevEl: ".slot-arrow-left-ba-top",
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="mobile-ba-second">
                  <div className="mobile-ba-second-1">
                    <img src={BA2} alt="BA2" />
                    <div className="mobile-ba-second-1-text">
                      <h3>Baccarat</h3>
                      <img src={mark} alt="mark" />
                    </div>
                  </div>
                  <div className="mobile-ba-second-2">
                    <img src={BA3} alt="BA3" />
                    <div className="mobile-ba-second-2-text">
                      <h3>Tower Legend</h3>
                      <img src={mark} alt="mark" />
                    </div>
                  </div>
                </div>

                <div className="mobile-ba-third">
                  <div className="mobile-ba-third-1">
                    <img src={BA4} alt="BA4" />
                    <div className="mobile-ba-third-1-text">
                      <h3>Crash Trenball</h3>
                      <img src={mark} alt="mark" />
                    </div>
                  </div>
                  <div className="mobile-ba-third-2">
                    <img src={BA5} alt="BA5" />
                    <div className="mobile-ba-third-2-text">
                      <h3>Classic Dice</h3>
                      <img src={mark} alt="mark" />
                    </div>
                  </div>
                </div>

                <div className="mobile-ba-fourth">
                  <div className="mobile-ba-fourth-1">
                    <img src={BA6} alt="BA6" />
                    <div className="mobile-ba-fourth-1-text">
                      <h3>Mine</h3>
                      <img src={mark} alt="mark" />
                    </div>
                  </div>
                  <div className="mobile-ba-fourth-2">
                    <img src={BA7} alt="BA7" />
                    <div className="mobile-ba-fourth-2-text">
                      <h3>Coinflip</h3>
                      <img src={mark} alt="mark" />
                    </div>
                  </div>
                </div>

                <div className="mobile-ba-fifth">
                  <div className="mobile-ba-fifth-1">
                    <img src={BA8} alt="BA8" />
                    <div className="mobile-ba-fifth-1-text">
                      <h3>Roulette</h3>
                      <img src={mark} alt="mark" />
                    </div>
                  </div>
                  <div className="mobile-ba-fifth-2">
                    <img src={BA9} alt="BA9" />
                    <div className="mobile-ba-fifth-2-text">
                      <h3>Ring of Fortune</h3>
                      <img src={mark} alt="mark" />
                    </div>
                  </div>
                </div>

                <div className="mobile-ba-sixth">
                  <div className="mobile-ba-sixth-1">
                    <img src={BA10} alt="BA10" />
                    <div className="mobile-ba-sixth-1-text">
                      <h3>Plinko</h3>
                      <img src={mark} alt="mark" />
                    </div>
                  </div>
                  <div className="mobile-ba-sixth-2">
                    <img src={BA11} alt="BA11" />
                    <div className="mobile-ba-sixth-2-text">
                      <h3>Wheel</h3>
                      <img src={mark} alt="mark" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mobile-ba-seventh">
                  <div className="mobile-ba-seventh-1">
                    <img src={BA12} alt="BA12" />
                    <div className="mobile-ba-seventh-1-text">
                      <h3>Cave of Plunder</h3>
                      <img src={mark} alt="mark" />
                    </div>
                  </div>
                  <div className="mobile-ba-seventh-2">
                    <img src={BA13} alt="BA13" />
                    <div className="mobile-ba-seventh-2-text">
                      <h3>Ultimate Dice</h3>
                      <img src={mark} alt="mark" />
                    </div>
                  </div>
                </div>

                <div className="mobile-ba-eighth">
                  <div className="mobile-ba-eighth-1">
                    <img src={BA14} alt="BA14" />
                    <div className="mobile-ba-eighth-1-text">
                      <h3>Oriental Beauties</h3>
                      <img src={mark} alt="mark" />
                    </div>
                  </div>
                  <div className="mobile-ba-eighth-2">
                    <img src={BA15} alt="BA15" />
                    <div className="mobile-ba-eighth-2-text">
                      <h3>Limbo</h3>
                      <img src={mark} alt="mark" />
                    </div>
                  </div>
                </div>

                <div className="mobile-ba-nineth">
                  <div className="mobile-ba-nineth-1">
                    <img src={BA16} alt="BA16" />
                    <div className="mobile-ba-nineth-1-text">
                      <h3>Saviour Swords</h3>
                      <img src={mark} alt="mark" />
                    </div>
                  </div>
                  <div className="mobile-ba-nineth-2">
                    <img src={BA17} alt="BA17" />
                    <div className="mobile-ba-nineth-2-text">
                      <h3>Roulette Multiplayer</h3>
                      <img src={mark} alt="mark" />
                    </div>
                  </div>
                </div>

                <div className="mobile-ba-tenth">
                  <div className="mobile-ba-tenth-1">
                    <img src={BA18} alt="BA18" />
                    <div className="mobile-ba-tenth-1-text">
                      <h3>Video Poker</h3>
                      <img src={mark} alt="mark" />
                    </div>
                  </div>
                  <div className="mobile-ba-tenth-2">
                    <img src={BA19} alt="BA19" />
                    <div className="mobile-ba-tenth-2-text">
                      <h3>Baccarat Multiplayer</h3>
                      <img src={mark} alt="mark" />
                    </div>
                  </div>
                </div>

                <div className="mobile-ba-eleventh">
                  <div className="mobile-ba-eleventh-1">
                    <img src={BA20} alt="BA20" />
                    <div className="mobile-ba-eleventh-1-text">
                      <h3>Keno</h3>
                      <img src={mark} alt="mark" />
                    </div>
                  </div>
                  <div className="mobile-ba-eleventh-2">
                    <img src={BA21} alt="BA21" />
                    <div className="mobile-ba-eleventh-2-text">
                      <h3>Egyptian Adventure</h3>
                      <img src={mark} alt="mark" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="mobile-ba-display2">
        <div className="mobile-ba-display-top">
          <div className="mobile-ba-header">
            <h4>
              BEST FROM <br />
              THE <span> SLOTS</span>
            </h4>
          </div>

          <div className="mobile-ba-display-side-flex">
            <div className="mobile-feature-slot-display-right">
              <h4>
                All <span>20</span> Slots
              </h4>
            </div>
            <div className="slot-line1-arrows-ba-top2">
              <div className="slot-arrow-left-ba-top2">
                <h3> &#10094;</h3>
              </div>
              <div className="slot-arrow-right-ba-top2">
                <h3> &#10095;</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="mobile-ba-page2 ba-cover2">
          <div className="content-img-swipe">
            <Swiper
              slidesPerView={1}
              spaceBetween={15}
              speed={1000}
              loop={true}
              navigation={{
                nextEl: ".slot-arrow-right-ba-top2",
                prevEl: ".slot-arrow-left-ba-top2",
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="mobile-ba-second">
                  <div className="mobile-ba-second-1">
                    <img src={BA2} alt="BA2" />
                    <div className="mobile-ba-second-1-text">
                      <h3>Baccarat</h3>
                      <img src={mark} alt="mark" />
                    </div>
                  </div>
                  <div className="mobile-ba-second-2">
                    <img src={BA3} alt="BA3" />
                    <div className="mobile-ba-second-2-text">
                      <h3>Tower Legend</h3>
                      <img src={mark} alt="mark" />
                    </div>
                  </div>
                </div>

                <div className="mobile-ba-third">
                  <div className="mobile-ba-third-1">
                    <img src={BA4} alt="BA4" />
                    <div className="mobile-ba-third-1-text">
                      <h3>Crash Trenball</h3>
                      <img src={mark} alt="mark" />
                    </div>
                  </div>
                  <div className="mobile-ba-third-2">
                    <img src={BA5} alt="BA5" />
                    <div className="mobile-ba-third-2-text">
                      <h3>Classic Dice</h3>
                      <img src={mark} alt="mark" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mobile-ba-seventh">
                  <div className="mobile-ba-seventh-1">
                    <img src={BA12} alt="BA12" />
                    <div className="mobile-ba-seventh-1-text">
                      <h3>Cave of Plunder</h3>
                      <img src={mark} alt="mark" />
                    </div>
                  </div>
                  <div className="mobile-ba-seventh-2">
                    <img src={BA13} alt="BA13" />
                    <div className="mobile-ba-seventh-2-text">
                      <h3>Ultimate Dice</h3>
                      <img src={mark} alt="mark" />
                    </div>
                  </div>
                </div>

                <div className="mobile-ba-eighth">
                  <div className="mobile-ba-eighth-1">
                    <img src={BA14} alt="BA14" />
                    <div className="mobile-ba-eighth-1-text">
                      <h3>Oriental Beauties</h3>
                      <img src={mark} alt="mark" />
                    </div>
                  </div>
                  <div className="mobile-ba-eighth-2">
                    <img src={BA15} alt="BA15" />
                    <div className="mobile-ba-eighth-2-text">
                      <h3>Limbo</h3>
                      <img src={mark} alt="mark" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="mobile-ba-display2">
        <div className="mobile-ba-display-top">
          <div className="mobile-ba-header">
            <h4>
              FEATURE <br />
              BUY-IN <span> SLOTS</span>
            </h4>
          </div>

          <div className="mobile-ba-display-side-flex">
            <div className="mobile-feature-slot-display-right">
              <h4>
                All <span>20</span> Slots
              </h4>
            </div>
            <div className="slot-line1-arrows-ba-top2">
              <div className="slot-arrow-left-ba-top3">
                <h3> &#10094;</h3>
              </div>
              <div className="slot-arrow-right-ba-top3">
                <h3> &#10095;</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="mobile-ba-page2 ba-cover2">
          <div className="content-img-swipe">
            <Swiper
              slidesPerView={1}
              spaceBetween={15}
              speed={1000}
              loop={true}
              navigation={{
                nextEl: ".slot-arrow-right-ba-top3",
                prevEl: ".slot-arrow-left-ba-top3",
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="mobile-ba-second">
                  <div className="mobile-ba-second-1">
                    <img src={BA2} alt="BA2" />
                    <div className="mobile-ba-second-1-text">
                      <h3>Baccarat</h3>
                      <img src={mark} alt="mark" />
                    </div>
                  </div>
                  <div className="mobile-ba-second-2">
                    <img src={BA3} alt="BA3" />
                    <div className="mobile-ba-second-2-text">
                      <h3>Tower Legend</h3>
                      <img src={mark} alt="mark" />
                    </div>
                  </div>
                </div>

                <div className="mobile-ba-third">
                  <div className="mobile-ba-third-1">
                    <img src={BA4} alt="BA4" />
                    <div className="mobile-ba-third-1-text">
                      <h3>Crash Trenball</h3>
                      <img src={mark} alt="mark" />
                    </div>
                  </div>
                  <div className="mobile-ba-third-2">
                    <img src={BA5} alt="BA5" />
                    <div className="mobile-ba-third-2-text">
                      <h3>Classic Dice</h3>
                      <img src={mark} alt="mark" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mobile-ba-seventh">
                  <div className="mobile-ba-seventh-1">
                    <img src={BA12} alt="BA12" />
                    <div className="mobile-ba-seventh-1-text">
                      <h3>Cave of Plunder</h3>
                      <img src={mark} alt="mark" />
                    </div>
                  </div>
                  <div className="mobile-ba-seventh-2">
                    <img src={BA13} alt="BA13" />
                    <div className="mobile-ba-seventh-2-text">
                      <h3>Ultimate Dice</h3>
                      <img src={mark} alt="mark" />
                    </div>
                  </div>
                </div>

                <div className="mobile-ba-eighth">
                  <div className="mobile-ba-eighth-1">
                    <img src={BA14} alt="BA14" />
                    <div className="mobile-ba-eighth-1-text">
                      <h3>Oriental Beauties</h3>
                      <img src={mark} alt="mark" />
                    </div>
                  </div>
                  <div className="mobile-ba-eighth-2">
                    <img src={BA15} alt="BA15" />
                    <div className="mobile-ba-eighth-2-text">
                      <h3>Limbo</h3>
                      <img src={mark} alt="mark" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
