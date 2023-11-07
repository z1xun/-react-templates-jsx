import { Box } from "@chakra-ui/react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import History from "../common/History";
import Title from "../common/Tilte";
import styled from "styled-components";
import { Children } from "react";
import thumbnail from "../../assets/images/main/thumbnail.jpg";

const Layout = ({ pagename, title, children }) => {
    return (
        <Wrap>
            <Header />
            <MainWrap>
                <Box>
                    <History pagename={pagename} />
                    <Title title={title} />
                </Box>
                {children}
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
    padding: 50px 20px;
`;

export default Layout;
