import * as styles from "./Navbar.styles";
import { ReactComponent as Logo } from "../../assets/image/Logo.svg";
import { ReactComponent as More } from "../../assets/icon/MoreButton.svg";
import { useContext } from "react";
import { MenuContext } from "../../context/MenuContext";

const Navbar = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToAbout = () => {
    window.scrollTo({
      top: document.getElementById("about")?.offsetTop || 0,
      behavior: "smooth",
    });
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSkill = () => {
    window.scrollTo({
      top: document.getElementById("skill")?.offsetTop || 0,
      behavior: "smooth",
    });
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <styles.Header className={isMenuOpen ? "" : "none-menu"}>
      <styles.LogoContainer>
        <styles.Logo href="/">
          <Logo />
        </styles.Logo>
        <styles.MoreButton className="mobile-only" onClick={toggleMenu}>
          <More />
        </styles.MoreButton>
      </styles.LogoContainer>

      <styles.Menu className={isMenuOpen ? "" : "none-menu"}>
        <styles.MenuItem>
          <styles.Button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToAbout}
          >
            &lt; ABOUT /&gt;
          </styles.Button>
        </styles.MenuItem>
        <styles.MenuItem>
          <styles.Button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToSkill}
          >
            &lt; SKILL /&gt;
          </styles.Button>
        </styles.MenuItem>
        <styles.MenuItem>
          <styles.Button>&lt; PROJECT /&gt;</styles.Button>
        </styles.MenuItem>
        <styles.MenuItem>
          <styles.Button>&lt; CONTACT /&gt;</styles.Button>
        </styles.MenuItem>
      </styles.Menu>
    </styles.Header>
  );
};

export default Navbar;
