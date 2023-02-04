<div align="center">
  <img height="100" src="./readme/wanted_logo.png" />
  <h3>프리온보딩 프론트엔드 챌린지 2월</h3>
</div>

## 목차

- 🚀 [프로젝트 실행](#프로젝트-실행)
- 📑 [프로젝트 구조](#프로젝트-구조)
- ⚙ [구현 사항](#구현-사항)
- 🧷 [기타](#기타)

## 프로젝트 실행

1. `git clone https://github.com/GitHubGW/wanted-pre-onboarding-challenge-fe-2`를 통해 리포지토리를 클론합니다.
2. `npm install`을 통해 필요한 라이브러리를 설치합니다.
3. `npm run docs`를 실행합니다.

```
git clone https://github.com/GitHubGW/wanted-pre-onboarding-challenge-fe-2
npm install
npm run docs
```

## 프로젝트 구조

- models : 공통 모델 관리
- utils : 유틸리티 함수 관리

```bash
 ┣ src
 ┃ ┣ models
 ┃ ┃ ┗ todo.js
 ┃ ┣ utils
 ┃ ┃ ┗ todo.js
 ┃ ┗ index.js
```

## 구현 사항

- [x] 필요한 데이터를 모두 모델링한다.
- [x] 사용되는 모든 함수를 선언부만 만든다.
- [x] 함수 및 클래스의 내부는 구현하지 않는다.
- [x] JSDoc을 활용해 문서화한다.
- [x] GitHub Page를 활용해 JSDoc 정적 페이지를 배포한다.

## 기타

### CREATE

- 할 일을 추가할 수 있다.
- 내용없이 추가할 수 없다.

### READ

- 모든 할 일을 조회할 수 있다.
- ID를 기반으로 특정 할 일을 조회할 수 있다.

### UPDATE

- ID를 제외한 모든 속성을 수정할 수 있다.
- 특정 할 일의 특정 태그를 수정할 수 있다.

### DELETE

- ID를 기반으로 특정 할 일을 삭제할 수 있다.
- 모든 할 일을 제거할 수 있다.
- 특정 할 일의 특정 태그를 삭제할 수 있다.
- 특정 할 일의 모든 태그를 제거할 수 있다.

### Todo

```js
Todo {
  아이디(required),
  내용(required),
  완료여부(required),
  카테고리(required),
  태그들(optional),
}
```

### Modeling (Shape)

```js
Item {
  property(required),
  property(optional),
}
```

### Reference

- [use JSDoc](https://jsdoc.app)
- [JSDoc Boilerplate](https://github.com/pocojang/jsdoc-boilerplate)
