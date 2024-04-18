import * as styles from "./ScrollDown.styles";
import Lottie from "lottie-react";
import ScrollDownLottie from "../../../../assets/lottie/Lottie_scroll_down.json";

interface ScrollDownProps {
  className?: string;
  onClick: () => void;
}

const ScrollDown = ({ className, onClick }: ScrollDownProps) => {
  return (
    <styles.DownLottieBox className={className}>
      <styles.Button onClick={onClick}>
        <Lottie animationData={ScrollDownLottie} />
      </styles.Button>
    </styles.DownLottieBox>
  );
};

export default ScrollDown;
