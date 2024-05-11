import * as styles from "./AboutContent.styles";
import Typewriter from "typewriter-effect";
import { useContext } from "react";
import { MenuContext } from "../../../context/MenuContext";
import { ReactComponent as Github } from "../../../assets/icon/skill/GitHub.svg";
import { ReactComponent as Notion } from "../../../assets/icon/skill/Notion.svg";

const AboutContent = () => {
  const { isMenuOpen } = useContext(MenuContext);
  const menuBar = isMenuOpen ? "" : "none-menu";
  const githubUrl = "https://github.com/gyeongju1230";
  const notionUrl = "https://bit.ly/4cUYb0S";

  return (
    <styles.AboutBox className={menuBar}>
      <styles.AboutTitle>
        <Typewriter
          options={{
            strings: [
              "안녕하세요 :)<br />" + "프론트엔드 개발자 정경주입니다.",
            ],
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 50,
            wrapperClassName: "typewriter",
          }}
        />
      </styles.AboutTitle>
      <styles.AboutContent>
        ✔️ 끊임없는 성장을 추구하며, 배움을 즐깁니다.
        <br />
        ✔️ 새로운 도전에 열려 있는 성격으로 항상 더 나은 개발자로 거듭나기 위해
        노력합니다.
        <br />
        ✔️ 저는 강한 책임감을 가지고 프로젝트에 최선을 다하며, 팀원들과 협력하여
        목표 달성을 위해 노력합니다.
        <br />
      </styles.AboutContent>
      <styles.AboutSkillBox>
        <styles.AboutSkills>👩🏻‍💻 Frontend-Devloper</styles.AboutSkills>
        <styles.AboutSkills>React Native</styles.AboutSkills>
        <styles.AboutSkills>React.js</styles.AboutSkills>
      </styles.AboutSkillBox>
      <styles.AboutLinkBox>
        <styles.AboutLink
          onClick={() => {
            window.open(githubUrl);
          }}
        >
          <Github className="icon" />
          https://github.com/gyeongju1230
        </styles.AboutLink>
        <styles.AboutLink
          onClick={() => {
            window.open(notionUrl);
          }}
        >
          <Notion className="icon" />
          https://bit.ly/4cUYb0S
        </styles.AboutLink>
      </styles.AboutLinkBox>
    </styles.AboutBox>
  );
};

export default AboutContent;
