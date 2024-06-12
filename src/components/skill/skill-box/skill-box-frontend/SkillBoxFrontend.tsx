import * as styles from './SkillBoxFrontend.styles';
import { ReactComponent as React } from '@assets/icons/skill/React.svg';
import { ReactComponent as Next } from '@assets/icons/skill/Next.svg';
import { ReactComponent as JavaScript } from '@assets/icons/skill/JavaScript.svg';
import { ReactComponent as TypeScript } from '@assets/icons/skill/Typescript.svg';
import { ReactComponent as Axios } from '@assets/icons/skill/Axios.svg';
import { ReactComponent as Recoil } from '@assets/icons/skill/Recoil.svg';
import { ReactComponent as FramerMotion } from '@assets/icons/skill/FramerMotion.svg';
import { ReactComponent as StyledComponents } from '@assets/icons/skill/StyledComponents.svg';
import { ReactComponent as ESLint } from '@assets/icons/skill/ESLint.svg';
import { ReactComponent as Prettier } from '@assets/icons/skill/Prettier.svg';

const SkillBoxFrontend = () => {
  return (
    <styles.Container>
      <styles.IconBox>
        <styles.Icon>
          <React className="icon" />
        </styles.Icon>
        <styles.Name>React.js</styles.Name>
      </styles.IconBox>

      <styles.IconBox>
        <styles.Icon>
          <Next className="icon" />
        </styles.Icon>
        <styles.Name>Next.js</styles.Name>
      </styles.IconBox>

      <styles.IconBox>
        <styles.Icon>
          <React className="icon" />
        </styles.Icon>
        <styles.Name>React Native</styles.Name>
      </styles.IconBox>

      <styles.IconBox>
        <styles.Icon>
          <JavaScript className="icon" />
        </styles.Icon>
        <styles.Name>JavaScript</styles.Name>
      </styles.IconBox>

      <styles.IconBox>
        <styles.Icon>
          <Axios className="icon" />
        </styles.Icon>
        <styles.Name>Axios</styles.Name>
      </styles.IconBox>

      <styles.IconBox>
        <styles.Icon>
          <TypeScript className="icon" />
        </styles.Icon>
        <styles.Name>TypeScript</styles.Name>
      </styles.IconBox>

      <styles.IconBox>
        <styles.Icon>
          <Recoil className="icon" />
        </styles.Icon>
        <styles.Name>Recoil</styles.Name>
      </styles.IconBox>

      <styles.IconBox>
        <styles.Icon>
          <FramerMotion className="icon" />
        </styles.Icon>
        <styles.Name>Framer Motion</styles.Name>
      </styles.IconBox>

      <styles.IconBox>
        <styles.Icon>
          <StyledComponents className="icon" />
        </styles.Icon>
        <styles.Name>styled-components</styles.Name>
      </styles.IconBox>

      <styles.IconBox>
        <styles.Icon>
          <ESLint className="icon" />
        </styles.Icon>
        <styles.Name>ESLint</styles.Name>
      </styles.IconBox>

      <styles.IconBox>
        <styles.Icon>
          <Prettier className="icon" />
        </styles.Icon>
        <styles.Name>Prettier</styles.Name>
      </styles.IconBox>
    </styles.Container>
  );
};

export default SkillBoxFrontend;
