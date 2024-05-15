import * as styles from "./AboutLayout.styles";
import AboutScrollDown from "../../common/scroll/scroll-down/ScrollDown";
import AboutContent from "../about-content/AboutContent";
import AboutImage from "../about-image/AboutImage";

interface AboutLayoutProps {
  menuBar: string;
}

const AboutLayout = ({ menuBar }: AboutLayoutProps) => {
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
        <AboutImage menuBar={menuBar} />
        <AboutContent menuBar={menuBar} />
      </styles.AboutContainer>
      <AboutScrollDown onClick={scrollToSkill} />
    </styles.Container>
  );
};

export default AboutLayout;
