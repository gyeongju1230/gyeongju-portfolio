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

export const Title = styled.div`
  margin-bottom: 30px;
  text-align: center;
  color: #a07d5a;
  font-size: 50px;
  font-weight: bold;
  font-family: Pretendard, serif;

  @media (max-width: ${smallViewport}) {
    margin-top: 240px;
    margin-bottom: 6px;
    font-size: 26px;

    &.none-menu {
      margin-top: 77px;
      margin-bottom: 10px;
      font-size: 30px;
    }
  }
`;
