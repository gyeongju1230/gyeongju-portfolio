import * as styles from "./ProjectImage.styles";
import React from "react";

interface ProjectImageProps {
  image: React.ReactNode;
}
const ProjectImage = ({ image }: ProjectImageProps) => {
  return (
    <styles.ImageBox>
      <styles.Image>{image}</styles.Image>
    </styles.ImageBox>
  );
};

export default ProjectImage;
