import styled from 'styled-components';

const smallViewport = '62rem';

export const AboutBox = styled.div`
  width: 65%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${smallViewport}) {
    width: 100%;
    height: 95%;

    &.none-menu {
      width: 100%;
      height: 65%;
    }
  }
`;

export const AboutTitle = styled.div`
  height: 20%;
  border-bottom: 0.5px solid #a07d5a;

  text-align: left;
  color: #787878;
  font-size: 21px;
  //font-weight: bold;
  font-weight: 500;
  line-height: 40px;
  font-family: GmarketSans, sans-serif;

  @media (max-width: ${smallViewport}) {
    border-bottom: 0.3px solid #a07d5a;
    font-size: 13px;
    line-height: 24px;
  }
`;

export const AboutContent = styled.div`
  height: 35%;
  display: flex;
  align-items: center;
  border-bottom: 0.5px solid #a07d5a;
  //justify-content: center;

  text-align: left;
  color: #787878;
  font-size: 17px;
  //font-weight: bold;
  font-weight: 400;
  line-height: 35px;
  font-family: GmarketSans, sans-serif;
  //background-color: pink;

  @media (max-width: ${smallViewport}) {
    border-bottom: 0.3px solid #a07d5a;
    font-size: 9px;
    font-weight: 400;
    line-height: 22px;
  }
`;

export const AboutSkillBox = styled.div`
  height: 10%;
  display: flex;
  padding: 10px 0;
  flex-direction: row;
  align-items: center;
  //justify-content: center;
  gap: 10px;

  @media (max-width: ${smallViewport}) {
    padding: 5px 0;
  }
`;

export const AboutSkills = styled.div`
  width: auto;
  height: 35px;
  display: flex;
  align-items: center;
  padding: 2px 6px;
  background-color: #ffffff;
  box-shadow: 1px 2px 9px rgba(45, 45, 45, 0.3);
  border-radius: 5px;

  text-align: center;
  color: #787878;
  font-size: 16px;
  font-weight: 400;
  //font-weight: bold;
  font-family: Pretendard, sans-serif;

  @media (max-width: ${smallViewport}) {
    height: 30px;
    font-size: 10px;
  }
`;

export const AboutLinkBox = styled.div`
  height: 25%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  border-top: 0.5px solid #a07d5a;

  @media (max-width: ${smallViewport}) {
    gap: 5px;
    border-top: 0.3px solid #a07d5a;
  }
`;

export const AboutLink = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  outline: none;
  border: 0;
  background-color: transparent;

  text-align: center;
  color: #787878;
  font-size: 16px;
  //font-weight: bold;
  font-weight: 400;
  font-family: Pretendard, sans-serif;

  .icon {
    width: 45px;
    height: 45px;
  }

  @media (max-width: ${smallViewport}) {
    font-size: 10px;
    .icon {
      width: 25px;
      height: 25px;
    }
  }
`;
