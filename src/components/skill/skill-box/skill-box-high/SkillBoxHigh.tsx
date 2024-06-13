import * as styles from '../SkillBox.styles';
import { ReactComponent as React } from '@assets/icons/skill/React.svg';
import { ReactComponent as ReactNative } from '@assets/icons/skill/ReactNative.svg';
import { ReactComponent as JavaScript } from '@assets/icons/skill/JavaScript.svg';
import { ReactComponent as TypeScript } from '@assets/icons/skill/Typescript.svg';
import { ReactComponent as Axios } from '@assets/icons/skill/Axios.svg';
import { ReactComponent as Recoil } from '@assets/icons/skill/Recoil.svg';
import { ReactComponent as PostMan } from '@assets/icons/skill/PostMan.svg';
import { ReactComponent as AWSAmplify } from '@assets/icons/skill/AwsAmplify.svg';
import { ReactComponent as Git } from '@assets/icons/skill/Git.svg';
import { ReactComponent as GitHub } from '@assets/icons/skill/GitHub.svg';
import { ReactComponent as Jira } from '@assets/icons/skill/Jira.svg';
import { ReactComponent as Confluence } from '@assets/icons/skill/Confluence.svg';
import { ReactComponent as Slack } from '@assets/icons/skill/Slack.svg';
import { ReactComponent as Figma } from '@assets/icons/skill/Figma.svg';
import { ReactComponent as Jandi } from '@assets/icons/skill/Jandi.svg';

const SkillBoxHigh = () => {
  return (
    <styles.Container>
      <styles.IconContainer>
        <styles.IconBox>
          <styles.Icon>
            <ReactNative className="icon" />
          </styles.Icon>
          <styles.Name>React Native</styles.Name>
        </styles.IconBox>

        <styles.IconBox>
          <styles.Icon>
            <React className="icon" />
          </styles.Icon>
          <styles.Name>React</styles.Name>
        </styles.IconBox>

        <styles.IconBox>
          <styles.Icon>
            <JavaScript className="icon" />
          </styles.Icon>
          <styles.Name>JavaScript</styles.Name>
        </styles.IconBox>

        <styles.IconBox>
          <styles.Icon>
            <TypeScript className="icon" />
          </styles.Icon>
          <styles.Name>TypeScript</styles.Name>
        </styles.IconBox>

        <styles.IconBox>
          <styles.Icon>
            <Axios className="icon" />
          </styles.Icon>
          <styles.Name>Axios</styles.Name>
        </styles.IconBox>

        <styles.IconBox>
          <styles.Icon>
            <Recoil className="icon" />
          </styles.Icon>
          <styles.Name>Recoil</styles.Name>
        </styles.IconBox>

        <styles.IconBox>
          <styles.Icon>
            <PostMan className="icon" />
          </styles.Icon>
          <styles.Name>PostMan</styles.Name>
        </styles.IconBox>

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
            <Jira className="icon" />
          </styles.Icon>
          <styles.Name>Jira</styles.Name>
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
            <Figma className="icon" />
          </styles.Icon>
          <styles.Name>Figma</styles.Name>
        </styles.IconBox>

        <styles.IconBox>
          <styles.Icon>
            <Jandi className="icon" />
          </styles.Icon>
          <styles.Name>JANDI</styles.Name>
        </styles.IconBox>
      </styles.IconContainer>
    </styles.Container>
  );
};

export default SkillBoxHigh;
