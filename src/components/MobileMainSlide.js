import React from "react";
import second1 from "../images/second 1.png";
import second2 from "../images/second2.png";
import second3 from "../images/second3.png";
import image1 from "../images/image 14.png";
import image2 from "../images/image 15.png";
import image3 from "../images/image 16.png";

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

export default function MobileMainSlide() {
  return (
    <div>
      {" "}
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
    </div>
  );
}
