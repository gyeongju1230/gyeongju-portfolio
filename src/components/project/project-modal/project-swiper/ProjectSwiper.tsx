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
        {selectedImages.map((image, index) => (
          <SwiperSlide key={index}>
            <styles.SwiperImage src={image} alt={`image ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </styles.AppStoreImageContainer>
  );
};

export default ProjectSwiper;
