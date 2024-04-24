import * as styles from "./ProjectBox.styles";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import { MenuContext } from "../../../context/MenuContext";
import ProjectImage from "../../project/project-box/project-image/ProjectImage";
import { ReactComponent as ReliableKku } from "../../../assets/image/project/ReliableKku_Loge.svg";
import { ReactComponent as Sagopasam } from "../../../assets/image/project/Sagopasam_Logo.svg";
import { ReactComponent as Portfolio } from "../../../assets/image/project/Portfolio_Logo.svg";
import { ReactComponent as Todo } from "../../../assets/image/project/Todo_Logo.svg";
import ProjectContent from "./project-content/ProjectContent";

interface ProjectBoxProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const ProjectBox = ({ isModalOpen, setIsModalOpen }: ProjectBoxProps) => {
  const { isMenuOpen } = useContext(MenuContext);
  const menuBar = isMenuOpen ? "" : "none-menu";

  const handelModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <styles.ProjectBox className={menuBar}>
      <styles.Project className={menuBar} onClick={handelModalOpen}>
        <ProjectImage image={<ReliableKku className="icon" />} />
        <ProjectContent id="reliable" />
      </styles.Project>

      <styles.Project className={menuBar} onClick={handelModalOpen}>
        <ProjectImage image={<Sagopasam className="icon" />} />
        <ProjectContent id="sagopasam" />
      </styles.Project>

      <styles.Project className={menuBar} onClick={handelModalOpen}>
        <ProjectImage image={<Portfolio className="icon" />} />
        <ProjectContent id="portfolio" />
      </styles.Project>

      <styles.Project className={menuBar} onClick={handelModalOpen}>
        <ProjectImage image={<Todo className="icon" />} />
        <ProjectContent id="todo" />
      </styles.Project>
    </styles.ProjectBox>
  );
};

export default ProjectBox;
