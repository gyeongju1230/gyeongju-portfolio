import styled from 'styled-components';

const smallViewport = '62rem';

export const ImageContainer = styled.div`
  width: 30%;
  height: 70%;
  display: flex;

  @media (max-width: ${smallViewport}) {
    display: none;

    &.none-menu {
      display: flex;
      width: 50%;
      height: 35%;
    }
  }
`;

export const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  background-color: #fffbf5;
  box-shadow: 1px 2px 9px rgba(45, 45, 45, 0.3);
  overflow: hidden;

  .image {
    width: auto;
    height: auto;
  }
`;
