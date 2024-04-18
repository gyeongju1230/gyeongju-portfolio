import styled from "styled-components";

const smallViewport = "62rem";

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vh - 90px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 90px;

  background-color: #ffffff;

  @media (max-width: ${smallViewport}) {
    height: calc(100vh - 240px);
    margin-top: 240px;

    &.none-menu {
      height: calc(100vh - 77px);
      margin-top: 77px;
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
