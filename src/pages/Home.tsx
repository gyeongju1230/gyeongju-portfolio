import HomeLayout from "../components/home/HomeLayout";
import { useContext } from "react";
import { MenuContext } from "../context/MenuContext";

const Home = () => {
  const { isMenuOpen } = useContext(MenuContext);
  const menuBar = isMenuOpen ? "" : "none-menu";

  return <HomeLayout menuBar={menuBar} />;
};

export default Home;
