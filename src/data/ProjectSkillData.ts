interface ProjectSkillData {
  portfolio: {
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
    skills: ['React', 'TypeScript', 'AWS Amplify', 'styled-components'],
  },
  sagopasam: {
    skills: ['React Native', 'Axios', 'Recoil', 'styled-components'],
  },
  deunbung: {
    skills: ['React Native', 'TypeScript', 'Axios', 'styled-components'],
  },
};

export default projectSkillData;
