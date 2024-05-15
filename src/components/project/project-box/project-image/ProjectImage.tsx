import * as styles from "./ProjectImage.styles";
import React from "react";

interface ProjectImageProps {
  image: React.ReactNode;
  menuBar: string;
}
const ProjectImage = ({ image, menuBar }: ProjectImageProps) => {
  return (
    <styles.ImageBox
      className={menuBar}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.94 }}
    >
      <styles.Image className={menuBar}>{image}</styles.Image>
    </styles.ImageBox>
  );
};

export default ProjectImage;
