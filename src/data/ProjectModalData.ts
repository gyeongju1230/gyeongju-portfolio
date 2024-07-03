interface FeatureContent {
  title?: string;
  content?: string;
  image?: string;
}

interface UrlLink {
  link: string;
  label: string;
}

interface TeamIntroductionContent {
  image: string;
  name: string;
  position: string;
  note?: string;
}

interface RealizationsContent {
  title: string;
  content: string;
}

interface introductionContent {
  title?: string;
  content: string;
}

interface ProjectData {
  tag: string;
  title: string;
  introduction: string;
  introductionContent: introductionContent[];
  skills: string;
  period: string;
  periodContent: string;
  role: string;
  features: string;
  featuresContent: FeatureContent[];
  realizations: string;
  realizationsContent?: RealizationsContent[];
  url: string;
  urlLink: UrlLink[];
  teamIntroduction?: string;
  teamIntroductionContent?: TeamIntroductionContent[];
}

interface ProjectModalData {
  portfolio: ProjectData;
  sagopasam: ProjectData;
  deunbung: ProjectData;
}

const ProjectModalData: ProjectModalData = {
  portfolio: {
    tag: 'Solo Project',
    title: 'GyeongJu Portfolio',
    introduction: '프로젝트 소개',
    introductionContent: [
      {
        content:
          'Gyeong Portfolio 는 개인 Portfolio 용도로 제작한 반응형 웹사이트입니다.',
      },
    ],
    skills: 'SKILLS',
    period: '프로젝트 진행기간',
    periodContent: '2024.04.02 - ',
    role: '역할',
    features: '구현한 기능',
    featuresContent: [
      {
        title: '∙ 초기 로딩 속도 개선 (98% 개선)',
        content:
          '→ 많은 이미지 파일로 인해 로딩이 지연되는 컴포넌트를 React.lazy 와 Suspense 를 활용하여\n' +
          '필요한 시점에만 로드되도록 하여 초기 로딩 속도를 개선 \n' +
          '→ 대용량의 SVG 파일로 인한 로딩 지연 문제를 해결하기 위해 이미지 파일 형식을 WebP 로 변환하여, \n' +
          '이미지 파일의 크기를 줄임으로써 로딩 속도 최적화',
      },
      {
        title: '∙ 사용자 클라이언트 전체 페이지 개발',
      },
    ],
    realizations: '✨ 프로젝트 후기',
    realizationsContent: [
      {
        title: '① 전체 개발 프로세스 이해 증진',
        content:
          '∙ 이 프로젝트를 통해 기획, 디자인, 개발의 모든 단계를 혼자서 진행하며 전체 개발 프로세스에 대한 깊은 이해를 얻게 되었습니다. \n' +
          '∙ 각각의 단계에서 발생할 수 있는 잠재적인 문제와 해결 방안을 예측하는 데 큰 도움이 되었습니다.',
      },
      {
        title: '② 성능 향상',
        content:
          '∙ 대용량의 SVG 파일들로 인해 빌드 시간과 웹사이트 로딩 속도가 느려지는 문제를 경험했습니다. \n' +
          '∙ 이를 해결하기 위해 SVG 파일을 WebP 형식으로 변환하여 파일 크기를 줄였고, 로딩이 지연되는 컴포넌트를 React.lazy 와 Suspense 를 활용하여 필요한 시점에만 로드되도록 구현하였습니다. \n' +
          '∙ 이로 인해 빌드 시간이 크게 단축되었고, 웹사이트 초기 로딩 속도 또한 98% 정도 개선되며 눈에 띄게 향상되었습니다.',
      },
      {
        title: '③ 데이터 파일 분리의 필요성',
        content:
          '∙ 데이터 파일을 별도로 분리하여 관리하는 것이 얼마나 중요한지 실감했습니다. \n' +
          '∙ 개발하는 동안 데이터의 수정이나 업데이트가 빈번하게 이루어졌는데, 데이터 파일을 분리함으로써 다른 부분에 영향을 주지 않고 손쉽게 수정할 수 있었습니다. \n' +
          '∙ 이는 코드의 명확성과 유지보수성을 높이는 데 큰 도움이 되었습니다. \n' +
          '\n',
      },
    ],
    url: 'URL',
    urlLink: [
      {
        link: 'https://portfolio.jung-gyeongju.com',
        label: '🔗 배포 사이트로 이동하기',
      },
      {
        link: 'https://zrr.kr/vhGMB',
        label: '🔗 Github 로 이동하기',
      },
    ],
  },

  sagopasam: {
    tag: 'Team Project',
    title: '사고파삼',
    introduction: '프로젝트 소개',
    introductionContent: [
      {
        content:
          '사고파삼은 챗봇을 활용한 전공서적 중고거래 애플리케이션입니다.',
      },
      {
        title: '① 수업 가는 길에 거래하는, 사물함 거래',
        content:
          '∙ 단국대학교 죽전캠퍼스 2층에 설치된 사물함에서 내가 지정한 날짜/시간에 책을 배치/수령하면 거래가 완료돼요.',
      },
      {
        title: '② 구매자와 판매자 간 의사소통이 필요없는 챗봇 거래',
        content:
          '∙ 모든 거래 과정은 채팅봇으로 진행되며, 직접적인 소통 없이 버튼만으로 거래가 가능해요.',
      },
      {
        title: '③ 내가 원하는 날짜와 시간에 거래',
        content:
          '∙ 판매자는 사물함에 책을 배치할 수 있는 날짜와 시간을 미리 지정할 수 있어요.',
      },
      {
        title: '④ 사기 거래 없는, 중개 구조',
        content:
          '∙ 사고파삼은 구매자가 서적을 수령한 후에만 판매자가 판매금을 받을 수 있는 프로세스에요.',
      },
    ],
    skills: 'SKILLS',
    period: '프로젝트 진행기간',
    periodContent: '2023.12.18 - 2024.02.16',
    teamIntroduction: '팀원 소개',
    teamIntroductionContent: [
      {
        image: 'Member1',
        name: '정경주',
        position: 'Front-End',
        note: '사용자 App 개발',
      },
      { image: 'Member3', name: '박재완', position: 'Full-stack' },
      { image: 'Member4', name: '김민진', position: 'Back-End' },
    ],
    role: '역할',
    features: '구현한 기능',
    featuresContent: [
      { image: 'Sagopasam_Screen' },
      {
        title: '∙ Polling 을 활용한 챗봇 거래 시스템 구현',
        content:
          '→ 채팅방을 최신 상태로 유지하기위해 useEffect 와 useCallback 을 활용하여 구현',
      },
      { title: '∙ 사용자 App 클라이언트 전체 페이지 구현' },
    ],
    realizations: '✨ 프로젝트 후기',
    realizationsContent: [
      {
        title: '① 문제 해결 능력 강화',
        content:
          '∙ 프로젝트 진행 중 다양한 문제와 버그를 직면하고 이를 해결하는 과정에서 문제 해결 능력이 향상되었습니다. \n' +
          '∙ 특히 처음 적용해보는 Polling 을 도입하는 과정에서 여러 시행착오를 겪었지만, 이를 해결하고 최종적으로 완성하는 과정에서 많은 교훈을 얻었습니다.',
      },
      {
        title: '② 충분한 테스트의 중요성',
        content:
          '∙ QA 테스트 진행전, 내부 테스트를 충분히 진행했음에도 불구하고 QA 테스트에서 많은 버그가 발견되었습니다. \n' +
          '∙ 이 경험을 통해 반복된 테스트와 외부적인 QA 과정의 중요성을 명확히 이해하게 되었습니다.',
      },
      {
        title: '③ 커뮤니케이션의 중요성',
        content:
          '∙ 개발팀을 대표하여 기획 및 디자인팀과의 소통을 맡으며, 서로 다른 의견을 조율하는 과정에서 좋은 커뮤니케이션의 중요성을 깊이 인지하게 되었습니다. \n' +
          '∙ 효율적이고 명확한 커뮤니케이션을 통해 프로젝트 진행의 원활함과 결과물의 품질 향상을 이룰 수 있음을 깨달았습니다. \n' +
          '\n',
      },
    ],
    url: 'URL',
    urlLink: [
      {
        link: 'https://apps.apple.com/kr/app/%EC%82%AC%EA%B3%A0%ED%8C%8C%EC%82%BC/id6477531087',
        label: '🔗 App Store 로 이동하기',
      },
      {
        link: '',
        label: '🔗 Google Play 로 이동하기 (⚒️ 베타 테스트 중입니다.)',
      },
      {
        link: 'https://zrr.kr/8RUK',
        label: '🔗 Github 로 이동하기',
      },
    ],
  },

  deunbung: {
    tag: 'Team Project',
    title: '든붕이',
    introduction: '프로젝트 소개',
    introductionContent: [
      {
        content:
          '든붕이는 건국대학교 글로컬캠퍼스 창업동아리 카페 ‘든든하쿠’ 와 협업하여 제작한 붕어빵 미리 주문 애플리케이션입니다.',
      },
      {
        title: '① 주문 및 결제 간편화',
        content: '든붕이를 통해 붕어빵을 주문하고 간편하게 결제할 수 있습니다.',
      },
      {
        title: '② 예상 소요 시간/대기 시간 확인',
        content:
          '현재 예상 소요 시간과 주문한 붕어빵의 대기 시간을 확인할 수 있습니다.',
      },
      {
        title: '③ 주문 상태 확인',
        content: '주문한 붕어빵의 상태를 실시간으로 확인할 수 있습니다.',
      },
    ],
    skills: 'SKILLS',
    period: '프로젝트 진행기간',
    periodContent: '2023.09.19 - 2023.11.29',
    teamIntroduction: '팀원 소개',
    teamIntroductionContent: [
      {
        image: 'Member1',
        name: '정경주',
        position: 'Front-End',
        note: '사용자 App 개발',
      },
      {
        image: 'Member2',
        name: '김선규',
        position: 'Front-End',
        note: 'Admin page 개발',
      },
      { image: 'Member3', name: '박재완', position: 'Full-stack' },
      { image: 'Member4', name: '김민진', position: 'Back-End' },
    ],
    role: '역할',
    features: '구현한 기능',
    featuresContent: [
      { image: 'Deunbung_Screen' },
      {
        title: '∙ SSE를 이용한 실시간 주문 상태 업데이트 구현',
      },
      { title: '∙ 토스페이먼츠 SDK 연동을 통해 간편 결제 기능을 구현' },
      { title: '∙ 사용자 App 클라이언트 전체 페이지 구현' },
    ],
    realizations: '✨ 프로젝트 후기',
    realizationsContent: [
      {
        title: '① SSE 를 활용한 실시간 데이터 처리',
        content:
          '∙ 프로젝트에서 실시간 주문 상태를 업데이트하기 위해 SSE 를 활용했습니다. \n' +
          '∙ 이를 통해 주문 상태가 변경될 때마다 클라이언트 측에서 즉시 반영되도록 구현했습니다. \n' +
          '∙ SSE 를 통해 서버와의 지속적인 연결을 유지하고, 이벤트 스트림을 안정적으로 관리할 수 있었고, 실시간 주문 상태 업데이트로 사용자 경험을 크게 향상시켰습니다.',
      },
      {
        title: '② 연결 안정성 유지',
        content:
          '∙ 실시간 데이터를 처리하면서 서버와 클라이언트 간의 지속적인 연결을 유지하는 것이 중요했습니다. \n' +
          '∙ 네트워크 문제나 서버 장애로 인해 연결이 끊기는 상황이 발생했지만, 이를 해결하기 위해 EventSource 를 활용했습니다. \n' +
          '∙ EventSource 를 통해 연결이 끊어졌을 때 자동으로 재연결하는 로직을 구현하였고, 이를 통해 네트워크 연결이 끊어지더라도 지속적으로 데이터를 받을 수 있었습니다.',
      },
      {
        title: '③ 사용자 경험 향상',
        content:
          '∙ 앱 출시 후 직접 운영까지 하면서 사용자로부터 피드백을 받고, 이를 바로 수정하고 반영하면서 사용자 경험(UX)을 최적화하는 방법에 대해 많은 것을 배웠습니다. \n' +
          '∙ 사용자 인터페이스를 개선하고, 앱의 응답 속도를 최적화하는 등 다양한 부분에서 사용자의 요구를 반영함으로써, 사용자 만족도를 높이는 것이 중요하다는 것을 실감했습니다. \n' +
          '\n',
      },
    ],
    url: 'URL',
    urlLink: [
      {
        link: 'https://apps.apple.com/kr/app/%EB%93%A0%EB%B6%95%EC%9D%B4/id6471925416',
        label: '🔗 App Store 로 이동하기',
      },
      {
        link: 'https://play.google.com/store/apps/details?id=com.reliablekkufront&pcampaignid=web_share',
        label: '🔗 Google Play 로 이동하기',
      },
      {
        link: 'https://zrr.kr/PuSn',
        label: '🔗 Github 로 이동하기',
      },
    ],
  },
};

export default ProjectModalData;
