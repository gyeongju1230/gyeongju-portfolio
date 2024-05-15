import styled from "styled-components";
import { motion } from "framer-motion";

const smallViewport = "62rem";

export const ContactContainer = styled.div`
  width: 60%;
  height: 35%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${smallViewport}) {
    width: 60%;
    height: 45%;
    flex-direction: column;

    &.none-menu {
      width: 60%;
      height: 55%;
      flex-direction: column;
    }
  }
`;

export const Container = styled.div`
  width: 48%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${smallViewport}) {
    width: 100%;
    height: 48%;
    
`;

export const IconBox = styled(motion.button)`
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fffbf5;
  box-shadow: 1px 2px 9px rgba(45, 45, 45, 0.3);
  border-radius: 50%;

  cursor: pointer;
  outline: none;
  border: 0;

  .icon {
    width: 95%;
    height: 95%;
  }

  @media (max-width: ${smallViewport}) {
    width: 80px;
    height: 80px;

    &.none-menu {
      width: 113px;
      height: 113px;
    }
  }
`;

export const Title = styled.div`
  color: #787878;
  text-align: center;
  font-size: 21px;
  font-weight: bold;
  line-height: 40px;
  font-family: GmarketSans, sans-serif;

  @media (max-width: ${smallViewport}) {
    font-size: 14px;
    line-height: 30px;
  }
`;

export const Content = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #787878;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  line-height: 40px;
  font-family: GmarketSans, sans-serif;

  background-color: transparent;
  cursor: copy;
  outline: none;
  border: 0;

  @media (max-width: ${smallViewport}) {
    gap: 3px;
    font-size: 11px;
    line-height: 30px;
  }
`;
