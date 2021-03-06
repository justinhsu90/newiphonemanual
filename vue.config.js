const path = require('path');
const fs = require('fs');
const _ = require('lodash');
const webpack = require('webpack');

const entry = fs.readdirSync(path.join(__dirname, '/src/entry'));

const pages = {};
_.each(entry, (v) => {
  pages[v] = {};
  pages[v].entry = `src/entry/${v}/main.js`;
  pages[v].template = `public/${v}.html`;
  pages[v].filename = `${v}.html`;
  pages[v].title = `${v}`;
});

module.exports = {
  // baseUrl  type:{string} default:'/'
  publicPath: process.env.NODE_ENV === 'production'
    ? '/setupguide/iphone/'
    : '/',
  // 将部署应用程序的基本URL
  // 将部署应用程序的基本URL。
  // 默认情况下，Vue CLI假设您的应用程序将部署在域的根目录下。
  // https://www.my-app.com/。如果应用程序部署在子路径上，则需要使用此选项指定子路径。例如，如果您的应用程序部署在https://www.foobar.com/my-app/，集baseUrl到'/my-app/'.


  // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'

  // outputDir: 'dist',
  /*
      构建多页面模式的应用程序.每个“页面”都应该有一个相应的JavaScript条目文件。该值应该是一
      个对象，其中键是条目的名称，而该值要么是指定其条目、模板和文件名的对象，要么是指定其条目
      的字符串，
      注意：请保证pages里配置的路径和文件名 在你的文档目录都存在 否则启动服务会报错的
    */
   lintOnSave:false,
  pages,
  //   lintOnSave：{ type:Boolean default:true } 问你是否使用eslint
  // productionSourceMap：{ type:Bollean,default:true } 生产源映射
  // 如果您不需要生产时的源映射，那么将此设置为false可以加速生产构建
  productionSourceMap: false,
  // devServer:{type:Object} 3个属性host,port,https
  // 它支持webPack-dev-server的所有选项
  devServer: {
    port: 8085, // 端口号
    host: 'localhost',
    https: false, // https:{type:Boolean}
    open: false, // 配置自动启动浏览器
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        '_' : 'lodash',
      })
    ]
  }
};
