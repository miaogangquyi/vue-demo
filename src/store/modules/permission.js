import { notFoundRouter, constantRoutes } from '@/router'
import { buildMenus } from '@/api/system/menu'
import Layout from '@/layout/index'

// 遍历后台传来的路由字符串，转换为组件对象
export const filterAsyncRouter = (routers) => {
  return routers.filter(router => {
    if (router.component) {
      // Layout组件特殊处理
      if (router.component === 'Layout') {
        router.component = Layout
      } else {
        const component = router.component
        router.component = requireComponent(component)
      }
    }
    if (router.children && router.children.length) {
      router.children = filterAsyncRouter(router.children)
    }
    return true
  })
}

export const requireComponent = (component) => {
  return (resolve) => require([`@/views/${component}`], resolve)
}

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes).concat(notFoundRouter)
  }
}
// 生成动态路由
const actions = {
  generateRoutes({ commit }) {
    return new Promise(resolve => {
      buildMenus().then(response => {
        const { data } = response
				if (!data){
					 resolve(data)
				}
        const asyncRouter = filterAsyncRouter(data)
        commit('SET_ROUTES', asyncRouter)
        resolve(asyncRouter)
      })

    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
