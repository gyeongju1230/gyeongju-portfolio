import * as styles from "./ProjectModal.styles";
import ProjectTag from "../../common/tag/project-tag/ProjectTag";
import projectModalData from "../../../data/ProjectModalData";

interface ProjectModalProps {
  id: string;
}

const ProjectModal = ({ id }: ProjectModalProps) => {
  const { tag, title, contentTitle, content } = projectModalData[id] || {
    tag: "",
    title: "",
    contentTitle: "",
    content: "",
  };

  return (
    <styles.ModalWrapper>
      <styles.ModalContainer>
        <styles.ModalBox>
          <ProjectTag text={tag} />
          {title}
        </styles.ModalBox>
      </styles.ModalContainer>
    </styles.ModalWrapper>
  );
};

export default ProjectModal;
