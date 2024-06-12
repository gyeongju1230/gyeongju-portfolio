import * as styles from './SkillLayout.styles';
import { useState } from 'react';
import SkillButton from '@components/skill/skill-button/SkillButton';
import SkillBoxFrontend from '@components/skill/skill-box/skill-box-frontend/SkillBoxFrontend';
import SkillBoxBackend from '@components/skill/skill-box/skill-box-backend/SkillBoxBackend';
import SkillBoxTool from '@components/skill/skill-box/skill-box-tool/SkillBoxTool';

const SkillLayout = () => {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

  const handleButtonClick = (index: number) => {
    setSelectedButtonIndex(index);
  };

  return (
    <styles.Container id="skill">
      <styles.ContentBox>
        <SkillButton
          selectedButtonIndex={selectedButtonIndex}
          handleButtonClick={handleButtonClick}
        />
        {selectedButtonIndex === 0 && <SkillBoxFrontend />}
        {selectedButtonIndex === 1 && <SkillBoxBackend />}
        {selectedButtonIndex === 2 && <SkillBoxTool />}
      </styles.ContentBox>
    </styles.Container>
  );
};

export default SkillLayout;
