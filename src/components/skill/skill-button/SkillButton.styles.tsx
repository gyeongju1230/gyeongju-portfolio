import styled from "styled-components";
import { motion } from "framer-motion";

const smallViewport = "62rem";

export const Container = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: ${smallViewport}) {
    width: 100%;
    height: 40%;
    flex-direction: column;
    justify-content: center;
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

  color: #a07d5a;
  font-size: 30px;
  font-weight: bold;
  font-family:
    Noto Sans KR,
    sans-serif;

  @media (max-width: ${smallViewport}) {
    width: 55px;
    height: 55px;
    font-size: 20px;

    &.none-menu {
      width: 64px;
      height: 64px;
      font-size: 20px;
    }
  }
`;

export const Button = styled.button`
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
