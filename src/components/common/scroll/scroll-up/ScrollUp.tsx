import * as styles from "./ScrollUp.styles";
import Lottie from "lottie-react";
import ScrollUpLottie from "../../../../assets/lottie/Lottie_scroll_up.json";

interface ScrollUpProps {
  onClick: () => void;
}

const ScrollUp = ({ onClick }: ScrollUpProps) => {
  return (
    <styles.UpLottieBox>
      <styles.Button onClick={onClick}>
        <Lottie animationData={ScrollUpLottie} />
      </styles.Button>
    </styles.UpLottieBox>
  );
};

export default ScrollUp;
