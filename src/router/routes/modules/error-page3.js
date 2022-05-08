export default {
  path: 'error-page3',
  name: 'error-page3',
  component: () => import('@/views/error-page/401.vue'),
  meta: {
    // 生成菜单
    title: '错误页3',
    requiresAuth: true,
    order: 3,
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