import styled from "styled-components";

const smallViewport = "62rem";

export const ContentBox = styled.div`
  position: relative;
  width: 52%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;

  @media (max-width: ${smallViewport}) {
    width: 90%;
    height: 20%;
    margin-right: 0;

    &.none-menu {
      width: 90%;
      height: 25%;
      margin-right: 0;
    }
  }
`;

export const Title = styled.div`
  margin-top: 30px;
  text-align: center;
  color: #787878;
  font-size: 20px;
  font-weight: bold;
  line-height: 18px;
  font-family:
    Noto Sans KR,
    sans-serif;

  @media (max-width: ${smallViewport}) {
    margin-top: 5px;
    font-size: 16px;

    &.none-menu {
      margin-top: 10px;
      font-size: 16px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 30px;
  text-align: center;
  white-space: pre-line;
  color: #787878;
  font-size: 14px;
  font-weight: normal;
  line-height: 28px;

  @media (max-width: ${smallViewport}) {
    margin-top: 10px;
    font-size: 16px;

    &.hide-description {
      display: none;
    }
  }
`;
