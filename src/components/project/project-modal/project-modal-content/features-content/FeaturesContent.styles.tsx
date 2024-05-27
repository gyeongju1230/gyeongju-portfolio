import styled from 'styled-components';

const smallViewport = '62rem';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  white-space: pre-line;
  color: #787878;
  font-size: 16px;
  font-weight: bold;
  font-family: GmarketSans, sans-serif;

  @media (max-width: ${smallViewport}) {
    font-size: 10px;
  }
`;

export const ImageBox = styled.div`
  width: 385px;
  height: 768px;
  display: flex;
  //align-self: center;
  //background-color: beige;

  .image {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${smallViewport}) {
    width: 150px;
    height: 250px;
  }
`;

export const Content = styled.div`
  white-space: pre-line;
  color: #787878;
  font-size: 15px;
  font-weight: normal;
  font-family: GmarketSans, sans-serif;

  @media (max-width: ${smallViewport}) {
    font-size: 11px;
  }
`;
