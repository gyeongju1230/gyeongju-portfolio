import styled, { keyframes } from "styled-components";

const smallViewport = "62rem";

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
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  .icon-git {
    margin-top: -50px;
  }

  .icon-github {
    margin-bottom: -50px;
  }

  .icon-confluence {
    margin-top: -50px;
  }

  .icon-notion {
    margin-top: -50px;
  }

  @media (max-width: ${smallViewport}) {
    width: 100%;
    height: 60%;

    .icon-git {
      margin-top: 0;
    }

    .icon-github {
      margin-bottom: 0;
    }

    .icon-confluence {
      margin-top: 0;
    }

    .icon-notion {
      margin-top: 0;
    }
  }
`;

export const IconBox = styled.div`
  width: 160px;
  height: 144px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-right: 30px;
  animation: ${floatingAnimation} 3s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    infinite;

  @media (max-width: ${smallViewport}) {
    width: 80px;
    height: 52px;
    margin-right: 7.5px;

    &.none-menu {
      width: 100px;
      height: 62px;
      margin-right: 15px;
    }
  }
`;

export const Icon = styled.div`
  display: flex;
  width: 120px;
  height: 120px;

  .icon {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${smallViewport}) {
    width: 30px;
    height: 30px;

    &.none-menu {
      width: 50px;
      height: 50px;
    }
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
    font-size: 12px;
    line-height: 8px;
  }
`;
