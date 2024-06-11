const ProjectModalData = {
  portfolio: {
    tag: 'Solo Project',
    title: 'GyeongJu Portfolio',
    introduction: '프로젝트 소개',
    introductionContent:
      'Gyeong Portfolio 는 개인 Portfolio 용도로 제작한 반응형 웹사이트입니다.',
    skills: 'SKILLS',
    period: '프로젝트 진행기간',
    periodContent: '2024.04.02 - 2024.05.31',
    role: '역할',
    features: '구현한 기능',
    featuresContent: [
      {
        content:
          '∙ Main page UI \n' +
          '∙ About page UI \n' +
          '∙ Skill page UI \n' +
          '∙ Project page UI \n' +
          '→ Swiper 를 사용하여 이미지 슬라이더 개발 \n' +
          '∙ Contact page UI\n' +
          '→ mailto: 프로토콜을 사용하여 Gmail 아이콘 클릭 시 새 이메일 작성 창이 열리도록 구현 \n' +
          '→ copyToClipboard 함수를 사용하여 User Name, Gmail 클릭 시 클립보드에 복사되도록 구현',
      },
    ],
    realizations: '✨ 프로젝트 후기',
    realizationsContent:
      '① 전체 개발 프로세스 이해 증진 \n' +
      '∙ 이 프로젝트를 통해 기획, 디자인, 개발의 모든 단계를 혼자서 진행하며 전체 개발 프로세스에 대한 깊은 이해를 얻게 되었습니다. \n' +
      '∙ 각각의 단계에서 발생할 수 있는 잠재적인 문제와 해결 방안을 예측하는 데 큰 도움이 되었습니다. \n' +
      '\n' +
      '② 컴포넌트 분리의 중요성 \n' +
      '∙ 프로젝트를 진행하면서 컴포넌트 분리의 중요성을 깨달았습니다. \n' +
      '∙ 모든 페이지에 적용되는 Scroll 버튼이나 Skill tag 같은  UI 요소들을 재사용 가능한 컴포넌트로 분리함으로써 코드의 가독성과 유지보수성을 크게 향상시킬 수 있었습니다. \n' +
      '∙ 이를 통해 중복 코드를 줄이고, 변화가 필요할 때 특정 컴포넌트만 수정하면 되는 효율적인 개발 환경을 구축할 수 있었습니다. \n' +
      '\n' +
      '③ 데이터 파일 분리의 필요성 \n' +
      '∙ 데이터 파일을 별도로 분리하여 관리하는 것이 얼마나 중요한지 실감했습니다. \n' +
      '∙ 개발하는 동안 데이터의 수정이나 업데이트가 빈번하게 이루어졌는데, 데이터 파일을 분리함으로써 다른 부분에 영향을 주지 않고 손쉽게 수정할 수 있었습니다. \n' +
      '∙ 이는 코드의 명확성과 유지보수성을 높이는 데 큰 도움이 되었습니다. \n' +
      '\n',
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

  todo: {
    tag: 'Solo Project',
    title: 'Todo Service',
    introduction: '프로젝트 소개',
    introductionContent:
      'Todo Service 는 직접 여러 Todo 애플리케이션을 사용해보고 느낀 불편함을 개선하여 \n' +
      '일정 관리를 더욱 쉽고 편리하게 할 수 있도록 제작한 반응형 웹사이트입니다.',
    skills: 'SKILLS',
    period: '프로젝트 진행기간',
    periodContent: '2024.03.12 - 2024.03.30',
    role: '역할',
    features: '구현한 기능',
    featuresContent: [
      {
        content: '∙ Todo CRUD \n' + '∙ Todo Filtering \n' + '∙ Dark Mode',
      },
    ],
    realizations: '✨ 프로젝트 후기',
    realizationsContent:
      '① 사용자 경험에 대한 이해 심화 \n' +
      '∙ 직접 여러 Todo 애플리케이션을 사용하며 느낀 불편함들을 개선하기 위해 노력했습니다. \n' +
      '∙ 이러한 경험을 바탕으로 쉽고 편리하게 일정을 관리할 수 있도록 UI/UX 디자인을 최적화했습니다. \n' +
      '∙ 간단하고 직관적인 인터페이스를 구현하기 위해 많은 고민과 테스트를 거쳤고, 이를 통해 사용자의 관점에서 생각하는 능력이 향상되었습니다. \n' +
      '\n' +
      '② 기술 학습과 프로젝트 적용의 중요성 \n' +
      '∙ 예전에 학습한 React 를 이번 프로젝트에 적용하면서 기술을 실제로 활용하는 중요성을 깨달았습니다. \n' +
      '∙ React 의 기본 개념부터 다양한 기능들을 스스로 복습하고 실제 프로젝트에 적용해보는 과정에서 실전적인 학습의 효과를 경험했습니다. \n' +
      '\n' +
      '③ 반응형 웹 디자인의 필요성 \n' +
      '∙ 다양한 디바이스에서 일관된 사용자 경험을 제공하기 위해 반응형 웹 디자인의 중요성을 깨달았습니다. \n' +
      '∙ 이를 구현하기 위해 CSS Media Queries 와 Styled-Component 를 효과적으로 활용하였고, 이를 통해 모바일 및 데스크톱 환경에서 모두 최적화된 웹사이트를 제작할 수 있었습니다. \n' +
      '\n',
    url: 'URL',
    urlLink: [
      {
        link: 'https://todo.jung-gyeongju.com',
        label: '🔗 배포 사이트로 이동하기',
      },
      {
        link: 'https://zrr.kr/h6Y9',
        label: '🔗 Github 로 이동하기',
      },
    ],
  },

  sagopasam: {
    tag: 'Team Project',
    title: '사고파삼',
    introduction: '프로젝트 소개',
    introductionContent:
      '사고파삼은 챗봇을 활용한 전공서적 중고거래 애플리케이션입니다. \n' +
      '\n' +
      '① 수업 가는 길에 거래하는, 사물함 거래 \n' +
      '∙ 단국대학교 죽전캠퍼스 2층에 설치된 사물함에서 내가 지정한 날짜/시간에 책을 배치/수령하면 거래가 완료돼요. \n' +
      '② 구매자와 판매자 간 의사소통이 필요없는 챗봇 거래 \n' +
      '∙ 모든 거래 과정은 채팅봇으로 진행되며, 직접적인 소통 없이 버튼만으로 거래가 가능해요. \n' +
      '③ 내가 원하는 날짜와 시간에 거래 \n' +
      '∙ 판매자는 사물함에 책을 배치할 수 있는 날짜와 시간을 미리 지정할 수 있어요. \n' +
      '④ 사기 거래 없는, 중개 구조 \n' +
      '∙ 사고파삼은 구매자가 서적을 수령한 후에만 판매자가 판매금을 받을 수 있는 프로세스에요.',
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
      {
        image: 'Sagopasam_Screen',
        content:
          '\n' +
          '💡 사용자 App \n' +
          '\n' +
          '∙ 유저관련 페이지 \n' +
          '→ 회원가입, 로그인, 회원정보수정, 마이페이지, 도움말 \n' +
          '∙ 전공서적 판매글 CRUD \n' +
          '∙ Short Polling 을 활용한 챗봇 거래 시스템, 챗봇 페이지 \n' +
          '→ 판매자/구매자별 채팅, 사물함 설정 \n' +
          '→ setInterval 을 사용하여 7초마다 서버에 안읽은 메시지 조회 요청, 새로운 메시지가 있을 경우 상태를 업데이트 \n' +
          '→ useEffect 와 useCallback 을 활용하여 포커스될 때마다 채팅을 최신 상태로 유지 \n' +
          '∙ 공지사항 페이지 \n' +
          '→ 메인 배너와 연결 \n' +
          '∙ 전체 UI 구현 \n' +
          '\n',
      },
    ],
    realizations: '✨ 프로젝트 후기',
    realizationsContent:
      '① 문제 해결 능력 강화 \n' +
      '∙ 프로젝트 진행 중 다양한 문제와 버그를 직면하고 이를 해결하는 과정에서 문제 해결 능력이 향상되었습니다. \n' +
      '∙ 특히 처음 적용해보는 Short Polling 을 도입하는 과정에서 여러 시행착오를 겪었지만, 이를 해결하고 최종적으로 완성하는 과정에서 많은 교훈을 얻었습니다. \n' +
      '\n' +
      '② 충분한 테스트의 중요성 \n' +
      '∙ QA 테스트 진행전, 내부 테스트를 충분히 진행했음에도 불구하고 QA 테스트에서 많은 버그가 발견되었습니다. \n' +
      '∙ 이 경험을 통해 반복된 테스트와 외부적인 QA 과정의 중요성을 명확히 이해하게 되었습니다. \n' +
      '\n' +
      '③ 커뮤니케이션의 중요성 \n' +
      '∙ 개발팀을 대표하여 기획 및 디자인팀과의 소통을 맡으며, 서로 다른 의견을 조율하는 과정에서 좋은 커뮤니케이션의 중요성을 깊이 인지하게 되었습니다. \n' +
      '∙ 효율적이고 명확한 커뮤니케이션을 통해 프로젝트 진행의 원활함과 결과물의 품질 향상을 이룰 수 있음을 깨달았습니다. \n' +
      '\n',
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
    introductionContent:
      '든붕이는 건국대학교 글로컬캠퍼스 창업동아리 카페 ‘든든하쿠’ 와 협업하여 제작한 붕어빵 미리 주문 애플리케이션입니다. \n' +
      '\n' +
      '① 주문 및 결제 간편화 \n' +
      '든붕이를 통해 붕어빵을 주문하고 간편하게 결제할 수 있습니다. \n' +
      '② 예상 소요 시간/대기 시간 확인 \n' +
      '현재 예상 소요 시간과 주문한 붕어빵의 대기 시간을 확인할 수 있습니다. \n' +
      '③ 주문 상태 확인 \n' +
      '주문한 붕어빵의 상태를 실시간으로 확인할 수 있습니다.',
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
      {
        image: 'Deunbung_Screen',
        content:
          '\n' +
          '💡 사용자 App \n' +
          '\n' +
          '∙ 유저관련 페이지 \n' +
          '→ 회원가입, 로그인, 회원정보수정, 마이페이지, 과거 주문 내역 \n' +
          '∙ 영업여부와 예상 대기시간을 보여주는 페이지 \n' +
          '∙ 붕어빵 미리 주문 시스템, 주문 페이지 \n' +
          '∙ 붕어빵 간편 결제, 결제 페이지 \n' +
          '→ 토스페이먼츠 연결 \n' +
          '∙ 실시간 주문 상태 업데이트 페이지 \n' +
          '→ EventSource 를 사용하여 서버에서 보내주는 SSE 데이터를 통해 실시간으로 주문 상태 업데이트 \n' +
          '∙ 전체 UI 구현 \n',
      },
    ],
    realizations: '✨ 프로젝트 후기',
    realizationsContent:
      '① 실시간 데이터 처리의 복잡성 \n' +
      '∙ SSE 를 통해 실시간 주문 상태를 업데이트하면서 비동기 데이터 처리의 복잡성을 경험했습니다. \n' +
      '∙ 서버와의 지속적인 연결을 유지하고, 이벤트 스트림을 안정적으로 관리하는 것이 중요하다는 것을 깨달았습니다. \n' +
      '\n' +
      '② 사용자 경험 향상 \n' +
      '∙ 앱 출시 후 직접 운영까지 하면서 사용자로부터 피드백을 받고, 이를 바로 수정하고 반영하면서 사용자 경험(UX)을 최적화하는 방법에 대해 많은 것을 배웠습니다. \n' +
      '∙ 사용자 인터페이스를 개선하고, 앱의 응답 속도를 최적화하는 등 다양한 부분에서 사용자의 요구를 반영함으로써, 사용자 만족도를 높이는 것이 중요하다는 것을 실감했습니다. \n' +
      '\n',
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
