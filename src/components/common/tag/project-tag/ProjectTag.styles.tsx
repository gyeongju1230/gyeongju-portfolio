import styled from 'styled-components';

const smallViewport = '62rem';

export const TagContainer = styled.div`
  width: 140px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  background-color: #dbdbdb;

  color: #787878;
  font-size: 14px;
  font-family: GmarketSans, sans-serif;
  line-height: 9px;

  @media (max-width: ${smallViewport}) {
    width: 100px;
    height: 19px;
    font-size: 10px;
    line-height: 7px;
  }
`;
