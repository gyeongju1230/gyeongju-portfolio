import { useContext } from "react";
import { MenuContext } from "../../../../context/MenuContext";
import * as styles from "./SkillBoxBackend.styles";
import { ReactComponent as PHP } from "../../../../assets/icon/skill/Php.svg";
import { ReactComponent as Spring } from "../../../../assets/icon/skill/Spring.svg";
import { ReactComponent as Java } from "../../../../assets/icon/skill/Java.svg";
import { ReactComponent as JSP } from "../../../../assets/icon/skill/Jsp.svg";
import { ReactComponent as MySql } from "../../../../assets/icon/skill/MySql.svg";

const SkillBoxBackend = () => {
  const { isMenuOpen } = useContext(MenuContext);

  return (
    <styles.Container className={isMenuOpen ? "" : "none-menu"}>
      <styles.IconBox className={`icon-php ${isMenuOpen ? "" : "none-menu"}`}>
        <styles.Icon className={isMenuOpen ? "" : "none-menu"}>
          <PHP className="icon" />
        </styles.Icon>
        <styles.Name>PHP</styles.Name>
      </styles.IconBox>

      <styles.IconBox
        className={`icon-spring ${isMenuOpen ? "" : "none-menu"}`}
      >
        <styles.Icon className={isMenuOpen ? "" : "none-menu"}>
          <Spring className="icon" />
        </styles.Icon>
        <styles.Name>Spring</styles.Name>
      </styles.IconBox>

      <styles.IconBox className={`icon-java ${isMenuOpen ? "" : "none-menu"}`}>
        <styles.Icon className={isMenuOpen ? "" : "none-menu"}>
          <Java className="icon" />
        </styles.Icon>
        <styles.Name>Java</styles.Name>
      </styles.IconBox>

      <styles.IconBox className={`icon-jsp ${isMenuOpen ? "" : "none-menu"}`}>
        <styles.Icon className={isMenuOpen ? "" : "none-menu"}>
          <JSP className="icon" />
        </styles.Icon>
        <styles.Name>JSP</styles.Name>
      </styles.IconBox>

      <styles.IconBox className={`icon-mysql ${isMenuOpen ? "" : "none-menu"}`}>
        <styles.Icon className={isMenuOpen ? "" : "none-menu"}>
          <MySql className="icon" />
        </styles.Icon>
        <styles.Name>MySql</styles.Name>
      </styles.IconBox>
    </styles.Container>
  );
};

export default SkillBoxBackend;
