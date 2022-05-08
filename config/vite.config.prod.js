import { mergeConfig } from 'vite'

import baseConig from './vite.config.base'
// gzip压缩
import configCompressPlugin from './plugin/compress'
// 生成打包报告
import configVisualizerPlugin from './plugin/visualizer'
// 图片压缩
import configImageminPlugin from './plugin/imagemin'

export default mergeConfig(
  {
    mode: 'production',
    plugins: [configCompressPlugin('gzip'), configVisualizerPlugin(), configImageminPlugin()],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'element-plus': ['element-plus'],
            'lodash': ['lodash'],
            'vue': ['vue', 'vue-router', 'pinia'],
          },
        },
      },
      chunkSizeWarningLimit: 2000, // 文件超出配置时警告
    },
  },
  baseConig
)
