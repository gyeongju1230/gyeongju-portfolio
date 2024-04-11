import AboutLayout from "../components/about/AboutLayout";

interface AboutProps {
  isMenuOpen: boolean;
}

const About = ({ isMenuOpen }: AboutProps) => {
  return <AboutLayout isMenuOpen={isMenuOpen} />;
};

export default About;
