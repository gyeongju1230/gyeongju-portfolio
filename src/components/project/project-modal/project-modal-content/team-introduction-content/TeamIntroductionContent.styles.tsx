import styled from 'styled-components';

const smallViewport = '62rem';

export const TeamIntroductionBox = styled.div`
  width: 182px;
  height: 180px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: 1px 2px 9px rgba(45, 45, 45, 0.3);

  @media (max-width: ${smallViewport}) {
    width: 91px;
    height: 90px;
    margin-right: 5px;
    margin-bottom: 5px;
    border-radius: 10px;
  }
`;

export const TeamIntroductionImage = styled.div`
  width: 80%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;

  .image {
    width: 100%;
    height: 100%;
  }
`;

export const TeamIntroductionName = styled.div`
  width: 80%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;

  text-align: left;
  color: #787878;
  font-size: 13px;
  font-weight: normal;
  font-family: GmarketSans, sans-serif;

  @media (max-width: ${smallViewport}) {
    font-size: 10px;
  }
`;

export const TeamIntroductionPosition = styled.div`
  width: 80%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  background-color: #fbf5d8;

  text-align: left;
  color: #787878;
  font-size: 11px;
  font-weight: 600;
  font-family: GmarketSans, sans-serif;

  @media (max-width: ${smallViewport}) {
    font-size: 8px;
  }
`;

export const TeamIntroductionNote = styled.div`
  width: 80%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;

  text-align: left;
  color: #787878;
  font-size: 10px;
  font-weight: normal;
  font-family: GmarketSans, sans-serif;

  @media (max-width: ${smallViewport}) {
    font-size: 6px;
  }
`;
