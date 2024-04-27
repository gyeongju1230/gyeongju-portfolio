import styled from "styled-components";

const smallViewport = "62rem";

export const ModalWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  background: rgba(54, 51, 46, 0.5);
`;

export const ModalContainer = styled.div`
  width: 80%;
  height: calc(90% - 60px);
  padding-top: 60px;
  display: flex;
  justify-content: center;
  background-color: #fffbf5;
`;

export const ModalBox = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  //background-color: beige;
`;

export const Title = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  margin-top: 20px;

  color: #787878;
  font-size: 26px;
  font-weight: bold;
  line-height: 9px;
  font-family:
    Noto Sans KR,
    sans-serif;

  @media (max-width: ${smallViewport}) {
    height: 20px;
    margin-top: 10px;
    font-size: 20px;
    line-height: 7px;
  }
`;

export const AppStoreImageContainer = styled.div`
  width: 100%;
  height: 440px;
  display: flex;
  //gap: 10px;
  margin-top: 15px;
  border: 1px solid #dbdbdb;
  border-radius: 10px;

  @media (max-width: ${smallViewport}) {
    height: 420px;
    margin-top: 7.5px;
  }
`;
