import styled from "styled-components";

const smallViewport = "62rem";

export const ProjectBox = styled.div`
  width: 80%;
  height: 75%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${smallViewport}) {
    width: 90%;
    height: 60%;
    margin-top: 240px;

    &.none-menu {
      width: 90%;
      height: 80%;
      margin-top: 50px;
    }
  }
`;

export const Project = styled.div`
  width: 49%;
  height: 48%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  box-shadow: 1px 2px 9px rgba(45, 45, 45, 0.3);
  background-color: #ffffff;

  @media (max-width: ${smallViewport}) {
    width: 48%;
    height: 43%;
    flex-direction: column;

    &.none-menu {
      width: 48%;
      height: 46%;
      flex-direction: column;
    }
  }
`;

export const ImageBox = styled.div`
  width: 210px;
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  border-radius: 10px;
  box-shadow: 1px 2px 9px rgba(45, 45, 45, 0.3);

  @media (max-width: ${smallViewport}) {
    width: 150px;
    height: 125px;
    margin-left: 0;
    margin-top: 10px;
  }
`;

export const Image = styled.div`
  width: 190px;
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${smallViewport}) {
    width: 140px;
    height: 105px;
  }
`;

export const ContentBox = styled.div`
  width: 52%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: bisque;

  @media (max-width: ${smallViewport}) {
    width: 90%;
    height: 40%;
  }
`;
