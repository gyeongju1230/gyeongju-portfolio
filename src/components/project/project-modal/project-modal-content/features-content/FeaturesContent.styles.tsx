import styled from 'styled-components';

const smallViewport = '62rem';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${smallViewport}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ImageBox = styled.div`
  width: 28%;
  display: flex;

  .image {
    width: 100%;
    height: 100%;
    border-radius: 40px;
  }

  @media (max-width: ${smallViewport}) {
    width: 150px;
    height: 250px;
    display: none;
  }
`;

export const Content = styled.div`
  width: 72%;
  display: flex;
  white-space: pre-line;
  color: #787878;
  font-size: 15px;
  font-weight: normal;
  font-family: GmarketSans, sans-serif;

  @media (max-width: ${smallViewport}) {
    width: 100%;
    font-size: 11px;
  }
`;
