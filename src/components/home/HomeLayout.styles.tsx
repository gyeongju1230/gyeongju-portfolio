import styled, { keyframes } from "styled-components";

const smallViewport = "62rem";

const waveAnimation = keyframes`
  0%, 100% {
    clip-path: polygon(0% 95%, 100% 0%, 100% 100%, 0% 100%);
  }
  50% {
    clip-path: polygon(0% 5%, 100% 100%, 100% 100%, 0% 100%);
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vh - 90px);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 90px;

  @media (max-width: ${smallViewport}) {
    height: calc(100vh - 240px);
    margin-top: 240px;

    &.none-menu {
      height: calc(100vh - 77px);
      margin-top: 77px;
    }
  }
`;

export const Title = styled.div`
  position: relative;
  margin-top: -45px;
  z-index: 2;
  text-align: center;
  color: #fffbf5;
  font-size: 145px;
  line-height: 160px;
  font-weight: bold;
  font-family:
    Noto Sans KR,
    sans-serif;
  text-shadow:
    -2px -2px 0 #d8b28c,
    2px -2px 0 #d8b28c,
    -2px 2px 0 #d8b28c,
    2px 2px 0 #d8b28c;

  @media (max-width: ${smallViewport}) {
    margin-top: -77px;
    font-size: 72.5px;
    line-height: 80px;
    text-shadow:
      -1.5px -1.5px 0 #d8b28c,
      1.5px -1.5px 0 #d8b28c,
      -1.5px 1.5px 0 #d8b28c,
      1.5px 1.5px 0 #d8b28c;
  }

  &:before {
    content: "Frontend Portfolio";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    animation: ${waveAnimation} 2s infinite;
    overflow: hidden;
    color: transparent;
    clip-path: polygon(0% 95%, 100% 0%, 100% 100%, 0% 100%);
  }
`;
