import styled from "styled-components";

const smallViewport = "62rem";

export const Container = styled.div`
  width: 100%;
  height: 1000px;
  margin-top: 60px;
  background: beige;

  @media (max-width: ${smallViewport}) {
    flex-direction: column;
    margin-top: 220px;
  }
`;
