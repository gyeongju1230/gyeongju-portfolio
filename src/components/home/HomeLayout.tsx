import * as styles from './HomeLayout.styles';
import HomeScrollDown from '@components/common/scroll/scroll-down/ScrollDown';

const HomeLayout = () => {
  return (
    <styles.Container>
      <styles.Title>
        Gyeongju <br />
        Portfolio
      </styles.Title>
      <HomeScrollDown />
    </styles.Container>
  );
};

export default HomeLayout;
