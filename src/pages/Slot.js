import React from "react";
import { useState } from "react";
import "./pagesStyles/slot.css";
import slotIcon from "./images/slot icon.png";
import slotIcon1 from "./images/slot icon 1.png";
import slotIcon2 from "./images/slot icon 2.png";
import slotIcon3 from "./images/slot icon 3.png";
import slotIcon4 from "./images/slot icon 4.png";
import slot6 from "./images/slot 6.png";
import slot1 from "./images/slot 1.png";
import slot2 from "./images/slot 2.png";
import slot3 from "./images/slot 3.png";
import slot4 from "./images/slot 4.png";
import slot5 from "./images/slot 5.png";
import slot7 from "./images/slot 7.png";
import slot8 from "./images/slot 8.png";
import slot9 from "./images/slot 9.png";
import slot10 from "./images/slot 10.png";
import slot11 from "./images/slot 11.png";
import slot12 from "./images/slot 12.png";
import slot13 from "./images/slot 13.png";
import slot14 from "./images/slot 14.png";
import slot15 from "./images/slot 15.png";
import slot16 from "./images/slot 16.png";
import slot17 from "./images/slot 17.png";
import slot19 from "./images/slot 19.png";
import slot20 from "./images/slot 20.png";
import slot21 from "./images/slot 21.png";
import slot22 from "./images/slot 22.png";
import slot23 from "./images/slot 23.png";
import slot25 from "./images/slot 25.png";
import slot26 from "./images/slot 27.png";
import slot29 from "./images/slot 30.png";
import slot30 from "./images/slot 30.png";
import slot31 from "./images/slot 31.png";
import slot32 from "./images/slot 32.png";
import slot33 from "./images/slot 33.png";
import slot34 from "./images/slot 34.png";
import slot35 from "./images/slot 35.png";
import slot36 from "./images/slot 36.png";
import slot37 from "./images/slot 37.png";
import slot38 from "./images/slot 38.png";
import slot39 from "./images/slot 39.png";
import slot40 from "./images/slot 40.png";
import slot41 from "./images/slot 41.png";
import slot42 from "./images/slot 42.png";
import pointer1 from "./images/slot pointer 1.png";
import pointer2 from "./images/slot pointer 2.png";
import play from "./images/play-icon.png";
import Footer from "./FooterPage";

// import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";

import "swiper/css/bundle";

// import required modules
import { Navigation } from "swiper";

import mark from "./images/best question mark.png";

