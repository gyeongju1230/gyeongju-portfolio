import styled from "styled-components";

const smallViewport = "62rem";

export const ImageBox = styled.div`
  width: 42%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  border-radius: 10px;
  box-shadow: 1px 2px 9px rgba(45, 45, 45, 0.3);

  @media (max-width: ${smallViewport}) {
    width: 90%;
    height: 70%;
    margin-left: 0;
    margin-top: 10px;

    &.none-menu {
      width: 90%;
      height: 65%;
      margin-left: 0;
      margin-top: 10px;
    }
  }
`;

export const Image = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${smallViewport}) {
    width: 90%;
    height: 90%;

    &.none-menu {
      width: 90%;
      height: 95%;
    }
  }
`;
