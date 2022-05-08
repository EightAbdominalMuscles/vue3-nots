<template>
  <div>
    <el-container class="layout">
        <el-header
          v-if="navbar"
          class="layout-navbar"
          :style="{height: navbarHeight}"
        >
          <!-- 导航栏 -->
          <nav-bar />
        </el-header>
        <el-container
           class="layout-content"

        >
          <!-- 侧边栏 -->
          <el-aside 
            :width="menuWidth"
            class="layout-sider"
            :style="{paddingTop: navbarHeight}"
          >
            <div class="menu-wrapper">
              <Menu />
            </div>
          </el-aside>
          <!-- 右侧内容区域 -->
          <el-main>
            <page-layout />
          </el-main>
        </el-container>
    </el-container>
  </div>
</template>
<script setup>
import { ref, computed, watch, provide } from 'vue';
// 路由跳转逻辑
import PageLayout from './page-layout.vue';
import NavBar from './components/navbar/index.vue';
import Menu from './components/menu/index.vue'
import { useAppStore } from '@/store';
const appStore = useAppStore()
// header的高
const navbarHeight =  computed(() => {
  return  navbar ? `${appStore.navbarHeight}px` : ''
})
// 是否有侧边
const navbar = computed(() => appStore.navbar);
// 左侧菜单的宽
const menuWidth = computed(() => {
  return `${appStore.menuCollapse ? '48' : appStore.menuWidth}px`;
});
// 侧边是否能折叠
const collapsed = computed(() => {
  return appStore.menuCollapse;
});
// 内容区域的样式（随header是否存在，左侧菜单是否折叠变化）
  // const paddingStyle = computed(() => {
  //   const paddingLeft =
  //     renderMenu.value && !hideMenu.value
  //       ? { paddingLeft: `${menuWidth.value}px` }
  //       : {};
  //   const paddingTop = navbar.value ? { paddingTop: navbarHeight } : {};
  //   return { ...paddingLeft, ...paddingTop };
  // });

</script>
<style scoped lang="scss">
$layout-max-width: 1100px;
.layout {
  width: 100%;
  height: 100%;
}
.layout-navbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  padding: 0;
}
.layout-sider {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  height: 100%;
  transition: all 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
  &::after {
    position: absolute;
    top: 0;
    right: -1px;
    display: block;
    width: 1px;
    height: 100%;
    background-color: var(--color-border);
    content: '';
  }
  .menu-wrapper {
    height: 100%;
    overflow: auto;
    overflow-x: hidden;
  }
}
.layout-content {
    min-height: 100vh;
    overflow-y: hidden;
    background-color: var(--color-fill-2);
    transition: padding 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
  }

</style>