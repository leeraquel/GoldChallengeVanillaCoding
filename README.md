# 최수종 찾기 게임

![최수종찾기 intro](https://user-images.githubusercontent.com/77730913/113555807-74fbee00-9636-11eb-903f-bd178810907d.gif)

"최수종 찾기"는 카드를 뒤집어 같은 이미지의 카드 쌍을 찾는, 기억력을 테스트하는 브라우저 기반 게임입니다. 이 게임은 HTML, CSS, JavaScript를 사용하여 개발되었으며, 사용자가 카드의 위치를 기억하고 같은 이미지를 가진 카드를 매칭시켜 모든 카드 쌍을 찾아야 합니다. 시간 제한 내에 모든 쌍을 찾으면 승리합니다.

## 목차
[게임 특징](#게임특징) 
[폴더 구조](#폴더구조)
[기술 스택](#기술스택) 
[게임 실행 방법](#게임실행방법)  
[게임 규칙](#게임규칙)  

# 폴더구조
```
📦gold_challenge
 ┣ 📂bgs                       # 게임 배경 및 결과 화면 이미지
 ┣ 📂imgs                      # 게임 카드 이미지
 ┣ 📜README.md                 # 프로젝트 설명 파일
 ┣ 📜index.html                # 게임의 메인 HTML 파일
 ┣ 📜main.js                   # 게임 로직을 담당하는 JavaScript 파일
 ┗ 📜styles.css                # 게임 스타일을 정의하는 CSS 파일

```

# 게임특징
- 시간 제한: 사용자는 제한된 시간 내에 모든 카드 쌍을 찾아야 합니다.
- 동적인 게임 보드: 게임 시작 시 카드의 위치가 무작위로 설정됩니다.
- 사용자 상호작용: 게임의 진행 상황에 따라 사용자에게 피드백을 제공합니다. 시간이 다 되거나 모든 쌍을 찾으면 결과 화면이 표시됩니다.

# 기술스택
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">

# 게임실행방법
1. 저장소 복제:
  - 프로젝트를 로컬 시스템에 복제하기 위해, 터미널에서 아래 명령어를 실행하세요.
```bash
git clone https://github.com/leeraquel/GoldChallengeVanillaCoding
```
2. 프로젝트 디렉토리로 이동:
  - 복제한 프로젝트의 디렉토리로 이동합니다.
```bash
cd GoldChallengeVanillaCoding
```
3. HTML 파일 실행:
  - 프로젝트 디렉토리 내의 index.html 파일을 웹 브라우저에서 열어 게임을 시작합니다.

# 게임규칙
- 시작 버튼을 클릭하여 게임을 시작합니다.
- 카드를 클릭하여 이미지를 확인합니다.
- 같은 이미지를 가진 두 카드를 연속으로 클릭하여 매칭시킵니다.
- 모든 카드 쌍을 매칭시켜 게임 보드를 완성합니다.
- 제한 시간 내에 모든 카드 쌍을 찾으면 승리합니다. 시간이 다 되기 전에 모든 카드를 매칭시키지 못하면 패배합니다.




이 README 파일은 "최수종 찾기" 게임에 대한 개요와 실행 방법을 제공합니다. 게임의 목적과 규칙을 숙지하고, 제시된 실행 방법에 따라 게임을 즐겨보세요.  
본 프로젝트는 바닐라코딩의 starter-kit-challenge를 통해 제작하였습니다. 
