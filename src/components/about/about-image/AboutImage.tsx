import * as styles from './AboutImage.styles';
import MyImage from '@assets/images/Image.png';

interface AboutImageProps {
  menuBar: string;
}

const AboutImage = ({ menuBar }: AboutImageProps) => {
  return (
    <styles.ImageContainer className={menuBar}>
      <styles.ImageBox>
        <img src={MyImage} alt="MyImage" className="image" />
      </styles.ImageBox>
    </styles.ImageContainer>
  );
};

export default AboutImage;
