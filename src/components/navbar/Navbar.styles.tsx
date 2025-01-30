import styled from 'styled-components';
import { motion } from 'framer-motion';

const padViewport = '1024px';
const mobileViewport = '768px';

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

  @media (max-width: ${padViewport}) {
    height: 8.79vw;
    flex-direction: column;
  }

  @media (max-width: ${mobileViewport}) {
    height: 68px;
    box-shadow: none;
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
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 20px;

  @media (max-width: ${padViewport}) {
    width: 21.78vw;
    padding-left: 1.95vw;
  }

  @media (max-width: ${mobileViewport}) {
    width: 167px;
    padding-left: 15px;
  }
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  padding-right: 20px;

  @media (max-width: ${padViewport}) {
    width: 100%;
    height: auto;
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

  @media (max-width: ${padViewport}) {
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

  @media (max-width: ${padViewport}) {
    width: 100%;
    font-size: 1.76vw;
  }

  @media (max-width: ${mobileViewport}) {
    font-size: 14px;
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
  display: none;

  @media (max-width: ${padViewport}) {
    display: block;
    padding-right: 10px;
    cursor: pointer;
    outline: none;
    border: 0;
    background-color: transparent;
  }
`;
