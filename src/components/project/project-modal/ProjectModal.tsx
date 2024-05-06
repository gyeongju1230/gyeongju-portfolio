import * as styles from "./ProjectModal.styles";
import ProjectTag from "../../common/tag/project-tag/ProjectTag";
import projectModalData from "../../../data/ProjectModalData";
import AppStoreImage1 from "../../../assets/image/project/deunbung/Deunbung_AppStoreImage1.png";
import AppStoreImage2 from "../../../assets/image/project/deunbung/Deunbung_AppStoreImage2.png";
import AppStoreImage3 from "../../../assets/image/project/deunbung/Deunbung_AppStoreImage3.png";
import AppStoreImage4 from "../../../assets/image/project/deunbung/Deunbung_AppStoreImage4.png";
import AppStoreImage5 from "../../../assets/image/project/deunbung/Deunbung_AppStoreImage5.png";
import AppStoreImage6 from "../../../assets/image/project/deunbung/Deunbung_AppStoreImage6.png";
import AppStoreImage7 from "../../../assets/image/project/deunbung/Deunbung_AppStoreImage7.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React, { Dispatch, SetStateAction } from "react";

interface ProjectModalProps {
  id: string;
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>;
}

const ProjectModal = ({ id, setIsModalOpen }: ProjectModalProps) => {
  const { tag, title, contentTitle, content } = projectModalData[id] || {
    tag: "",
    title: "",
    contentTitle: "",
    content: "",
  };

  const images = [
    AppStoreImage1,
    AppStoreImage2,
    AppStoreImage3,
    AppStoreImage4,
    AppStoreImage5,
    AppStoreImage6,
    AppStoreImage7,
  ];

  const swiperParams = {
    slidesPerView: 4.5,

    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <styles.ModalWrapper onClick={handleModalClose}>
      <styles.ModalContainer>
        <styles.ModalBox>
          <ProjectTag text={tag} />
          <styles.Title>{title}</styles.Title>
          <styles.AppStoreImageContainer>
            <Swiper {...swiperParams}>
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
