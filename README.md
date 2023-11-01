## 프로젝트 소개

https://here-city.com  

엔시티 찐팬인 친구의 기획으로 시작한 시즈니를 위한 웹페이지입니다.

> 시즈니의, 시즈니에 의한, 시즈니를 위한 서비스

EJS로 만들어졌던 서비스를 vite로 마이그레이션

1. 레코드샵
2. 엔슐랭 가이드
3. 시티보드
4. NBIT

<br/>

## 기술 스택

이전 기술 스택
`ejs`, `Javascript`, `express`, `css`

이번에 사용하는 기술 스택
`React`, `Typescript`, `scss`

이번에 React로 마이그레이션 하면서 Vite를 사용하기로 했습니다.
빌드 속도도 빠르고 react+ts 템플릿을 지원하기 때문에
간편하게 초기 설정을 할 수 있었습니다.

<br/>

## 마이그레이션을 하는 이유

2년간 카페24에서 호스팅 하면서 서버비가 부담스러웠기 때문에
무료 배포가 가능한 클라우드 플레어를 이용하고자 마이그레이션을 결정했습니다.

업데이트를 멈춘 상황이기에 서비스를 중단할까도 고민했지만
아직도 꾸준히 방문해주시는 시즈니 분들이 계서서 서비스를 중단하기는 아쉬웠습니다.

개인적으로도 웹개발 병아리 학부생 시절 처음으로 실사용자들을 유치한 프로젝트이기에 애정이 큰 프로젝트이기도 합니다.

이번 기회에 마이그레이션 겸 리뉴얼을 진행하려 합니다.

<br/>

## 📂 디렉토리 구조

```
📦src
 ┣ 📂assets
 ┣ 📂components
 ┃ ┣ 📂xComponent
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┣ 📂styles
 ┃ ┃ ┣ 📂types
 ┃ ┃ ┣ 📂utils
 ┃ ┃ ┗ 📜XComponent.tsx
 ┃ ┗ 📜App.tsx
 ┣ 📂pages
 ┣ 📂routes
 ┣ 📂styles
 ┣ 📂utils
 ┗ 📜main.tsx
```

<br />

#### 회고

https://velog.io/@megen07/%ED%9E%88%EC%96%B4%EC%8B%9C%ED%8B%B0-EJS-React-%EB%A7%88%EC%9D%B4%EA%B7%B8%EB%A0%88%EC%9D%B4%EC%85%98-%EA%B3%BC%EC%A0%95ing
