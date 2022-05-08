## 工程
### 说明
defineConfig 获得代码提示支持
extensions 导入时想要省略的扩展名列表。注意，不 建议忽略自定义导入类型的扩展名（例如：.vue），因为它会影响 IDE 和类型支持。

import.meta.globEager vite新增 https://cn.vitejs.dev/guide/features.html#glob-import
### 插件

+ @vitejs/plugin-vue-jsx  解析jsx(只适用于单文件中使用jsx)
+ mock数据
  + vite-plugin-mock 和 mockjs 
+ cross-env 设置环境变量
+ vue-router
+ pinia
+ sass
+ ElementPlus
+ @element-plus/icons-vue  element的icon格外引入
+ vite-svg-loader svg文件
+ nprogress Ajax应用程序的小进度条
+ lodash
+ dayjs 是一个轻量的处理时间和日期的 JavaScript 库，和 Moment.js 的 API 设计保持完全一样. 如果您曾经用过 Moment.js, 那么您已经知道如何使用 Day.js
+ normalize.css 初始化样式
+ mitt 单独订阅发布模式 （用于监听路由从而改变菜单选中）
#### 打包后的处理
+ vite-plugin-compression 支持gzip压缩
+ rollup-plugin-visualizer 生成打包分析
+ vite-plugin-imagemin 图片压缩
### 功能处理
+ 基本布局
+ 动态导航侧边栏
+ 动态导航面包屑
+ 路由和菜单
+ 权限管理
+ 打包构建