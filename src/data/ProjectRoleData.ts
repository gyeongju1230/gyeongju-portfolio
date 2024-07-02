interface ProjectRoleData {
  portfolio: {
    role: string[];
  };
  sagopasam: {
    role: string[];
  };
  deunbung: {
    role: string[];
  };
}

const ProjectRoleData: ProjectRoleData = {
  portfolio: {
    role: ['개발', '기획', '디자인'],
  },
  sagopasam: {
    role: ['사용자 App 개발'],
  },
  deunbung: {
    role: ['사용자 App 개발', '기획'],
  },
};

export default ProjectRoleData;
