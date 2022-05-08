export default {
  path: 'home',
  name: 'home',
  component: () => import('@/views/home/index.vue'),
  meta: {
    // 生成菜单
    title: '首页',
    order:4,
    requiresAuth: true,
  }
}