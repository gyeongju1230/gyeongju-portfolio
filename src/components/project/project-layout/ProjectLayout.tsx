import * as styles from "./ProjectLayout.styles";
import ProjectScrollDown from "../../common/scroll/scroll-down/ScrollDown";
import ProjectBox from "../project-box/ProjectBox";
import { useState } from "react";
import ProjectModal from "../project-modal/ProjectModal";

const ProjectLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalId, setModalId] = useState("");

  const scrollToContact = () => {
    window.scrollTo({
      top: document.getElementById("contact")?.offsetTop || 0,
      behavior: "smooth",
    });
  };

  const handelModalOpen = (id: string) => {
    setIsModalOpen(!isModalOpen);
    setModalId(id);
  };

  return (
    <styles.Container id="project">
      <ProjectBox handelModalOpen={handelModalOpen} />
      <ProjectScrollDown onClick={scrollToContact} />

      {isModalOpen && <ProjectModal id={modalId} />}
    </styles.Container>
  );
};

export default ProjectLayout;
