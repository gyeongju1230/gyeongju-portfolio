import HomeLayout from '../components/home/HomeLayout';
import { useContext } from 'react';
import { MenuContext } from '../contexts/MenuContext';

const Home = () => {
  const { isMenuOpen } = useContext(MenuContext);
  const menuBar = isMenuOpen ? '' : 'none-menu';

  return <HomeLayout menuBar={menuBar} />;
};

export default Home;
