import styled from 'styled-components';

const smallViewport = '62rem';

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
  max-height: 90%;
  overflow: hidden;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  background-color: #fffbf5;
`;
