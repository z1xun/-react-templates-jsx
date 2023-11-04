import { Link } from "react-router-dom";
import styled from "styled-components";
import Gnb from "./Gnb";
import { Heading, Input } from "@chakra-ui/react";

import gsap from "gsap";
import imglogo from "../../../../src/assets/images/logo/opensea-logo.svg";
import { HiOutlineUserCircle, HiOutlineShoppingCart } from "react-icons/hi";

const Header = () => {
    // 스크롤 이벤트 핸들러
    const handleScroll = () => {
        const scrollY = window.scrollY;
        const headerWrap = document.querySelector(".header-wrap");

        if (scrollY >= 100) {
            gsap.to(headerWrap, { backgroundColor: "#000", duration: 0.5 });
        } else {
            gsap.to(headerWrap, { backgroundColor: "transparent", duration: 0.5 });
        }
    };

    // 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll);

    return (
        <HeaderWrap className="header-wrap">
            <Heading as={"h1"}>
                <Link to="#">
                    <img src={imglogo}></img>
                </Link>
                <Link to="/" className="logoname">
                    OpenSea
                </Link>
            </Heading>
            <Gnb />
            <Input placeholder="Search" />
            <Link to="/">login</Link>
            <Link to="/">
                my <HiOutlineUserCircle />
            </Link>
            <Link to="/">
                <HiOutlineShoppingCart />
            </Link>
        </HeaderWrap>
    );
};

const HeaderWrap = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    height: 80px;
    padding: 0 20px;

    h1 {
        display: flex;
        align-items: center;
        img {
            width: 40px;
        }
        .logoname {
            color: var(--white);
            padding: 0 10px;
            font-size: 26px;
            line-height: 80px;
        }
        a {
            font-size: 30px;
            font-weight: bold;
        }
    }
`;

export default Header;
