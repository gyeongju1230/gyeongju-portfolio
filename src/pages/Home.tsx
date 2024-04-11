import HomeLayout from "../components/home/HomeLayout";

interface HomeProps {
  isMenuOpen: boolean;
}

const Home = ({ isMenuOpen }: HomeProps) => {
  return <HomeLayout isMenuOpen={isMenuOpen} />;
};

export default Home;
