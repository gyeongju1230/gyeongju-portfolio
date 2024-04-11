import * as styles from ".//AboutLayout.styles";
import AboutScrollDown from "../common/scroll/scroll-down/ScrollDown";

interface AboutLayoutProps {
  isMenuOpen: boolean;
}

const AboutLayout = ({ isMenuOpen }: AboutLayoutProps) => {
  const scrollToSkill = () => {
    window.scrollTo({
      top: document.getElementById("about")?.offsetTop || 0,
      behavior: "smooth",
    });
  };

  return (
    <styles.Container id="about" className={isMenuOpen ? "" : "none-menu"}>
      <h1>About</h1>
      <AboutScrollDown onClick={scrollToSkill} />
    </styles.Container>
  );
};

export default AboutLayout;
