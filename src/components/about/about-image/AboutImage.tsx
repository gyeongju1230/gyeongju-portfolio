import * as styles from "./AboutImage.styles";
import MyImage from "../../../assets/image/Image.png";
import { useContext } from "react";
import { MenuContext } from "../../../context/MenuContext";

const AboutImage = () => {
  const { isMenuOpen } = useContext(MenuContext);
  const menuBar = isMenuOpen ? "" : "none-menu";

  return (
    <styles.ImageBox className={menuBar}>
      <img src={MyImage} alt="MyImage" className="image" />
    </styles.ImageBox>
  );
};

export default AboutImage;
