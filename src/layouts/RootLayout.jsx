import { Outlet } from "react-router-dom";
import styled from "styled-components";
import HeaderLayout from "./HeaderLayout";
import FooterLayout from "./FooterLayout";

const Hero = styled.div`
  box-shadow: 0 4px 8px 0 var(--bShadow), 0 6px 20px 0 var(--bShadow2);
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90vw;
  height: 100%;
  min-height: fit-content;
  margin: 0 auto 0 auto;
  flex-grow: 1;
`;

const RootLayout = () => {
  return (
    <>
      <Hero>
        <HeaderLayout></HeaderLayout>
        <Main>
          <Outlet />
        </Main>
      </Hero>
      <FooterLayout></FooterLayout>
    </>
  );
};

export default RootLayout;
