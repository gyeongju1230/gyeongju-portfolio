import * as styles from "./HomeLayout.styles";
import HomeScrollDown from "../common/scroll/scroll-down/ScrollDown";

interface HomeLayoutProps {
  menuBar: string;
}

const HomeLayout = ({ menuBar }: HomeLayoutProps) => {
  const scrollToAbout = () => {
    window.scrollTo({
      top: document.getElementById("about")?.offsetTop || 0,
      behavior: "smooth",
    });
  };

  return (
    <styles.Container className={menuBar}>
      <styles.Title>
        Frontend <br />
        Portfolio
      </styles.Title>
      <HomeScrollDown onClick={scrollToAbout} />
    </styles.Container>
  );
};

export default HomeLayout;
