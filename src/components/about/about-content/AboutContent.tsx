import * as styles from './AboutContent.styles';
import { ReactComponent as Github } from '@assets/icons/about/GitHubIcon.svg';
import { ReactComponent as Notion } from '@assets/icons/about/NotionIcon.svg';
import { ReactComponent as Move } from '@assets/icons/about/MoveIcon.svg';
import React, { SetStateAction } from 'react';
import ProjectModal from '@components/project/project-modal/ProjectModal';

interface AboutContentProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>;
  id: string;
  handleModalOpen: (id: string) => void;
}

const AboutContent = ({
  isModalOpen,
  setIsModalOpen,
  id,
  handleModalOpen,
}: AboutContentProps) => {
  const githubUrl = 'https://github.com/gyeongju1230';
  const notionUrl =
    'https://www.notion.so/gyeongju/Gyeongju-46837ac388704c5f8c18da20054a9943?pvs=4';

  return (
    <>
      <styles.AboutBox>
        <styles.AboutTitle>
          안녕하세요 :) <br />
          사용자 중심의 서비스를 만드는 프론트엔드 개발자 정경주입니다.
        </styles.AboutTitle>
        <styles.AboutContent>
          <styles.Content>
            대학 시절, 교내 카페를 이용하면서 긴 대기 시간과 협소한 대기
            공간으로 인한 <br />
            불편함을 해소하고자 '든붕이'라는 붕어빵 미리 주문 어플을
            개발하였습니다. <br />
            또한, 대학생들의 전공 서적 비용 부담 문제를 해결하기 위해 <br />
            챗봇을 활용한 전공서적 중고거래 플랫폼 '사고파삼'을 개발하였습니다.
            <br />
            <br />
            이러한 프로젝트를 통해 주도적으로 문제를 발견하고 분석하여 <br />
            사용자의 Needs를 정확히 파악하고, 그에 기반한 효과적인 해결책을
            제안하는 능력을 길렀습니다.
          </styles.Content>
        </styles.AboutContent>

        <styles.AboutLinkBox>
          <styles.AboutLink
            onClick={() => {
              window.open(githubUrl);
            }}
          >
            <Github className="icon" />
            Github
          </styles.AboutLink>
          <styles.AboutLink
            onClick={() => {
              window.open(notionUrl);
            }}
          >
            <Notion className="icon" />
            Notion
          </styles.AboutLink>
          <styles.AboutLink onClick={() => handleModalOpen('deunbung')}>
            <Move className="icon" />
            든붕이 프로젝트
          </styles.AboutLink>
          <styles.AboutLink onClick={() => handleModalOpen('sagopasam')}>
            <Move className="icon" />
            사고파삼 프로젝트
          </styles.AboutLink>
        </styles.AboutLinkBox>
      </styles.AboutBox>
      {isModalOpen && <ProjectModal id={id} setIsModalOpen={setIsModalOpen} />}
    </>
  );
};

export default AboutContent;
