import * as styles from './ScrollDown.styles';
import Lottie from 'lottie-react';
import ScrollDownLottie from '@assets/lottie/Lottie_scroll_down.json';

const ScrollDown = () => {
  return (
    <styles.DownLottieBox>
      <Lottie animationData={ScrollDownLottie} />
    </styles.DownLottieBox>
  );
};

export default ScrollDown;
