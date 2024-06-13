import * as styles from './SkillButton.styles';
import { Fragment } from 'react';
import Lottie from 'lottie-react';
import ArrowLottie from '@assets/lottie/Lottie_arrow.json';

interface SkillButtonProps {
  selectedButtonIndex: number;
  handleButtonClick: (index: number) => void;
}
const SkillButton = ({
  selectedButtonIndex,
  handleButtonClick,
}: SkillButtonProps) => {
  return (
    <styles.Container>
      <styles.Box>
        {Array.from(Array(3).keys()).map(index => (
          <Fragment key={index}>
            {selectedButtonIndex === index ? (
              <styles.SelectedButton>
                <styles.Button
                  onClick={() => handleButtonClick(index)}
                  className={selectedButtonIndex === index ? 'selected' : ''}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <styles.ButtonBox
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 260,
                      damping: 20,
                    }}
                  >
                    {index === 0
                      ? '편해요'
                      : index === 1
                        ? '사용할 수 있어요'
                        : '사용해 봤어요'}
                  </styles.ButtonBox>
                </styles.Button>
              </styles.SelectedButton>
            ) : (
              <styles.Button
                onClick={() => handleButtonClick(index)}
                className={selectedButtonIndex === index ? 'selected' : ''}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <styles.ButtonBox>
                  {index === 0
                    ? '편해요'
                    : index === 1
                      ? '사용할 수 있어요'
                      : '사용해 봤어요'}
                </styles.ButtonBox>
              </styles.Button>
            )}
          </Fragment>
        ))}
      </styles.Box>
      <styles.ArrowBox className="arrow">
        <styles.ArrowContent>버튼을 눌러주세요!</styles.ArrowContent>
        <styles.LottieBox>
          <Lottie animationData={ArrowLottie} className="lottie" />
        </styles.LottieBox>
      </styles.ArrowBox>
    </styles.Container>
  );
};

export default SkillButton;
