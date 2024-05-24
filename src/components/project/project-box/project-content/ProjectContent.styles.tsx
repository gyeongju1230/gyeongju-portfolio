import styled from 'styled-components';
import { motion } from 'framer-motion';

const smallViewport = '62rem';

export const ContentContainer = styled.div`
  position: relative;
  width: 42%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;

  @media (max-width: ${smallViewport}) {
    width: 90%;
    height: 15%;
    margin-right: 0;
  }
`;

export const Title = styled(motion.button)`
  cursor: pointer;
  outline: none;
  border: 0;

  width: 100%;
  height: 20%;
  background-color: transparent;

  color: #787878;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  line-height: 18px;
  font-family: GmarketSans, sans-serif;

  @media (max-width: ${smallViewport}) {
    height: 100%;
    font-size: 16px;
    line-height: 18px;
  }

  &:hover {
    color: #a07d5a;
    opacity: 0.8;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 20%;
  text-align: center;
  white-space: pre-line;
  color: #787878;
  font-size: 16px;
  line-height: 30px;
  font-family: GmarketSans, sans-serif;

  @media (max-width: ${smallViewport}) {
    &.hide-description {
      display: none;
    }
  }
`;

export const LinkBox = styled.div`
  height: 30%;

  @media (max-width: ${smallViewport}) {
    &.hide-link {
      display: none;
    }
  }
`;

export const Link = styled.div`
  height: 50%;
  text-align: center;
  color: #787878;
  font-size: 14px;
  line-height: 30px;
  font-family: GmarketSans, sans-serif;
`;

export const LinkTitle = styled.div`
  color: #a07d5a;
  font-size: 14px;
  font-weight: 600;
  line-height: 30px;
  font-family: GmarketSans, sans-serif;
`;
