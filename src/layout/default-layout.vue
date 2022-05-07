<template>
  <div>
    <!-- 导航栏 -->
    <Navbar />
    <!-- 侧边栏 -->
    <!-- 右侧内容区域 -->
    <div></div>
    <page-layout />
  </div>
</template>
<script lang="ts" setup>
// 路由跳转逻辑
import PageLayout from './page-layout.vue';
import Navbar from './components/navbar/index.vue';
</script>