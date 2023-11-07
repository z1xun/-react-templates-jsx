import Footer from "./footer/Footer";
import Header from "./header/Header";
import styled from "styled-components";

const Layout = ({ children }) => {
    return (
        <Wrap>
            <Header />
            <MainWrap>
                {/* <Box>
                    <History pagename={pagename} />
                    <Title title={title} />
                </Box> */}
                {children}
                <div className="innerimg"></div>
            </MainWrap>
            <Footer />
        </Wrap>
    );
};

const Wrap = styled.div`
    min-height: 100vh;
    padding-top: 80px;
`;

const MainWrap = styled.main`
    /* height: calc(100vh - 80px); */
    height: 200vh; //추후에 지워야함! 스크롤트리거 작업하느라 추가해둠
    padding: 30px 60px;
    position: relative; // 추가

    .innerimg {
        width: 100%;
        height: 834px;
        position: absolute;
        top: -80px;
        left: 0;
        z-index: -1000;
        &:before {
            position: absolute;
            top: -80px;
            left: 0;
            content: "";
            display: block;
            width: 100%;
            height: 100%;
            background-color: rgb(204, 204, 204, 50%);
            backdrop-filter: blur(20px);
        }
        &::after {
            position: absolute;
            top: -80px;
            left: 0;
            content: "";
            display: block;
            width: 100%;
            height: 100%;
            background: url("homebg.webp") no-repeat 50% 0;
            z-index: -1000;
        }
    }
`;

export default Layout;
