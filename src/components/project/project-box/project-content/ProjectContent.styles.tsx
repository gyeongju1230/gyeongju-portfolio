import styled from "styled-components";
import { motion } from "framer-motion";

const smallViewport = "62rem";

export const ContentBox = styled.div`
  position: relative;
  width: 52%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;

  @media (max-width: ${smallViewport}) {
    width: 90%;
    height: 20%;
    margin-right: 0;

    &.none-menu {
      width: 90%;
      height: 25%;
      margin-right: 0;
    }
  }
`;

export const Title = styled(motion.button)`
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border: 0;

  margin-top: 30px;
  text-align: center;
  color: #787878;
  font-size: 22px;
  font-weight: bold;
  line-height: 18px;
  font-family:
    Noto Sans KR,
    sans-serif;

  @media (max-width: ${smallViewport}) {
    margin-top: 5px;
    font-size: 14px;
    line-height: 10px;

    &.none-menu {
      margin-top: 10px;
      font-size: 16px;
      line-height: 18px;
    }
  }

  &:hover {
    color: #a07d5a;
    opacity: 0.8;
  }
`;

export const Content = styled.div`
  margin-top: 20px;
  text-align: center;
  white-space: pre-line;
  color: #787878;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;

  @media (max-width: ${smallViewport}) {
    &.hide-description {
      display: none;
    }
  }
`;
