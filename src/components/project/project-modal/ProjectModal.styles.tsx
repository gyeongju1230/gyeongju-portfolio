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
  background-color: #61dafb;
`;
