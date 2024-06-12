import ProjectLayout from '../components/project/project-layout/ProjectLayout';
import React, { SetStateAction } from 'react';

interface ProjectProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>;
  id: string;
  handleModalOpen: (id: string) => void;
}

const Project = ({
  isModalOpen,
  setIsModalOpen,
  id,
  handleModalOpen,
}: ProjectProps) => {
  return (
    <ProjectLayout
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      id={id}
      handleModalOpen={handleModalOpen}
    />
  );
};

export default Project;
