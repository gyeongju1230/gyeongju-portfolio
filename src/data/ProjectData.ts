interface url {
  title: string;
  link: string;
  label: string;
}

interface ProjectData {
  tag: string;
  title: string;
  content: string;
  url: url[];
  github: string;
}

interface ProjectBoxData {
  portfolio: ProjectData;
  sagopasam: ProjectData;
  deunbung: ProjectData;
}

const projectData: ProjectBoxData = {
  portfolio: {
    tag: 'Solo Project',
    title: 'GyeongJu Portfolio',
    content:
      "'GyeongJu Portfolio' 는 \n" +
      ' 개인 Portfolio 용도로 제작한 반응형 웹사이트입니다. \n' +
      '현재 이 웹사이트에 해당합니다.',
    url: [
      {
        title: 'URL',
        link: 'https://portfolio.jung-gyeongju.com',
        label: '🔗 배포 사이트로 이동하기',
      },
    ],
    github: 'https://github.com/gyeongju1230/gyeongju-portfolio',
  },
  sagopasam: {
    tag: 'Team Project',
    title: '사고파삼',
    content:
      "'사고파삼' 은 \n" +
      '챗봇을 활용한 전공서적 중고거래 애플리케이션으로, \n' +
      '구매자와 판매자 간 의사소통 없이\n' +
      '단국대학교 상경관 2층에 설치된 사물함으로 \n' +
      '"내가 원하는 날짜와 시간"에 책을 사고 팔 수 있어요!',
    url: [
      {
        title: 'App Store',
        link: 'https://apps.apple.com/kr/app/%EC%82%AC%EA%B3%A0%ED%8C%8C%EC%82%BC/id6477531087',
        label: '🔗 App Store 로 이동하기',
      },
      {
        title: 'Google Play',
        link: '',
        label: '⚒️ 베타 테스트 중입니다.',
      },
    ],
    github: 'https://github.com/gyeongju1230/4983-app',
  },
  deunbung: {
    tag: 'Team Project',
    title: '든붕이',
    content:
      "'든붕이' 는 \n" +
      '건국대학교 글로컬캠퍼스 창업 카페 \n' +
      "'든든하쿠' 에서 사용중인 붕어빵 미리 주문 애플리케이션으로, \n" +
      '붕어빵을 미리 주문/결제하여 \n' +
      '긴 대기 시간을 절약할 수 있어요!',
    url: [
      {
        title: 'App Store',
        link: 'https://apps.apple.com/kr/app/%EB%93%A0%EB%B6%95%EC%9D%B4/id6471925416',
        label: '🔗 App Store 로 이동하기',
      },
      {
        title: 'Google Play',
        link: 'https://play.google.com/store/apps/details?id=com.reliablekkufront&pcampaignid=web_share',
        label: '🔗 Google Play 로 이동하기',
      },
    ],
    github: 'https://github.com/gyeongju1230/reliable-kku-user',
  },
};

export default projectData;
