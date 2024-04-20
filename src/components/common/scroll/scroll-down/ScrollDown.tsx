import * as styles from "./ScrollDown.styles";
import Lottie from "lottie-react";
import ScrollDownLottie from "../../../../assets/lottie/Lottie_scroll_down.json";

interface ScrollDownProps {
  onClick: () => void;
}

const ScrollDown = ({ onClick }: ScrollDownProps) => {
  return (
    <styles.DownLottieBox>
      <styles.Button onClick={onClick}>
        <Lottie animationData={ScrollDownLottie} />
      </styles.Button>
    </styles.DownLottieBox>
  );
};

export default ScrollDown;
