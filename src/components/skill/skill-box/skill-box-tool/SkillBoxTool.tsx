import { useContext } from "react";
import { MenuContext } from "../../../../context/MenuContext";
import * as styles from "./SkillBoxTool.styles";
import { ReactComponent as AWSAmplify } from "../../../../assets/icon/skill/AwsAmplify.svg";
import { ReactComponent as Git } from "../../../../assets/icon/skill/Git.svg";
import { ReactComponent as GitHub } from "../../../../assets/icon/skill/GitHub.svg";
import { ReactComponent as PostMan } from "../../../../assets/icon/skill/PostMan.svg";
import { ReactComponent as Figma } from "../../../../assets/icon/skill/Figma.svg";
import { ReactComponent as Photoshop } from "../../../../assets/icon/skill/Photoshop.svg";
import { ReactComponent as Jira } from "../../../../assets/icon/skill/Jira.svg";
import { ReactComponent as Jandi } from "../../../../assets/icon/skill/Jandi.svg";
import { ReactComponent as Confluence } from "../../../../assets/icon/skill/Confluence.svg";
import { ReactComponent as Slack } from "../../../../assets/icon/skill/Slack.svg";
import { ReactComponent as Notion } from "../../../../assets/icon/skill/Notion.svg";

const SkillBoxTool = () => {
  const { isMenuOpen } = useContext(MenuContext);
  return (
    <styles.Container className={isMenuOpen ? "" : "none-menu"}>
      <styles.IconBox
        className={`icon-aws-amplify ${isMenuOpen ? "" : "none-menu"}`}
      >
        <styles.Icon className={isMenuOpen ? "" : "none-menu"}>
          <AWSAmplify className="icon" />
        </styles.Icon>
        <styles.Name>AWS Amplify</styles.Name>
      </styles.IconBox>

      <styles.IconBox className={`icon-git ${isMenuOpen ? "" : "none-menu"}`}>
        <styles.Icon className={isMenuOpen ? "" : "none-menu"}>
          <Git className="icon" />
        </styles.Icon>
        <styles.Name>Git</styles.Name>
      </styles.IconBox>

      <styles.IconBox
        className={`icon-github ${isMenuOpen ? "" : "none-menu"}`}
      >
        <styles.Icon className={isMenuOpen ? "" : "none-menu"}>
          <GitHub className="icon" />
        </styles.Icon>
        <styles.Name>GitHub</styles.Name>
      </styles.IconBox>

      <styles.IconBox
        className={`icon-postMan ${isMenuOpen ? "" : "none-menu"}`}
      >
        <styles.Icon className={isMenuOpen ? "" : "none-menu"}>
          <PostMan className="icon" />
        </styles.Icon>
        <styles.Name>PostMan</styles.Name>
      </styles.IconBox>

      <styles.IconBox className={`icon-figma ${isMenuOpen ? "" : "none-menu"}`}>
        <styles.Icon className={isMenuOpen ? "" : "none-menu"}>
          <Figma className="icon" />
        </styles.Icon>
        <styles.Name>Figma</styles.Name>
      </styles.IconBox>

      <styles.IconBox
        className={`icon-photoshop ${isMenuOpen ? "" : "none-menu"}`}
      >
        <styles.Icon className={isMenuOpen ? "" : "none-menu"}>
          <Photoshop className="icon" />
        </styles.Icon>
        <styles.Name>Photoshop</styles.Name>
      </styles.IconBox>

      <styles.IconBox className={`icon-jira ${isMenuOpen ? "" : "none-menu"}`}>
        <styles.Icon className={isMenuOpen ? "" : "none-menu"}>
          <Jira className="icon" />
        </styles.Icon>
        <styles.Name>Jira</styles.Name>
      </styles.IconBox>

      <styles.IconBox className={`icon-jandi ${isMenuOpen ? "" : "none-menu"}`}>
        <styles.Icon className={isMenuOpen ? "" : "none-menu"}>
          <Jandi className="icon" />
        </styles.Icon>
        <styles.Name>JANDI</styles.Name>
      </styles.IconBox>

      <styles.IconBox
        className={`icon-confluence ${isMenuOpen ? "" : "none-menu"}`}
      >
        <styles.Icon className={isMenuOpen ? "" : "none-menu"}>
          <Confluence className="icon" />
        </styles.Icon>
        <styles.Name>Confluence</styles.Name>
      </styles.IconBox>

      <styles.IconBox className={`icon-slack ${isMenuOpen ? "" : "none-menu"}`}>
        <styles.Icon className={isMenuOpen ? "" : "none-menu"}>
          <Slack className="icon" />
        </styles.Icon>
        <styles.Name>Slack</styles.Name>
      </styles.IconBox>

      <styles.IconBox
        className={`icon-notion ${isMenuOpen ? "" : "none-menu"}`}
      >
        <styles.Icon className={isMenuOpen ? "" : "none-menu"}>
          <Notion className="icon" />
        </styles.Icon>
        <styles.Name>Notion</styles.Name>
      </styles.IconBox>
    </styles.Container>
  );
};

export default SkillBoxTool;
