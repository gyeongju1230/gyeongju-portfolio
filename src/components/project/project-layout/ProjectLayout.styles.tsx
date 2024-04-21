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
  background-color: violet;
  @media (max-width: ${smallViewport}) {
    height: 100vh;

    &.none-menu {
      height: 100vh;
    }
  }
`;
