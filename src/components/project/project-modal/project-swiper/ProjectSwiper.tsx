import * as styles from './ProjectSwiper.styles';
import images from '@components/project/project-modal/project-swiper/project-images/ProjectImags';
import useSwiperParams from '@hooks/useSwiperParams';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import React from 'react';

interface ProjectSwiperProps {
  id: string;
}

const ProjectSwiper = ({ id }: ProjectSwiperProps) => {
  const selectedImages = images[id] || [];
  const { slidesPerView, spaceBetween, pagination, modules } =
    useSwiperParams();

  return (
    <styles.AppStoreImageContainer>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        pagination={pagination}
        modules={modules}
        className="mySwiper"
      >
        {selectedImages.map((ImageComponent, index) => (
          <SwiperSlide key={index}>
            <ImageComponent
              style={{
                borderRadius: '10px',
                boxShadow: '1px 2px 9px rgba(45, 45, 45, 0.3)',
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </styles.AppStoreImageContainer>
  );
};

export default ProjectSwiper;
