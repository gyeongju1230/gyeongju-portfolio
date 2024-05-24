import * as styles from './ProjectImage.styles';
import React from 'react';

interface ProjectImageProps {
  id: string;
  handelModalOpen: (id: string) => void;
  image: React.ReactNode;
}
const ProjectImage = ({ id, handelModalOpen, image }: ProjectImageProps) => {
  return (
    <styles.ImageBox
      onClick={() => handelModalOpen(id)}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.94 }}
    >
      <styles.Image>{image}</styles.Image>
    </styles.ImageBox>
  );
};

export default ProjectImage;
