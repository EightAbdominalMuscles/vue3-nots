import { setRouteEmitter } from '@/utils/route-listener';
function setupPageGuard(router) {
  router.beforeEach(async (to) => {
    // 发布 路由
    setRouteEmitter(to);
  });
}
export default function createRouteGuard(router) {
  setupPageGuard(router);
  // setupPermissionGuard(router);
}