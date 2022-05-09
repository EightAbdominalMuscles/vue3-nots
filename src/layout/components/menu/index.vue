<script lang="jsx">
  import { defineComponent, ref, h, compile, computed } from 'vue'
  import { useRouter } from 'vue-router'
  import { listenerRouteChange } from '@/utils/route-listener'

  export default defineComponent({
    setup() {
      const router = useRouter()
      // 当前展开
      const selectedKey = ref('')
      // 路由跳转
      const goto = (item) => {
        router.push({
          name: item.name,
        })
      }
      // 监听路由 选中菜单
      listenerRouteChange((newRoute) => {
        // 有菜单权限并且 没有隐藏menu
        if (newRoute.meta.requiresAuth && !newRoute.meta.hideInMenu) {
          const key = newRoute.matched[newRoute.matched.length - 1]?.name
          selectedKey.value = key
        }
      }, true)
      // 获取 root 的router
      const appRoute = computed(() => {
        return router.getRoutes().find((el) => el.name === 'root')
      })
      // menu树生成
      const menuTree = computed(() => {
        const copyRouter = JSON.parse(JSON.stringify(appRoute.value.children))
        // 存在order则排序
        copyRouter.sort((a, b) => {
          return (a.meta.order || 0) - (b.meta.order || 0)
        })
        function travel(_routes, layer) {
          if (!_routes) return null
          const collector = _routes.map((element) => {
            // 拦截  start
            //! 没有权限则拒绝访问 coding....
            // if (!permission.accessRouter(element)) {
            //   return null;
            // }
            // ~ 没有子节点
            if (!element.children) {
              return element
            }
            // ~ 路由过滤  hideInMenu=true的节点
            element.children = element.children.filter((x) => x.meta?.hideInMenu !== true)
            // 拦截  end
            // 关联子节点(递归)
            const subItem = travel(element.children, layer)
            // 排除 length =0的情况也就是 children=[]的情况
            if (subItem.length) {
              element.children = subItem
              return element
            }
            if (layer > 1) {
              element.children = subItem
              return element
            }
            // 父级别的 hideInMenu = false才返回element
            if (element.meta?.hideInMenu === false) {
              return element
            }
            return false
          })
          // .filter(Boolean) 去掉假值
          return collector.filter(Boolean)
        }
        return travel(copyRouter, 0)
      })
      // 渲染菜单
      const renderSubMenu = () => {
        function travel(_route, nodes = []) {
          if (_route) {
            _route.forEach((element) => {
              const icon = element?.meta?.icon ? () => h(compile(`<${element?.meta?.icon}>`)) : null
              const r = element?.children ? (
                <el-sub-menu
                  index={element?.name}
                  v-slots={{
                    icon,
                    title: () => h(compile(element?.meta?.title || '')),
                  }}
                >
                  {travel(element?.children)}
                </el-sub-menu>
              ) : (
                <el-menu-item index={element?.name} v-slots={{ icon }} onClick={() => goto(element)}>
                  {element?.meta?.title || ''}
                </el-menu-item>
              )
              nodes.push(r)
            })
          }
          return nodes
        }
        return travel(menuTree.value)
      }
      return () => (
        <el-scrollbar wrap-class='scrollbar-wrapper'>
          <el-menu style='height: 100%' default-active={selectedKey.value} unique-opened={false}>
            {renderSubMenu()}
          </el-menu>
        </el-scrollbar>
      )
    },
  })
</script>

<style lang="less">
  .horizontal-collapse-transition {
    transition: 0s width ease-in-out, 0s padding-left ease-in-out, 0s padding-right ease-in-out;
  }

  .scrollbar-wrapper {
    overflow-x: hidden !important;
  }

  .el-scrollbar__view {
    height: 100%;
  }

  .el-scrollbar__bar {
    &.is-vertical {
      right: 0px;
    }

    &.is-horizontal {
      display: none;
    }
  }
</style>

<style lang="less" scoped>
  .el-scrollbar {
    height: 100%;
  }

  .has-logo {
    .el-scrollbar {
      height: calc(100vh - 100px);
    }
  }

  .el-menu {
    border: none;
    height: 100%;
    width: 100% !important;
  }
</style>
