import styled from "styled-components";

const smallViewport = "62rem";

export const Container = styled.div`
  width: 60%;
  height: 60%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (max-width: ${smallViewport}) {
    width: 100%;
    height: 60%;

    .icon-jsp {
      margin-top: 0;
    }

    .icon-mysql {
      margin-top: 0;
    }

    &.none-menu {
      .icon-jsp {
        margin-top: -100px;
      }

      .icon-mysql {
        margin-top: -100px;
      }
    }
  }
`;

export const IconBox = styled.div`
  width: 160px;
  height: 144px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-right: 50px;

  @media (max-width: ${smallViewport}) {
    width: 100px;
    height: 72px;
    margin-right: 15px;
  }
`;

export const Icon = styled.div`
  display: flex;
  width: 120px;
  height: 120px;

  .icon {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${smallViewport}) {
    width: 60px;
    height: 60px;
  }
`;

export const Name = styled.div`
  width: 100%;
  height: 16px;

  text-align: center;
  color: #a07d5a;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  font-family:
    Noto Sans KR,
    sans-serif;

  @media (max-width: ${smallViewport}) {
    height: 8px;
    font-size: 12px;
    line-height: 8px;
  }
`;
