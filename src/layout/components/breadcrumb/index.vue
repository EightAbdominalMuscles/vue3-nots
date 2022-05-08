<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
      
      <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
        <span
          v-if="item.redirect === 'noRedirect' || index == levelList.length - 1"
          class="no-redirect"
          >{{ item.meta.title }}</span>
        <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script setup>
// import { compile } from 'path-to-regexp';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { listenerRouteChange } from '@/utils/route-listener';

const levelList = ref(null);
const router = useRouter();
const route = useRoute();
// 解析路由的匹配数组
const getBreadcrumb = () => {
  // 留下只有title的路由
  let matched = route.matched.filter((item) => item.meta && item.meta.title);
  // 首页判断 （如果不是首页则也加上首页路径这样可以回到首页）
  const first = matched[0];
  if (first.path !== '/' && first.path !== '/home') {
    matched = [{ path: '/home', meta: { title: "首页" } }].concat(matched);
  }
  // 拼出最终需要展现的跳转数据
  levelList.value = matched.filter(
    (item) => item.meta && item.meta.title && item.meta.breadcrumb !== false
  );
}
// 手动解析path可能存在的一些参数
const pathCompile = (path) => {  
  var toPath = compile(path);
  console.log(9898, compile)
  return toPath(route.params);
}
// 点击之后跳转
const handleLink = (item) => {
  const { redirect, path } = item;
  if (redirect) {
    router.push(redirect);
    return;
  }
  // router.push(pathCompile(path));
  router.push(path);
}
// 首次调用
getBreadcrumb();
// watch(route, getBreadcrumb)
 // 监听路由变化重新触发 面包屑
listenerRouteChange(function () {
  setTimeout(() => {
    getBreadcrumb();
  }, 300)
  
}, true);
</script>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  font-size: 14px;
  display: inline-block;
  
  line-height: 50px;
  margin-left: 8px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>