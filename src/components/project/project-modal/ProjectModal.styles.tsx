import styled from "styled-components";

const smallViewport = "62rem";

export const ModalWrapper = styled.button`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  overflow: hidden;
  background: rgba(54, 51, 46, 0.5);

  cursor: pointer;
  outline: none;
  border: 0;
`;

export const ModalContainer = styled.div`
  position: absolute;
  width: 80%;
  height: calc(90% - 60px);
  padding-top: 60px;
  display: flex;
  justify-content: center;
  overflow-y: auto;
  background-color: #fffbf5;
`;

export const ModalBox = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
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
  margin-top: 15px;
  border-radius: 10px;

  .swiper-pagination-bullet-active {
    background-color: #a07d5a;
  }
`;
