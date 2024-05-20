import * as styles from './ProjectContent.styles';
import ProjectTag from '@components/common/tag/project-tag/ProjectTag';
import projectData from '@data/ProjectData';
import SkillTag from '@components/common/tag/skill-tag/SkillTag';

interface ProjectContentProps {
  id: string;
  menuBar: string;
}

const ProjectContent = ({ id, menuBar }: ProjectContentProps) => {
  const { tag, title, content } = projectData[id] || {
    tag: '',
    title: '',
    content: '',
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
