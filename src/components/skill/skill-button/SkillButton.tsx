import * as styles from "./SkillButton.styles";
import { Fragment, useContext } from "react";
import { MenuContext } from "../../../context/MenuContext";

interface SkillButtonProps {
  selectedButtonIndex: number;
  handleButtonClick: (index: number) => void;
}
const SkillButton = ({
  selectedButtonIndex,
  handleButtonClick,
}: SkillButtonProps) => {
  const { isMenuOpen } = useContext(MenuContext);

  return (
    <styles.Container className={isMenuOpen ? "" : "none-menu"}>
      <styles.Box className={isMenuOpen ? "" : "none-menu"}>
        {Array.from(Array(3).keys()).map(index => (
          <Fragment key={index}>
            {selectedButtonIndex === index ? (
              <styles.SelectedButton>
                <styles.Button
                  onClick={() => handleButtonClick(index)}
                  className={selectedButtonIndex === index ? "selected" : ""}
                >
                  <styles.ButtonBox
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                    className={isMenuOpen ? "" : "none-menu"}
                  >
                    {index === 0 ? "FE" : index === 1 ? "BE" : "TOOL"}
                  </styles.ButtonBox>
                </styles.Button>
              </styles.SelectedButton>
            ) : (
              <styles.Button
                onClick={() => handleButtonClick(index)}
                className={selectedButtonIndex === index ? "selected" : ""}
              >
                <styles.ButtonBox className={isMenuOpen ? "" : "none-menu"}>
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
