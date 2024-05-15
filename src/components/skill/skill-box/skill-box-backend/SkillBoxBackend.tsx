import * as styles from "./SkillBoxBackend.styles";
import { ReactComponent as PHP } from "../../../../assets/icon/skill/Php.svg";
import { ReactComponent as Spring } from "../../../../assets/icon/skill/Spring.svg";
import { ReactComponent as Java } from "../../../../assets/icon/skill/Java.svg";
import { ReactComponent as JSP } from "../../../../assets/icon/skill/Jsp.svg";
import { ReactComponent as MySql } from "../../../../assets/icon/skill/MySql.svg";

interface SkillBoxBackendProps {
  menuBar: string;
}

const SkillBoxBackend = ({ menuBar }: SkillBoxBackendProps) => {
  return (
    <styles.Container className={menuBar}>
      <styles.IconBox className={`icon-php ${menuBar}`}>
        <styles.Icon className={menuBar}>
          <PHP className="icon" />
        </styles.Icon>
        <styles.Name>PHP</styles.Name>
      </styles.IconBox>

      <styles.IconBox className={`icon-spring ${menuBar}`}>
        <styles.Icon className={menuBar}>
          <Spring className="icon" />
        </styles.Icon>
        <styles.Name>Spring</styles.Name>
      </styles.IconBox>

      <styles.IconBox className={`icon-java ${menuBar}`}>
        <styles.Icon className={menuBar}>
          <Java className="icon" />
        </styles.Icon>
        <styles.Name>Java</styles.Name>
      </styles.IconBox>

      <styles.IconBox className={`icon-jsp ${menuBar}`}>
        <styles.Icon className={menuBar}>
          <JSP className="icon" />
        </styles.Icon>
        <styles.Name>JSP</styles.Name>
      </styles.IconBox>

      <styles.IconBox className={`icon-mysql ${menuBar}`}>
        <styles.Icon className={menuBar}>
          <MySql className="icon" />
        </styles.Icon>
        <styles.Name>MySql</styles.Name>
      </styles.IconBox>
    </styles.Container>
  );
};

export default SkillBoxBackend;
