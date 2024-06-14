import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Loader = styled.div`
  width: 40px;
  height: 40px;
  border: 16px solid #f3f3f3;
  border-top: 16px solid #a07d5a;
  border-radius: 50%;
  animation: ${spin} 2s linear infinite;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
`;
