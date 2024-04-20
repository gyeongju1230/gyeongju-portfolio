import * as styles from "./SkillLayout.styles";
import { useContext, useState } from "react";
import { MenuContext } from "../../../context/MenuContext";
import SkillButton from "../skill-button/SkillButton";
import SkillBoxFrontend from "../skill-box/skill-box-frontend/SkillBoxFrontend";
import SkillBoxBackend from "../skill-box/skill-box-backend/SkillBoxBackend";
import SkillBoxTool from "../skill-box/skill-box-tool/SkillBoxTool";
import SkillScrollDown from "../../common/scroll/scroll-down/ScrollDown";

const SkillLayout = () => {
  const { isMenuOpen } = useContext(MenuContext);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

  const handleButtonClick = (index: number) => {
    setSelectedButtonIndex(index);
  };

  const scrollToProject = () => {
    window.scrollTo({
      top: document.getElementById("home")?.offsetTop || 0,
      behavior: "smooth",
    });
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
      <SkillScrollDown onClick={scrollToProject} />
    </styles.Container>
  );
};

export default SkillLayout;
