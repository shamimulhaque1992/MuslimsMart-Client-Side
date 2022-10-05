import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import { Box, styled } from "@mui/material";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { bannerData } from "../../../constants/data";
import bannerStyle from "./HomeBanner.module.css";
const CarouselContainer = styled(Box)`
  display: flex;
  justify-content: center;
`;
const HomeBanner = () => {
  return (
    <CarouselContainer>
      <Swiper
        style={{
          boxShadow: "rgb(0 0 255 / 8%) -1px 0px 10px 4px",
          borderRadius: "5px",
          width: "98%",
          height: "20rem",
          margin: "55px 0 0 0",
        }}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={bannerStyle.mySwiper}
      >
        {bannerData.map((data, index) => (
          <SwiperSlide key={index} style={{ textAlign: "center" }}>
            <img src={data.url} alt="" style={{width: "100%", height: "100%"}} />
            
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselContainer>
  );
};

export default HomeBanner;
