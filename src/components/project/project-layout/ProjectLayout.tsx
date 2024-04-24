import * as styles from "./ProjectLayout.styles";
import ProjectScrollDown from "../../common/scroll/scroll-down/ScrollDown";
import ProjectBox from "../project-box/ProjectBox";
import { useState } from "react";
import ProjectModal from "../project-modal/ProjectModal";

const ProjectLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToContact = () => {
    window.scrollTo({
      top: document.getElementById("contact")?.offsetTop || 0,
      behavior: "smooth",
    });
  };

  return (
    <styles.Container id="project">
      <ProjectBox isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <ProjectScrollDown onClick={scrollToContact} />

      {isModalOpen && <ProjectModal />}
    </styles.Container>
  );
};

export default ProjectLayout;
