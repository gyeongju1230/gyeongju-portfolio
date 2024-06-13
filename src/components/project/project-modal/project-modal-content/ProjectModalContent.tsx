import * as styles from './ProjectModalContent.styles';
import ProjectTag from '@components/common/tag/project-tag/ProjectTag';
import ProjectSwiper from '@components/project/project-modal/project-swiper/ProjectSwiper';
import SkillTag from '@components/common/tag/skill-tag/SkillTag';
import React, { memo } from 'react';
import projectModalData from '@data/ProjectModalData';
import RoleTag from '@components/common/tag/role-tag/RoleTag';
import TeamIntroductionContent from '@components/project/project-modal/project-modal-content/team-introduction-content/TeamIntroductionContent';
import FeaturesContent from '@components/project/project-modal/project-modal-content/features-content/FeaturesContent';

interface ProjectModalContentProps {
  id: string;
}

const ProjectModalContent = memo(({ id }: ProjectModalContentProps) => {
  const projectData = projectModalData[id];

  const {
    tag,
    title,
    introduction,
    introductionContent,
    skills,
    period,
    periodContent,
    teamIntroduction,
    teamIntroductionContent,
    role,
    features,
    featuresContent,
    realizations,
    realizationsContent,
    url,
    urlLink,
  } = projectData;

  return (
    <styles.ModalBox>
      <ProjectTag text={tag} />
      <styles.Title>{title}</styles.Title>
      <ProjectSwiper id={id} />

      <styles.ContentTitle>{url}</styles.ContentTitle>
      {id === 'deunbung' && (
        <styles.Text>
          ⚠️ 현재 든붕이는 카페 이전 문제로 인해 서버가 중단되었습니다.
        </styles.Text>
      )}
      <styles.Content>
        {urlLink.map(({ link, label }, index: number) => (
          <styles.Button
            key={index}
            onClick={() => {
              if (link) {
                window.open(link);
              }
            }}
          >
            {label}
          </styles.Button>
        ))}
      </styles.Content>

      <styles.ContentTitle>{introduction}</styles.ContentTitle>
      {introductionContent.map(({ title, content }, index: number) => (
        <div key={index}>
          <styles.Content className="bold">{title}</styles.Content>
          <styles.Content className="no-margin-top">{content}</styles.Content>
        </div>
      ))}

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

      <styles.ContentTitle>{realizations}</styles.ContentTitle>
      {realizationsContent.map(({ title, content }, index: number) => (
        <div key={index}>
          <styles.Content className="bold">{title}</styles.Content>
          <styles.Content className="no-margin-top">{content}</styles.Content>
        </div>
      ))}
    </styles.ModalBox>
  );
});

export default ProjectModalContent;
