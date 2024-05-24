import * as styles from './ProjectContent.styles';
import ProjectTag from '@components/common/tag/project-tag/ProjectTag';
import projectData from '@data/ProjectData';
import SkillTag from '@components/common/tag/skill-tag/SkillTag';

interface ProjectContentProps {
  id: string;
  handelModalOpen: (id: string) => void;
  menuBar: string;
}

const ProjectContent = ({
  id,
  handelModalOpen,
  menuBar,
}: ProjectContentProps) => {
  const { tag, title, content, demo, github } = projectData[id] || {
    tag: '',
    title: '',
    content: '',
    demo: '',
    github: '',
  };

  return (
    <styles.ContentContainer>
      <ProjectTag text={tag} />
      <styles.Title
        onClick={() => handelModalOpen(id)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {title}
      </styles.Title>
      <styles.Content
        className="hide-description"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <styles.LinkBox className="hide-link">
        <styles.Link>
          <styles.LinkTitle>
            Demo <br />
          </styles.LinkTitle>
          {demo}
        </styles.Link>
        <styles.Link>
          <styles.LinkTitle>
            Github <br />
          </styles.LinkTitle>
          {github}
        </styles.Link>
      </styles.LinkBox>
      <SkillTag id={id} />
    </styles.ContentContainer>
  );
};

export default ProjectContent;
