import * as styles from './SkillBoxBackend.styles';
import { ReactComponent as PHP } from '@assets/icons/skill/Php.svg';
import { ReactComponent as Spring } from '@assets/icons/skill/Spring.svg';
import { ReactComponent as Java } from '@assets/icons/skill/Java.svg';
import { ReactComponent as JSP } from '@assets/icons/skill/Jsp.svg';
import { ReactComponent as MySql } from '@assets/icons/skill/MySql.svg';

const SkillBoxBackend = () => {
  return (
    <styles.Container>
      <styles.IconBox>
        <styles.Icon>
          <PHP className="icon" />
        </styles.Icon>
        <styles.Name>PHP</styles.Name>
      </styles.IconBox>

      <styles.IconBox>
        <styles.Icon>
          <Spring className="icon" />
        </styles.Icon>
        <styles.Name>Spring</styles.Name>
      </styles.IconBox>

      <styles.IconBox>
        <styles.Icon>
          <Java className="icon" />
        </styles.Icon>
        <styles.Name>Java</styles.Name>
      </styles.IconBox>

      <styles.IconBox>
        <styles.Icon>
          <JSP className="icon" />
        </styles.Icon>
        <styles.Name>JSP</styles.Name>
      </styles.IconBox>

      <styles.IconBox>
        <styles.Icon>
          <MySql className="icon" />
        </styles.Icon>
        <styles.Name>MySql</styles.Name>
      </styles.IconBox>
    </styles.Container>
  );
};

export default SkillBoxBackend;
