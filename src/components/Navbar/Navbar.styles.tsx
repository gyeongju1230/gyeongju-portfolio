import styled from "styled-components";

const smallViewport = "62rem";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  background: #fffbf5;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 90px;
  z-index: 1000;

  @media (max-width: ${smallViewport}) {
    flex-direction: column;
    position: static;
    top: auto;
    width: auto;
    z-index: auto;
  }
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  padding-left: 20px;
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  padding-right: 20px;

  @media (max-width: ${smallViewport}) {
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
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

export const Button = styled.button`
  cursor: pointer;
  outline: none;

  border: 0;
  padding: 5px 10px;
  border-radius: 5%;
  background-color: transparent;

  color: #a07d5a;
  font-size: 18px;
  font-family:
    Noto Sans KR,
    sans-serif;

  @media (max-width: ${smallViewport}) {
    width: 20px;
  }

  &:hover {
    color: white;
    background-color: #a07d5a;
    opacity: 0.8;
  }
`;
