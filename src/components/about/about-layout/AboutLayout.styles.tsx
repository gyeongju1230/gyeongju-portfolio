import styled from 'styled-components';

const smallViewport = '62rem';

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  text-align: center;
  color: #a07d5a;
  font-size: 40px;
  font-weight: bold;
  font-family: GmarketSans, sans-serif;

  @media (max-width: ${smallViewport}) {
    margin-top: 240px;
    font-size: 22px;

    &.none-menu {
      margin-top: 77px;
      font-size: 22px;
    }
  }
`;

export const AboutContainer = styled.div`
  width: 80%;
  height: 60%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${smallViewport}) {
    width: 90%;
    height: 50%;
    flex-direction: column;
    justify-content: center;

    &.none-menu {
      width: 90%;
      height: 70%;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`;
