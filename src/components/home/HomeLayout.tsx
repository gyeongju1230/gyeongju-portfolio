import * as styles from "./HomeLayout.styles";
import HomeScrollDown from "../common/scroll/scroll-down/ScrollDown";

interface HomeLayoutProps {
  isMenuOpen: boolean;
}

const HomeLayout = ({ isMenuOpen }: HomeLayoutProps) => {
  const scrollToAbout = () => {
    window.scrollTo({
      top: document.getElementById("about")?.offsetTop || 0,
      behavior: "smooth",
    });
  };

  return (
    <styles.Container className={isMenuOpen ? "" : "none-menu"}>
      <styles.Title>
        Frontend <br />
        Portfolio
      </styles.Title>
      <HomeScrollDown onClick={scrollToAbout} />
    </styles.Container>
  );
};

export default HomeLayout;
