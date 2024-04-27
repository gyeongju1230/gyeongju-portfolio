import * as styles from "./ProjectModal.styles";
import ProjectTag from "../../common/tag/project-tag/ProjectTag";
import projectModalData from "../../../data/ProjectModalData";
import { ReactComponent as AppStoreImage1 } from "../../../assets/image/project/deunbung/Deunbung_AppStoreImage1.svg";
import { ReactComponent as AppStoreImage2 } from "../../../assets/image/project/deunbung/Deunbung_AppStoreImage2.svg";
import { ReactComponent as AppStoreImage3 } from "../../../assets/image/project/deunbung/Deunbung_AppStoreImage3.svg";
import { ReactComponent as AppStoreImage4 } from "../../../assets/image/project/deunbung/Deunbung_AppStoreImage4.svg";
import { ReactComponent as AppStoreImage5 } from "../../../assets/image/project/deunbung/Deunbung_AppStoreImage5.svg";
import { ReactComponent as AppStoreImage6 } from "../../../assets/image/project/deunbung/Deunbung_AppStoreImage6.svg";
import { ReactComponent as AppStoreImage7 } from "../../../assets/image/project/deunbung/Deunbung_AppStoreImage7.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface ProjectModalProps {
  id: string;
}

const ProjectModal = ({ id }: ProjectModalProps) => {
  const { tag, title, contentTitle, content } = projectModalData[id] || {
    tag: "",
    title: "",
    contentTitle: "",
    content: "",
  };

  const images = [
    <AppStoreImage1 />,
    <AppStoreImage2 />,
    <AppStoreImage3 />,
    <AppStoreImage4 />,
    <AppStoreImage5 />,
    <AppStoreImage6 />,
    <AppStoreImage7 />,
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

  return (
    <styles.ModalWrapper>
      <styles.ModalContainer>
        <styles.ModalBox>
          <ProjectTag text={tag} />
          <styles.Title>{title}</styles.Title>
          <styles.AppStoreImageContainer>
            <Swiper {...swiperParams}>
              {images.map((image, index) => (
                <SwiperSlide key={index}>{image}</SwiperSlide>
              ))}
            </Swiper>
          </styles.AppStoreImageContainer>
        </styles.ModalBox>
      </styles.ModalContainer>
    </styles.ModalWrapper>
  );
};

export default ProjectModal;
