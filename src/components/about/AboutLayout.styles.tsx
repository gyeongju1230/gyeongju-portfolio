import styled from "styled-components";

const smallViewport = "62rem";

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vh - 90px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 90px;
  background-color: #ffffff;

  @media (max-width: ${smallViewport}) {
    height: calc(100vh - 240px);
    margin-top: 240px;

    &.none-menu {
      height: calc(100vh - 77px);
      margin-top: 77px;
    }
  }
`;

export const AboutTitle = styled.div`
  height: 160px;
  margin-top: -40px;
  margin-bottom: 20px;
  text-align: center;
  color: #000;
  font-size: 22px;
  line-height: 40px;
  font-family: SUITE, sans-serif;

  @media (max-width: ${smallViewport}) {
    font-size: 18px;
    line-height: 30px;
  }
`;

export const AboutContainer = styled.div`
  //width: 791px;
  width: 60%;
  height: 382px;
  display: flex;
  gap: 30px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 1px 2px 9px rgba(45, 45, 45, 0.3);
  background-color: #fffbf5;

  @media (max-width: ${smallViewport}) {
    //width: 395.5px;
    width: calc(100% - 10%);
    height: 352px;
    padding: 10px;
    flex-direction: column;
    gap: 10px;
  }
`;

export const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #fbe5d8;
  text-align: center;

  @media (max-width: ${smallViewport}) {
    width: 100%;
    height: 45%;
  }
`;

export const AboutBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: ${smallViewport}) {
    width: 100%;
    height: 55%;
  }
`;

export const AboutContentIcon = styled.div`
  width: 30px;
  display: flex;
  margin-right: 15px;
  align-items: center;
`;

export const AboutContent = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  margin-bottom: 20px;
  color: #000;
  font-size: 19px;
  line-height: 45px;
  //font-weight: bold;
  font-family: Pretendard, sans-serif;

  @media (max-width: ${smallViewport}) {
    width: 90%;
    height: 22.5px;
    margin-bottom: 10px;
    line-height: 22.5px;
  }
`;
