import * as styles from "./SkillButton.styles";
import { Fragment } from "react";

interface SkillButtonProps {
  menuBar: string;
  selectedButtonIndex: number;
  handleButtonClick: (index: number) => void;
}
const SkillButton = ({
  menuBar,
  selectedButtonIndex,
  handleButtonClick,
}: SkillButtonProps) => {
  return (
    <styles.Container className={menuBar}>
      <styles.Box className={menuBar}>
        {Array.from(Array(3).keys()).map(index => (
          <Fragment key={index}>
            {selectedButtonIndex === index ? (
              <styles.SelectedButton>
                <styles.Button
                  onClick={() => handleButtonClick(index)}
                  className={selectedButtonIndex === index ? "selected" : ""}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <styles.ButtonBox
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                    className={menuBar}
                  >
                    {index === 0 ? "FE" : index === 1 ? "BE" : "TOOL"}
                  </styles.ButtonBox>
                </styles.Button>
              </styles.SelectedButton>
            ) : (
              <styles.Button
                onClick={() => handleButtonClick(index)}
                className={selectedButtonIndex === index ? "selected" : ""}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <styles.ButtonBox className={menuBar}>
                  {index === 0 ? "FE" : index === 1 ? "BE" : "TOOL"}
                </styles.ButtonBox>
              </styles.Button>
            )}
          </Fragment>
        ))}
      </styles.Box>
    </styles.Container>
  );
};

export default SkillButton;
