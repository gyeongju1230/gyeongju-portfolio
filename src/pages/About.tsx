import AboutLayout from '../components/about/about-layout/AboutLayout';
import { useContext } from 'react';
import { MenuContext } from '../contexts/MenuContext';

const About = () => {
  const { isMenuOpen } = useContext(MenuContext);
  const menuBar = isMenuOpen ? '' : 'none-menu';

  return <AboutLayout menuBar={menuBar} />;
};

export default About;
