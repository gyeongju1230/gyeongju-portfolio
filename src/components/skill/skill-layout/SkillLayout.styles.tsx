import styled from "styled-components";

const smallViewport = "62rem";

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: ${smallViewport}) {
    height: 100vh;

    &.none-menu {
      height: 100vh;
    }
  }
`;

export const ContentBox = styled.div`
  width: 95%;
  height: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${smallViewport}) {
    flex-direction: column;
  }
`;
