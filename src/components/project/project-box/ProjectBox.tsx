import * as styles from "./ProjectBox.styles";
import { useContext } from "react";
import { MenuContext } from "../../../context/MenuContext";
import ProjectImage from "../../project/project-box/project-image/ProjectImage";
import { ReactComponent as Deunbung } from "../../../assets/image/project/deunbung/Deunbung_Loge.svg";
import { ReactComponent as Sagopasam } from "../../../assets/image/project/sagopasam/Sagopasam_Logo.svg";
import { ReactComponent as Portfolio } from "../../../assets/image/project/Portfolio_Logo.svg";
import { ReactComponent as Todo } from "../../../assets/image/project/Todo_Logo.svg";
import ProjectContent from "./project-content/ProjectContent";

interface ProjectBoxProps {
  handelModalOpen: (id: string) => void;
}

const ProjectBox = ({ handelModalOpen }: ProjectBoxProps) => {
  const { isMenuOpen } = useContext(MenuContext);
  const menuBar = isMenuOpen ? "" : "none-menu";

  return (
    <styles.ProjectBox className={menuBar}>
      <styles.Project
        className={menuBar}
        onClick={() => handelModalOpen("portfolio")}
      >
        <ProjectImage image={<Portfolio className="icon" />} />
        <ProjectContent id="portfolio" />
      </styles.Project>

      <styles.Project
        className={menuBar}
        onClick={() => handelModalOpen("todo")}
      >
        <ProjectImage image={<Todo className="icon" />} />
        <ProjectContent id="todo" />
      </styles.Project>

      <styles.Project
        className={menuBar}
        onClick={() => handelModalOpen("sagopasam")}
      >
        <ProjectImage image={<Sagopasam className="icon" />} />
        <ProjectContent id="sagopasam" />
      </styles.Project>

      <styles.Project
        className={menuBar}
        onClick={() => handelModalOpen("deunbung")}
      >
        <ProjectImage image={<Deunbung className="icon" />} />
        <ProjectContent id="deunbung" />
      </styles.Project>
    </styles.ProjectBox>
  );
};

export default ProjectBox;
