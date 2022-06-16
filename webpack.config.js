const path = require('path');
const webpack = require('webpack');
const childProcess = require('child_process');
const MyWebpackPlugin = require('./my-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
        use: [
          process.env.NODE_ENV === 'production'
            ? MiniCssExtractPlugin.loader
            : `style-loader`,
          'css-loader',
        ], // loader의 순서는 뒤에서부터 앞으로온다. css-loader 다음style-loader이다.
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          // publicPath는 htmlwebpack을 쓰면서 안쓰게 되었다.
          // publicPath: './dist', //파일을 호출하는 측에서는 dist를 붙여서 파일이름을 호출한다.
          name: '[name].[ext]?[hash]', //  파일로더가 파일을 output에 복사할때 원본파일,확장자명을하고 쿼리스트링으로 해쉬값을 입력한다.,
          limit: 20000, //2kb미만의 파일은 url-loader를 한다. 2kb 이상이면 file-loader가 실행되게한다.
        },
      },
    ],
  },
  // 플러그인은 배열에다 추가를한다.
  plugins: [
    new webpack.BannerPlugin({
      banner: `
      Build Date : ${new Date().toLocaleString()}
      Commit Version : ${childProcess.execSync('git rev-parse --short HEAD')}
      Author: ${childProcess.execSync('git config user.name')}
      `,
    }),
    new webpack.DefinePlugin({
      'TWO': JSON.stringify('1+1'),
      'api.domain': JSON.stringify('http://dev.api.domain.com'),
    }),
    //  빌드과정에 의존적이지 않은 html을 만들수 있다.
    new HtmlWebpackPlugin({
      template: './index.html',
      templateParameters: {
        env: process.env.NODE_ENV === 'development' ? '(개발용)' : '(빌드용)',
      },
      //  설정한 옵션값을 사용하여 최적화를 한다.
      minify:
        process.env.NODE_ENV === 'production'
          ? {
              collapseWhitespace: true,
              removeComments: true,
            }
          : false,
    }),
    new CleanWebpackPlugin(),
    // 프로덕션일 경우에는 css파일로 추출하고 아닐경우
    process.env.NODE_ENV === 'production'
      ? new MiniCssExtractPlugin({
          filename: '[name].css',
        })
      : [],
  ],
};
