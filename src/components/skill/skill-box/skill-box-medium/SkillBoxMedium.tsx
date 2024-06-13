import * as styles from '../SkillBox.styles';
import { ReactComponent as Next } from '@assets/icons/skill/Next.svg';
import { ReactComponent as PHP } from '@assets/icons/skill/Php.svg';
import { ReactComponent as Markdown } from '@assets/icons/skill/Markdown.svg';

const SkillBoxMedium = () => {
  return (
    <styles.Container>
      <styles.IconContainer>
        <styles.IconBox>
          <styles.Icon>
            <Next className="icon" />
          </styles.Icon>
          <styles.Name>Next.js</styles.Name>
        </styles.IconBox>

        <styles.IconBox>
          <styles.Icon>
            <PHP className="icon" />
          </styles.Icon>
          <styles.Name>PHP</styles.Name>
        </styles.IconBox>

        <styles.IconBox>
          <styles.Icon>
            <Markdown className="icon" />
          </styles.Icon>
          <styles.Name>Markdown</styles.Name>
        </styles.IconBox>
      </styles.IconContainer>
    </styles.Container>
  );
};

export default SkillBoxMedium;
