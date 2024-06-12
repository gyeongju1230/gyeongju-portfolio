import * as styles from './AboutImage.styles';
import MyImage from '@assets/images/Image.png';

const AboutImage = () => {
  return (
    <styles.ImageContainer>
      <styles.ImageBox>
        <img src={MyImage} alt="MyImage" className="image" />
      </styles.ImageBox>
    </styles.ImageContainer>
  );
};

export default AboutImage;
