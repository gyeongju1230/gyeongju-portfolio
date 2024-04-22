import styled from "styled-components";

const smallViewport = "62rem";

export const ImageBox = styled.div`
  width: 210px;
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  border-radius: 10px;
  box-shadow: 1px 2px 9px rgba(45, 45, 45, 0.3);

  @media (max-width: ${smallViewport}) {
    width: 150px;
    height: 125px;
    margin-left: 0;
    margin-top: 10px;
  }
`;

export const Image = styled.div`
  width: 190px;
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${smallViewport}) {
    width: 140px;
    height: 105px;
  }
`;
