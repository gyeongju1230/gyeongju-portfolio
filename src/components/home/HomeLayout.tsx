import * as styles from "./HomeLayout.styles";
import HomeScrollDown from "../common/scroll/scroll-down/ScrollDown";
import { useContext } from "react";
import { MenuContext } from "../../context/MenuContext";

const HomeLayout = () => {
  const { isMenuOpen } = useContext(MenuContext);
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
      <HomeScrollDown className="home-scroll-down" onClick={scrollToAbout} />
    </styles.Container>
  );
};

export default HomeLayout;
