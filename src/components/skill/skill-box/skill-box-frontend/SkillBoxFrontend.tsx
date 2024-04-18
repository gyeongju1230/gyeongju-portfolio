import { useContext } from "react";
import { MenuContext } from "../../../../context/MenuContext";
import * as styles from "./SkillBoxFrontend.styles";
import { ReactComponent as React } from "../../../../assets/icon/skill/React.svg";
import { ReactComponent as Next } from "../../../../assets/icon/skill/Next.svg";
import { ReactComponent as JavaScript } from "../../../../assets/icon/skill/JavaScript.svg";
import { ReactComponent as TypeScript } from "../../../../assets/icon/skill/Typescript.svg";
import { ReactComponent as Axios } from "../../../../assets/icon/skill/Axios.svg";
import { ReactComponent as Recoil } from "../../../../assets/icon/skill/Recoil.svg";
import { ReactComponent as FramerMotion } from "../../../../assets/icon/skill/FramerMotion.svg";
import { ReactComponent as StyledComponents } from "../../../../assets/icon/skill/StyledComponents.svg";
import { ReactComponent as ESLint } from "../../../../assets/icon/skill/ESLint.svg";
import { ReactComponent as Prettier } from "../../../../assets/icon/skill/Prettier.svg";

const SkillBoxFrontend = () => {
  const { isMenuOpen } = useContext(MenuContext);

  return (
    <styles.Container>
      <styles.IconBox className={`icon-react ${isMenuOpen ? "" : "none-menu"}`}>
        <styles.Icon className={isMenuOpen ? "" : "none-menu"}>
          <React className="icon" />
        </styles.Icon>
        <styles.Name>React.js</styles.Name>
      </styles.IconBox>

      <styles.IconBox className={`icon-next ${isMenuOpen ? "" : "none-menu"}`}>
        <styles.Icon className={isMenuOpen ? "" : "none-menu"}>
          <Next className="icon" />
        </styles.Icon>
        <styles.Name>Next.js</styles.Name>
      </styles.IconBox>

      <styles.IconBox
        className={`icon-react-native ${isMenuOpen ? "" : "none-menu"}`}
      >
        <styles.Icon className={isMenuOpen ? "" : "none-menu"}>
          <React className="icon" />
        </styles.Icon>
        <styles.Name>React Native</styles.Name>
      </styles.IconBox>

      <styles.IconBox
        className={`icon-javascript ${isMenuOpen ? "" : "none-menu"}`}
      >
        <styles.Icon className={isMenuOpen ? "" : "none-menu"}>
          <JavaScript className="icon" />
        </styles.Icon>
        <styles.Name>JavaScript</styles.Name>
      </styles.IconBox>

      <styles.IconBox className={`icon-axios ${isMenuOpen ? "" : "none-menu"}`}>
        <styles.Icon className={isMenuOpen ? "" : "none-menu"}>
          <Axios className="icon" />
        </styles.Icon>
        <styles.Name>Axios</styles.Name>
      </styles.IconBox>

      <styles.IconBox
        className={`icon-typescript ${isMenuOpen ? "" : "none-menu"}`}
      >
        <styles.Icon className={isMenuOpen ? "" : "none-menu"}>
          <TypeScript className="icon" />
        </styles.Icon>
        <styles.Name>TypeScript</styles.Name>
      </styles.IconBox>

      <styles.IconBox
        className={`icon-recoil ${isMenuOpen ? "" : "none-menu"}`}
      >
        <styles.Icon className={isMenuOpen ? "" : "none-menu"}>
          <Recoil className="icon" />
        </styles.Icon>
        <styles.Name>Recoil</styles.Name>
      </styles.IconBox>

      <styles.IconBox
        className={`icon-framer-motion ${isMenuOpen ? "" : "none-menu"}`}
      >
        <styles.Icon className={isMenuOpen ? "" : "none-menu"}>
          <FramerMotion className="icon" />
        </styles.Icon>
        <styles.Name>Framer Motion</styles.Name>
      </styles.IconBox>

      <styles.IconBox
        className={`icon-styled-components ${isMenuOpen ? "" : "none-menu"}`}
      >
        <styles.Icon className={isMenuOpen ? "" : "none-menu"}>
          <StyledComponents className="icon" />
        </styles.Icon>
        <styles.Name>styled-components</styles.Name>
      </styles.IconBox>

      <styles.IconBox
        className={`icon-eslint ${isMenuOpen ? "" : "none-menu"}`}
      >
        <styles.Icon className={isMenuOpen ? "" : "none-menu"}>
          <ESLint className="icon" />
        </styles.Icon>
        <styles.Name>ESLint</styles.Name>
      </styles.IconBox>

      <styles.IconBox
        className={`icon-prettier ${isMenuOpen ? "" : "none-menu"}`}
      >
        <styles.Icon className={isMenuOpen ? "" : "none-menu"}>
          <Prettier className="icon" />
        </styles.Icon>
        <styles.Name>Prettier</styles.Name>
      </styles.IconBox>
    </styles.Container>
  );
};

export default SkillBoxFrontend;
