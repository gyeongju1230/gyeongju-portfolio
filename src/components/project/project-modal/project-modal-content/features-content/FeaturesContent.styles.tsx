import styled from 'styled-components';

const smallViewport = '62rem';

export const Container = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: ${smallViewport}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ImageBox = styled.div`
  width: 21%;
  display: flex;
  margin-bottom: 10px;

  .image {
    width: 100%;
    height: 100%;
    border-radius: 30px;
  }

  @media (max-width: ${smallViewport}) {
    width: 150px;
    height: 250px;
    display: none;
  }
`;

export const ContentBox = styled.div`
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  white-space: pre-line;
  margin-bottom: 2px;

  text-align: left;
  color: #787878;
  font-size: 15px;
  font-weight: normal;
  font-family: GmarketSans, sans-serif;

  &.bold {
    font-weight: bold;
  }

  @media (max-width: ${smallViewport}) {
    width: 100%;
    font-size: 11px;
  }
`;
