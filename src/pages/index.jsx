import React from "react";
import Layout from "../components/layout/Layout";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

// import required modules

import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Heading, Image, Text } from "@chakra-ui/react";

import ModalBox from "../components/common/ModalBox";

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
            {/* <SwiperStyled navigation={true} modules={[Navigation]} className="mySwiper">
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
            </SwiperStyled> */}
            <MainContents>
                <div className="conttents-wrap">
                    <div className="text-box">
                        <h1>zkMon by Polychain Monsters x Modulus</h1>
                        <p>zkMonDeployer</p>
                        <p>1,000 items · 0.02 ETH</p>
                    </div>
                    <div className="more-box">
                        <ModalBox title="알람" />
                        <Link to="/">View DROP</Link>
                    </div>
                </div>
            </MainContents>
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
const MainContents = styled(Box)`
    width: 100%;
    height: 520px;
    border-radius: 20px;
    overflow: hidden;
    margin-top: 30px;
    position: relative;

    &::after {
        position: absolute;
        top: 0;
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background: url("homebg.webp") no-repeat 50% 50%;
        z-index: -500;
    }
    .conttents-wrap {
        position: absolute;
        bottom: 0;
        display: flex;
        justify-content: space-between;
        padding: 30px;
        width: 100%;
    }
    .text-box {
        color: var(--white);

        h1 {
            font-size: 30px;
            font-weight: 600;
        }
    }
    .more-box {
        display: flex;
        align-items: flex-end;
    }
`;

const NavLnb = styled.nav`
    ul {
        display: flex;
        gap: 10px;
    }
    li {
        color: white;
        background: rgba(255, 255, 255, 0.25);
        border-radius: 12px;
        font-weight: 600;
        border-radius: 10px;
    }
    a {
        display: block;
        padding: 8px 16px;
    }
`;

export default Home;
