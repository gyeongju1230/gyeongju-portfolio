import styled from 'styled-components';

const smallViewport = '62rem';

export const AboutBox = styled.div`
  width: 60%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${smallViewport}) {
    width: 100%;
    height: 60%;
  }
`;

export const AboutTitle = styled.div`
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 0.5px solid #a07d5a;

  text-align: center;
  color: #787878;
  font-size: 18px;
  line-height: 35px;
  font-family: GmarketSans, sans-serif;

  @media (max-width: ${smallViewport}) {
    height: 20%;
    border-bottom: 0.3px solid #a07d5a;
    font-size: 11px;
    line-height: 22px;
  }
`;

export const AboutContent = styled.div`
  height: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${smallViewport}) {
    gap: 2px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #787878;
  font-size: 15px;
  line-height: 30px;
  font-family: GmarketSans, sans-serif;

  @media (max-width: ${smallViewport}) {
    font-size: 10px;
    line-height: 20px;
  }
`;

export const AboutLinkBox = styled.div`
  height: 15%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: center;
  border-top: 0.3px solid #a07d5a;

  @media (max-width: ${smallViewport}) {
    gap: 5px;
    border-top: 0.1px solid #a07d5a;
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
      width: 14px;
      height: 14px;
    }
  }
`;
