<template>
  <!-- 内部应该显示子路由的信息 -->
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in" appear>
      <component :is="Component" v-if="route.meta.ignoreCache" :key="route.fullPath" />
      <keep-alive v-else>
        <component :is="Component" :key="route.fullPath" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script setup></script>
