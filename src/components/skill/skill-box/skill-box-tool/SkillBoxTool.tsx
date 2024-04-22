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
  const menuBar = isMenuOpen ? "" : "none-menu";

  return (
    <styles.Container className={menuBar}>
      <styles.IconBox className={`icon-aws-amplify ${menuBar}`}>
        <styles.Icon className={menuBar}>
          <AWSAmplify className="icon" />
        </styles.Icon>
        <styles.Name>AWS Amplify</styles.Name>
      </styles.IconBox>

      <styles.IconBox className={`icon-git ${menuBar}`}>
        <styles.Icon className={menuBar}>
          <Git className="icon" />
        </styles.Icon>
        <styles.Name>Git</styles.Name>
      </styles.IconBox>

      <styles.IconBox className={`icon-github ${menuBar}`}>
        <styles.Icon className={menuBar}>
          <GitHub className="icon" />
        </styles.Icon>
        <styles.Name>GitHub</styles.Name>
      </styles.IconBox>

      <styles.IconBox className={`icon-postMan ${menuBar}`}>
        <styles.Icon className={menuBar}>
          <PostMan className="icon" />
        </styles.Icon>
        <styles.Name>PostMan</styles.Name>
      </styles.IconBox>

      <styles.IconBox className={`icon-figma ${menuBar}`}>
        <styles.Icon className={menuBar}>
          <Figma className="icon" />
        </styles.Icon>
        <styles.Name>Figma</styles.Name>
      </styles.IconBox>

      <styles.IconBox className={`icon-photoshop ${menuBar}`}>
        <styles.Icon className={menuBar}>
          <Photoshop className="icon" />
        </styles.Icon>
        <styles.Name>Photoshop</styles.Name>
      </styles.IconBox>

      <styles.IconBox className={`icon-jira ${menuBar}`}>
        <styles.Icon className={menuBar}>
          <Jira className="icon" />
        </styles.Icon>
        <styles.Name>Jira</styles.Name>
      </styles.IconBox>

      <styles.IconBox className={`icon-jandi ${menuBar}`}>
        <styles.Icon className={menuBar}>
          <Jandi className="icon" />
        </styles.Icon>
        <styles.Name>JANDI</styles.Name>
      </styles.IconBox>

      <styles.IconBox className={`icon-confluence ${menuBar}`}>
        <styles.Icon className={menuBar}>
          <Confluence className="icon" />
        </styles.Icon>
        <styles.Name>Confluence</styles.Name>
      </styles.IconBox>

      <styles.IconBox className={`icon-slack ${menuBar}`}>
        <styles.Icon className={menuBar}>
          <Slack className="icon" />
        </styles.Icon>
        <styles.Name>Slack</styles.Name>
      </styles.IconBox>

      <styles.IconBox className={`icon-notion ${menuBar}`}>
        <styles.Icon className={menuBar}>
          <Notion className="icon" />
        </styles.Icon>
        <styles.Name>Notion</styles.Name>
      </styles.IconBox>
    </styles.Container>
  );
};

export default SkillBoxTool;
