import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()
  // 设置title
  document.title = getPageTitle(to.meta.title)
  // 判断用户是否已经登录
  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      // 跳转到登录页
      next({ path: '/' })
      NProgress.done()
    } else {
      // 如果有角色
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      if (hasRoles) {
        next()
      } else {
        try {
          // 获取用户信息
          const { username } = await store.dispatch('user/getInfo')
          // 生成动态路由
          await store.dispatch('permission/generateRoutes')
          const accessRoutes = store.getters.routers
          if (!accessRoutes) {
            await store.dispatch('user/resetToken')
            Message.error('没有查询到当前用户的菜单权限，请联系管理员')
            next(`/login?redirect=${to.path}`)
          }else {
            // 添加动态路由
            router.addRoutes(accessRoutes)
            next({ ...to, replace: true })
          }
        } catch (error) {
          // 清除token并重定向到登录页
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    // 如果没有token
    if (whiteList.indexOf(to.path) !== -1) {
      // 如果是白名单的放行
      next()
    } else {
      // 其他跳转登录页
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // 完成
  NProgress.done()
})
