import React from "react";
// import { NavLink } from "react-router-dom";
// import { useState } from "react";
import "./styles/mobile.css";
import { NavLink } from "react-router-dom";
import second1 from "../images/second 1.png";
import second2 from "../images/second2.png";
import second3 from "../images/second3.png";
import image1 from "../images/image 14.png";
import image2 from "../images/image 15.png";
import image3 from "../images/image 16.png";
import dollar from "../images/dollar_pin.png";
import green from "../images/green star.png";
import recent from "../images/recent.png";
import star from "../images/star stand.png";
import pick1 from "../images/pick1.png";
import pick2 from "../images/pick2.png";
import pick7 from "../images/pick7.png";
import pick8 from "../images/pick8.png";
// import lobby from "../images/lobby.png";
// import dice from "../images/dice img.png";
// import slot from "../images/slot img.png";
// import live from "../images/live img.png";
// import table from "../images/table_game.png";
// import game from "../images/game_show.png";
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
import winner1 from "../images/winner 1.png";
// import winner2 from "../images/winner 2.png";
import winner3 from "../images/winner 3.png";
import winner4 from "../images/winner 4.png";
import winner6 from "../images/winner 6.png";
import winner7 from "../images/winner 7.png";
import winner8 from "../images/winner 8.png";
import winner9 from "../images/winner 9.png";
import table1 from "../images/table 1.png";
import table2 from "../images/table 2.png";
import table3 from "../images/table 3.png";
// import play from "../images/play-icon.png";
import search from "../images/search icon.svg";
import Footer from "./Footer";
// import Navbar from "./Navbar";

import mark from "../images/best question mark.png";
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

