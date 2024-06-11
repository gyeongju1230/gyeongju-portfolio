import styled from 'styled-components';

const smallViewport = '62rem';

export const TeamIntroductionBox = styled.div`
  width: 114px;
  height: 111px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 1px 2px 9px rgba(45, 45, 45, 0.3);

  @media (max-width: ${smallViewport}) {
    width: 57px;
    height: 56px;
    margin-right: 3px;
    border-radius: 5px;
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
  font-size: 12px;
  font-weight: normal;
  font-family: GmarketSans, sans-serif;

  @media (max-width: ${smallViewport}) {
    font-size: 6px;
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
  font-size: 10px;
  font-weight: 600;
  font-family: GmarketSans, sans-serif;

  @media (max-width: ${smallViewport}) {
    font-size: 5px;
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
  font-size: 8px;
  font-weight: normal;
  font-family: GmarketSans, sans-serif;

  @media (max-width: ${smallViewport}) {
    font-size: 4px;
  }
`;
