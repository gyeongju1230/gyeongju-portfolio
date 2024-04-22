import * as styles from "./ProjectBox.styles";
import { useContext } from "react";
import { MenuContext } from "../../../context/MenuContext";
import { ReactComponent as ReliableKku } from "../../../assets/image/project/ReliableKku_Loge.svg";
import { ReactComponent as Sagopasam } from "../../../assets/image/project/Sagopasam_Logo.svg";
import { ReactComponent as Portfolio } from "../../../assets/image/project/Portfolio_Logo.svg";
import { ReactComponent as Todo } from "../../../assets/image/project/Todo_Logo.svg";
import ProjectTag from "../../common/tag/project-tag/ProjectTag";

const ProjectBox = () => {
  const { isMenuOpen } = useContext(MenuContext);

  return (
    <styles.ProjectBox className={isMenuOpen ? "" : "none-menu"}>
      <styles.Project className={isMenuOpen ? "" : "none-menu"}>
        <styles.ImageBox>
          <styles.Image>
            <ReliableKku className="icon" />
          </styles.Image>
        </styles.ImageBox>
        <styles.ContentBox>
          <ProjectTag text="Team Project" />
        </styles.ContentBox>
      </styles.Project>

      <styles.Project className={isMenuOpen ? "" : "none-menu"}>
        <styles.ImageBox>
          <styles.Image>
            <Sagopasam className="icon" />
          </styles.Image>
        </styles.ImageBox>
        <styles.ContentBox>
          <ProjectTag text="Team Project" />
        </styles.ContentBox>
      </styles.Project>

      <styles.Project className={isMenuOpen ? "" : "none-menu"}>
        <styles.ImageBox>
          <styles.Image>
            <Portfolio className="icon" />
          </styles.Image>
        </styles.ImageBox>
        <styles.ContentBox>
          <ProjectTag text="Solo Project" />
        </styles.ContentBox>
      </styles.Project>

      <styles.Project className={isMenuOpen ? "" : "none-menu"}>
        <styles.ImageBox>
          <styles.Image>
            <Todo className="icon" />
          </styles.Image>
        </styles.ImageBox>
        <styles.ContentBox>
          <ProjectTag text="Solo Project" />
        </styles.ContentBox>
      </styles.Project>
    </styles.ProjectBox>
  );
};

export default ProjectBox;
