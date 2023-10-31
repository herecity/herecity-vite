## 프로젝트 소개

https://here-city.com  

엔시티 찐팬인 친구의 기획으로 시작한 시즈니를 위한 웹페이지입니다.

> 시즈니의, 시즈니에 의한, 시즈니를 위한 서비스


기능은

1. 레코드샵 : 키워드 맞춤 플레이리스트
2. 엔슐랭 가이드 : 엔시티 팬들의 맛집 태그를 통합해서 지역별로 트위터 글들을 모아주는 서비스
3. 엔가네 초이스 : 식사 메뉴 랜덤 추천
4. 시티보드 : 엔시티 텍스트 대치 모음
5. 네오스테이션 : 엔시티 춤동작으로 노래를 맞추는 게임
6. 시즈니고사 : 엔시티 자컨 모의고사
7. NBIT: 엔시티 팬들을 위한 MBTI 테스트

그동안 통계를 바탕으로
핵심 기능을 추려서 마이그레이션을 진행하려고 합니다

1. 레코드샵
2. 엔슐랭 가이드
3. 시티보드
4. NBIT

<br/>

## 마이그레이션을 하는 이유

2년간 카페24에서 호스팅 하면서 서버비가 부담스러웠기 때문에
무료 배포가 가능한 클라우드 플레어를 이용하고자 마이그레이션을 결정했습니다.

업데이트를 멈춘 상황이기에 서비스를 중단할까도 고민했지만
아직도 꾸준히 방문해주시는 시즈니 분들이 계서서 서비스를 중단하기는 아쉬웠습니다.

개인적으로도 웹개발 병아리 학부생 시절 처음으로 실사용자들을 유치한 프로젝트이기에 애정이 큰 프로젝트이기도 합니다.

이번 기회에 마이그레이션 겸 리뉴얼을 진행하려 합니다.

<img width=800 src='https://velog.velcdn.com/images/megen07/post/3190ce1d-9118-4999-a7b5-b643749f6c44/image.png'/>
<img width=800 src='https://velog.velcdn.com/images/megen07/post/95564bf4-0aaa-4628-a2fb-440b8d9fa2b5/image.png'/>

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

## 바뀐 부분

마이그레이션을 하면서 핵심 기능만 살리기로 했습니다.
디자인도 심플하게 가기로 했습니다.

### 레코드샵

<div style="display:flex; gap:10px;">
  <img width=300 src='https://velog.velcdn.com/images/megen07/post/ec82af77-baae-4c40-9b7c-08154dabdfe3/image.png'/>
    <img width=300 src='https://velog.velcdn.com/images/megen07/post/bf51d81f-5e67-4982-bec0-e3be5a5366f2/image.png'/>
 </div>
  
<br />

<div style="display:flex; gap:10px;">
  <img width=300 src='https://velog.velcdn.com/images/megen07/post/58fe7252-a6c2-4d9f-9e94-0504cade4174/image.png'/>
    <img width=300 src='https://velog.velcdn.com/images/megen07/post/9514aa5e-59bf-4da1-80ce-b32e045548bf/image.png'/>
 </div>

예전 레코드 목록의 경우는 레코드판이 돌아가는 것 같은
애니메이션을 주기 위해 굉장히 노력했습니다.

하지만 들인 노력에 비해 편의성이 떨어진다고 생각을 해서
리스트 형태로 변경했습니다.

현재는 벅스, 멜론, 지니에 플레이리스트 추가하기 기능만 마이그레이션 했는데
나머지 기능들도 업데이트 될 예정입니다.

> 마이그레이션 예정 기능

1. 타이틀곡만 보기
2. 키워드 모두 해당되는 곡만 보기 기능
3. 뮤직비디오,댄스비디오 바로가기 기능

<br />

해당 포스트는 마이그레이션이 완료될 때까지 지속적으로 수정될 예정입니다.
<br />
<br />
<br />
<br />

<hr/>

> 이번 마이그레이션을 통해 얻고 싶은 것

1. js->ts 마이그레이션을 통해 더 나은 코드 작성해보기
2. 테스트 코드 작성해보기
