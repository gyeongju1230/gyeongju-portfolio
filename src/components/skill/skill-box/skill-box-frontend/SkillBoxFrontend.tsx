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

interface SkillBoxFrontendProps {
  menuBar: string;
}

const SkillBoxFrontend = ({ menuBar }: SkillBoxFrontendProps) => {
  return (
    <styles.Container>
      <styles.IconBox className={`icon-react ${menuBar}`}>
        <styles.Icon className={menuBar}>
          <React className="icon" />
        </styles.Icon>
        <styles.Name>React.js</styles.Name>
      </styles.IconBox>

      <styles.IconBox className={`icon-next ${menuBar}`}>
        <styles.Icon className={menuBar}>
          <Next className="icon" />
        </styles.Icon>
        <styles.Name>Next.js</styles.Name>
      </styles.IconBox>

      <styles.IconBox className={`icon-react-native ${menuBar}`}>
        <styles.Icon className={menuBar}>
          <React className="icon" />
        </styles.Icon>
        <styles.Name>React Native</styles.Name>
      </styles.IconBox>

      <styles.IconBox className={`icon-javascript ${menuBar}`}>
        <styles.Icon className={menuBar}>
          <JavaScript className="icon" />
        </styles.Icon>
        <styles.Name>JavaScript</styles.Name>
      </styles.IconBox>

      <styles.IconBox className={`icon-axios ${menuBar}`}>
        <styles.Icon className={menuBar}>
          <Axios className="icon" />
        </styles.Icon>
        <styles.Name>Axios</styles.Name>
      </styles.IconBox>

      <styles.IconBox className={`icon-typescript ${menuBar}`}>
        <styles.Icon className={menuBar}>
          <TypeScript className="icon" />
        </styles.Icon>
        <styles.Name>TypeScript</styles.Name>
      </styles.IconBox>

      <styles.IconBox className={`icon-recoil ${menuBar}`}>
        <styles.Icon className={menuBar}>
          <Recoil className="icon" />
        </styles.Icon>
        <styles.Name>Recoil</styles.Name>
      </styles.IconBox>

      <styles.IconBox className={`icon-framer-motion ${menuBar}`}>
        <styles.Icon className={menuBar}>
          <FramerMotion className="icon" />
        </styles.Icon>
        <styles.Name>Framer Motion</styles.Name>
      </styles.IconBox>

      <styles.IconBox className={`icon-styled-components ${menuBar}`}>
        <styles.Icon className={menuBar}>
          <StyledComponents className="icon" />
        </styles.Icon>
        <styles.Name>styled-components</styles.Name>
      </styles.IconBox>

      <styles.IconBox className={`icon-eslint ${menuBar}`}>
        <styles.Icon className={menuBar}>
          <ESLint className="icon" />
        </styles.Icon>
        <styles.Name>ESLint</styles.Name>
      </styles.IconBox>

      <styles.IconBox className={`icon-prettier ${menuBar}`}>
        <styles.Icon className={menuBar}>
          <Prettier className="icon" />
        </styles.Icon>
        <styles.Name>Prettier</styles.Name>
      </styles.IconBox>
    </styles.Container>
  );
};

export default SkillBoxFrontend;
