import { styled, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import { navData } from "../../../constants/data";
import homenav from "./HomeNav.module.css";
const CustomeText = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
`;
const HomeNav = () => {
  return (
    <>
      <Swiper
        style={{
          boxShadow: "rgb(0 0 255 / 8%) -1px 0px 10px 4px",
          height: "12rem",
          margin: "55px 0 0 0",
          paddingTop: "10px",
        }}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className={homenav.mySwiper}
      >
        {navData.map((data, index) => (
          <SwiperSlide key={index} style={{ textAlign: "center" }}>
            <img src={data.url} alt="" />
            <CustomeText>{data.text}</CustomeText>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HomeNav;
