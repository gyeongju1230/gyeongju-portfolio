import * as styles from './AboutLayout.styles';
import AboutContent from '@components/about/about-content/AboutContent';
import AboutImage from '@components/about/about-image/AboutImage';

const AboutLayout = () => {
  return (
    <styles.Container id="about">
      <styles.Title>ABOUT</styles.Title>
      <styles.AboutContainer>
        <AboutImage />
        <AboutContent />
      </styles.AboutContainer>
    </styles.Container>
  );
};

export default AboutLayout;
