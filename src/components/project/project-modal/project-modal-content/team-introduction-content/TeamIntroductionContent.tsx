import * as styles from './TeamIntroductionContent.styles';
import React from 'react';

interface TeamMember {
  image: string;
  name: string;
  position: string;
  note: string;
}

interface TeamIntroductionContentProps {
  teamIntroductionContent: TeamMember[];
}

const TeamIntroductionContent = ({
  teamIntroductionContent,
}: TeamIntroductionContentProps) => {
  return (
    <>
      {teamIntroductionContent.map((member, index) => (
        <styles.TeamIntroductionBox key={index}>
          <styles.TeamIntroductionImage>
            <img
              src={require(`assets/images/project/member/${member.image}.svg`)}
              alt="MemberImage"
              className="image"
            />
          </styles.TeamIntroductionImage>
          <styles.TeamIntroductionName>
            {member.name} ✨
          </styles.TeamIntroductionName>
          <styles.TeamIntroductionPosition>
            {member.position}
          </styles.TeamIntroductionPosition>
          <styles.TeamIntroductionNote>
            {member.note}
          </styles.TeamIntroductionNote>
        </styles.TeamIntroductionBox>
      ))}
    </>
  );
};

export default TeamIntroductionContent;
