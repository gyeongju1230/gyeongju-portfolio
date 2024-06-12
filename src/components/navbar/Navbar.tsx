import * as styles from './Navbar.styles';
import { ReactComponent as Logo } from '@assets/images/Logo.svg';
import { ReactComponent as More } from '@assets/icons/MoreButton.svg';
import React, { useContext, useEffect } from 'react';
import { MenuContext } from '@contexts/MenuContext';

const Navbar = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);
  const menuBar = isMenuOpen ? '' : 'none-menu';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const scrollToAbout = () => {
    window.scrollTo({
      top: document.getElementById('about')?.offsetTop || 0,
      behavior: 'smooth',
    });
    setIsMenuOpen(false);
  };

  const scrollToSkill = () => {
    window.scrollTo({
      top: document.getElementById('skill')?.offsetTop || 0,
      behavior: 'smooth',
    });
    setIsMenuOpen(false);
  };

  const scrollToProject = () => {
    window.scrollTo({
      top: document.getElementById('project')?.offsetTop || 0,
      behavior: 'smooth',
    });
    setIsMenuOpen(false);
  };

  const scrollToContact = () => {
    window.scrollTo({
      top: document.getElementById('contact')?.offsetTop || 0,
      behavior: 'smooth',
    });
    setIsMenuOpen(false);
  };

  const handleMenubarClose = () => {
    setIsMenuOpen(false);
  };

  const handleHeaderContainerClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const NavbarContent = (
    <styles.Header className={menuBar} onClick={handleHeaderContainerClick}>
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

  return (
    <>
      {isMenuOpen ? (
        <styles.BackgroundOpacity onClick={() => setIsMenuOpen(false)}>
          {NavbarContent}
        </styles.BackgroundOpacity>
      ) : (
        NavbarContent
      )}
    </>
  );
};

export default Navbar;
