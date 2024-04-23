import * as styles from "./ProjectImage.styles";
import React, { useContext } from "react";
import { MenuContext } from "../../../../context/MenuContext";

interface ProjectImageProps {
  image: React.ReactNode;
}
const ProjectImage = ({ image }: ProjectImageProps) => {
  const { isMenuOpen } = useContext(MenuContext);
  const menuBar = isMenuOpen ? "" : "none-menu";

  return (
    <styles.ImageBox className={menuBar}>
      <styles.Image className={menuBar}>{image}</styles.Image>
    </styles.ImageBox>
  );
};

export default ProjectImage;