export default function MobileHome() {
  return (
    <div className="mobile-home-display">
      <div className="content-img-swipe">
        <div className="slot-line1-arrows-home-top">
          <div className="slot-arrow-left-home-top">
            <h3> &#10094;</h3>
          </div>
          <div className="slot-arrow-right-home-top">
            <h3> &#10095;</h3>
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          speed={2000}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".slot-arrow-right-home-top",
            prevEl: ".slot-arrow-left-home-top",
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="home-display-top">
              <div className="home-display-top-images">
                <img src={image1} alt="image1" width={"100%"} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-display-top">
              <div className="home-display-top-images">
                <img src={image2} alt="image2" width={"100%"} />
              </div>
              <div className="home-display-top-images">
                <img src={image3} alt="image3" width={"100%"} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-display-top">
              <div className="home-display-top-images">
                <img src={second1} alt="image1" width={"100%"} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-display-top">
              <div className="home-display-top-images">
                <img src={second2} alt="image2" width={"100%"} />
              </div>
              <div className="home-display-top-images">
                <img src={second3} alt="image3" width={"100%"} />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="mobile-cover">
        <div className="mobile-home-display-search">
          <div className="mobile-search">
            <div className="mobile-search-content">
              <img src={search} alt="search" />
              <input
                type="text"
                placeholder="Game name | Provider | Category Tag"
              />
            </div>
          </div>
        </div>

        <div className="home-page-top-section">
          <div className="home-page-top-first-flex">
            <div className="home-page-top-first-flex-top">
              <img src={dollar} alt="dollar" width={"35px"} />
              <h3>
                <span>Much </span> Wow Wins
              </h3>
            </div>

            <Swiper
              slidesPerView={1}
              speed={2000}
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
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="home-page-top-second-flex">
            <div className="home-page-top-first-flex-top1">
              <img src={star} alt="star" width={"35px"} />
              <h3>
                <span>Top </span> Winning Games
              </h3>
            </div>

            <Swiper
              slidesPerView={1}
              // direction={"vertical"}
              speed={2000}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              className="mySwiper-top"
            >
              <SwiperSlide>
                <div className="home-page-top-first-flex-page2">
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
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="mobile-lobby">
          <div className="mobile-lobby-container active-text-style active-text">
            <div className="mobile-lobby-text1">
              <h3>Lobby</h3>
            </div>
          </div>

          <div className="mobile-lobby-text2">
            <h3 className="active-text">Original</h3>
          </div>

          <div className="mobile-lobby-text3">
            <h3 className="active-text">Slots</h3>
          </div>

          <div className="live-text">
            <div className="mobile-lobby-text4">
              <h3>Live casino</h3>
            </div>
          </div>

          <div className="table-text">
            <div className="mobile-lobby-text5">
              <h3>Table Game</h3>
            </div>
          </div>

          <div className="game-text">
            <div className="mobile-lobby-text6">
              <h3>Game Show</h3>
            </div>
          </div>
        </div>

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

        <div className="mobile-game-provider-display">
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
        </div>

        <div className="mobile-biggest-display">
          <div className="mobile-biggest-display-header">
            <h1>BIGGEST WINNERS TODAY</h1>
          </div>

          <div className="mobile-biggest-page">
            <div className="mobile-biggest-page-flex">
              <div className="mobile-biggest-page-text">
                <h1>
                  WINNER WINNER <br />
                  CHICKEN DINNER
                </h1>

                <button>Play Now</button>
              </div>
              <div className="mobile-biggest-page-img">
                <img src={winner1} alt="best" />
              </div>
            </div>

            <div className="mobile-biggest-page-table">
              <div className="mobile-cover-winner">
                <div className="mobile-top-winner">
                  <img src={winner9} alt="best" />
                </div>
                <div className="mobile-biggest-page-table1">
                  <img src={winner6} alt="best" />
                  <div className="table1-center">
                    <img src={winner8} alt="best" />
                    <h3>hidden</h3>
                  </div>
                  <button>$45,000</button>
                </div>
                <div className="mobile-biggest-page-table2">
                  <img src={winner8} alt="best" />
                  <div className="table2-center">
                    <img src={winner4} alt="best" />
                    <h3>hidden</h3>
                  </div>
                  <button>$45,000</button>
                </div>
                <div className="mobile-biggest-page-table3">
                  <img src={winner7} alt="best" />
                  <div className="table3-center">
                    <img src={winner3} alt="best" />
                    <h3>hidden</h3>
                  </div>
                  <button>$45,000</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mobile-latest">
          <div className="mobile-row">
            <h4>Latest Best</h4>
          </div>
          <div className="mobile-row-1">
            <h4>High rollers</h4>
          </div>
          <div className="mobile-row-2">
            <h4>Wager contest</h4>
          </div>
        </div>

        <div className="table">
          <div className="table-items">
            <div className="table-head1 iu">
              <h4>Game</h4>
              <div className="table-game-row">
                <img src={table1} alt="table1" width={"20px"} />
                <h4>Lorem</h4>
              </div>
              <div className="table-game-row1">
                <img src={table1} alt="table1" width={"20px"} />
                <h4>Lorem</h4>
              </div>
              <div className="table-game-row1">
                <img src={table1} alt="table1" width={"20px"} />
                <h4>Lorem</h4>
              </div>
              <div className="table-game-row1">
                <img src={table1} alt="table1" width={"20px"} />
                <h4>Lorem</h4>
              </div>
              <div className="table-game-row1">
                <img src={table1} alt="table1" width={"20px"} />
                <h4>Lorem</h4>
              </div>
              <div className="table-game-row1">
                <img src={table1} alt="table1" width={"20px"} />
                <h4>Lorem</h4>
              </div>
              <div className="table-game-row1">
                <img src={table1} alt="table1" width={"20px"} />
                <h4>Lorem</h4>
              </div>
              <div className="table-game-row1">
                <img src={table1} alt="table1" width={"20px"} />
                <h4>Lorem</h4>
              </div>
              <div className="table-game-row1">
                <img src={table1} alt="table1" width={"20px"} />
                <h4>Lorem</h4>
              </div>
              <div className="table-game-row1">
                <img src={table1} alt="table1" width={"20px"} />
                <h4>Lorem</h4>
              </div>
            </div>

            <div className="table-head2 iu">
              <h4>Player</h4>
              <div className="table-player1">
                <h4>Ipsum</h4>
              </div>
              <div className="table-player2">
                <h4>Ipsum</h4>
              </div>
              <div className="table-player2">
                <h4>Ipsum</h4>
              </div>
              <div className="table-player2">
                <h4>Ipsum</h4>
              </div>
              <div className="table-player2">
                <h4>Ipsum</h4>
              </div>
              <div className="table-player2">
                <h4>Ipsum</h4>
              </div>
              <div className="table-player2">
                <h4>Ipsum</h4>
              </div>
              <div className="table-player2">
                <h4>Ipsum</h4>
              </div>
              <div className="table-player2">
                <h4>Ipsum</h4>
              </div>
              <div className="table-player2">
                <h4>Ipsum</h4>
              </div>
            </div>

            <div className="table-head3 iu">
              <h4>Bet Amount</h4>
              <div className="table-bet-row">
                <h4>0.000000</h4>
                <img src={table2} alt="table2" width={"12px"} />
              </div>
              <div className="table-bet-row1">
                <h4>0.000000</h4>
                <img src={table3} alt="table3" width={"10px"} />
              </div>
              <div className="table-bet-row1">
                <h4>0.000000</h4>
                <img src={table2} alt="table2" width={"12px"} />
              </div>
              <div className="table-bet-row1">
                <h4>0.000000</h4>
                <img src={table3} alt="table3" width={"10px"} />
              </div>
              <div className="table-bet-row1">
                <h4>0.000000</h4>
                <img src={table2} alt="table2" width={"12px"} />
              </div>
              <div className="table-bet-row1">
                <h4>0.000000</h4>
                <img src={table3} alt="table3" width={"10px"} />
              </div>
              <div className="table-bet-row1">
                <h4>0.000000</h4>
                <img src={table2} alt="table2" width={"12px"} />
              </div>
              <div className="table-bet-row1">
                <h4>0.000000</h4>
                <img src={table3} alt="table3" width={"10px"} />
              </div>
              <div className="table-bet-row1">
                <h4>0.000000</h4>
                <img src={table2} alt="table2" width={"12px"} />
              </div>
              <div className="table-bet-row1">
                <h4>0.000000</h4>
                <img src={table3} alt="table3" width={"10px"} />
              </div>
            </div>

            <div className="table-head2 iu">
              <h4>Multipier</h4>
              <div className="table-multi1">
                <h4>0.00x</h4>
              </div>
              <div className="table-multi2">
                <h4>0.00x</h4>
              </div>
              <div className="table-multi2">
                <h4>0.00x</h4>
              </div>
              <div className="table-multi2">
                <h4>0.00x</h4>
              </div>
              <div className="table-multi2">
                <h4>0.00x</h4>
              </div>
              <div className="table-multi2">
                <h4>0.00x</h4>
              </div>
              <div className="table-multi2">
                <h4>0.00x</h4>
              </div>
              <div className="table-multi2">
                <h4>0.00x</h4>
              </div>
              <div className="table-multi2">
                <h4>0.00x</h4>
              </div>
              <div className="table-multi2">
                <h4>0.00x</h4>
              </div>
            </div>
            <div className="table-head3 iu">
              <h4>Profit</h4>
              <div className="table-bet-row">
                <h4>0.000000</h4>
                <img src={table2} alt="table2" width={"12px"} />
              </div>
              <div className="table-bet-row1">
                <h4>0.000000</h4>
                <img src={table3} alt="table3" width={"10px"} />
              </div>
              <div className="table-bet-row1">
                <h4>0.000000</h4>
                <img src={table2} alt="table2" width={"12px"} />
              </div>
              <div className="table-bet-row1">
                <h4>0.000000</h4>
                <img src={table3} alt="table3" width={"10px"} />
              </div>
              <div className="table-bet-row1">
                <h4>0.000000</h4>
                <img src={table2} alt="table2" width={"12px"} />
              </div>
              <div className="table-bet-row1">
                <h4>0.000000</h4>
                <img src={table3} alt="table3" width={"10px"} />
              </div>
              <div className="table-bet-row1">
                <h4>0.000000</h4>
                <img src={table2} alt="table2" width={"12px"} />
              </div>
              <div className="table-bet-row1">
                <h4>0.000000</h4>
                <img src={table3} alt="table3" width={"10px"} />
              </div>
              <div className="table-bet-row1">
                <h4>0.000000</h4>
                <img src={table2} alt="table2" width={"12px"} />
              </div>
              <div className="table-bet-row1">
                <h4>0.000000</h4>
                <img src={table3} alt="table3" width={"10px"} />
              </div>
            </div>
          </div>
        </div>

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

      <Footer />
    </div>
  );
}
