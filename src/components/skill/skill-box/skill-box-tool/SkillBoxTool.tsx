import * as styles from './SkillBoxTool.styles';
import { ReactComponent as AWSAmplify } from '@assets/icons/skill/AwsAmplify.svg';
import { ReactComponent as Git } from '@assets/icons/skill/Git.svg';
import { ReactComponent as GitHub } from '@assets/icons/skill/GitHub.svg';
import { ReactComponent as PostMan } from '@assets/icons/skill/PostMan.svg';
import { ReactComponent as Figma } from '@assets/icons/skill/Figma.svg';
import { ReactComponent as Photoshop } from '@assets/icons/skill/Photoshop.svg';
import { ReactComponent as Jira } from '@assets/icons/skill/Jira.svg';
import { ReactComponent as Jandi } from '@assets/icons/skill/Jandi.svg';
import { ReactComponent as Confluence } from '@assets/icons/skill/Confluence.svg';
import { ReactComponent as Slack } from '@assets/icons/skill/Slack.svg';
import { ReactComponent as Notion } from '@assets/icons/skill/Notion.svg';

const SkillBoxTool = () => {
  return (
    <styles.Container>
      <styles.IconBox>
        <styles.Icon>
          <AWSAmplify className="icon" />
        </styles.Icon>
        <styles.Name>AWS Amplify</styles.Name>
      </styles.IconBox>

      <styles.IconBox>
        <styles.Icon>
          <Git className="icon" />
        </styles.Icon>
        <styles.Name>Git</styles.Name>
      </styles.IconBox>

      <styles.IconBox>
        <styles.Icon>
          <GitHub className="icon" />
        </styles.Icon>
        <styles.Name>GitHub</styles.Name>
      </styles.IconBox>

      <styles.IconBox>
        <styles.Icon>
          <PostMan className="icon" />
        </styles.Icon>
        <styles.Name>PostMan</styles.Name>
      </styles.IconBox>

      <styles.IconBox>
        <styles.Icon>
          <Figma className="icon" />
        </styles.Icon>
        <styles.Name>Figma</styles.Name>
      </styles.IconBox>

      <styles.IconBox>
        <styles.Icon>
          <Photoshop className="icon" />
        </styles.Icon>
        <styles.Name>Photoshop</styles.Name>
      </styles.IconBox>

      <styles.IconBox>
        <styles.Icon>
          <Jira className="icon" />
        </styles.Icon>
        <styles.Name>Jira</styles.Name>
      </styles.IconBox>

      <styles.IconBox>
        <styles.Icon>
          <Jandi className="icon" />
        </styles.Icon>
        <styles.Name>JANDI</styles.Name>
      </styles.IconBox>

      <styles.IconBox>
        <styles.Icon>
          <Confluence className="icon" />
        </styles.Icon>
        <styles.Name>Confluence</styles.Name>
      </styles.IconBox>

      <styles.IconBox>
        <styles.Icon>
          <Slack className="icon" />
        </styles.Icon>
        <styles.Name>Slack</styles.Name>
      </styles.IconBox>

      <styles.IconBox>
        <styles.Icon>
          <Notion className="icon" />
        </styles.Icon>
        <styles.Name>Notion</styles.Name>
      </styles.IconBox>
    </styles.Container>
  );
};

export default SkillBoxTool;
