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
  margin-top: 90px;
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

export const Title = styled.div`
  margin-top: -45px;
  text-align: center;
  color: #fffbf5;
  font-size: 145px;
  line-height: 160px;
  font-weight: bold;
  font-family:
    Noto Sans KR,
    sans-serif;
  z-index: 2;
  position: relative;
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
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    animation: ${waveAnimation} 2s infinite;
    overflow: hidden;
    color: transparent;
    clip-path: polygon(0% 95%, 100% 0%, 100% 100%, 0% 100%);
  }
`;
