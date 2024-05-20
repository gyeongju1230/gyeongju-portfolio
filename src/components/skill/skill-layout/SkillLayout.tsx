import * as styles from './SkillLayout.styles';
import { useState } from 'react';
import SkillButton from '@components/skill/skill-button/SkillButton';
import SkillBoxFrontend from '@components/skill/skill-box/skill-box-frontend/SkillBoxFrontend';
import SkillBoxBackend from '@components/skill/skill-box/skill-box-backend/SkillBoxBackend';
import SkillBoxTool from '@components/skill/skill-box/skill-box-tool/SkillBoxTool';
import SkillScrollDown from '@components/common/scroll/scroll-down/ScrollDown';

interface SkillLayoutProps {
  menuBar: string;
}

const SkillLayout = ({ menuBar }: SkillLayoutProps) => {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

  const handleButtonClick = (index: number) => {
    setSelectedButtonIndex(index);
  };

  const scrollToProject = () => {
    window.scrollTo({
      top: document.getElementById('project')?.offsetTop || 0,
      behavior: 'smooth',
    });
  };

  return (
    <styles.Container id="skill" className={menuBar}>
      <styles.ContentBox>
        <SkillButton
          menuBar={menuBar}
          selectedButtonIndex={selectedButtonIndex}
          handleButtonClick={handleButtonClick}
        />
        {selectedButtonIndex === 0 && <SkillBoxFrontend menuBar={menuBar} />}
        {selectedButtonIndex === 1 && <SkillBoxBackend menuBar={menuBar} />}
        {selectedButtonIndex === 2 && <SkillBoxTool menuBar={menuBar} />}
      </styles.ContentBox>
      <SkillScrollDown onClick={scrollToProject} />
    </styles.Container>
  );
};

export default SkillLayout;
