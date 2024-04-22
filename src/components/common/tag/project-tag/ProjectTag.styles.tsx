import styled from "styled-components";

const smallViewport = "62rem";

export const TagContainer = styled.div`
  width: 93px;
  height: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  background-color: #dbdbdb;

  color: #787878;
  font-size: 14px;
  font-family:
    Noto Sans KR,
    sans-serif;
  line-height: 9px;

  @media (max-width: ${smallViewport}) {
    width: 73px;
    height: 19px;
    font-size: 12px;
    line-height: 7px;
  }
`;
