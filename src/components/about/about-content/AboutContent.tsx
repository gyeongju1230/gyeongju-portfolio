import * as styles from "./AboutContent.styles";
import Typewriter from "typewriter-effect";
import { useContext } from "react";
import { MenuContext } from "../../../context/MenuContext";
import { ReactComponent as Github } from "../../../assets/icon/skill/GitHub.svg";
import { ReactComponent as Notion } from "../../../assets/icon/skill/Notion.svg";

const AboutContent = () => {
  const { isMenuOpen } = useContext(MenuContext);
  const menuBar = isMenuOpen ? "" : "none-menu";

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
        ✔️ 배움을 즐기고 새로운 지식을 얻는 것을 좋아하는 열정파입니다.
        <br />
        ✔️ 스스로의 성장을 위한 의지와 집념이 강합니다.
        <br />
        ✔️ 스스로의 성장을 위한 의지와 집념이 강합니다.
        <br />
      </styles.AboutContent>
      <styles.AboutSkillBox>
        <styles.AboutSkills>👩🏻‍💻 Frontend-Devloper</styles.AboutSkills>
        <styles.AboutSkills>React Native</styles.AboutSkills>
        <styles.AboutSkills>React.js</styles.AboutSkills>
      </styles.AboutSkillBox>
      <styles.AboutLinkBox>
        <styles.AboutLink>
          <Github className="icon" />
          https://github.com/gyeongju1230
        </styles.AboutLink>
        <styles.AboutLink>
          <Notion className="icon" />
          https://bit.ly/4cUYb0S
        </styles.AboutLink>
      </styles.AboutLinkBox>
    </styles.AboutBox>
  );
};

export default AboutContent;
