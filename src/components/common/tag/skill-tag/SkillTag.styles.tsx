import styled, { css } from 'styled-components';

const smallViewport = '62rem';

interface SkillTagProps {
  getRandomColor: string;
}

export const TagContainer = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  bottom: 0;

  @media (max-width: ${smallViewport}) {
    &.hide-tag {
      display: none;
    }
  }
`;

export const TagBox = styled.div<SkillTagProps>`
  width: auto;
  height: 22px;
  padding: 2px 10px;
  display: flex;
  align-items: center;
  margin-right: 10px;
  margin-bottom: 2px;
  border-radius: 3px;

  ${({ getRandomColor }) => css`
    background-color: ${getRandomColor};
  `}

  text-align: center;
  color: #787878;
  font-size: 12px;
  font-weight: 400;
  line-height: 10px;
  font-family: GmarketSans, sans-serif;
`;
