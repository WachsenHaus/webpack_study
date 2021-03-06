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

`css-loader`와 `style-loader`를 같이 써야지 자바스크립트로된 css가 적용된다.
`file-loader` 는 png파일을 불러오는데 사용한다.
정적파일은 브라우저에서 캐쉬하는게 흔하다. 성능을 위해서 캐시를 하는데
파일이 교체되었을때 교체를해야하기 때문에 예방방법으로 해싱이름을 사용하기도한다고 합니다.

## 플러그인

### 플러그인의 역할

웹팩에서 알아야할 마지막 기본 개념이 플러그인이다.
로더는 파일단위로 처리하는 반면 플러그인은 `번들된 결과물`을 처리함
번들된 스크립트를 난독화, 특정 텍스트 추출용도로 사용함.

### 자주 사용하는 플러그인

1. `bannerPlugin`
   1. 웹팩이 기본적으로 제공한다.
   2. 빌드에 배포정보를 넣을 수 있다.
   3. `childProcess`를 사용하여 커맨드 명령어를 사용 할 수 있다.
2. `DefinePlugIn`
   1. 배포할때 환경에 따라 API 서버 주소가 다를 수 있다. 환경 의존적인 정보를 소스가 아닌 곳에서 관리하는 것이 좋다.
<<<<<<< HEAD

# 바벨

https://jeonghwan-kim.github.io/series/2019/12/22/frontend-dev-env-babel.html
크로스 브라우징을 고려하여 코드를 변화시켜 호환성을 지켜준다.
이렇게 코드를 변화, 변화시키는 것을 `트랜스파일`이라고 한다.
타입스크립트 -> 자바스크립트,
JSX -> 자바스크립트 처럼 트랜스파일 후에도 여전히 코드를 읽을 수 있다.

1. 파싱(Parsing)
2. 변환(Transforming)
3. 출력(Printing)

## 플러그인

바벨은 코드를 받아서 코드를 반환한다. 플러그인을 활용하여 코드를 가공후 반환 시킬 수 있다.

### 플러그인 프리셋

- preset-env
- preset-flow
- preset-react
- preset-typescript
=======
3. `HtmlWebpackPlugIn`
   1. html을 만들어내는 플러그인, 여러 옵션을 사용함.
4. `cleanWebpackPlugin`
   1. 파일들을 지워주는 것
5. `MiniCssExtractPlugin`
   1. css스타일시트로 별도로 뽑는 플러그인이다.
>>>>>>> 0c01408204f4964894b9e64701481fec965d1c6a
