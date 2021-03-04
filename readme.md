### webpack 学习 demo
> webpack@^4.2.0  webpack-dev-server^3.11.0
---
#### 2020.11.7
1. webpack 使用loder 处理 文件，服务端，客户端使用热更新
2. webpack-dev-server`^3.11.0` 搭配 webpack-cli`^4.2.0` 使用 `webpack serve` 代替 `webpack-dev-server`
3. `webpack.config.js`和服务端处理webpack构建业务时需要区分开发环境和生产环境
4. webpack代码公共模块抽离使用 `optimization.splitChunks.cacheGroups.commons` 配置
>[bundle 分析](https://www.webpackjs.com/guides/code-splitting/#bundle-%E5%88%86%E6%9E%90-bundle-analysis-)
#### 2020.11.8
> `server/index.js` 两种构建方式的区别？
1. 前一种是支持热更新的构建模式，适用于开发环境
2. 第二种是模拟生产环境打包，适用于本地测试生产环境代码
>[懒加载](https://www.webpackjs.com/guides/lazy-loading/)
