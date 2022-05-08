export default {
  path: 'error-page1',
  name: 'error-page1',
  component: () => import('@/views/error-page/401.vue'),
  meta: {
    // 生成菜单
    title: '错误页1',
    requiresAuth: true,
    order: 1,
  },
  children: [
    {
      path: '401',
      name: '401',
      component: () => import('@/views/error-page/401.vue'),
      meta: {
        title: '401',
      },
    },
    {
      path: '404',
      name: '404',
      component: () => import('@/views/error-page/404.vue'),
      meta: {
        title: '404',
      },
    }
  ]
}