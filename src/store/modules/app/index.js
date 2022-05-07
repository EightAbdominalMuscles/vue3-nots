import { defineStore } from 'pinia';
import defaultSettings from '@/config/settings.json';
// 对项目layout的一些配置
const useAppStore = defineStore('app', {
  state: () => ({ ...defaultSettings }),
  getters: {
    appCurrentSetting(state) {
      return { ...state };
    },
    appDevice(state) {
      return state.device;
    },
    toggleTheme(dark) {
      if (dark) {
        this.theme = 'dark';
        document.body.setAttribute('arco-theme', 'dark');
      } else {
        this.theme = 'light';
        document.body.removeAttribute('arco-theme');
      }
    },
    toggleDevice(device) {
      this.device = device;
    },
    toggleMenu(value) {
      this.hideMenu = value;
    },
  },
})
export default useAppStore