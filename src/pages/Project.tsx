import ProjectLayout from "../components/project/project-layout/ProjectLayout";
import { useContext } from "react";
import { MenuContext } from "../context/MenuContext";

const Project = () => {
  const { isMenuOpen } = useContext(MenuContext);
  const menuBar = isMenuOpen ? "" : "none-menu";

  return <ProjectLayout menuBar={menuBar} />;
};

export default Project;
