import * as styles from "./ProjectTag.styles";

interface ProjectTagProps {
  text: string;
}

const ProjectTag = ({ text }: ProjectTagProps) => {
  return <styles.TagContainer>{text}</styles.TagContainer>;
};

export default ProjectTag;
