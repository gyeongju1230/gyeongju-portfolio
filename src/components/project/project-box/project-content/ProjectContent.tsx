import * as styles from "./ProjectContent.styles";
import ProjectTag from "../../../common/tag/project-tag/ProjectTag";
import projectContentData from "../../../../data/ProjectContentData";

interface ProjectContentProps {
  id: string;
}

const ProjectContent = ({ id }: ProjectContentProps) => {
  const { tag, title, description } = projectContentData[id] || {
    tag: "",
    title: "",
    description: "",
  };

  return (
    <styles.ContentBox>
      <ProjectTag text={tag} />
      <div>{title}</div>
      <div>{description}</div>
    </styles.ContentBox>
  );
};

export default ProjectContent;
