# Beomseok Choi
My portfolio website
  
뱅글뱅글 턴테이블이 돌아가는 포트폴리오 웹 사이트

[https://beomseokchoi.com](https://beomseokchoi.com)

## 💻개발 언어 및 환경 Languages
  
Frontend : React.js, TypeScript, Styled Component

## ⏱개발 기간 Development period
  
2022년 1월 11일 ~ 2022년 2월 13일 

Jan 11, 2022 ~ Feb 13, 2022

## 🔍현재 상태 Current State
  
🟢 이용 가능

Now available

## 📝 개발 후기 Development Reviews
  
### 아이디어 Idea

취업을 위한 포트폴리오 사이트. **[azzerad.com](http://azzerad.com/)** 이라는 아트 스튜디오의 웹 사이트에서 header 디자인과 Route Transition 을 참조했다. 특히 이 사이트의 Route Transiton 은 너무 멋졋고 도대체 어떻게 하는걸까 너무 신기하기만 해서 꼭 한번 시도해보고싶었다. 나는 경력도 없고, 프로젝트 경험도 부족해서 studies 메뉴를 만들어서 노마드코더에서 수료했던 챌린지도 졸업과제들과 함께 한번 채워보았다. 홈화면은 제일 마지막에 작업했는데 포트폴리오 사이트에 들어왔을때 첫인상을 어떻게 효과적으로 남길까 고민이 많았다. 애니메이션이 있으면 좋겠다싶은 생각이 들었지만 이렇다할 아이디어가 잘 떠오르지 않아서 framer-motion으로 홈화면에서 이것 저것 가지고 놀다가 턴테이블 애니메이션을 생각하게 되었고 여기에 오디오 효과와 유저와 인터렉션할 수 있는 동작이 함께하면 꽤 재미있는 결과물이 나오지 않을까 싶었다.

### 개발 과정에서의 문제 Problems & solution in development

- 역시 처음 시도해보는 Route Transition 부분에서 좀 애를 먹었다.  azzerad 사이트를 보면서 route 자체는 바로 전환되는데 어떻게 다른 페이지로 넘어갈 때 애니메이션이 실행되고 난뒤에 redner를 할 수 있는건지 너무 신기하고 어려웠다. 핵심은 AnimatePresence를 Route에 감싸주는 것에 있었다. 그리고 exiteBeforeEnter를 추가해주면, AnimatePresence는 다음 컴포넌트의 render전에 지금 컴포넌트의 anmimation을 마치도록 해준다.([https://www.framer.com/docs/animate-presence/](https://www.framer.com/docs/animate-presence/)) 나머지는 적용할 variant를 component에 달아주면 된다. azzerad 처럼 세련되고 세분화된 transition 은 아니지만 상당히 만족스러웠다. 만약 azzerad 처럼 element 별로 달리 transition 을 두고 싶다면, delayChildren 을 이용하면 간단히 구현가능할 것 같다.

- 그 다음으로 힘들었던 것 하나는 홈의 턴테이블 에니메이션이다. 애니메이션은 유저가 조작할 수 있는 컨트롤러와 함께 상호작용하는데, 상식적으로 생각해본다면 pause를 누르고, 다시 play를 누른다면 멈춘지점에서부터 다시 원래의 360도 회전 애니메이션을 유지해야한다. 하지만 이 경우 멈춘 지점이 아니라 원래의 처음 지점에서(0도) 자꾸 시작하게되어서 애니메이션이 회전하다가 뚝 끊겼다가, 원래의 처음 지점에서 다시 작동을하다. Doc을 뒤지면서 시도해볼 수 있는 모든 옵션을 시도해봤으나 이 부분은 여전히 해결되지 못했다. 지금은 일시정지를 눌렀을때 천천히 처음의 상태로으로 턴테이블을 되돌려주는 에니메이션을 추가해 다시 play를 누르더라도 잘 작동하게끔 임시처방을 해준 상태다. 또 바늘과 턴테이블이 웹에서나 모바일에서나 적절한 위치를 가지도록 하는데도 많은 조정을 거쳐야했다.

### 배포 이후의 문제 Problems & solution in product

- about page에서 애니메이션 버벅임이 발생한다. 최근 사진이 없어서 about 페이지에 귀여운 고양이 발바닥 사진을 임시로 올려놓았는데, 아마 이미지 용량때문에 발생하는 문제일 것이다. 곧 고치도록ㅠㅠ

- contact 메뉴에서  Emailjs를 이용해서 바로 나에게 메일을 보낼 수 있도록 만들었는데 가끔씩 자꾸 테스트를 해보는 장난아닌 장난 메일이 날아온다ㅋㅋ

### 이 프로젝트를 통해 배운 것 So What I learn

- useState의 비동기성
- react hook form의 연습
- framer-motion을 이용한 router transition과  다소 복잡한 애니메이션의 구현
- emailjs 를 활용한 contact 서비스

### 앞으로의 개선점 reflection

- 일단 먼저 코드 리팩토링이 필요하다. 로직은 기본적으로 손봐야할것 같고 중복되는 컴포넌트들이 너무 많다 또 공용으로 사용하는 animation variant들이 적절한 모듈안에 위치하고 있지 않다.

- 아직 홈의 애니메이션에 오디오를 추가하지 않았다. LP는 총 1분 20초씩 3개의 트랙으로 구성되도록 했는데, 어떤 오디오로 채울지 아직 결정하지 못했다.  바늘이 움직이거나 판에 떨어질때도 효과음을 넣고 싶은데 아직 마음에 드는 사운드를 못찾아서 그냥 실제 소리를 직접 녹음하려고 한다. 어쨌거나 중요한건 코드다. 각각의 사운드들이 기존 애니메이션과 잘 연동되려면 어떠한 로직을 가져야하는지부터 정리를 해보아야겠다.

## To do
- [ ] 홈화면 오디오 추가
- [ ] 프로젝트 프리뷰 비디오로 교체
- [ ] Favicon 추가
- [ ] 프로젝트 모달 창 레포지토리 항목 추가
  
