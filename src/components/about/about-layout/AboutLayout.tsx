import * as styles from './AboutLayout.styles';
import AboutContent from '@components/about/about-content/AboutContent';
import AboutImage from '@components/about/about-image/AboutImage';
import React, { SetStateAction } from 'react';

interface AboutLayoutProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>;
  id: string;
  handleModalOpen: (id: string) => void;
}

const AboutLayout = ({
  isModalOpen,
  setIsModalOpen,
  id,
  handleModalOpen,
}: AboutLayoutProps) => {
  return (
    <styles.Container id="about">
      <styles.Title>ABOUT</styles.Title>
      <styles.AboutContainer>
        <AboutImage />
        <AboutContent
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          id={id}
          handleModalOpen={handleModalOpen}
        />
      </styles.AboutContainer>
    </styles.Container>
  );
};

export default AboutLayout;
