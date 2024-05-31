import * as styles from './ProjectContent.styles';
import ProjectTag from '@components/common/tag/project-tag/ProjectTag';
import projectData from '../../../../data/ProjectData';
import SkillTag from '@components/common/tag/skill-tag/SkillTag';

interface ProjectContentProps {
  id: string;
  handleModalOpen: (id: string) => void;
  menuBar: string;
}

const ProjectContent = ({
  id,
  handleModalOpen,
  menuBar,
}: ProjectContentProps) => {
  const { tag, title, content, url, github } = projectData[id] || {
    tag: '',
    title: '',
    content: '',
    url: [],
    github: '',
  };

  return (
    <styles.ContentContainer>
      <ProjectTag text={tag} />
      <styles.Title
        onClick={() => handleModalOpen(id)}
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
        <styles.UrlBox>
          {url.map(({ title, link, label }, index: number) => (
            <styles.Link
              key={index}
              onClick={() => {
                window.open(link);
              }}
            >
              <styles.LinkTitle>
                {title} <br />
              </styles.LinkTitle>
              {label}
            </styles.Link>
          ))}
        </styles.UrlBox>
        <styles.Link
          onClick={() => {
            window.open(github);
          }}
        >
          <styles.LinkTitle>
            Github <br />
          </styles.LinkTitle>
          🔗 Github 로 이동하기
        </styles.Link>
      </styles.LinkBox>
      <styles.TagContainer className="hide-tag">
        <SkillTag id={id} />
      </styles.TagContainer>
    </styles.ContentContainer>
  );
};

export default ProjectContent;
