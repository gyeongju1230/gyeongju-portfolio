import styled from "styled-components";

const smallViewport = "62rem";

export const DownLottieBox = styled.div`
  position: absolute;
  width: 100px;
  height: 103px;
  display: flex;
  bottom: -77px;

  &.home-scroll-down {
    bottom: 0;
  }

  &.about-scroll-down {
    bottom: -77px;
  }

  @media (max-width: ${smallViewport}) {
    width: 50px;
    height: 51.5px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  outline: none;
  border: 0;
  background-color: transparent;
`;
