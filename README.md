About the react test project
===

### 关于jspm
- 安装：$`npm i -g jspm` (全局) $ `npm i --save-dev jspm` (作为项目依赖)
- SystemJs： 可以加载javascript模块
- Babel: 可以编译javascript,并可把jsx代码编译成javascript
- 

### 安装react
- $ `jspm install react`
- $ `jspm install react-dom`

### 关于使用到的UI库
- 用到的样式库：semantic-ui : $ `jspm install semantic-ui`
- 导入semantic-ui的样式需要用到jspm的一个css插件：$ `jspm install css`

### 关于browser-sync
为项目创建一个服务器，并监视一些文件的变化
- $ `browser-sync start --server --no-notify --files 'index.html, app/**/*.js`

### 关于路由
- 请切换到：[react-router分支](https://github.com/webfault/react-test/tree/react-router)
- 使用的是 react-router-dom 组件

### 常见疑问：
- 如何让浏览器使用es6的新功能? ：babel, jspm, webpack
