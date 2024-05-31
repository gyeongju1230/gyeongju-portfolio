import * as styles from './ProjectLayout.styles';
import ProjectScrollDown from '@components/common/scroll/scroll-down/ScrollDown';
import ProjectBox from '@components/project/project-box/ProjectBox';
import { useState } from 'react';
import ProjectModal from '@components/project/project-modal/ProjectModal';

interface ProjectLayoutProps {
  menuBar: string;
}

const ProjectLayout = ({ menuBar }: ProjectLayoutProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalId, setModalId] = useState('');

  const scrollToContact = () => {
    window.scrollTo({
      top: document.getElementById('contact')?.offsetTop || 0,
      behavior: 'smooth',
    });
  };

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
      <ProjectBox menuBar={menuBar} handleModalOpen={handleModalOpen} />
      <ProjectScrollDown onClick={scrollToContact} />

      {isModalOpen && (
        <ProjectModal id={modalId} setIsModalOpen={setIsModalOpen} />
      )}
    </styles.Container>
  );
};

export default ProjectLayout;
