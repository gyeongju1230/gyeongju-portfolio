import styled from 'styled-components';

const smallViewport = '62rem';

export const ModalBox = styled.div`
  width: 80%;
  max-height: 100%;
  margin-top: 60px;
  margin-bottom: 20px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const Title = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  margin-top: 20px;

  color: #787878;
  font-size: 22px;
  font-weight: bold;
  font-family: GmarketSans, sans-serif;

  @media (max-width: ${smallViewport}) {
    margin-top: 10px;
    font-size: 16px;
  }
`;

export const ContentTitle = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  margin-top: 20px;

  color: #787878;
  font-size: 20px;
  font-weight: bold;
  font-family: GmarketSans, sans-serif;

  @media (max-width: ${smallViewport}) {
    height: 20px;
    margin-top: 10px;
    font-size: 14px;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  white-space: pre-line;
  margin-top: 10px;

  text-align: left;
  color: #787878;
  font-size: 15px;
  font-weight: normal;
  line-height: 30px;
  font-family: GmarketSans, sans-serif;

  @media (max-width: ${smallViewport}) {
    margin-top: 5px;
    font-size: 11px;
    line-height: 20px;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  margin-right: 10px;
  cursor: pointer;
  outline: none;
  border: 0;

  text-align: left;
  color: #787878;
  font-size: 15px;
  font-weight: normal;
  line-height: 30px;
  font-family: GmarketSans, sans-serif;

  @media (max-width: ${smallViewport}) {
    font-size: 11px;
    line-height: 20px;
  }
`;
