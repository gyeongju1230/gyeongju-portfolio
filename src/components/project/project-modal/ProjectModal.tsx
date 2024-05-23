import * as styles from './ProjectModal.styles';
import ProjectTag from '@components/common/tag/project-tag/ProjectTag';
import projectModalData from '@data/ProjectModalData';
import React, { SetStateAction } from 'react';
import ProjectSwiper from '@components/project/project-swiper/ProjectSwiper';

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
          <ProjectSwiper id={id} />
        </styles.ModalBox>
      </styles.ModalContainer>
    </styles.ModalWrapper>
  );
};

export default ProjectModal;
