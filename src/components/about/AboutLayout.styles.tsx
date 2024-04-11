import styled from "styled-components";

const smallViewport = "62rem";

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vh - 90px);
  margin-top: 90px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${smallViewport}) {
    margin-top: 240px;
    height: calc(100vh - 240px);

    &.none-menu {
      margin-top: 77px;
      height: calc(100vh - 77px);
    }
  }
`;
