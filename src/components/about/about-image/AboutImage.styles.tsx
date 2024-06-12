import styled from 'styled-components';

const smallViewport = '62rem';

export const ImageContainer = styled.div`
  width: 35%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${smallViewport}) {
    display: flex;
    width: 55%;
    height: 35%;
  }
`;

export const ImageBox = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  border-radius: 20px;
  background-color: #fffbf5;
  box-shadow: 1px 2px 9px rgba(45, 45, 45, 0.3);
  overflow: hidden;

  .image {
    width: auto;
    height: auto;
  }

  @media (max-width: ${smallViewport}) {
    width: 100%;
    height: 100%;
  }
`;
