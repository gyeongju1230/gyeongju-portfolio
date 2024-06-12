import AboutLayout from '../components/about/about-layout/AboutLayout';
import React, { SetStateAction } from 'react';

interface AboutProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>;
  id: string;
  handleModalOpen: (id: string) => void;
}

const About = ({
  isModalOpen,
  setIsModalOpen,
  id,
  handleModalOpen,
}: AboutProps) => {
  return (
    <AboutLayout
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      id={id}
      handleModalOpen={handleModalOpen}
    />
  );
};

export default About;
