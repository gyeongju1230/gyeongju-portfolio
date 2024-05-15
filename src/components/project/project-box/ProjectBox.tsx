import * as styles from "./ProjectBox.styles";
import ProjectImage from "../../project/project-box/project-image/ProjectImage";
import { ReactComponent as Deunbung } from "../../../assets/image/project/deunbung/Deunbung_Loge.svg";
import { ReactComponent as Sagopasam } from "../../../assets/image/project/sagopasam/Sagopasam_Logo.svg";
import { ReactComponent as Portfolio } from "../../../assets/image/project/portfolio/Portfolio_Logo.svg";
import { ReactComponent as Todo } from "../../../assets/image/project/todo/Todo_Logo.svg";
import ProjectContent from "./project-content/ProjectContent";

interface ProjectBoxProps {
  menuBar: string;
  handelModalOpen: (id: string) => void;
}

const ProjectBox = ({ menuBar, handelModalOpen }: ProjectBoxProps) => {
  return (
    <styles.ProjectBox className={menuBar}>
      <styles.Project
        className={menuBar}
        onClick={() => handelModalOpen("portfolio")}
      >
        <ProjectImage
          image={<Portfolio className="icon" />}
          menuBar={menuBar}
        />
        <ProjectContent id="portfolio" menuBar={menuBar} />
      </styles.Project>

      <styles.Project
        className={menuBar}
        onClick={() => handelModalOpen("todo")}
      >
        <ProjectImage image={<Todo className="icon" />} menuBar={menuBar} />
        <ProjectContent id="todo" menuBar={menuBar} />
      </styles.Project>

      <styles.Project
        className={menuBar}
        onClick={() => handelModalOpen("sagopasam")}
      >
        <ProjectImage
          image={<Sagopasam className="icon" />}
          menuBar={menuBar}
        />
        <ProjectContent id="sagopasam" menuBar={menuBar} />
      </styles.Project>

      <styles.Project
        className={menuBar}
        onClick={() => handelModalOpen("deunbung")}
      >
        <ProjectImage image={<Deunbung className="icon" />} menuBar={menuBar} />
        <ProjectContent id="deunbung" menuBar={menuBar} />
      </styles.Project>
    </styles.ProjectBox>
  );
};

export default ProjectBox;
