import styled, { css } from "styled-components";

const smallViewport = "62rem";

interface SkillTagProps {
  getRandomColor: string;
}

export const TagContainer = styled.div`
  position: absolute;
  width: 90%;
  height: 58px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  bottom: 0;

  @media (max-width: ${smallViewport}) {
    &.hide-description {
      display: none;
    }
  }
`;

export const TagBox = styled.div<SkillTagProps>`
  width: auto;
  height: 18px;
  padding: 2px 10px;
  display: flex;
  align-items: center;
  margin-right: 10px;
  border-radius: 3px;

  ${({ getRandomColor }) => css`
    background-color: ${getRandomColor};
  `}

  text-align: center;
  color: #787878;
  font-size: 14px;
  line-height: 10px;
  font-family:
    Noto Sans KR,
    sans-serif;
`;
