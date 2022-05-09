export default {
  path: 'error-page2',
  name: 'error-page2',
  component: () => import('@/views/error-page/401.vue'),
  meta: {
    title: '错误页2',
    order: 5,
    requiresAuth: true,
  },
  children: [
    {
      path: '401',
      name: '401d',
      component: () => import('@/views/error-page/401.vue'),
      meta: {
        title: '401',
      },
    },
    {
      path: '404',
      name: '404d',
      component: () => import('@/views/error-page/404.vue'),
      meta: {
        title: '404',
      },
    },
  ],
}
