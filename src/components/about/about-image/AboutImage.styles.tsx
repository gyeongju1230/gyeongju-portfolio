import styled from "styled-components";

const smallViewport = "62rem";

export const ImageBox = styled.div`
  width: 30%;
  height: 70%;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  background-color: #ffffff;
  box-shadow: 1px 2px 9px rgba(45, 45, 45, 0.3);
  overflow: hidden;

  .image {
    width: auto;
    height: auto;
  }

  @media (max-width: ${smallViewport}) {
    display: none;

    &.none-menu {
      display: flex;
      width: 50%;
      height: 35%;
      margin-top: 2%;
    }
  }
`;
