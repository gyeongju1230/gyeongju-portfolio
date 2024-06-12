import styled from 'styled-components';
import { motion } from 'framer-motion';

const smallViewport = '62rem';

export const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  background-color: #fffbf5;

  @media (max-width: ${smallViewport}) {
    height: 300px;
    flex-direction: column;
    box-shadow: 1px 2px 9px rgba(45, 45, 45, 0.3);

    &.none-menu {
      height: 77px;
      box-shadow: none;
    }
  }
`;

export const BackgroundOpacity = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 2;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
`;

export const Logo = styled.a`
  width: 223px;
  display: flex;
  align-items: center;
  padding-left: 20px;

  @media (max-width: ${smallViewport}) {
    width: 130px;
    padding-left: 10px;
  }
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  padding-right: 20px;

  @media (max-width: ${smallViewport}) {
    width: 100%;
    height: 100%;
    flex-direction: column;
    padding-left: 0;
    padding-right: 0;
    margin: 0;

    &.none-menu {
      display: none;
    }
  }
`;

export const MenuItem = styled.li`
  list-style: none;
  padding: 0 5px;

  @media (max-width: ${smallViewport}) {
    width: 100%;
    height: 25%;
    text-align: center;
    padding: 5px 0;
  }
`;

export const Button = styled(motion.button)`
  padding: 5px 10px;
  border-radius: 5%;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  border: 0;

  color: #a07d5a;
  font-size: 18px;
  font-family:
    Noto Sans KR,
    sans-serif;

  @media (max-width: ${smallViewport}) {
    width: 100%;
    font-size: 16px;
  }

  &:hover {
    color: #ffffff;
    background-color: #a07d5a;
    opacity: 0.8;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const MoreButton = styled.button`
  padding-right: 10px;
  cursor: pointer;
  outline: none;
  border: 0;
  background-color: transparent;

  @media (min-width: ${smallViewport}) {
    display: none;
  }
`;
