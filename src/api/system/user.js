 import request from '@/utils/request'
 import qs from 'qs'

export function add(data) {
  return request({
    url: 'system/user',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'system/user',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'system/user',
    method: 'put',
    data
  })
}

export function login(data) {
  return request({
    url: '/system/user/login',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/system/user/getInfo',
    method: 'get'
    // params: { token }
  })
}

export function logout() {
  return request({
    url: '/system/user/logout',
    method: 'post'
  })
}

export function fetchUserPage(data) {
  return request({
    url: '/system/user/findUserPage',
    method: 'get',
    params: data
  })
}



export function editUser(data) {
  return request({
    url: 'system/user/center',
    method: 'put',
    data
  })
}
export default { add, edit, del }
