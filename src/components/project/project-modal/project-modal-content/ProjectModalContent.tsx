import * as styles from './ProjectModalContent.styles';
import ProjectTag from '@components/common/tag/project-tag/ProjectTag';
import ProjectSwiper from '@components/project/project-swiper/ProjectSwiper';
import SkillTag from '@components/common/tag/skill-tag/SkillTag';
import React from 'react';
import projectModalData from '@data/ProjectModalData';
import RoleTag from '@components/common/tag/role-tag/RoleTag';
import TeamIntroductionContent from '@components/project/project-modal/project-modal-content/team-introduction-content/TeamIntroductionContent';
import FeaturesContent from '@components/project/project-modal/project-modal-content/features-content/FeaturesContent';

interface ProjectModalContentProps {
  id: string;
}

const ProjectModalContent = ({ id }: ProjectModalContentProps) => {
  const {
    tag,
    title,
    introduction,
    introductionContent,
    planningBackground,
    planningBackgroundContent,
    skills,
    period,
    periodContent,
    teamIntroduction,
    teamIntroductionContent,
    role,
    features,
    featuresContent,
    url,
    urlLink,
    github,
    githubLink,
    figma,
    figmaLink,
    notion,
    notionLink,
  } = projectModalData[id] || {
    tag: '',
    title: '',
    introduction: '',
    introductionContent: '',
    planningBackground: '',
    planningBackgroundContent: '',
    skills: '',
    period: '',
    periodContent: '',
    teamIntroduction: '',
    teamIntroductionContent: [],
    role: '',
    features: '',
    featuresContent: '',
    url: '',
    urlLink: [],
    github: '',
    githubLink: '',
    figma: '',
    figmaLink: '',
    notion: '',
    notionLink: '',
  };

  return (
    <styles.ModalBox>
      <ProjectTag text={tag} />
      <styles.Title>{title}</styles.Title>
      <ProjectSwiper id={id} />

      <styles.ContentTitle>{introduction}</styles.ContentTitle>
      <styles.Content>{introductionContent}</styles.Content>

      {planningBackground && planningBackgroundContent && (
        <>
          <styles.ContentTitle>{planningBackground}</styles.ContentTitle>
          <styles.Content>{planningBackgroundContent}</styles.Content>
        </>
      )}

      <styles.ContentTitle>{skills}</styles.ContentTitle>
      <styles.Content>
        <SkillTag id={id} />
      </styles.Content>

      <styles.ContentTitle>{period}</styles.ContentTitle>
      <styles.Content>{periodContent}</styles.Content>

      {teamIntroduction && teamIntroductionContent && (
        <>
          <styles.ContentTitle>{teamIntroduction}</styles.ContentTitle>
          <styles.Content>
            <TeamIntroductionContent
              teamIntroductionContent={teamIntroductionContent}
            />
          </styles.Content>
        </>
      )}

      <styles.ContentTitle>{role}</styles.ContentTitle>
      <styles.Content>
        <RoleTag id={id} />
      </styles.Content>

      <styles.ContentTitle>{features}</styles.ContentTitle>
      <styles.Content>
        <FeaturesContent featuresContent={featuresContent} />
      </styles.Content>

      <styles.ContentTitle>{url}</styles.ContentTitle>
      <styles.Content>
        {urlLink.map(({ link, label }, index: number) => (
          <styles.Button
            key={index}
            onClick={() => {
              window.open(link);
            }}
          >
            {label}
          </styles.Button>
        ))}
      </styles.Content>

      <styles.ContentTitle>{github}</styles.ContentTitle>
      <styles.Content>
        <styles.Button
          onClick={() => {
            window.open(githubLink);
          }}
        >
          🔗 Github 로 이동하기
        </styles.Button>
      </styles.Content>

      <styles.ContentTitle>{figma}</styles.ContentTitle>
      <styles.Content>
        <styles.Button
          onClick={() => {
            window.open(figmaLink);
          }}
        >
          🔗 Figma 로 이동하기
        </styles.Button>
      </styles.Content>

      <styles.ContentTitle>{notion}</styles.ContentTitle>
      <styles.Content>
        <styles.Button
          onClick={() => {
            window.open(notionLink);
          }}
        >
          🔗 Notion 으로 이동하기
        </styles.Button>
      </styles.Content>
    </styles.ModalBox>
  );
};

export default ProjectModalContent;
