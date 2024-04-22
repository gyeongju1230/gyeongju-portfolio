import styled from "styled-components";

const smallViewport = "62rem";

export const DownLottieBox = styled.div`
  position: absolute;
  width: 60px;
  height: 63px;
  display: flex;
  margin: 0;
  bottom: 0;
  z-index: 1;
  border-radius: 50%;
  box-shadow: 1px 2px 9px rgba(45, 45, 45, 0.3);
  background-color: #ffffff;

  @media (max-width: ${smallViewport}) {
    width: 40px;
    height: 43px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  outline: none;
  border: 0;
  background-color: transparent;
`;
