import styled from 'styled-components';

const smallViewport = '62rem';

export const DownLottieBox = styled.div`
  position: absolute;
  width: 60px;
  height: 63px;
  display: flex;
  margin: 0;
  bottom: 15px;
  z-index: 1;
  background-color: transparent;

  @media (max-width: ${smallViewport}) {
    width: 40px;
    height: 43px;
    bottom: 8px;
  }
`;
