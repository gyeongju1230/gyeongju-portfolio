import * as styles from './ProjectModal.styles';
import React, { SetStateAction } from 'react';
import ProjectModalContent from '@components/project/project-modal/project-modal-content/ProjectModalContent';

interface ProjectModalProps {
  id: string;
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>;
}

const ProjectModal = ({ id, setIsModalOpen }: ProjectModalProps) => {
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalContainerClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <styles.ModalWrapper onClick={handleModalClose}>
      <styles.ModalContainer onClick={handleModalContainerClick}>
        <ProjectModalContent id={id} />
      </styles.ModalContainer>
    </styles.ModalWrapper>
  );
};

export default ProjectModal;
