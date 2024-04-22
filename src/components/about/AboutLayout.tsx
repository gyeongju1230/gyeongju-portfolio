import * as styles from "./AboutLayout.styles";
import Typewriter from "typewriter-effect";
import AboutScrollDown from "../common/scroll/scroll-down/ScrollDown";
import { ReactComponent as Name } from "../../assets/icon/about/NameIcon.svg";
import { ReactComponent as BirthDate } from "../../assets/icon/about/BirthDateIcon.svg";
import { ReactComponent as Email } from "../../assets/icon/about/EmailIcon.svg";
import { ReactComponent as GitHub } from "../../assets/icon/about/GitHubIcon.svg";
import { ReactComponent as Notion } from "../../assets/icon/about/NotionIcon.svg";
import { useContext } from "react";
import { MenuContext } from "../../context/MenuContext";

const AboutLayout = () => {
  const { isMenuOpen } = useContext(MenuContext);
  const menuBar = isMenuOpen ? "" : "none-menu";

  const scrollToSkill = () => {
    window.scrollTo({
      top: document.getElementById("skill")?.offsetTop || 0,
      behavior: "smooth",
    });
  };

  return (
    <styles.Container id="about" className={menuBar}>
      <styles.AboutTitle className={menuBar}>
        {/*<Typewriter*/}
        {/*  options={{*/}
        {/*    strings: [*/}
        {/*      "안녕하세요 :)<br/>" +*/}
        {/*        "“사용자 중심”의 개발을 추구하며<br/>" +*/}
        {/*        "호기심을 통해 혁신적인 솔루션을 찾는<br />" +*/}
        {/*        "프론트엔드 개발자 정경주입니다.",*/}
        {/*    ],*/}
        {/*    autoStart: true,*/}
        {/*    loop: true,*/}
        {/*    delay: 50,*/}
        {/*    deleteSpeed: 50,*/}
        {/*    wrapperClassName: "typewriter",*/}
        {/*  }}*/}
        {/*/>*/}

        <Typewriter
          options={{
            strings: [
              "안녕하세요 :)<br />" +
                "프론트엔드 개발자 정경주입니다.<br />" +
                "🚧 문구 수정중...",
            ],
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 50,
            wrapperClassName: "typewriter",
          }}
        />
      </styles.AboutTitle>
      <styles.AboutContainer className={menuBar}>
        <styles.ImageBox>
          📸 <br />
          프로필 추가 필요
        </styles.ImageBox>
        <styles.AboutBox className={menuBar}>
          <styles.AboutContent className={menuBar}>
            <styles.AboutContentIcon>
              <Name />
            </styles.AboutContentIcon>
            정경주
          </styles.AboutContent>
          <styles.AboutContent>
            <styles.AboutContentIcon>
              <BirthDate />
            </styles.AboutContentIcon>
            2000.12.30
          </styles.AboutContent>
          <styles.AboutContent>
            <styles.AboutContentIcon>
              <Email />
            </styles.AboutContentIcon>
            jkj01230@gmail.com
          </styles.AboutContent>
          <styles.AboutContent>
            <styles.AboutContentIcon>
              <GitHub />
            </styles.AboutContentIcon>
            https://github.com/gyeongju1230
          </styles.AboutContent>
          <styles.AboutContent>
            <styles.AboutContentIcon>
              <Notion />
            </styles.AboutContentIcon>
            https://bit.ly/4cUYb0S
          </styles.AboutContent>
        </styles.AboutBox>
      </styles.AboutContainer>
      <AboutScrollDown onClick={scrollToSkill} />
    </styles.Container>
  );
};

export default AboutLayout;
