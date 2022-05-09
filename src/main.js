import { createApp } from 'vue'

//! 全量引入 后期优化
import ElementPlus from 'element-plus'
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'

import 'element-plus/dist/index.css'

import '@/styles/index.less'

const app = createApp(App)
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//   app.component(key, component)
// }

app.use(router).use(store).use(ElementPlus).mount('#app')
