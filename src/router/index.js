import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css';

import DefaultLayout from '@/layout/default-layout.vue';
import appRoutes from './routes/index.js';

NProgress.configure({ showSpinner: false });
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: 'login',
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue'),
    },
    {
      name: 'root',
      path: '/',
      component: DefaultLayout,
      children: appRoutes,
    },
  ]
})
export default router