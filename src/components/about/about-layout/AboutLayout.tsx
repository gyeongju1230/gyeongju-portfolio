import * as styles from './AboutLayout.styles';
import AboutScrollDown from '@components/common/scroll/scroll-down/ScrollDown';
import AboutContent from '@components/about/about-content/AboutContent';
import AboutImage from '@components/about/about-image/AboutImage';

interface AboutLayoutProps {
  menuBar: string;
}

const AboutLayout = ({ menuBar }: AboutLayoutProps) => {
  const scrollToSkill = () => {
    window.scrollTo({
      top: document.getElementById('skill')?.offsetTop || 0,
      behavior: 'smooth',
    });
  };

  return (
    <styles.Container id="about" className={menuBar}>
      <styles.Title className={menuBar}>ABOUT</styles.Title>
      <styles.AboutContainer className={menuBar}>
        <AboutImage menuBar={menuBar} />
        <AboutContent menuBar={menuBar} />
      </styles.AboutContainer>
      <AboutScrollDown onClick={scrollToSkill} />
    </styles.Container>
  );
};

export default AboutLayout;
