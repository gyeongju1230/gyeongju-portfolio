interface ProjectSkillData {
  portfolio: {
    skills: string[];
  };
  todo: {
    skills: string[];
  };
  sagopasam: {
    skills: string[];
  };
  deunbung: {
    skills: string[];
  };
}

const projectSkillData: ProjectSkillData = {
  portfolio: {
    skills: [
      'React',
      'TypeScript',
      'AWS Amplify',
      'Framer Motion',
      'Styled-Component',
    ],
  },
  todo: {
    skills: ['React', 'CSS', 'AWS Amplify', 'Styled-Component'],
  },
  sagopasam: {
    skills: ['React Native', 'Axios', 'Recoil', 'Styled-Component'],
  },
  deunbung: {
    skills: ['React Native', 'TypeScript', 'Axios', 'Styled-Component'],
  },
};

export default projectSkillData;
