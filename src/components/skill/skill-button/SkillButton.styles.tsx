import styled from 'styled-components';
import { motion } from 'framer-motion';

const smallViewport = '62rem';

export const Container = styled.div`
  width: 40%;
  margin-top: 90px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${smallViewport}) {
    width: 100%;
    height: 20%;
    margin-top: 240px;
    flex-direction: column;
    justify-content: center;

    .arrow {
      display: none;
    }

    &.none-menu {
      width: 100%;
      height: 30%;
      margin-top: 77px;
    }
  }
`;

export const Box = styled.div`
  position: relative;
  width: 340px;
  height: 296px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  align-items: flex-end;

  @media (max-width: ${smallViewport}) {
    width: 170px;
    height: 138px;
    gap: 10px;
    flex-direction: row;

    &.none-menu {
      height: 148px;
      gap: 20px;
    }
  }
`;

export const SelectedButton = styled(motion.div)`
  position: absolute;
  left: 0;

  @media (max-width: ${smallViewport}) {
    top: 0;
    left: calc(50% - 45.5px);
  }
`;

export const ButtonBox = styled(motion.div)`
  width: 128px;
  height: 128px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #fbe5d8;
  box-shadow: 1px 2px 9px rgba(45, 45, 45, 0.3);

  color: #a07d5a;
  font-size: 22px;
  font-weight: bold;
  font-family: GmarketSans, sans-serif;

  @media (max-width: ${smallViewport}) {
    width: 55px;
    height: 55px;
    font-size: 12px;

    &.none-menu {
      width: 64px;
      height: 64px;
      font-size: 14px;
    }
  }
`;

export const Button = styled(motion.button)`
  cursor: pointer;
  outline: none;
  border: 0;
  background-color: transparent;

  &.selected {
    > ${ButtonBox} {
      width: 158px;
      height: 158px;
    }
  }

  @media (max-width: ${smallViewport}) {
    &.selected {
      > ${ButtonBox} {
        width: 79px;
        height: 79px;
      }
    }
  }
`;

export const ArrowBox = styled.div`
  width: 340px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;

  .lottie {
    width: 100%;
    height: 100%;
  }
`;

export const LottieBox = styled.div`
  width: 46px;
  height: 30px;
`;

export const ArrowContent = styled.div`
  color: #a07d5a;
  font-size: 16px;
  font-weight: normal;
  line-height: 45px;
  font-family: GmarketSans, sans-serif;
`;
