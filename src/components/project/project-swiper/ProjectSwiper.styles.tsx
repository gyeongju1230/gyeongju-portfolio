import styled from 'styled-components';

const smallViewport = '62rem';

export const AppStoreImageContainer = styled.div`
  width: 100%;
  height: 440px;
  display: flex;
  margin-top: 15px;
  border-radius: 10px;

  .swiper-pagination-bullet-active {
    background-color: #a07d5a;
  }
`;

export const SwiperImage = styled.img`
  border-radius: 10px;
  box-shadow: 1px 2px 9px rgba(45, 45, 45, 0.3);
`;
