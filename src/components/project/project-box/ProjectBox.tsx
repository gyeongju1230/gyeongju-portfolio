import * as styles from "./ProjectBox.styles";
import { useContext } from "react";
import { MenuContext } from "../../../context/MenuContext";
import ProjectImage from "../../project/project-box/project-image/ProjectImage";
import { ReactComponent as ReliableKku } from "../../../assets/image/project/ReliableKku_Loge.svg";
import { ReactComponent as Sagopasam } from "../../../assets/image/project/Sagopasam_Logo.svg";
import { ReactComponent as Portfolio } from "../../../assets/image/project/Portfolio_Logo.svg";
import { ReactComponent as Todo } from "../../../assets/image/project/Todo_Logo.svg";
import ProjectContent from "./project-content/ProjectContent";

const ProjectBox = () => {
  const { isMenuOpen } = useContext(MenuContext);
  const menuBar = isMenuOpen ? "" : "none-menu";

  return (
    <styles.ProjectBox className={menuBar}>
      <styles.Project className={menuBar}>
        <ProjectImage image={<ReliableKku className="icon" />} />
        <ProjectContent id="reliable" />
      </styles.Project>

      <styles.Project className={menuBar}>
        <ProjectImage image={<Sagopasam className="icon" />} />
        <ProjectContent id="sagopasam" />
      </styles.Project>

      <styles.Project className={menuBar}>
        <ProjectImage image={<Portfolio className="icon" />} />
        <ProjectContent id="portfolio" />
      </styles.Project>

      <styles.Project className={menuBar}>
        <ProjectImage image={<Todo className="icon" />} />
        <ProjectContent id="todo" />
      </styles.Project>
    </styles.ProjectBox>
  );
};

export default ProjectBox;
