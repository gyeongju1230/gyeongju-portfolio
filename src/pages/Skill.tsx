import SkillLayout from "../components/skill/skill-layout/SkillLayout";
import { useContext } from "react";
import { MenuContext } from "../context/MenuContext";

const Skill = () => {
  const { isMenuOpen } = useContext(MenuContext);
  const menuBar = isMenuOpen ? "" : "none-menu";

  return <SkillLayout menuBar={menuBar} />;
};

export default Skill;
