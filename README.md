# Gyeongju Portfolio

### 프로젝트 소개

<img src="./src/assets/images/readme/Portfolio.png" alt="project-image" height="250">

> **Gyeongju Portfolio** 는 개인 Portfolio 용도로 제작한 반응형 웹사이트입니다.   
> Solo Project 로, 기획과 디자인 그리고 개발까지 모두 혼자 진행하였습니다.

### 진행 기간

📄 기획
- **2024.04.02 - 2024.04.20**

📚 디자인
- **2024.04.20 - 2024.05.10**

👩🏻‍💻 개발
- **2024.05.10 -**

### 기술 스택

- ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white)
  ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
  ![AWSAmplify](https://img.shields.io/badge/Aws%20Amplify-FF9900?style=flat&logo=awsamplify&logoColor=white)
  ![Styled-component](https://img.shields.io/badge/styled%20components-DB7093?style=flat&logo=styledcomponents&logoColor=white)

### 구현한 기능

![](https://github.com/gyeongju1230/gyeongju-portfolio/assets/127480050/73898aaf-43d6-4b22-b3d5-8c8a71298d25)

- **초기 로딩 속도 개선 (98% 개선)**
  - 많은 이미지 파일로 인해 로딩이 지연되는 컴포넌트를 **React.lazy** 와 **Suspense** 를 활용하여 필요한 시점에만 로드되도록 하여 **초기 로딩 속도를 개선**
  - 대용량의 **SVG** 파일로 인한 로딩 지연 문제를 해결하기 위해 이미지 파일 형식을 **WebP** 로 변환하여, 이미지 파일의 크기를 줄임으로써 로딩 속도 최적화
- 사용자 클라이언트 전체 페이지 개발

### 배포 링크

- [🔗 배포 사이트로 이동하기](https://portfolio.jung-gyeongju.com)


### 프로젝트 후기 🙇🏻‍♀️

- 전체 개발 프로세스 이해 증진
  - 이 프로젝트를 통해 기획, 디자인, 개발의 모든 단계를 혼자서 진행하며 전체 개발 프로세스에 대한 깊은 이해를 얻게 되었습니다.
  - 각각의 단계에서 발생할 수 있는 잠재적인 문제와 해결 방안을 예측하는 데 큰 도움이 되었습니다.
- 성능 향상
  - 대용량의 SVG 파일로 인해 빌드 시간과 웹사이트 로딩 속도가 느려지는 문제를 경험했습니다.
  - 이를 해결하기 위해 SVG 파일을 WebP 형식으로 변환하여 파일 크기를 줄였고, 로딩이 지연되는 컴포넌트를 React.lazy 와 Suspense 를 활용하여 필요한 시점에만 로드되도록 구현하였습니다.
  - 이로 인해 빌드 시간이 크게 단축되었고, 웹사이트 초기 로딩 속도 또한 98% 정도 개선되며 눈에 띄게 향상되었습니다.
- 데이터 파일 분리의 필요성
  - 데이터 파일을 별도로 분리하여 관리하는 것이 얼마나 중요한지 실감했습니다.
  - 개발하는 동안 데이터의 수정이나 업데이트가 빈번하게 이루어졌는데, 데이터 파일을 분리함으로써 다른 부분에 영향을 주지 않고 손쉽게 수정할 수 있었습니다.
  - 이는 코드의 명확성과 유지보수성을 높이는 데 큰 도움이 되었습니다.

### Documents

- [Notion](https://www.notion.so/gyeongju/GyeongJu-Portfolio-345d1d6309144c1a9fd09af8fa081209?pvs=4)
- [Figma](https://zrr.kr/ZM9j)
