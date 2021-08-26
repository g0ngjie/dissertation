const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: './',
  outputDir: 'webpage',
  chainWebpack(config) {
    // 配置svg
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      // 压缩处理
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            warnings: false,
          },
          sourceMap: false,
          parallel: true, // 使用多进程并行运行来提高构建速度。默认并发运行数：os.cpus().length - 1。
        })
      );
    }
  }
};
