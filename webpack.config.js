const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js',
    main2: './src/app.js',
  },
  output: {
    path: path.resolve('./dist'),
    // name은 동적으로 entry의 키값을 기준으로 동적으로 할당된다.
    filename: '[name].js',
  },
};
