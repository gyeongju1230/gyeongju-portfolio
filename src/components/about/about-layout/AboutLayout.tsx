import * as styles from "./AboutLayout.styles";
import AboutScrollDown from "../../common/scroll/scroll-down/ScrollDown";
import { useContext } from "react";
import { MenuContext } from "../../../context/MenuContext";
import AboutContent from "../about-content/AboutContent";
import AboutImage from "../about-image/AboutImage";

const AboutLayout = () => {
  const { isMenuOpen } = useContext(MenuContext);
  const menuBar = isMenuOpen ? "" : "none-menu";

  const scrollToSkill = () => {
    window.scrollTo({
      top: document.getElementById("skill")?.offsetTop || 0,
      behavior: "smooth",
    });
  };

  return (
    <styles.Container id="about" className={menuBar}>
      <styles.Title className={menuBar}>ABOUT</styles.Title>
      <styles.AboutContainer className={menuBar}>
        <AboutImage />
        <AboutContent />
      </styles.AboutContainer>
      <AboutScrollDown onClick={scrollToSkill} />
    </styles.Container>
  );
};

export default AboutLayout;
