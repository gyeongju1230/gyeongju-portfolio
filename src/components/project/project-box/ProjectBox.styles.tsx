import styled from 'styled-components';
import { motion } from 'framer-motion';

const smallViewport = '62rem';

export const ProjectBox = styled.div`
  position: relative;
  width: 80%;
  height: 75%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  border-radius: 20px;
  box-shadow: 1px 2px 9px rgba(45, 45, 45, 0.3);

  .mySwiper {
    height: 100%;
  }

  .swiper-pagination-bullet-active {
    background-color: #a07d5a;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #a07d5a;
    z-index: 3;

    &::after {
      font-size: 24px;
    }
  }

  @media (max-width: ${smallViewport}) {
    width: 90%;
    height: 60%;
    margin-top: 240px;

    &.none-menu {
      width: 90%;
      height: 75%;
      margin-top: 50px;
    }
  }
`;

export const Project = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  background-color: #fffbf5;

  @media (max-width: ${smallViewport}) {
    flex-direction: column;
  }
`;
