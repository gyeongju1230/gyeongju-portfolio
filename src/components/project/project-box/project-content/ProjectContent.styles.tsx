import styled from "styled-components";

const smallViewport = "62rem";

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
