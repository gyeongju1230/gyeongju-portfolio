import * as styles from "./ProjectContent.styles";
import ProjectTag from "../../../common/tag/project-tag/ProjectTag";
import projectData from "../../../../data/ProjectData";
import { useContext } from "react";
import { MenuContext } from "../../../../context/MenuContext";
import SkillTag from "../../../common/tag/skill-tag/SkillTag";

interface ProjectContentProps {
  id: string;
}

const ProjectContent = ({ id }: ProjectContentProps) => {
  const { isMenuOpen } = useContext(MenuContext);
  const menuBar = isMenuOpen ? "" : "none-menu";

  const { tag, title, content } = projectData[id] || {
    tag: "",
    title: "",
    content: "",
  };

  return (
    <styles.ContentContainer className={menuBar}>
      <ProjectTag text={tag} />
      <styles.Title
        className={menuBar}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {title}
      </styles.Title>
      <styles.Content
        className="hide-description"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <SkillTag id={id} />
    </styles.ContentContainer>
  );
};

export default ProjectContent;
