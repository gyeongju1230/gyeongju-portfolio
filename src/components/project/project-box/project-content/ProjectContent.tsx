import * as styles from "./ProjectContent.styles";
import ProjectTag from "../../../common/tag/project-tag/ProjectTag";
import projectContentData from "../../../../data/ProjectContentData";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import { MenuContext } from "../../../../context/MenuContext";
import SkillTag from "../../../common/tag/skill-tag/SkillTag";

interface ProjectContentProps {
  id: string;
}

const ProjectContent = ({ id }: ProjectContentProps) => {
  const { isMenuOpen } = useContext(MenuContext);
  const menuBar = isMenuOpen ? "" : "none-menu";

  const { tag, title, content } = projectContentData[id] || {
    tag: "",
    title: "",
    content: "",
  };

  return (
    <styles.ContentBox className={menuBar}>
      <ProjectTag text={tag} />
      <styles.Title
        className={menuBar}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {title}
      </styles.Title>
      <styles.Content className="hide-description">{content}</styles.Content>
      <SkillTag />
    </styles.ContentBox>
  );
};

export default ProjectContent;
