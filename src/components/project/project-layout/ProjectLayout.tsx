import * as styles from "./ProjectLayout.styles";
import ProjectScrollDown from "../../common/scroll/scroll-down/ScrollDown";
import ProjectBox from "../project-box/ProjectBox";

const ProjectLayout = () => {
  const scrollToContact = () => {
    window.scrollTo({
      top: document.getElementById("contact")?.offsetTop || 0,
      behavior: "smooth",
    });
  };

  return (
    <styles.Container id="project">
      <ProjectBox />
      <ProjectScrollDown onClick={scrollToContact} />
    </styles.Container>
  );
};

export default ProjectLayout;
