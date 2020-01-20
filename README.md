# NodeBB 主题快速开发轮子

本主题是 NodeBB 主题的快速开发轮子，您可以通过本项目来快速初始化您的 NodeBB 主题项目。如果您需要基于其他主题的子主题，可以修改 theme.json 中的相关字段。创建本项目是为了促进 NodeBB 追随 ES 的现代化。
您可以通过本项目来使用任何的 ES6+ 语法（如果不考虑引擎支持）。
有关 NodeBB 的 Hooks， 以及其他的开发信息。请访问 NodeBB 社区 或者 Github 中的 Wiki。

> 请注意： NodeBB v1.13.x 系统函数库，钩子已经基本支持 Promise 回调。 因此，本库不再提供兼容回滚。

## 使用

### 开始

1. 克隆本项目至本地。
2. 删除项目中的 `.git` 文件夹
3. 使用 `git init` 初始化一个属于你的新仓库。
4. 执行 `yarn` 安装依赖（推荐使用 `yarn`)
5. 修改... 提交

### 调试

1. 编写插件，保存。
2. `yarn link` 来软链接主题
3. 在 NodeBB 目录下执行 `yarn link nodebb-theme-quickstart` 来引入插件
4. `./nodebb build && ./nodebb dev` 启动 NodeBB 开发环境

### 使用说明

编写完成后，别忘记为主题添加使用说明和屏幕截图哦！
编辑 theme.json 中，添加以下字段：

``` json
"screenshot": "screenshot.png"
```

### 修改一些信息

修改 `package.json` 中相关的创作信息：

``` json
"author": {
    "name": "Your Name",
    "email": "Your Email",
    "url": "Your website"
},
"repository": {
    "type": "git",
    "url": "https://github.com/{your-username}/{your-repository}"
},
"bugs": {
    "url": "https://github.com/{your-username}/{your-repository}/issues"
}
```
