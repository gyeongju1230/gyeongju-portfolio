import styled from 'styled-components';

const smallViewport = '62rem';

export const ImageContainer = styled.div`
  width: 35%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${smallViewport}) {
    display: none;

    &.none-menu {
      display: flex;
      width: 65%;
      height: 45%;
    }
  }
`;

export const ImageBox = styled.div`
  width: 413px;
  height: 398px;
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

  @media (max-width: ${smallViewport}) {
    width: 218px;
    height: 209px;
  }
`;
