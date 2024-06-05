import styled from 'styled-components';

const smallViewport = '62rem';

export const AboutBox = styled.div`
  width: 60%;
  height: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${smallViewport}) {
    width: 100%;
    height: 80%;

    &.none-menu {
      width: 100%;
      height: 50%;
    }
  }
`;

export const AboutTitle = styled.div`
  height: 25%;
  border-bottom: 0.5px solid #a07d5a;

  text-align: left;
  color: #787878;
  font-size: 18px;
  line-height: 35px;
  font-family: GmarketSans, sans-serif;

  @media (max-width: ${smallViewport}) {
    height: 25%;
    border-bottom: 0.3px solid #a07d5a;
    font-size: 11px;
    line-height: 22px;
  }
`;

export const AboutContent = styled.div`
  height: 55%;
  display: flex;
  gap: 4px;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${smallViewport}) {
    height: 65%;
    gap: 2px;
  }
`;

export const Content = styled.div`
  text-align: left;
  color: #787878;
  font-size: 15px;
  line-height: 30px;
  font-family: GmarketSans, sans-serif;

  @media (max-width: ${smallViewport}) {
    font-size: 10px;
    line-height: 22px;
  }
`;

export const AboutLinkBox = styled.div`
  height: 20%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  border-top: 0.5px solid #a07d5a;

  @media (max-width: ${smallViewport}) {
    height: 15%;
    gap: 5px;
    border-top: 0.3px solid #a07d5a;
  }
`;

export const AboutLink = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  outline: none;
  border: 0;
  background-color: transparent;

  text-align: center;
  color: #787878;
  font-size: 14px;
  line-height: 20px;
  font-family: GmarketSans, sans-serif;

  .icon {
    width: 20px;
    height: 20px;
  }

  @media (max-width: ${smallViewport}) {
    gap: 4px;
    font-size: 9px;
    line-height: 15px;

    .icon {
      width: 15px;
      height: 15px;
    }
  }
`;
