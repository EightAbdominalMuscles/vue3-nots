<script setup>
import { useAppStore } from '@/store';
import { ref } from 'vue'
const appStore = useAppStore();

const count = ref(1)
// console.log(store)
defineProps({
  msg: String
})
// 请求mock api 测试
fetch('/api/getUsers')
.then(res => res.json())
.then(data=> {
  console.log(data)
})
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>从pinia中拿到的数据 {{appStore.theme}}</p>
  <p>element-plus自动引入 <el-button>Default</el-button></p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>

</style>
