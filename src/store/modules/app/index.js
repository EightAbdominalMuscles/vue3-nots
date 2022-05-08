import { defineStore } from 'pinia'
import defaultSettings from '@/config/settings.json'
// 对项目layout的一些配置
const useAppStore = defineStore('app', {
  state: () => ({ ...defaultSettings }),
  getters: {},
})
export default useAppStore
