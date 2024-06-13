import styled, { keyframes } from 'styled-components';

const smallViewport = '62rem';

const floatingAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px); 
  }
`;

export const Container = styled.div`
  width: 60%;
  height: 80%;
  margin-top: 90px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (max-width: ${smallViewport}) {
    width: 100%;
    height: 60%;
    margin-top: 0;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const IconBox = styled.div`
  width: 130px;
  height: 134px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 14px;
  margin-right: 30px;
  animation: ${floatingAnimation} 3s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    infinite;

  @media (max-width: ${smallViewport}) {
    width: 65px;
    height: 67px;
    padding: 7px;
    margin-right: 10px;
  }
`;

export const Icon = styled.div`
  display: flex;
  width: 100px;
  height: 100px;

  .icon {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${smallViewport}) {
    width: 50px;
    height: 50px;
  }
`;

export const Name = styled.div`
  width: 100%;
  height: 16px;

  text-align: center;
  color: #a07d5a;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  font-family:
    Noto Sans KR,
    sans-serif;

  @media (max-width: ${smallViewport}) {
    height: 8px;
    font-size: 10px;
    line-height: 8px;
  }
`;
