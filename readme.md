# 웹팩

1. NPM 스크립트를 사용해서 CLI에 문자열 출력하는 방법

```
echo \"여기에 빌드 스크립트를 추가합니다\"
역슬래쉬와 따옴표로 열고 닫아 문자열을 출력한다.
```

2. 라이브러리 다운로드 방법
   1. CDN을 이용한 방법
      `<script src="URI를 입력한다." />`
   2. 직접 다운로드 방법
      - 라이브러리 코드를 직접 프로젝트 폴더에 넣는방법.
   3. NPM을 이용한 방법
      - npm install 을 사용하여 라이브러리를 설치한다. package.json에 dependencies가 추가된다.
      - 버전 정보 앞에 꺽쇠( ex: ^16.13.0 )가 추가된다.
      - 유의적 버전을 따른다. 주 버전(Major Version), 부 버전(Minor Version), 수 버전(Patch Version)
        단순하게 특정 버전을 사용하는 경우는 버전정보앞에 아무것도 적지않음
        `ex) 1.2.3 `
        특정 버전 보다 높거나 낮을 경우는 다음과 같이 명시함.
        ```
        >1.2.3
        >=1.2.3
        <1.2.3
        <=1.2.3
        물결(틸트)를 붙이면 마이너 버전까지 나오게 된다.
        ex) ~0 이라면 0.14.9버전 까지 나옴.
        꺽쇠(캐럿)를 붙이면 패치 버전까지 나오게 된다.
        ex) ^0.0 이라면 0.0.3버전 까지 나옴.
        ```
3. 정통적인 js 로딩방식은 전역 스코프를 오염시킬수 있다.
4. 위와같은 문제를 방지하기 위해 IIFE 모듈을 사용하는 방식도 있다.
5. IIFE 모듈방식으로 구현하는 대표적인 명세가 AMD와 CommonJs이다.
   1. CommonJS는 exports와 required함수로 불러들이는 방식이다. nodejs에서 이를 사용한다.
   2. AMD는 비동기로 로딩되는 환경에서 모듈을 사용한것이 목표다 주로 브라우저 환경
   3. UMD는 AMD기반으로 CommonJS방식까지 지원하는 통합 형태다.
   4. 여러 스펙이 존재하였는데 ES2015에서 표준 모듈 시스템을 내놓고 지금은 바벨과 웹팩을 이용해 표준 모듈시스템을 사용하는것이 일반적이다.

# 웹팩

웹팩을 이용해 번들링작업을하여 모듈을 만들어보자.

1. 웹팩 헬프 명령어
   `.\node_modules\.bin\webpack --help`
   mode는 개발환경이냐, 운영환경이냐 하면 development, production을 설정한다. (필수)
2. 모듈의 시작점을 entry 혹은 entrypoint라고한다. (필수)
3. (필수) 번들링된 파일이 저장되는곳.

_테스트 하기위한 명령어_
`.\node_modules\.bin\webpack --mode development --entry ./src/app.js --output dist/main.js`

## webpack.config.js에서 esmodule형태로 구현하는 방법

https://stackoverflow.com/questions/31903692/how-can-i-use-es6-in-webpack-config-js
링크 참조.

## 로더

### 로더의 역할

웹팩은 모든 파일을 모듈로 바라본다.
스타일시트,이미지,폰트등 모든것을 모듈로 본다.
