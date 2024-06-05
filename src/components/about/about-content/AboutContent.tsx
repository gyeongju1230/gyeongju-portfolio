import * as styles from './AboutContent.styles';
import Typewriter from 'typewriter-effect';
import { ReactComponent as Github } from '@assets/icons/about/GitHubIcon.svg';
import { ReactComponent as Notion } from '@assets/icons/about/NotionIcon.svg';

interface AboutContentProps {
  menuBar: string;
}

const AboutContent = ({ menuBar }: AboutContentProps) => {
  const githubUrl = 'https://github.com/gyeongju1230';
  const notionUrl =
    'https://www.notion.so/gyeongju/GyeongJu-Notion-46837ac388704c5f8c18da20054a9943?pvs=4';

  return (
    <styles.AboutBox className={menuBar}>
      <styles.AboutTitle>
        <Typewriter
          options={{
            strings: [
              '안녕하세요 :)<br />' +
                '사용자 중심의 서비스를 만드는 프론트엔드 개발자 정경주입니다.',
            ],
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 50,
            wrapperClassName: 'typewriter',
          }}
        />
      </styles.AboutTitle>
      <styles.AboutContent>
        <styles.Content>
          ⎷️ 사용자의 Needs 를 정확히 파악하고, 이를 기반으로 문제 해결하는 것을
          좋아합니다.
        </styles.Content>
        <styles.Content>
          ⎷ 강한 책임감을 가지고 맡은 일에 최선을 다하며, 팀원들과 협력하여 목표
          달성을 위해 노력합니다.
        </styles.Content>
        <styles.Content>
          ⎷ 끊임없는 성장을 추구하며, 배움을 즐깁니다.
        </styles.Content>
        <styles.Content>
          ⎷ 새로운 도전에 열려 있는 성격으로 항상 더 나은 개발자로 거듭나기 위해
          노력합니다.
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
      </styles.AboutLinkBox>
    </styles.AboutBox>
  );
};

export default AboutContent;