export default function Slot() {
  const [showprovider, setShowprovider] = useState(false);

  function showPro() {
    setShowprovider(true);
  }
  function hidePro() {
    setShowprovider(false);
  }
  return (
    <div className="slot-display-cover">
      <div className="slot-display-desktop">
        <div className="display-Slot">
          <div className="slot">
            <div className="slot-page">
              <div className="slot-text1">
                <h4>Slots</h4>
              </div>
              <div
                onMouseEnter={showPro}
                onMouseLeave={hidePro}
                className="slot-text2"
              >
                <h4>All Providers</h4>
                <div className="providers-arrow">
                  <h3> &#10095;</h3>
                </div>
              </div>
            </div>
            {showprovider && (
              <div
                onMouseEnter={showPro}
                onMouseLeave={hidePro}
                className="slot-dropdown-list"
              >
                <div className="slot-list">
                  <div className="slot-list1">
                    <div className="slot-head-text">
                      <h4>All provider</h4>
                    </div>
                    <div className="slot-list-pointers">
                      <div className="slot-list-pointer1">
                        <img src={pointer1} alt="slotIcon" width={"10px"} />
                        <div className="slot-list-pointer2">
                          <img src={pointer2} alt="slotIcon" width={"5px"} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="slot-list2">
                    <div
                      id="slot-dropdown-list1"
                      className="slot-dropdown-list2"
                    >
                      <h4>Pragmatic Play</h4>
                      <h3>000</h3>
                    </div>
                    <div
                      id="slot-dropdown-list1"
                      className="slot-dropdown-list2"
                    >
                      <h4>NoLimit City</h4>
                      <h3>000</h3>
                    </div>
                    <div
                      id="slot-dropdown-list1"
                      className="slot-dropdown-list2"
                    >
                      <h4>Hackshaw</h4>
                      <h3>000</h3>
                    </div>
                    <div
                      id="slot-dropdown-list1"
                      className="slot-dropdown-list2"
                    >
                      <h4>PlaynGo</h4>
                      <h3>000</h3>
                    </div>
                    <div
                      id="slot-dropdown-list1"
                      className="slot-dropdown-list2"
                    >
                      <h4>Push Gaming</h4>
                      <h3>000</h3>
                    </div>
                    <div
                      id="slot-dropdown-list1"
                      className="slot-dropdown-list2"
                    >
                      <h4>Spinomenal</h4>
                      <h3>000</h3>
                    </div>
                    <div
                      id="slot-dropdown-list1"
                      className="slot-dropdown-list2"
                    >
                      <h4>Pragmatic Play</h4>
                      <h3>000</h3>
                    </div>
                    <div
                      id="slot-dropdown-list1"
                      className="slot-dropdown-list2"
                    >
                      <h4>NoLimit City</h4>
                      <h3>000</h3>
                    </div>
                    <div
                      id="slot-dropdown-list1"
                      className="slot-dropdown-list2"
                    >
                      <h4>Hackshaw</h4>
                      <h3>000</h3>
                    </div>
                    <div
                      id="slot-dropdown-list1"
                      className="slot-dropdown-list2"
                    >
                      <h4>PlaynGo</h4>
                      <h3>000</h3>
                    </div>
                    <div
                      id="slot-dropdown-list1"
                      className="slot-dropdown-list2"
                    >
                      <h4>Push Gaming</h4>
                      <h3>000</h3>
                    </div>
                    <div
                      id="slot-dropdown-list1"
                      className="slot-dropdown-list2"
                    >
                      <h4>Spinomenal</h4>
                      <h3>000</h3>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="slot-line1">
            <div className="slot-line1-text">
              <img src={slotIcon} alt="slotIcon" width={"19px"} />
              <h4>Recommended Games</h4>
              <h3>20</h3>
            </div>
            <div className="slot-line1-arrows">
              <div className="slot-arrow-left">
                <h3> &#10094;</h3>
              </div>
              <div className="slot-arrow-right">
                <h3> &#10095;</h3>
              </div>
            </div>
          </div>

          <div className="content-img-swipe">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              speed={1000}
              navigation={{
                nextEl: ".slot-arrow-right",
                prevEl: ".slot-arrow-left",
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="slot-display">
                  <div className="slot-flex">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot1} alt="slot1" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>Mancala</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot2} alt="slot2" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>RubyPlay</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot3} alt="slot3" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>Microgaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot4} alt="slot4" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>Betsoft</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot5} alt="slot5" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>BGaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex game_show">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot6} alt="slot6" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>Amigo Gaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slot-display">
                  <div className="slot-flex">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot13} alt="slot13" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>Mancala</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot14} alt="slot14" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>RubyPlay</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot15} alt="slot15" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>Microgaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot16} alt="slot16" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>Betsoft</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot17} alt="slot17" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>BGaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex game_show">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot16} alt="slot16" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>Amigo Gaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="slot-line1">
            <div className="slot-line1-text">
              <img src={slotIcon1} alt="slotIcon1" width={"19px"} />
              <h4>Feature Buy-in-Slots</h4>
              <h3>20</h3>
            </div>
            <div className="slot-line1-arrows2">
              <div className="slot-arrow-left2">
                <h3> &#10094;</h3>
              </div>
              <div className="slot-arrow-right2">
                <h3> &#10095;</h3>
              </div>
            </div>
          </div>

          <div className="content-img-swipe">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              speed={1000}
              navigation={{
                nextEl: ".slot-arrow-right2",
                prevEl: ".slot-arrow-left2",
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="slot-display">
                  <div className="slot-flex">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot7} alt="slot7" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>Mancala</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot8} alt="slot8" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>RubyPlay</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot9} alt="slot9" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>Microgaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot10} alt="slot10" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>Betsoft</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot11} alt="slot11" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>BGaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex game_show">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot12} alt="slot12" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>Amigo Gaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slot-display">
                  <div className="slot-flex">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot13} alt="slot13" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>Mancala</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot14} alt="slot14" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>RubyPlay</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot15} alt="slot15" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>Microgaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot16} alt="slot16" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>Betsoft</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot17} alt="slot17" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>BGaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex game_show">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot16} alt="slot16" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>Amigo Gaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="slot-line1">
            <div className="slot-line1-text">
              <img src={slotIcon2} alt="slotIcon2" width={"19px"} />
              <h4>Trending Games</h4>
              <h3>20</h3>
            </div>
            <div className="slot-line1-arrows3">
              <div className="slot-arrow-left3">
                <h3> &#10094;</h3>
              </div>
              <div className="slot-arrow-right3">
                <h3> &#10095;</h3>
              </div>
            </div>
          </div>

          <div className="content-img-swipe">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              speed={1000}
              navigation={{
                nextEl: ".slot-arrow-right3",
                prevEl: ".slot-arrow-left3",
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="slot-display">
                  <div className="slot-flex">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot13} alt="slot13" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>Mancala</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot14} alt="slot14" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>RubyPlay</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot15} alt="slot15" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>Microgaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot16} alt="slot16" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>Betsoft</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot17} alt="slot17" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>BGaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex game_show">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot16} alt="slot16" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>Amigo Gaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slot-display">
                  <div className="slot-flex">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot13} alt="slot13" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>Mancala</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot14} alt="slot14" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>RubyPlay</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot15} alt="slot15" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>Microgaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot16} alt="slot16" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>Betsoft</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot17} alt="slot17" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>BGaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex game_show">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot16} alt="slot16" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>Amigo Gaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="slot-line1">
            <div className="slot-line1-text">
              <img src={slotIcon3} alt="slotIcon3" width={"19px"} />
              <h4>Hot Games</h4>
              <h3>20</h3>
            </div>
            <div className="slot-line1-arrows4">
              <div className="slot-arrow-left4">
                <h3> &#10094;</h3>
              </div>
              <div className="slot-arrow-right4">
                <h3> &#10095;</h3>
              </div>
            </div>
          </div>

          <div className="content-img-swipe">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              speed={1000}
              navigation={{
                nextEl: ".slot-arrow-right4",
                prevEl: ".slot-arrow-left4",
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="slot-display">
                  <div className="slot-flex">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot19} alt="slot19" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>Mancala</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot20} alt="slot20" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>RubyPlay</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot21} alt="slot21" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>Microgaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot22} alt="slot22" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>Betsoft</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot23} alt="slot23" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>BGaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex game_show">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot23} alt="slot23" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>Amigo Gaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slot-display">
                  <div className="slot-flex">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot13} alt="slot13" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>Mancala</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot14} alt="slot14" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>RubyPlay</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot15} alt="slot15" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>Microgaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot16} alt="slot16" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>Betsoft</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot17} alt="slot17" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>BGaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex game_show">
                    <div className="slot-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={slot16} alt="slot16" width={"100%"} />
                      </div>
                    </div>
                    <div className="slot-image-text">
                      <h4>Amigo Gaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="slot-line1">
            <div className="slot-line1-text">
              <img src={slotIcon4} alt="slotIcon4" width={"19px"} />
              <h4>All Providers</h4>
              <h3>5524</h3>
              <h4>Sort By: A to Z Z to A</h4>
            </div>
          </div>

          <div className="slot-display">
            <div className="slot-flex">
              <div className="slot-image">
                <div className="overlay2">
                  <div className="image_overlay2">
                    <img src={play} alt="play" width={"100%"} />
                    <h2>House Edge 1%</h2>
                  </div>
                  <img src={slot25} alt="slot25" width={"100%"} />
                </div>
              </div>
              <div className="slot-image-text">
                <h4>Betsoft</h4>
                <img src={mark} alt="mark" width={"15px"} />
              </div>
            </div>

            <div className="slot-flex">
              <div className="slot-image">
                <div className="overlay2">
                  <div className="image_overlay2">
                    <img src={play} alt="play" width={"100%"} />
                    <h2>House Edge 1%</h2>
                  </div>
                  <img src={slot26} alt="slot26" width={"100%"} />
                </div>
              </div>
              <div className="slot-image-text">
                <h4>Evoplay</h4>
                <img src={mark} alt="mark" width={"15px"} />
              </div>
            </div>

            <div className="slot-flex">
              <div className="slot-image">
                <div className="overlay2">
                  <div className="image_overlay2">
                    <img src={play} alt="play" width={"100%"} />
                    <h2>House Edge 1%</h2>
                  </div>
                  <img src={slot29} alt="slot26" width={"100%"} />
                </div>
              </div>
              <div className="slot-image-text">
                <h4>Evoplay</h4>
                <img src={mark} alt="mark" width={"15px"} />
              </div>
            </div>

            <div className="slot-flex">
              <div className="slot-image">
                <div className="overlay2">
                  <div className="image_overlay2">
                    <img src={play} alt="play" width={"100%"} />
                    <h2>House Edge 1%</h2>
                  </div>
                  <img src={slot25} alt="slot25" width={"100%"} />
                </div>
              </div>
              <div className="slot-image-text">
                <h4>Belatra</h4>
                <img src={mark} alt="mark" width={"15px"} />
              </div>
            </div>

            <div className="slot-flex">
              <div className="slot-image">
                <div className="overlay2">
                  <div className="image_overlay2">
                    <img src={play} alt="play" width={"100%"} />
                    <h2>House Edge 1%</h2>
                  </div>
                  <img src={slot29} alt="slot29" width={"100%"} />
                </div>
              </div>
              <div className="slot-image-text">
                <h4>Evoplay</h4>
                <img src={mark} alt="mark" width={"15px"} />
              </div>
            </div>

            <div className="slot-flex game_show">
              <div className="slot-image">
                <div className="overlay2">
                  <div className="image_overlay2">
                    <img src={play} alt="play" width={"100%"} />
                    <h2>House Edge 1%</h2>
                  </div>
                  <img src={slot30} alt="slot30" width={"100%"} />
                </div>
              </div>
              <div className="slot-image-text">
                <h4>Belatra</h4>
                <img src={mark} alt="mark" width={"15px"} />
              </div>
            </div>
          </div>

          <div className="slot-display">
            <div className="slot-flex">
              <div className="slot-image">
                <div className="overlay2">
                  <div className="image_overlay2">
                    <img src={play} alt="play" width={"100%"} />
                    <h2>House Edge 1%</h2>
                  </div>
                  <img src={slot31} alt="slot31" width={"100%"} />
                </div>
              </div>
              <div className="slot-image-text">
                <h4>Mancala</h4>
                <img src={mark} alt="mark" width={"15px"} />
              </div>
            </div>

            <div className="slot-flex">
              <div className="slot-image">
                <div className="overlay2">
                  <div className="image_overlay2">
                    <img src={play} alt="play" width={"100%"} />
                    <h2>House Edge 1%</h2>
                  </div>
                  <img src={slot32} alt="slot32" width={"100%"} />
                </div>
              </div>
              <div className="slot-image-text">
                <h4>RubyPlay</h4>
                <img src={mark} alt="mark" width={"15px"} />
              </div>
            </div>

            <div className="slot-flex">
              <div className="slot-image">
                <div className="overlay2">
                  <div className="image_overlay2">
                    <img src={play} alt="play" width={"100%"} />
                    <h2>House Edge 1%</h2>
                  </div>
                  <img src={slot33} alt="slot33" width={"100%"} />
                </div>
              </div>
              <div className="slot-image-text">
                <h4>Microgaming</h4>
                <img src={mark} alt="mark" width={"15px"} />
              </div>
            </div>

            <div className="slot-flex">
              <div className="slot-image">
                <div className="overlay2">
                  <div className="image_overlay2">
                    <img src={play} alt="play" width={"100%"} />
                    <h2>House Edge 1%</h2>
                  </div>
                  <img src={slot34} alt="slot34" width={"100%"} />
                </div>
              </div>
              <div className="slot-image-text">
                <h4>Betsoft</h4>
                <img src={mark} alt="mark" width={"15px"} />
              </div>
            </div>

            <div className="slot-flex">
              <div className="slot-image">
                <div className="overlay2">
                  <div className="image_overlay2">
                    <img src={play} alt="play" width={"100%"} />
                    <h2>House Edge 1%</h2>
                  </div>
                  <img src={slot35} alt="slot35" width={"100%"} />
                </div>
              </div>
              <div className="slot-image-text">
                <h4>BGaming</h4>
                <img src={mark} alt="mark" width={"15px"} />
              </div>
            </div>

            <div className="slot-flex game_show">
              <div className="slot-image">
                <div className="overlay2">
                  <div className="image_overlay2">
                    <img src={play} alt="play" width={"100%"} />
                    <h2>House Edge 1%</h2>
                  </div>
                  <img src={slot36} alt="slot36" width={"100%"} />
                </div>
              </div>
              <div className="slot-image-text">
                <h4>Amigo Gaming</h4>
                <img src={mark} alt="mark" width={"15px"} />
              </div>
            </div>
          </div>

          <div className="slot-display">
            <div className="slot-flex">
              <div className="slot-image">
                <div className="overlay2">
                  <div className="image_overlay2">
                    <img src={play} alt="play" width={"100%"} />
                    <h2>House Edge 1%</h2>
                  </div>
                  <img src={slot37} alt="slot37" width={"100%"} />
                </div>
              </div>
              <div className="slot-image-text">
                <h4>Betsoft</h4>
                <img src={mark} alt="mark" width={"15px"} />
              </div>
            </div>

            <div className="slot-flex">
              <div className="slot-image">
                <div className="overlay2">
                  <div className="image_overlay2">
                    <img src={play} alt="play" width={"100%"} />
                    <h2>House Edge 1%</h2>
                  </div>
                  <img src={slot38} alt="slot38" width={"100%"} />
                </div>
              </div>
              <div className="slot-image-text">
                <h4>Belatra</h4>
                <img src={mark} alt="mark" width={"15px"} />
              </div>
            </div>

            <div className="slot-flex">
              <div className="slot-image">
                <div className="overlay2">
                  <div className="image_overlay2">
                    <img src={play} alt="play" width={"100%"} />
                    <h2>House Edge 1%</h2>
                  </div>
                  <img src={slot39} alt="slot39" width={"100%"} />
                </div>
              </div>
              <div className="slot-image-text">
                <h4>Booming</h4>
                <img src={mark} alt="mark" width={"15px"} />
              </div>
            </div>

            <div className="slot-flex">
              <div className="slot-image">
                <div className="overlay2">
                  <div className="image_overlay2">
                    <img src={play} alt="play" width={"100%"} />
                    <h2>House Edge 1%</h2>
                  </div>
                  <img src={slot40} alt="slot40" width={"100%"} />
                </div>
              </div>
              <div className="slot-image-text">
                <h4>Amigo</h4>
                <img src={mark} alt="mark" width={"15px"} />
              </div>
            </div>

            <div className="slot-flex">
              <div className="slot-image">
                <div className="overlay2">
                  <div className="image_overlay2">
                    <img src={play} alt="play" width={"100%"} />
                    <h2>House Edge 1%</h2>
                  </div>
                  <img src={slot41} alt="slot41" width={"100%"} />
                </div>
              </div>
              <div className="slot-image-text">
                <h4>Pragmatic play</h4>
                <img src={mark} alt="mark" width={"15px"} />
              </div>
            </div>

            <div className="slot-flex game_show">
              <div className="slot-image">
                <div className="overlay2">
                  <div className="image_overlay2">
                    <img src={play} alt="play" width={"100%"} />
                    <h2>House Edge 1%</h2>
                  </div>
                  <img src={slot42} alt="slot42" width={"100%"} />
                </div>
              </div>
              <div className="slot-image-text">
                <h4>Spinomenal</h4>
                <img src={mark} alt="mark" width={"15px"} />
              </div>
            </div>
          </div>

          <div className="slot-footer game_show">
            <div className="slot-footer1">
              <h4>
                18 <span>/5549</span>
              </h4>
              <div className="progress">
                <div className="progress-motion"></div>
              </div>
              <h3>5%</h3>
            </div>
            <div className="footer-load">
              <h4>Load More</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="slot-display-mobile">
        <div className="display-Slot">
          <div className="slot">
            <div className="slot-page">
              <div className="slot-text1">
                <h4>Slots</h4>
              </div>
              <div
                onMouseEnter={showPro}
                onMouseLeave={hidePro}
                className="slot-text2"
              >
                <h4>All Providers</h4>
                <div className="providers-arrow">
                  <h3> &#10095;</h3>
                </div>
              </div>
            </div>
            {showprovider && (
              <div
                onMouseEnter={showPro}
                onMouseLeave={hidePro}
                className="slot-dropdown-list"
              >
                <div className="slot-list">
                  <div className="slot-list1">
                    <div className="slot-head-text">
                      <h4>All provider</h4>
                    </div>
                    <div className="slot-list-pointers">
                      <div className="slot-list-pointer1">
                        <img src={pointer1} alt="slotIcon" width={"10px"} />
                        <div className="slot-list-pointer2">
                          <img src={pointer2} alt="slotIcon" width={"5px"} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="slot-list2">
                    <div
                      id="slot-dropdown-list1"
                      className="slot-dropdown-list2"
                    >
                      <h4>Pragmatic Play</h4>
                      <h3>000</h3>
                    </div>
                    <div
                      id="slot-dropdown-list1"
                      className="slot-dropdown-list2"
                    >
                      <h4>NoLimit City</h4>
                      <h3>000</h3>
                    </div>
                    <div
                      id="slot-dropdown-list1"
                      className="slot-dropdown-list2"
                    >
                      <h4>Hackshaw</h4>
                      <h3>000</h3>
                    </div>
                    <div
                      id="slot-dropdown-list1"
                      className="slot-dropdown-list2"
                    >
                      <h4>PlaynGo</h4>
                      <h3>000</h3>
                    </div>
                    <div
                      id="slot-dropdown-list1"
                      className="slot-dropdown-list2"
                    >
                      <h4>Push Gaming</h4>
                      <h3>000</h3>
                    </div>
                    <div
                      id="slot-dropdown-list1"
                      className="slot-dropdown-list2"
                    >
                      <h4>Spinomenal</h4>
                      <h3>000</h3>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="slot-line1">
            <div className="slot-line1-text">
              <img src={slotIcon} alt="slotIcon" width={"19px"} />
              <h4>Recommended Games</h4>
              <h3>12</h3>
            </div>
            <div className="slot-line1-arrows">
              <div className="slot-arrow-left">
                <h3> &#10094;</h3>
              </div>
              <div className="slot-arrow-right">
                <h3> &#10095;</h3>
              </div>
            </div>
          </div>

          <div className="content-img-swipe">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              speed={1000}
              navigation={{
                nextEl: ".slot-arrow-right",
                prevEl: ".slot-arrow-left",
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="slot-display">
                  <div className="slot-flex">
                    <div className="slot-image">
                      <img src={slot1} alt="slot1" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>Mancala</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex">
                    <div className="slot-image">
                      <img src={slot2} alt="slot2" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>RubyPlay</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slot-display">
                  <div className="slot-flex">
                    <div className="slot-image">
                      <img src={slot3} alt="slot3" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>Microgaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex">
                    <div className="slot-image">
                      <img src={slot4} alt="slot4" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>Betsoft</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slot-display">
                  <div className="slot-flex">
                    <div className="slot-image">
                      <img src={slot5} alt="slot5" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>BGaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex game_show">
                    <div className="slot-image">
                      <img src={slot6} alt="slot6" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>Amigo Gaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slot-display">
                  <div className="slot-flex">
                    <div className="slot-image">
                      <img src={slot17} alt="slot17" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>BGaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex game_show">
                    <div className="slot-image">
                      <img src={slot16} alt="slot16" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>Amigo Gaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slot-display">
                  <div className="slot-flex">
                    <div className="slot-image">
                      <img src={slot13} alt="slot13" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>Mancala</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex">
                    <div className="slot-image">
                      <img src={slot14} alt="slot14" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>RubyPlay</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slot-display">
                  <div className="slot-flex">
                    <div className="slot-image">
                      <img src={slot15} alt="slot15" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>Microgaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex">
                    <div className="slot-image">
                      <img src={slot16} alt="slot16" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>Betsoft</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="slot-line1">
            <div className="slot-line1-text">
              <img src={slotIcon1} alt="slotIcon1" width={"19px"} />
              <h4>Feature Buy-in-Slots</h4>
              <h3>20</h3>
            </div>
            <div className="slot-line1-arrows2">
              <div className="slot-arrow-left2">
                <h3> &#10094;</h3>
              </div>
              <div className="slot-arrow-right2">
                <h3> &#10095;</h3>
              </div>
            </div>
          </div>

          <div className="content-img-swipe">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              speed={1000}
              navigation={{
                nextEl: ".slot-arrow-right2",
                prevEl: ".slot-arrow-left2",
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="slot-display">
                  <div className="slot-flex">
                    <div className="slot-image">
                      <img src={slot11} alt="slot11" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>BGaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex game_show">
                    <div className="slot-image">
                      <img src={slot12} alt="slot12" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>Amigo Gaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slot-display">
                  <div className="slot-flex">
                    <div className="slot-image">
                      <img src={slot7} alt="slot7" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>Mancala</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex">
                    <div className="slot-image">
                      <img src={slot8} alt="slot8" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>RubyPlay</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slot-display">
                  <div className="slot-flex">
                    <div className="slot-image">
                      <img src={slot9} alt="slot9" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>Microgaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex">
                    <div className="slot-image">
                      <img src={slot10} alt="slot10" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>Betsoft</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slot-display">
                  <div className="slot-flex">
                    <div className="slot-image">
                      <img src={slot17} alt="slot17" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>BGaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex game_show">
                    <div className="slot-image">
                      <img src={slot16} alt="slot16" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>Amigo Gaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slot-display">
                  <div className="slot-flex">
                    <div className="slot-image">
                      <img src={slot13} alt="slot13" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>Mancala</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex">
                    <div className="slot-image">
                      <img src={slot14} alt="slot14" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>RubyPlay</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slot-display">
                  <div className="slot-flex">
                    <div className="slot-image">
                      <img src={slot17} alt="slot17" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>BGaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex game_show">
                    <div className="slot-image">
                      <img src={slot16} alt="slot16" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>Amigo Gaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="slot-line1">
            <div className="slot-line1-text">
              <img src={slotIcon2} alt="slotIcon2" width={"19px"} />
              <h4>Trending Games</h4>
              <h3>14</h3>
            </div>
            <div className="slot-line1-arrows3">
              <div className="slot-arrow-left3">
                <h3> &#10094;</h3>
              </div>
              <div className="slot-arrow-right3">
                <h3> &#10095;</h3>
              </div>
            </div>
          </div>

          <div className="content-img-swipe">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              speed={1000}
              navigation={{
                nextEl: ".slot-arrow-right3",
                prevEl: ".slot-arrow-left3",
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="slot-display">
                  <div className="slot-flex">
                    <div className="slot-image">
                      <img src={slot17} alt="slot17" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>BGaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex game_show">
                    <div className="slot-image">
                      <img src={slot16} alt="slot16" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>Amigo Gaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slot-display">
                  <div className="slot-flex">
                    <div className="slot-image">
                      <img src={slot13} alt="slot13" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>Mancala</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex">
                    <div className="slot-image">
                      <img src={slot14} alt="slot14" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>RubyPlay</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slot-display">
                  <div className="slot-flex">
                    <div className="slot-image">
                      <img src={slot15} alt="slot15" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>Microgaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex">
                    <div className="slot-image">
                      <img src={slot16} alt="slot16" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>Betsoft</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slot-display">
                  <div className="slot-flex">
                    <div className="slot-image">
                      <img src={slot17} alt="slot17" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>BGaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex game_show">
                    <div className="slot-image">
                      <img src={slot16} alt="slot16" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>Amigo Gaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slot-display">
                  <div className="slot-flex">
                    <div className="slot-image">
                      <img src={slot15} alt="slot15" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>Microgaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex">
                    <div className="slot-image">
                      <img src={slot16} alt="slot16" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>Betsoft</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slot-display">
                  <div className="slot-flex">
                    <div className="slot-image">
                      <img src={slot15} alt="slot15" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>Microgaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex">
                    <div className="slot-image">
                      <img src={slot16} alt="slot16" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>Betsoft</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="slot-line1">
            <div className="slot-line1-text">
              <img src={slotIcon3} alt="slotIcon3" width={"19px"} />
              <h4>Hot Games</h4>
              <h3>10</h3>
            </div>
            <div className="slot-line1-arrows4">
              <div className="slot-arrow-left4">
                <h3> &#10094;</h3>
              </div>
              <div className="slot-arrow-right4">
                <h3> &#10095;</h3>
              </div>
            </div>
          </div>

          <div className="content-img-swipe">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              speed={1000}
              navigation={{
                nextEl: ".slot-arrow-right4",
                prevEl: ".slot-arrow-left4",
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="slot-display">
                  <div className="slot-flex">
                    <div className="slot-image">
                      <img src={slot23} alt="slot23" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>BGaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex game_show">
                    <div className="slot-image">
                      <img src={slot23} alt="slot23" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>Amigo Gaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slot-display">
                  <div className="slot-flex">
                    <div className="slot-image">
                      <img src={slot21} alt="slot21" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>Microgaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex">
                    <div className="slot-image">
                      <img src={slot22} alt="slot22" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>Betsoft</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slot-display">
                  <div className="slot-flex">
                    <div className="slot-image">
                      <img src={slot19} alt="slot19" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>Mancala</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex">
                    <div className="slot-image">
                      <img src={slot20} alt="slot20" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>RubyPlay</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slot-display">
                  <div className="slot-flex">
                    <div className="slot-image">
                      <img src={slot17} alt="slot17" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>BGaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex game_show">
                    <div className="slot-image">
                      <img src={slot16} alt="slot16" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>Amigo Gaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slot-display">
                  <div className="slot-flex">
                    <div className="slot-image">
                      <img src={slot17} alt="slot17" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>BGaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex game_show">
                    <div className="slot-image">
                      <img src={slot16} alt="slot16" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>Amigo Gaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slot-display">
                  <div className="slot-flex">
                    <div className="slot-image">
                      <img src={slot15} alt="slot15" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>Microgaming</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>

                  <div className="slot-flex">
                    <div className="slot-image">
                      <img src={slot16} alt="slot16" width={"100%"} />
                    </div>
                    <div className="slot-image-text">
                      <h4>Betsoft</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="slot-line1">
            <div className="slot-line1-text">
              <img src={slotIcon4} alt="slotIcon4" width={"19px"} />
              <h4>
                All Providers <span></span>
              </h4>
              <h3>5524</h3>
              <h4>Sort By: A to Z Z to A</h4>
            </div>
          </div>

          <div className="slot-display">
            <div className="slot-flex">
              <div className="slot-image">
                <img src={slot25} alt="slot25" width={"100%"} />
              </div>
              <div className="slot-image-text">
                <h4>Betsoft</h4>
                <img src={mark} alt="mark" width={"15px"} />
              </div>
            </div>

            <div className="slot-flex">
              <div className="slot-image">
                <img src={slot26} alt="slot26" width={"100%"} />
              </div>
              <div className="slot-image-text">
                <h4>Evoplay</h4>
                <img src={mark} alt="mark" width={"15px"} />
              </div>
            </div>

            <div className="slot-flex">
              <div className="slot-image">
                <img src={slot29} alt="slot26" width={"100%"} />
              </div>
              <div className="slot-image-text">
                <h4>Evoplay</h4>
                <img src={mark} alt="mark" width={"15px"} />
              </div>
            </div>

            <div className="slot-flex">
              <div className="slot-image">
                <img src={slot25} alt="slot25" width={"100%"} />
              </div>
              <div className="slot-image-text">
                <h4>Belatra</h4>
                <img src={mark} alt="mark" width={"15px"} />
              </div>
            </div>

            <div className="slot-flex">
              <div className="slot-image">
                <img src={slot29} alt="slot29" width={"100%"} />
              </div>
              <div className="slot-image-text">
                <h4>Evoplay</h4>
                <img src={mark} alt="mark" width={"15px"} />
              </div>
            </div>

            <div className="slot-flex game_show">
              <div className="slot-image">
                <img src={slot30} alt="slot30" width={"100%"} />
              </div>
              <div className="slot-image-text">
                <h4>Belatra</h4>
                <img src={mark} alt="mark" width={"15px"} />
              </div>
            </div>
          </div>

          <div className="slot-display">
            <div className="slot-flex">
              <div className="slot-image">
                <img src={slot31} alt="slot31" width={"100%"} />
              </div>
              <div className="slot-image-text">
                <h4>Mancala</h4>
                <img src={mark} alt="mark" width={"15px"} />
              </div>
            </div>

            <div className="slot-flex">
              <div className="slot-image">
                <img src={slot32} alt="slot32" width={"100%"} />
              </div>
              <div className="slot-image-text">
                <h4>RubyPlay</h4>
                <img src={mark} alt="mark" width={"15px"} />
              </div>
            </div>

            <div className="slot-flex">
              <div className="slot-image">
                <img src={slot33} alt="slot33" width={"100%"} />
              </div>
              <div className="slot-image-text">
                <h4>Microgaming</h4>
                <img src={mark} alt="mark" width={"15px"} />
              </div>
            </div>

            <div className="slot-flex">
              <div className="slot-image">
                <img src={slot34} alt="slot34" width={"100%"} />
              </div>
              <div className="slot-image-text">
                <h4>Betsoft</h4>
                <img src={mark} alt="mark" width={"15px"} />
              </div>
            </div>

            <div className="slot-flex">
              <div className="slot-image">
                <img src={slot35} alt="slot35" width={"100%"} />
              </div>
              <div className="slot-image-text">
                <h4>BGaming</h4>
                <img src={mark} alt="mark" width={"15px"} />
              </div>
            </div>

            <div className="slot-flex game_show">
              <div className="slot-image">
                <img src={slot36} alt="slot36" width={"100%"} />
              </div>
              <div className="slot-image-text">
                <h4>Amigo Gaming</h4>
                <img src={mark} alt="mark" width={"15px"} />
              </div>
            </div>
          </div>

          <div className="slot-display">
            <div className="slot-flex">
              <div className="slot-image">
                <img src={slot37} alt="slot37" width={"100%"} />
              </div>
              <div className="slot-image-text">
                <h4>Betsoft</h4>
                <img src={mark} alt="mark" width={"15px"} />
              </div>
            </div>

            <div className="slot-flex">
              <div className="slot-image">
                <img src={slot38} alt="slot38" width={"100%"} />
              </div>
              <div className="slot-image-text">
                <h4>Belatra</h4>
                <img src={mark} alt="mark" width={"15px"} />
              </div>
            </div>

            <div className="slot-flex">
              <div className="slot-image">
                <img src={slot39} alt="slot39" width={"100%"} />
              </div>
              <div className="slot-image-text">
                <h4>Booming</h4>
                <img src={mark} alt="mark" width={"15px"} />
              </div>
            </div>

            <div className="slot-flex">
              <div className="slot-image">
                <img src={slot40} alt="slot40" width={"100%"} />
              </div>
              <div className="slot-image-text">
                <h4>Amigo</h4>
                <img src={mark} alt="mark" width={"15px"} />
              </div>
            </div>

            <div className="slot-flex">
              <div className="slot-image">
                <img src={slot41} alt="slot41" width={"100%"} />
              </div>
              <div className="slot-image-text">
                <h4>Pragmatic play</h4>
                <img src={mark} alt="mark" width={"15px"} />
              </div>
            </div>

            <div className="slot-flex game_show">
              <div className="slot-image">
                <img src={slot42} alt="slot42" width={"100%"} />
              </div>
              <div className="slot-image-text">
                <h4>Spinomenal</h4>
                <img src={mark} alt="mark" width={"15px"} />
              </div>
            </div>
          </div>

          <div className="slot-footer game_show">
            <div className="slot-footer1">
              <h4>
                18 <span>/5549</span>
              </h4>
              <div className="progress">
                <div className="progress-motion"></div>
              </div>
              <h3>5%</h3>
            </div>
            <div className="footer-load">
              <h4>Load More</h4>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
