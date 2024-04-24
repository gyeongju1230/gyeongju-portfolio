import styled from "styled-components";
import { motion } from "framer-motion";

const smallViewport = "62rem";

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
  z-index: 1;
  background-color: #fffbf5;

  @media (max-width: ${smallViewport}) {
    height: 240px;
    flex-direction: column;

    &.none-menu {
      height: 77px;
    }
  }
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
    flex-direction: column;
    padding-top: 5px;
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
