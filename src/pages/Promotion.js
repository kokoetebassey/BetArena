import React from "react";
import "./pagesStyles/promotion.css";
import promotion1 from "./images/promotion 1i.png";
// import promotion2 from "./images/promotion 2.png";
import coinSmall from "./images/promotion coin small.png";
import coinBig from "./images/promotion coin big.png";
import medal from "./images/promotion medal.png";
import ball from "./images/promotion ball.png";
import promotion from "./images/promotion4 img1.png";
import promotion2 from "./images/promotion4 img2.png";
import promotion3 from "./images/promotion4 img3.png";
import promotion4 from "./images/promotion4 img4.png";
import promotion5 from "./images/promotion6  img1.png";
import promotion6 from "./images/promotion6  img2.png";
import promotion7 from "./images/promotion6  img3.png";
import Footer from "./FooterPage";

// Import Swiper React component4
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";

import "swiper/css/bundle";

// import required modules
import { Navigation } from "swiper";

export default function Promotion() {
  return (
    <div className="promotion-display-cover">
      <div className="promotion-display">
        <div className="promotions1">
          <div className="promotion1-text">
            <h3>
              BA <span>PROMOTIONS</span>
            </h3>
            <h4>BEST BONUS COLLECTIONS</h4>
            <h5>
              Generous bonus are ready <br />
              Go dig out your treasures!
            </h5>
          </div>
          <img src={promotion1} alt="promotion1" />
        </div>

        <div className="promotion-flex-1">
          <div className="promotion-flex-1-inner">
            <div className="promotion2-text">
              <div className="promotion2-text-top">
                <h3>BA DOLLAR: BAD</h3>
                <h4>1 BAD = 1 USD</h4>
                <h5>Claim BAD Right Now</h5>
              </div>
              <div className="promotion2-text-footer">
                <h4>Details</h4>
                <h3> &#10095;</h3>
              </div>
            </div>

            <div className="promotion2-text-coin">
              <img src={coinBig} alt="coinBig" />
            </div>
            <div className="small-coin">
              <img src={coinSmall} alt="coinSmall" />
            </div>
            <div className="small-coin2">
              <img src={coinSmall} alt="coinSmall" />
            </div>
            <div className="small-coin3">
              <img src={coinSmall} alt="coinSmall" />
            </div>
          </div>
          <div className="promotion-flex-2">
            <div className="promotion-flex-2-1">
              <div className="promotion2-text-2">
                <h3>SHITCODE</h3>
                <h4>
                  Redeem shitcodes to unlock <br />
                  crypto rewards
                </h4>
              </div>
              <div className="promotion2-text-side">
                <h4>Details</h4>
                <h3> &#10095;</h3>
              </div>
            </div>
            <div className="promotion2-text-side-input">
              <input type="text" name="redeem" id="" />
              <button>Redeem Now</button>
            </div>
          </div>
        </div>

        <div className="promotion3">
          <div className="promotion3-page">
            <div className="promotion3-text">
              <h3>MASTER MEDALS</h3>
              <h4>
                Witness every step of your <br />
                becoming a Master
              </h4>
            </div>
            <div className="promotion3-text-footer">
              <h4>Details</h4>
              <h3> &#10095;</h3>
            </div>
          </div>

          <div className="promotion3-text-cover">
            <div className="promotion3-medals">
              <img src={medal} alt="medal" />
              <img src={medal} alt="medal" />
              <img src={medal} alt="medal" />
              <img src={medal} alt="medal" />
              <img src={medal} alt="medal" />
              <img src={medal} alt="medal" />
              <img src={medal} alt="medal" />
              <img src={medal} alt="medal" />
              <img src={medal} alt="medal" />
              <img src={medal} alt="medal" />
            </div>

            <div className="promotion-medal-text">
              <h4>
                0 <span>Medals</span>
              </h4>
              <h4>
                5 <span>Medals</span>
              </h4>
              <h4>
                10 <span>Medals</span>
              </h4>
              <h4>
                15 <span>Medals</span>
              </h4>
              <h4>Max</h4>
            </div>
          </div>
        </div>

        <div className="promotion-other">
          <img src={ball} alt="ball" />
          <h4>OTHER BONUS</h4>
          <img src={ball} alt="ball" />
        </div>

        <div className="promotion4">
          <div className="promotion4-flex1">
            <div className="promotion4-text">
              <h3>TASK HUB</h3>
              <h4>Acheive task and get rewarded!</h4>
              <button>Get Reward Now</button>
            </div>
            <div className="promotion4-text-img">
              <img src={promotion} alt="promotion" />
            </div>
          </div>

          <div className="promotion4-flex2">
            <div className="promotion4-text-2">
              <h4>
                <span>LUCKY </span>SPIN BONUS <br />
                SPIN AND GET UP TO <span>1 BTC</span>
              </h4>
              <button>Signup & Spin now</button>
            </div>
            <div className="promotion4-text-2-img">
              <img src={promotion2} alt="promotion2" width={"150px"} />
            </div>
          </div>
        </div>

        <div className="promotion5">
          <div className="promotion5-flex1">
            <div className="promotion5-text">
              <h3>RAKEBACK BONUS</h3>
              <h4>
                Collect Rakeback with every bet you place, whether you win or
                lose.
              </h4>
              <button>Get Reward Now</button>
            </div>
            <div className="promotion5-flex1-img">
              <img src={promotion3} alt="promotion3" />
            </div>
          </div>
          <div className="promotion5-flex2">
            <div className="promotion5-text-2">
              <h4>RECHARGE BONUS</h4>
              <h5>
                No one likes to wait for recharge to complete. Relax and Enjoy
                <br />
                steady stream of recharge right here!
              </h5>
            </div>
            <div className="promotion5-text-2-img">
              <img src={promotion4} alt="promotion4" />
            </div>
          </div>
        </div>

        <h4 className="promotion-footer-heading">OTHER CASINO BONUS</h4>

        <div className="promotion6">
          <div className="promotion6-flex">
            <div className="promotion6-flex1">
              <div className="promotion6-text1">
                <div className="promotion6-text1-top">
                  <h3>ROLL COMPETITION</h3>
                  <h4>Roll your way to Daily Victory!</h4>
                </div>
                <div className="promotion6-text1-img">
                  <img src={promotion5} alt="promotion5" />
                </div>
              </div>
            </div>

            <div className="promotion6-flex2">
              <div className="promotion6-text2">
                <div className="promotion6-text1-top">
                  <h3>WHERE IS COCO BONUS</h3>
                  <h4>
                    COCO plays Hide and Seek! <br />
                    Did you catch him yet?
                  </h4>
                </div>
                <div className="promotion6-text1-img">
                  <img src={promotion6} alt="promotion6" />
                </div>
              </div>
            </div>

            <div className="promotion6-flex3">
              <div className="promotion6-text3">
                <div className="promotion6-text1-top">
                  <h3>RAIN</h3>
                  <h4>
                    It's raining coins in chatrooms! 6 <br />
                    hours 6 winners!
                  </h4>
                </div>
                <div className="promotion6-text1-img">
                  <img src={promotion7} alt="promotion7" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="promotion6-swipe">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            speed={1000}
            loop={true}
            navigation={{
              nextEl: ".promotion-arrow-right-home-top",
              prevEl: ".promotion-arrow-left-home-top",
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="promotion6-flex1">
                <div className="promotion6-text1">
                  <div className="promotion6-text1-top">
                    <h3>ROLL COMPETITION</h3>
                    <h4>Roll your way to Daily Victory!</h4>
                  </div>
                  <div className="promotion6-text1-img">
                    <img src={promotion5} alt="promotion5" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="promotion6-flex2">
                <div className="promotion6-text2">
                  <div className="promotion6-text1-top">
                    <h3>WHERE IS COCO BONUS</h3>
                    <h4>
                      COCO plays Hide and Seek! <br />
                      Did you catch him yet?
                    </h4>
                  </div>
                  <div className="promotion6-text1-img">
                    <img src={promotion6} alt="promotion6" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="promotion6-flex3">
                <div className="promotion6-text3">
                  <div className="promotion6-text1-top">
                    <h3>RAIN</h3>
                    <h4>
                      It's raining coins in chatrooms! 6 <br />
                      hours 6 winners!
                    </h4>
                  </div>
                  <div className="promotion6-text1-img">
                    <img src={promotion7} alt="promotion7" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="promotion-line1-arrows-home-top">
            <div className="promotion-arrow-left-home-top">
              <h3> &#10094;</h3>
            </div>
            <div className="promotion-arrow-right-home-top">
              <h3> &#10095;</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
