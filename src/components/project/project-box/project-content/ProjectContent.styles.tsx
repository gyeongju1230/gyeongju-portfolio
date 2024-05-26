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
  height: 15%;
  background-color: transparent;

  color: #a07d5a;
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
    opacity: 0.8;
  }

  span {
    border-radius: 3px;
    padding: 8px 16px;
    background-color: #fff5ef;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${smallViewport}) {
    &.hide-link {
      display: none;
    }
  }
`;

export const Link = styled.button`
  height: 50%;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border: 0;

  text-align: center;
  color: #787878;
  font-size: 14px;
  line-height: 34px;
  font-family: GmarketSans, sans-serif;
`;

export const LinkTitle = styled.div`
  border-radius: 3px;
  background-color: #fff5ef;
  color: #a07d5a;
  font-size: 14px;
  font-weight: 600;
  line-height: 30px;
  font-family: GmarketSans, sans-serif;
`;

export const TagContainer = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  bottom: 0;

  @media (max-width: ${smallViewport}) {
    &.hide-tag {
      display: none;
    }
  }
`;

export const UrlBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;

  text-align: center;
`;
