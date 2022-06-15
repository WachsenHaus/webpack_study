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
        test: /\.css$/, // test : 로더가 처리해야될 파일들의 패턴을 입력한다. 패턴이란 정규표현식이다.
        use: [`style-loader`, 'css-loader'], // loader의 순서는 뒤에서부터 앞으로온다. css-loader 다음style-loader이다.
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          publicPath: './dist', //파일을 호출하는 측에서는 dist를 붙여서 파일이름을 호출한다.
          name: '[name].[ext]?[hash]', //  파일로더가 파일을 output에 복사할때 원본파일,확장자명을하고 쿼리스트링으로 해쉬값을 입력한다.,
          limit: 20000, //2kb미만의 파일은 url-loader를 한다. 2kb 이상이면 file-loader가 실행되게한다.
        },
      },
    ],
  },
};
