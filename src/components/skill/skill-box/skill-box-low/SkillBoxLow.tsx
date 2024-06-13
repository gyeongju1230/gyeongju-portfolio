import * as styles from '../SkillBox.styles';
import { ReactComponent as MySql } from '@assets/icons/skill/MySql.svg';
import { ReactComponent as Java } from '@assets/icons/skill/Java.svg';
import { ReactComponent as Spring } from '@assets/icons/skill/Spring.svg';
import { ReactComponent as JSP } from '@assets/icons/skill/Jsp.svg';
import { ReactComponent as JQuery } from '@assets/icons/skill/JQuery.svg';

const SkillBoxLow = () => {
  return (
    <styles.Container>
      <styles.IconContainer>
        <styles.IconBox>
          <styles.Icon>
            <MySql className="icon" />
          </styles.Icon>
          <styles.Name>MySql</styles.Name>
        </styles.IconBox>

        <styles.IconBox>
          <styles.Icon>
            <Java className="icon" />
          </styles.Icon>
          <styles.Name>Java</styles.Name>
        </styles.IconBox>

        <styles.IconBox>
          <styles.Icon>
            <Spring className="icon" />
          </styles.Icon>
          <styles.Name>Spring</styles.Name>
        </styles.IconBox>

        <styles.IconBox>
          <styles.Icon>
            <JSP className="icon" />
          </styles.Icon>
          <styles.Name>JSP</styles.Name>
        </styles.IconBox>

        <styles.IconBox>
          <styles.Icon>
            <JQuery className="icon" />
          </styles.Icon>
          <styles.Name>jQuery</styles.Name>
        </styles.IconBox>
      </styles.IconContainer>
    </styles.Container>
  );
};

export default SkillBoxLow;
