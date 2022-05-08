import { createRouter, createWebHashHistory } from 'vue-router';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css';

import DefaultLayout from '@/layout/default-layout.vue';
import appRoutes from './routes';
import createRouteGuard from './guard';

NProgress.configure({ showSpinner: false });
const router = createRouter({
  history: createWebHashHistory(),
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
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});
createRouteGuard(router);
export default router;
