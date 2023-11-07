import React from "react";
import Layout from "../components/layout/Layout";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import apple from "../assets/images/tables/apple.svg";
import bgimg from "../assets/images/home/homebg.webp";

const Home = () => {
    return (
        <Layout title="Home" pagename="home">
            <NavLnb className="nav-lnb">
                <ul>
                    <li>
                        <Link to="#">All</Link>
                    </li>
                    <li>
                        <Link to="#">Art</Link>
                    </li>
                    <li>
                        <Link to="#">Gaming</Link>
                    </li>
                </ul>
            </NavLnb>
            <SwiperStyled navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <Image src={apple} alt="Dan Abramov" />
                    <Box>
                        <Heading as={"h2"}> title</Heading>
                        <Text as={"strong"} variant={"txt147"}>
                            슬라이드 내용
                        </Text>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </SwiperStyled>
            <Image src={bgimg} alt="Dan Abramov" />
        </Layout>
    );
};

const SwiperStyled = styled(Swiper)`
    width: 100%;
    .swiper-slide {
        height: 300px;
        background-color: #b96363;
    }
`;

const NavLnb = styled.nav`
    ul {
        display: flex;
        gap: 10px;
    }
    li {
        cursor: pointer;
        color: #b65252;
        background: rgba(255, 255, 255, 0.12);
        &.active {
            a {
                background-color: #b65252;
            }
        }
    }
    a {
        display: block;
        padding: 8px 16px;
    }
`;

export default Home;
