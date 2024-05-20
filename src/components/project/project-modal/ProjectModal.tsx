import * as styles from './ProjectModal.styles';
import ProjectTag from '@components/common/tag/project-tag/ProjectTag';
import projectModalData from '@data/ProjectModalData';
import AppStoreImage1 from '@assets/images/project/deunbung/Deunbung_AppStoreImage1.svg';
import AppStoreImage2 from '@assets/images/project/deunbung/Deunbung_AppStoreImage2.svg';
import AppStoreImage3 from '@assets/images/project/deunbung/Deunbung_AppStoreImage3.svg';
import AppStoreImage4 from '@assets/images/project/deunbung/Deunbung_AppStoreImage4.svg';
import AppStoreImage5 from '@assets/images/project/deunbung/Deunbung_AppStoreImage5.svg';
import AppStoreImage6 from '@assets/images/project/deunbung/Deunbung_AppStoreImage6.svg';
import AppStoreImage7 from '@assets/images/project/deunbung/Deunbung_AppStoreImage7.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import React, { SetStateAction } from 'react';
import useSwiperParams from '@hooks/useSwiperParams';
import { Pagination } from 'swiper/types/modules';

interface ProjectModalProps {
  id: string;
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>;
}

const ProjectModal = ({ id, setIsModalOpen }: ProjectModalProps) => {
  const { tag, title, contentTitle, content } = projectModalData[id] || {
    tag: '',
    title: '',
    contentTitle: '',
    content: '',
  };

  const { slidesPerView, spaceBetween, pagination, modules } =
    useSwiperParams();

  const images = [
    AppStoreImage1,
    AppStoreImage2,
    AppStoreImage3,
    AppStoreImage4,
    AppStoreImage5,
    AppStoreImage6,
    AppStoreImage7,
  ];

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalContainerClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <styles.ModalWrapper onClick={handleModalClose}>
      <styles.ModalContainer onClick={handleModalContainerClick}>
        <styles.ModalBox>
          <ProjectTag text={tag} />
          <styles.Title>{title}</styles.Title>
          <styles.AppStoreImageContainer>
            <Swiper
              slidesPerView={slidesPerView}
              spaceBetween={spaceBetween}
              pagination={pagination}
              modules={modules}
              className="mySwiper"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image} alt={`image ${index}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </styles.AppStoreImageContainer>
        </styles.ModalBox>
      </styles.ModalContainer>
    </styles.ModalWrapper>
  );
};

export default ProjectModal;
