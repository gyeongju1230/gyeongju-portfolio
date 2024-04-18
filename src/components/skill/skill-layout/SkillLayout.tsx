import * as styles from "./SkillLayout.styles";
import { useContext, useState } from "react";
import { MenuContext } from "../../../context/MenuContext";
import SkillButton from "../skill-button/SkillButton";
import SkillBoxFrontend from "../skill-box/skill-box-frontend/SkillBoxFrontend";
import SkillBoxBackend from "../skill-box/skill-box-backend/SkillBoxBackend";
import SkillBoxTool from "../skill-box/skill-box-tool/SkillBoxTool";

const SkillLayout = () => {
  const { isMenuOpen } = useContext(MenuContext);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

  const handleButtonClick = (index: number) => {
    setSelectedButtonIndex(index);
  };

  return (
    <styles.Container id="skill" className={isMenuOpen ? "" : "none-menu"}>
      <styles.ContentBox>
        <SkillButton
          selectedButtonIndex={selectedButtonIndex}
          handleButtonClick={handleButtonClick}
        />
        {selectedButtonIndex === 0 && <SkillBoxFrontend />}
        {selectedButtonIndex === 1 && <SkillBoxBackend />}
        {selectedButtonIndex === 2 && <SkillBoxTool />}
      </styles.ContentBox>
    </styles.Container>
  );
};

export default SkillLayout;
