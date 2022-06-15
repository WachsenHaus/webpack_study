const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js',
  },
  output: {
    path: path.resolve('./dist'),
    // name은 동적으로 entry의 키값을 기준으로 동적으로 할당된다.
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/, // test : 로더가 처리해야될 파일들의 패턴을 입력한다. 패턴이란 정규표현식이다.
        use: [path.resolve('./my-webpack-loader.js')],
      },
    ],
  },
};
