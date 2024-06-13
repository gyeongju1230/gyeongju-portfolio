import * as styles from './SkillLayout.styles';
import { useState } from 'react';
import SkillButton from '@components/skill/skill-button/SkillButton';
import SkillBoxHigh from '@components/skill/skill-box/skill-box-high/SkillBoxHigh';
import SkillBoxMedium from '@components/skill/skill-box/skill-box-medium/SkillBoxMedium';
import SkillBoxLow from '@components/skill/skill-box/skill-box-low/SkillBoxLow';

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
        {selectedButtonIndex === 0 && <SkillBoxHigh />}
        {selectedButtonIndex === 1 && <SkillBoxMedium />}
        {selectedButtonIndex === 2 && <SkillBoxLow />}
      </styles.ContentBox>
    </styles.Container>
  );
};

export default SkillLayout;
