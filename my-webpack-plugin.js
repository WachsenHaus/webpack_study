class MyWebpackPlugin {
  apply(compiler) {
    // compiler.hooks.done.tap('My Plugin', (stats) => {
    //   console.log('Myplugin : done');
    // });

    compiler.plugin('emit', (compiltaion, callback) => {
      const source = compiltaion.assets['main.js'].source(); // main.js가 갖게될 내용을 읽음.

      // 원본코드 최상단에 주석이 추가된다.
      compiltaion.assets['main.js'].source = () => {
        const banner = ['/**', ' * 이것은 BannerPlugin이 처리한 결과입니다.', ' * Build Date : 2019-10-10', ' */'].join('\n');
        return banner + '\n\n' + source;
      };
      callback();
    });
  }
}

module.exports = MyWebpackPlugin;
