import * as styles from './ProjectLayout.styles';
import ProjectBox from '@components/project/project-box/ProjectBox';
import React, { SetStateAction, useState } from 'react';
import ProjectModal from '@components/project/project-modal/ProjectModal';

interface ProjectLayoutProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>;
  id: string;
  handleModalOpen: (id: string) => void;
}

const ProjectLayout = ({
  isModalOpen,
  setIsModalOpen,
  id,
  handleModalOpen,
}: ProjectLayoutProps) => {
  if (isModalOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <styles.Container id="project">
      <ProjectBox handleModalOpen={handleModalOpen} />

      {isModalOpen && <ProjectModal id={id} setIsModalOpen={setIsModalOpen} />}
    </styles.Container>
  );
};

export default ProjectLayout;
