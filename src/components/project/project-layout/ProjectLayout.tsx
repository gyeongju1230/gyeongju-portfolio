import * as styles from './ProjectLayout.styles';
import ProjectBox from '@components/project/project-box/ProjectBox';
import { useState } from 'react';
import ProjectModal from '@components/project/project-modal/ProjectModal';

const ProjectLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalId, setModalId] = useState('');

  const handleModalOpen = (id: string) => {
    setIsModalOpen(!isModalOpen);
    setModalId(id);
  };

  if (isModalOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <styles.Container id="project">
      <ProjectBox handleModalOpen={handleModalOpen} />

      {isModalOpen && (
        <ProjectModal id={modalId} setIsModalOpen={setIsModalOpen} />
      )}
    </styles.Container>
  );
};

export default ProjectLayout;
