### Vue 3 + Vite + vue-router + pinia + ElementPlus

### 增加路由说明

### eslint 说明

Prettier 专注于代码排版(提供了一套完美的代码排版)，但不会关心你的代码质量。
https://prettier.io/docs/en/install.html
https://github.com/prettier/prettier/tree/main/docs
当代码格式不对，在提交的时候自动修复

```
vscode 安装插件 https://github.com/prettier/prettier-vscode
  搜索Prettier - Code formatter
    1. git commit '' 时自动格式化代码
    2. shift + command + p 后输入 Format Document 手动格式化
    3. shift + option + f 快捷键手动格式化
    4. 手动设置 ctrl + s 的时候格式化代码
      // Set the default
      "editor.formatOnSave": false,
      // Enable per-language
      "[javascript]": {
          "editor.formatOnSave": true
      }
```

### commit 说明

```
[
  'build', // 编译相关的修改，例如发布版本、对项目构建或者依赖的改动
  'chore', // 其他修改, 比如改变构建流程、或者增加依赖库、工具等
  'ci', // 持续集成修改
  'docs', // 文档修改
  'feat', // 新特性、新功能
  'fix', // 修改bug
  'perf', // 优化相关，比如提升性能、体验
  'refactor', // 代码重构
  'revert', // 回滚到上一个版本
  'style', // 代码格式修改, 注意不是 css 修改
  'test' // 	测试用例修改
];
```
