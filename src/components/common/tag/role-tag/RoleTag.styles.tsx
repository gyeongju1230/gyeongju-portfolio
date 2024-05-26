import styled, { css } from 'styled-components';

const smallViewport = '62rem';

interface RoleTagProps {
  getRandomColor: string;
}

export const TagBox = styled.div<RoleTagProps>`
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

  @media (max-width: ${smallViewport}) {
    height: 18px;
    margin-right: 5px;
    font-size: 10px;
  }
`;
