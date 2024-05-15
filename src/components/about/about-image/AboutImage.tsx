import * as styles from "./AboutImage.styles";
import MyImage from "../../../assets/image/Image.png";

interface AboutImageProps {
  menuBar: string;
}

const AboutImage = ({ menuBar }: AboutImageProps) => {
  return (
    <styles.ImageBox className={menuBar}>
      <img src={MyImage} alt="MyImage" className="image" />
    </styles.ImageBox>
  );
};

export default AboutImage;
