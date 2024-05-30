import * as styles from './Navbar.styles';
import { ReactComponent as Logo } from '@assets/images/Logo.svg';
import { ReactComponent as More } from '@assets/icons/MoreButton.svg';
import { useContext } from 'react';
import { MenuContext } from '@contexts/MenuContext';

const Navbar = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);
  const menuBar = isMenuOpen ? '' : 'none-menu';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToAbout = () => {
    window.scrollTo({
      top: document.getElementById('about')?.offsetTop || 0,
      behavior: 'smooth',
    });
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSkill = () => {
    window.scrollTo({
      top: document.getElementById('skill')?.offsetTop || 0,
      behavior: 'smooth',
    });
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToProject = () => {
    window.scrollTo({
      top: document.getElementById('project')?.offsetTop || 0,
      behavior: 'smooth',
    });
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToContact = () => {
    window.scrollTo({
      top: document.getElementById('contact')?.offsetTop || 0,
      behavior: 'smooth',
    });
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <styles.Header className={menuBar}>
      <styles.LogoContainer>
        <styles.Logo href="/">
          <Logo />
        </styles.Logo>
        <styles.MoreButton className="mobile-only" onClick={toggleMenu}>
          <More />
        </styles.MoreButton>
      </styles.LogoContainer>

      <styles.Menu className={menuBar}>
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
          <styles.Button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToProject}
          >
            &lt; PROJECT /&gt;
          </styles.Button>
        </styles.MenuItem>
        <styles.MenuItem>
          <styles.Button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToContact}
          >
            &lt; CONTACT /&gt;
          </styles.Button>
        </styles.MenuItem>
      </styles.Menu>
    </styles.Header>
  );
};

export default Navbar;
